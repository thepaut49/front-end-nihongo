import {
  presentIndicative,
  presumptiveVolitional,
  imperative,
  pastIndicative,
  pastPresumptive,
  presentProgressive,
  pastProgressive,
  provisionalConditionalEba,
  potential,
  conditionalTara,
  causative,
  passive,
} from "../common/verbConjugator";
import {
  naForm,
  presentIndicative as presentIndicativeNaAdjective,
  pastIndicative as pastIndicativeNaAdjective,
} from "../common/naAdjectiveConjugator";
import {
  presentIndicative as presentIndicativeIAdjective,
  pastIndicative as pastIndicativeIAdjective,
} from "../common/iAdjectiveConjugator";
import verbConstants from "../common/verbConstants";
import translationConstants from "../common/translationConstants";
import { punctuationListWithoutDoublingkanji } from "../common/japanesePunctuation";

export const extractListOfKanji = (sentence, kanjis) => {
  // je transforme ma chaine de charactère en tableau de type SEt pour que chaque element soit unique
  let sentenceSet = new Set(sentence);
  let lengthOfSentenceSet = 0;
  let index = 0;
  let listOfKanjisInSentence = [];
  while (index <= kanjis.length - 1 && lengthOfSentenceSet < sentenceSet.size) {
    if (
      listOfKanjisInSentence.indexOf(kanjis[index]) === -1 &&
      sentence.indexOf(kanjis[index].kanji) >= 0
    ) {
      listOfKanjisInSentence.push(kanjis[index]);
      lengthOfSentenceSet++;
    }
    index++;
  }
  return listOfKanjisInSentence;
};

export const extractParts = (
  sentence,
  verbs,
  naAdjectives,
  iAdjectives,
  names,
  words,
  particules
) => {
  let listOfParts = [];

  let indiceCourant = 0;
  while (indiceCourant < sentence.length) {
    for (let j = 10; j > 0; j--) {
      let part = null;
      if (indiceCourant + j <= sentence.length) {
        let sentencePart = sentence.substr(indiceCourant, j);
        //console.log("sentancePart = " + sentencePart);

        part = partIsAVerb(sentencePart, indiceCourant, verbs, false);

        if (!part) {
          part = partIsANaAdjective(sentencePart, indiceCourant, naAdjectives);
        }

        if (!part) {
          part = partIsAIAdjective(sentencePart, indiceCourant, iAdjectives);
        }

        if (!part) {
          part = partIsAName(sentencePart, indiceCourant, names);
        }

        if (!part) {
          part = partIsAWord(sentencePart, indiceCourant, words);
        }

        // on a trouvé une partie, on l'ajoute à la liste des parties
        if (part) {
          listOfParts.push(part);
          indiceCourant = indiceCourant + j;
          break;
        }
      }

      // on a rien trouvé on passe indice courant au caractère suivant
      if (j === 1 && !part) {
        indiceCourant++;
      }
    }
  }
  listOfParts = addOfUnknownParts(
    sentence,
    listOfParts,
    particules,
    verbs,
    naAdjectives,
    iAdjectives,
    names,
    words
  );

  return listOfParts;
};

const addOfUnknownParts = (
  sentence,
  listOfParts,
  particules,
  verbs,
  naAdjectives,
  iAdjectives,
  names,
  words
) => {
  // add of unknown parts
  let listOfPartsWithUnknownParts = [];
  if (listOfParts.length === 0) {
    let unknownPart = partIsAParticule(
      sentence,
      0,
      particules,
      verbs,
      naAdjectives,
      iAdjectives,
      names,
      words
    );
    listOfPartsWithUnknownParts.push(unknownPart);
  } else {
    for (let index = 0; index < listOfParts.length; index++) {
      let currentPart = listOfParts[index];
      // Cas particulier du premier élément
      if (index === 0) {
        if (currentPart.currentIndex > 0) {
          let sentenceUnknownPart = sentence.substr(
            0,
            currentPart.currentIndex
          );
          let unknownPart = partIsAParticule(
            sentenceUnknownPart,
            0,
            particules,
            verbs,
            naAdjectives,
            iAdjectives,
            names,
            words
          );
          listOfPartsWithUnknownParts.push(unknownPart);
          listOfPartsWithUnknownParts.push(currentPart);
          if (index === listOfParts.length - 1) {
            // on est rendu au dernier élément on regarde si il reste une partie inconnu
            if (
              currentPart.currentIndex + currentPart.length <
              sentence.length
            ) {
              // si la index courant dépasse le dernier charactère on ne rajoute rien car la dernière part se termine au dernier caractère
              let sentenceUnknownPart = sentence.substr(
                currentPart.currentIndex + currentPart.length
              );
              if (sentenceUnknownPart.length > 0) {
                let unknownPart = partIsAParticule(
                  sentenceUnknownPart,
                  currentPart.currentIndex + currentPart.length,
                  particules,
                  verbs,
                  naAdjectives,
                  iAdjectives,
                  names,
                  words
                );
                listOfPartsWithUnknownParts.push(unknownPart);
              }
            }
            //si on est au bout on fait rien
          } else {
            // on regarde la partie suivante
            let nextPart = listOfParts[index + 1];
            let sentenceUnknownPart = sentence.substr(
              currentPart.currentIndex + currentPart.length,
              nextPart.currentIndex -
                currentPart.currentIndex -
                currentPart.length
            );
            if (sentenceUnknownPart.length > 0) {
              let unknownPart = partIsAParticule(
                sentenceUnknownPart,
                currentPart.currentIndex + currentPart.length,
                particules,
                verbs,
                naAdjectives,
                iAdjectives,
                names,
                words
              );
              listOfPartsWithUnknownParts.push(unknownPart);
            }
          }
        }
        // la première partie commence à l'indice 0
        else {
          listOfPartsWithUnknownParts.push(currentPart);
          if (index === listOfParts.length - 1) {
            // on est rendu au dernier élément on regarde si il reste une partie inconnu
            if (
              currentPart.currentIndex + currentPart.length <
              sentence.length
            ) {
              // si la index courant dépasse le dernier charactère on ne rajoute rien car la dernière part se termine au dernier caractère
              let sentenceUnknownPart = sentence.substr(
                currentPart.currentIndex + currentPart.length
              );
              if (sentenceUnknownPart.length > 0) {
                let unknownPart = partIsAParticule(
                  sentenceUnknownPart,
                  currentPart.currentIndex + currentPart.length,
                  particules,
                  verbs,
                  naAdjectives,
                  iAdjectives,
                  names,
                  words
                );
                listOfPartsWithUnknownParts.push(unknownPart);
              }
            }
            //si on est au bout on fait rien
          } else {
            // on regarde la partie suivante
            let nextPart = listOfParts[index + 1];
            let sentenceUnknownPart = sentence.substr(
              currentPart.currentIndex + currentPart.length,
              nextPart.currentIndex -
                currentPart.currentIndex -
                currentPart.length
            );
            if (sentenceUnknownPart.length > 0) {
              let unknownPart = partIsAParticule(
                sentenceUnknownPart,
                currentPart.currentIndex + currentPart.length,
                particules,
                verbs,
                naAdjectives,
                iAdjectives,
                names,
                words
              );
              listOfPartsWithUnknownParts.push(unknownPart);
            }
          }
        }
      } else {
        // on est rendu au 2eme element de ListOfParts
        listOfPartsWithUnknownParts.push(currentPart);
        if (index === listOfParts.length - 1) {
          // on est rendu au dernier élément on regarde si il reste une partie inconnu
          if (currentPart.currentIndex + currentPart.length < sentence.length) {
            let sentenceUnknownPart = sentence.substr(
              currentPart.currentIndex + currentPart.length
            );
            if (sentenceUnknownPart.length > 0) {
              let unknownPart = partIsAParticule(
                sentenceUnknownPart,
                currentPart.currentIndex + currentPart.length,
                particules,
                verbs,
                naAdjectives,
                iAdjectives,
                names,
                words
              );
              listOfPartsWithUnknownParts.push(unknownPart);
            }
          }
          //si on est au bout on fait rien
        } else {
          // on regarde la partie suivante
          let nextPart = listOfParts[index + 1];
          let sentenceUnknownPart = sentence.substr(
            currentPart.currentIndex + currentPart.length,
            nextPart.currentIndex -
              currentPart.currentIndex -
              currentPart.length
          );
          if (sentenceUnknownPart.length > 0) {
            let unknownPart = partIsAParticule(
              sentenceUnknownPart,
              currentPart.currentIndex + currentPart.length,
              particules,
              verbs,
              naAdjectives,
              iAdjectives,
              names,
              words
            );
            listOfPartsWithUnknownParts.push(unknownPart);
          }
        }
      }
    }
  }

  listOfPartsWithUnknownParts = addPunctuationPart(listOfPartsWithUnknownParts);
  return listOfPartsWithUnknownParts;
};

const addPunctuationPart = (listOfParts) => {
  let listOfPartsUpdated = [];
  listOfParts.forEach((part) => {
    if (part.type === translationConstants.TYPE_UNKNOWN) {
      let indexKanjis = 0;
      let currentLength = 1;
      let sentencePart = part.kanjis.substr(indexKanjis, currentLength);
      let listOfWord = [];
      while (
        indexKanjis < part.kanjis.length &&
        indexKanjis + currentLength < part.kanjis.length
      ) {
        if (
          indexKanjis === 0 &&
          currentLength === 1 &&
          wordContainPunctuation(sentencePart)
        ) {
          listOfWord.push(sentencePart);
          indexKanjis = indexKanjis + currentLength;
          currentLength = 1;
          sentencePart = part.kanjis.substr(indexKanjis, currentLength);
        } else if (wordContainPunctuation(sentencePart)) {
          // il y a un ponctuation dans sentencePart
          sentencePart = part.kanjis.substr(indexKanjis, currentLength);
          listOfWord.push(sentencePart);
          indexKanjis = indexKanjis + currentLength;
          currentLength = 1;
        } else {
          currentLength++;
          sentencePart = part.kanjis.substr(indexKanjis, currentLength);
        }
      }
      if (reconstructSentence(listOfWord) !== part.kanjis) {
        sentencePart = part.kanjis.substr(indexKanjis);
        listOfWord.push(sentencePart);
      }

      let currentIndex = part.currentIndex;
      listOfWord.forEach((word) => {
        if (wordContainPunctuation(word)) {
          let newPunctuationPart = {
            type: translationConstants.TYPE_PUNCTUATION,
            kanjis: word,
            selectedPronunciation: word,
            selectedMeaning: "",
            pronunciations: [word],
            meanings: [],
            unknown: false,
            length: 1,
            currentIndex: currentIndex,
            listOfValues: [],
          };
          listOfPartsUpdated.push(newPunctuationPart);
          currentIndex++;
        } else {
          // mot inconnu
          let newPart = {
            type: translationConstants.TYPE_UNKNOWN,
            kanjis: word,
            selectedPronunciation: "?",
            selectedMeaning: "?",
            pronunciations: ["?"],
            meanings: ["?"],
            unknown: true,
            length: word.length,
            currentIndex: currentIndex,
            listOfValues: [],
          };
          listOfPartsUpdated.push(newPart);
          currentIndex = currentIndex + word.length;
        }
      });
    } else {
      listOfPartsUpdated.push(part);
    }
  });

  return listOfPartsUpdated;
};

const wordContainPunctuation = (word) => {
  for (let index = 0; index < word.length; index++) {
    if (punctuationListWithoutDoublingkanji.includes(word[index])) {
      return true;
    }
  }
  return false;
};

const reconstructSentence = (listOfWord) => {
  let sentence = "";
  listOfWord.forEach((word) => {
    sentence = sentence + word;
  });
  return sentence;
};

function isSuru(verb) {
  return verb.neutralForm === "する" ? true : false;
}

const partIsAVerb = (sentencePart, currentIndex, verbs) => {
  let part = null;
  let tenseFunctionList = [
    presentIndicative,
    presumptiveVolitional,
    imperative,
    pastIndicative,
    pastPresumptive,
    presentProgressive,
    pastProgressive,
    provisionalConditionalEba,
    potential,
    conditionalTara,
    causative,
    passive,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  for (let indexVerb = 0; indexVerb < verbs.length; indexVerb++) {
    const verb = verbs[indexVerb];
    let stem = "";
    if (!isSuru(verb)) {
      stem = verb.neutralForm.substr(0, verb.neutralForm.length - 1);
    }

    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let verb = verbs[indexVerb];
          if (stem + tense(verb, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_VERB,
              kanjis: sentencePart,
              selectedPronunciation: verb.pronunciation[0],
              selectedMeaning: verb.meaning[0],
              pronunciations: verb.pronunciation,
              meanings: verb.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            return part;
          }
        }
      }
    }
  }
};

const partIsANaAdjective = (sentencePart, currentIndex, naAdjectives) => {
  let part = null;
  let tenseFunctionList = [
    naForm,
    presentIndicativeNaAdjective,
    pastIndicativeNaAdjective,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  for (let indexNaAdj = 0; indexNaAdj < naAdjectives.length; indexNaAdj++) {
    const naAdjective = naAdjectives[indexNaAdj];
    let stem = "";

    stem = naAdjective.kanjis.substr(0, naAdjective.kanjis.length - 1);

    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let naAdj = naAdjectives[indexNaAdj];
          if (stem + tense(naAdj, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_NA_ADJECTIVE,
              kanjis: sentencePart,
              selectedPronunciation: naAdj.pronunciation[0],
              selectedMeaning: naAdj.meaning[0],
              pronunciations: naAdj.pronunciation,
              meanings: naAdj.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            return part;
          }
        }
      }
    }
  }
};

const partIsAIAdjective = (sentencePart, currentIndex, iAdjectives) => {
  let part = null;
  let tenseFunctionList = [
    presentIndicativeIAdjective,
    pastIndicativeIAdjective,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  for (let indexIAdj = 0; indexIAdj < iAdjectives.length; indexIAdj++) {
    const iAdjective = iAdjectives[indexIAdj];
    let stem = "";

    stem = iAdjective.kanjis.substr(0, iAdjective.kanjis.length - 1);
    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let iAdj = iAdjectives[indexIAdj];
          if (stem + tense(iAdj, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_I_ADJECTIVE,
              kanjis: sentencePart,
              selectedPronunciation: iAdj.pronunciation[0],
              selectedMeaning: iAdj.meaning[0],
              pronunciations: iAdj.pronunciation,
              meanings: iAdj.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            return part;
          }
        }
      }
    }
  }
};

const partIsAName = (sentencePart, currentIndex, names) => {
  let part = null;
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    if (name.kanjis === sentencePart) {
      part = {
        type: translationConstants.TYPE_NAME,
        kanjis: sentencePart,
        selectedPronunciation: name.pronunciation[0],
        selectedMeaning: name.meaning[0],
        pronunciations: name.pronunciation,
        meanings: name.meaning,
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      return part;
    }
  }
};

const partIsAWord = (sentencePart, currentIndex, words) => {
  let part = null;
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    if (word.kanjis === sentencePart) {
      part = {
        type: translationConstants.TYPE_WORD,
        kanjis: sentencePart,
        selectedPronunciation: word.pronunciation[0],
        selectedMeaning: word.meaning[0],
        pronunciations: word.pronunciation,
        meanings: word.meaning,
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      return part;
    }
  }
};

const verbCandidate = (sentencePart, currentIndex, verbs) => {
  let part = null;
  let tenseFunctionList = [
    presentIndicative,
    presumptiveVolitional,
    imperative,
    pastIndicative,
    pastPresumptive,
    presentProgressive,
    pastProgressive,
    provisionalConditionalEba,
    potential,
    conditionalTara,
    causative,
    passive,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  let candidateList = [];
  if (!verbs) return candidateList;
  for (let indexVerb = 0; indexVerb < verbs.length; indexVerb++) {
    const verb = verbs[indexVerb];
    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let listOfVerbConj = [];
          verb.pronunciation.forEach((pronunciation) => {
            if (!isSuru(verb)) {
              listOfVerbConj.push(
                pronunciation.substr(0, pronunciation.length - 1) +
                  tense(verb, form, sign)
              );
            } else {
              listOfVerbConj.push(tense(verb, form, sign));
            }
          });
          if (listOfVerbConj.includes(sentencePart)) {
            part = {
              type: translationConstants.TYPE_VERB,
              kanjis: sentencePart,
              selectedPronunciation: sentencePart,
              selectedMeaning: verb.meaning[0],
              pronunciations: [sentencePart],
              meanings: verb.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            candidateList.push(part);
          }
        }
      }
    }
  }
  return candidateList;
};

const naAdjectiveCandidate = (sentencePart, currentIndex, naAdjectives) => {
  let part = null;
  let tenseFunctionList = [
    naForm,
    presentIndicativeNaAdjective,
    pastIndicativeNaAdjective,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  let candidateList = [];
  if (!naAdjectives) return candidateList;
  for (let indexNaAdj = 0; indexNaAdj < naAdjectives.length; indexNaAdj++) {
    const naAdj = naAdjectives[indexNaAdj];
    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let listOfNaAdjConj = [];
          naAdj.pronunciation.forEach((pronunciation) => {
            listOfNaAdjConj.push(
              pronunciation.substr(0, pronunciation.length - 1) +
                tense(naAdj, form, sign)
            );
          });
          if (listOfNaAdjConj.includes(sentencePart)) {
            part = {
              type: translationConstants.TYPE_NA_ADJECTIVE,
              kanjis: sentencePart,
              selectedPronunciation: sentencePart,
              selectedMeaning: naAdj.meaning[0],
              pronunciations: [sentencePart],
              meanings: naAdj.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            candidateList.push(part);
          }
        }
      }
    }
  }
  return candidateList;
};

const iAdjectiveCandidate = (sentencePart, currentIndex, iAdjectives) => {
  let part = null;
  let tenseFunctionList = [
    presentIndicativeIAdjective,
    pastIndicativeIAdjective,
  ];
  const formList = [verbConstants.PLAIN_FORM, verbConstants.POLITE_FORM];
  const signList = [verbConstants.POSITIVE_SIGN, verbConstants.NEGATIVE_SIGN];
  let candidateList = [];
  if (!iAdjectives) return candidateList;
  for (let indexIAdj = 0; indexIAdj < iAdjectives.length; indexIAdj++) {
    const iAdj = iAdjectives[indexIAdj];

    for (
      let indexTense = 0;
      indexTense < tenseFunctionList.length;
      indexTense++
    ) {
      for (let indexForm = 0; indexForm < formList.length; indexForm++) {
        for (let indexSign = 0; indexSign < signList.length; indexSign++) {
          let tense = tenseFunctionList[indexTense];
          let form = formList[indexForm];
          let sign = signList[indexSign];
          let listOfIAdjConj = [];
          iAdj.pronunciation.forEach((pronunciation) => {
            listOfIAdjConj.push(
              pronunciation.substr(0, pronunciation.length - 1) +
                tense(iAdj, form, sign)
            );
          });
          if (listOfIAdjConj.includes(sentencePart)) {
            part = {
              type: translationConstants.TYPE_I_ADJECTIVE,
              kanjis: sentencePart,
              selectedPronunciation: sentencePart,
              selectedMeaning: iAdj.meaning[0],
              pronunciations: [sentencePart],
              meanings: iAdj.meaning,
              unknown: false,
              length: sentencePart.length,
              currentIndex: currentIndex,
              listOfValues: [],
            };
            candidateList.push(part);
          }
        }
      }
    }
  }
  return candidateList;
};

const nameCandidate = (sentencePart, currentIndex, names) => {
  let part = null;
  let candidateList = [];
  if (!names) return candidateList;
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    let listOfNamePro = [];
    name.pronunciation.forEach((pronunciation) => {
      listOfNamePro.push(pronunciation.substr(0, pronunciation.length));
    });
    if (listOfNamePro.includes(sentencePart)) {
      part = {
        type: translationConstants.TYPE_NAME,
        kanjis: sentencePart,
        selectedPronunciation: sentencePart,
        selectedMeaning: name.meaning[0],
        pronunciations: [sentencePart],
        meanings: name.meaning,
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      candidateList.push(part);
    }
  }
  return candidateList;
};

const wordCandidate = (sentencePart, currentIndex, words) => {
  let part = null;
  let candidateList = [];
  if (!words) return candidateList;
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let listOfWordPro = [];
    word.pronunciation.forEach((pronunciation) => {
      listOfWordPro.push(pronunciation.substr(0, pronunciation.length));
    });
    if (listOfWordPro.includes(sentencePart)) {
      part = {
        type: translationConstants.TYPE_WORD,
        kanjis: sentencePart,
        selectedPronunciation: sentencePart,
        selectedMeaning: word.meaning[0],
        pronunciations: [sentencePart],
        meanings: word.meaning,
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      candidateList.push(part);
    }
  }
  return candidateList;
};

const particuleCandidate = (sentencePart, currentIndex, particules) => {
  let part = null;
  let candidateList = [];
  debugger;
  if (!particules) return candidateList;
  for (let index = 0; index < particules.length; index++) {
    let particule = particules[index];
    if (particule.kanjis === sentencePart) {
      part = {
        type: translationConstants.TYPE_PARTICULE,
        kanjis: sentencePart,
        selectedPronunciation: sentencePart,
        selectedMeaning: particule.summary,
        pronunciations: [sentencePart],
        meanings: [particule.summary],
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      candidateList.push(part);
    }
  }
  return candidateList;
};

export const findListOfCandidates = (
  sentencePart,
  currentIndex,
  verbs,
  naAdjectives,
  iAdjectives,
  names,
  words,
  particules
) => {
  let listOfCandidates = [];
  let listOfVerbCandidates = verbCandidate(sentencePart, currentIndex, verbs);
  let listOfNaAdjCandidates = naAdjectiveCandidate(
    sentencePart,
    currentIndex,
    naAdjectives
  );
  let listOfIAdjCandidates = iAdjectiveCandidate(
    sentencePart,
    currentIndex,
    iAdjectives
  );
  let listOfNameCandidates = nameCandidate(sentencePart, currentIndex, names);
  let listOfWordCandidates = wordCandidate(sentencePart, currentIndex, words);
  let listOfparticuleCandidates = particuleCandidate(
    sentencePart,
    currentIndex,
    particules
  );

  if (listOfVerbCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfVerbCandidates);
  }
  if (listOfNaAdjCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfNaAdjCandidates);
  }
  if (listOfIAdjCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfIAdjCandidates);
  }
  if (listOfNameCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfNameCandidates);
  }
  if (listOfWordCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfWordCandidates);
  }

  if (listOfparticuleCandidates.length > 0) {
    listOfCandidates = listOfCandidates.concat(listOfparticuleCandidates);
  }

  return listOfCandidates;
};

const partIsAParticule = (
  sentencePart,
  currentIndex,
  particules,
  verbs,
  naAdjectives,
  iAdjectives,
  names,
  words
) => {
  let part = null;
  for (let index = 0; index < particules.length; index++) {
    let particule = particules[index];
    if (particule.kanjis === sentencePart) {
      part = {
        type: translationConstants.TYPE_PARTICULE,
        kanjis: sentencePart,
        selectedPronunciation: sentencePart,
        selectedMeaning: particule.summary,
        pronunciations: [sentencePart],
        meanings: [particule.summary],
        unknown: false,
        length: sentencePart.length,
        currentIndex: currentIndex,
        listOfValues: [],
      };
      return part;
    }
  }
  // the unknown part is not a particule so it is unknown
  let listOfCandidates = findListOfCandidates(
    sentencePart,
    currentIndex,
    verbs,
    naAdjectives,
    iAdjectives,
    names,
    words,
    particules
  );
  part = {
    type: translationConstants.TYPE_UNKNOWN,
    kanjis: sentencePart,
    selectedPronunciation: "?",
    selectedMeaning: "?",
    pronunciations: ["?"],
    meanings: ["?"],
    unknown: true,
    length: sentencePart.length,
    currentIndex: currentIndex,
    listOfValues: listOfCandidates,
  };
  return part;
};
