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
  words
) => {
  let listOfParts = [];

  let indiceCourant = 0;
  while (indiceCourant < sentence.length) {
    for (let j = 10; j > 0; j--) {
      let part = null;
      if (indiceCourant + j <= sentence.length) {
        let sentencePart = sentence.substr(indiceCourant, j);
        //console.log("sentancePart = " + sentencePart);

        part = partIsAVerb(sentencePart, indiceCourant, verbs);

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

  listOfParts = addOfUnknownParts(sentence, listOfParts);

  return listOfParts;
};

const addOfUnknownParts = (sentence, listOfParts) => {
  // add of unknown parts
  let listOfPartsWithUnknownParts = [];
  if (listOfParts.length === 0) {
    let unknownPart = {
      type: translationConstants.TYPE_UNKNOWN,
      kanjis: sentence.substr(0, sentence.length),
      pronunciations: ["?"],
      meanings: ["?"],
      unknown: true,
      length: sentence.length,
      currentIndex: 0,
      listOfValues: [],
    };
    listOfPartsWithUnknownParts.push(unknownPart);
  } else {
    for (let index = 0; index < listOfParts.length; index++) {
      let currentPart = listOfParts[index];
      // Cas particulier du premier élément
      if (index === 0) {
        if (currentPart.currentIndex > 0) {
          let unknownPart = {
            type: translationConstants.TYPE_UNKNOWN,
            kanjis: sentence.substr(0, currentPart.currentIndex),
            pronunciations: ["?"],
            meanings: ["?"],
            unknown: true,
            length: currentPart.currentIndex,
            currentIndex: 0,
            listOfValues: [],
          };
          listOfPartsWithUnknownParts.push(unknownPart);
          listOfPartsWithUnknownParts.push(currentPart);
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
              let unknownPart = {
                type: translationConstants.TYPE_UNKNOWN,
                kanjis: sentence.substr(
                  currentPart.currentIndex + currentPart.length
                ),
                pronunciations: ["?"],
                meanings: ["?"],
                unknown: true,
                length:
                  sentence.length -
                  currentPart.currentIndex -
                  currentPart.length,
                currentIndex: currentPart.currentIndex + currentPart.length,
                listOfValues: [],
              };
              listOfPartsWithUnknownParts.push(unknownPart);
            }
            //si on est au bout on fait rien
          } else {
            // on regarde la partie suivante
            let nextPart = listOfParts[index + 1];
            let unknownPart = {
              type: translationConstants.TYPE_UNKNOWN,
              kanjis: sentence.substr(
                currentPart.currentIndex + currentPart.length,
                nextPart.currentIndex -
                  currentPart.currentIndex -
                  currentPart.length
              ),
              pronunciations: ["?"],
              meanings: ["?"],
              unknown: true,
              length:
                nextPart.currentIndex -
                currentPart.currentIndex -
                currentPart.length,
              currentIndex: currentPart.currentIndex + currentPart.length,
              listOfValues: [],
            };
            listOfPartsWithUnknownParts.push(unknownPart);
          }
        }
      } else {
        // on est rendu au 2eme element de ListOfParts
        listOfPartsWithUnknownParts.push(currentPart);
        if (index === listOfParts.length - 1) {
          // on est rendu au dernier élément on regarde si il reste une partie inconnu
          if (currentPart.currentIndex + currentPart.length < sentence.length) {
            let unknownPart = {
              type: translationConstants.TYPE_UNKNOWN,
              kanjis: sentence.substr(
                currentPart.currentIndex + currentPart.length
              ),
              pronunciations: ["?"],
              meanings: ["?"],
              unknown: true,
              length:
                sentence.length - currentPart.currentIndex - currentPart.length,
              currentIndex: currentPart.currentIndex + currentPart.length,
              listOfValues: [],
            };
            listOfPartsWithUnknownParts.push(unknownPart);
          }
          //si on est au bout on fait rien
        } else {
          // on regarde la partie suivante
          let nextPart = listOfParts[index + 1];
          let unknownPart = {
            type: translationConstants.TYPE_UNKNOWN,
            kanjis: sentence.substr(
              currentPart.currentIndex + currentPart.length,
              nextPart.currentIndex -
                currentPart.currentIndex -
                currentPart.length
            ),
            pronunciations: ["?"],
            meanings: ["?"],
            unknown: true,
            length:
              nextPart.currentIndex -
              currentPart.currentIndex -
              currentPart.length,
            currentIndex: currentPart.currentIndex + currentPart.length,
            listOfValues: [],
          };
          listOfPartsWithUnknownParts.push(unknownPart);
        }
      }
    }
  }
  return listOfPartsWithUnknownParts;
};

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
          if (tense(verb, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_VERB,
              kanjis: sentencePart,
              pronunciations: [verb.pronunciation],
              meanings: [verb.meaning],
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
          if (tense(naAdj, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_NA_ADJECTIVE,
              kanjis: sentencePart,
              pronunciations: [naAdj.pronunciation],
              meanings: [naAdj.meaning],
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
          if (tense(iAdj, form, sign) === sentencePart) {
            part = {
              type: translationConstants.TYPE_I_ADJECTIVE,
              kanjis: sentencePart,
              pronunciations: [iAdj.pronunciation],
              meanings: [iAdj.meaning],
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
        pronunciations: [name.pronunciation],
        meanings: [name.meaning],
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
