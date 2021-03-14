export const specialKanas = ["ん", "ぢ", "づ", "ヅ", "ヂ", "ン"];

export function translateRomajiToKana(sentence) {
  if (!sentence || sentence.length === 0) return "";
  let newString = sentence;
  console.log("newString before first transformation : " + newString);
  newString = firtPhaseOfTranslation(newString);
  console.log("newString after first transformation : " + newString);
  newString = secondPhaseOfTranslation(newString);
  console.log("newString after second transformation : " + newString);
  newString = thirdPhase(newString);
  console.log("newString after third transformation : " + newString);
  newString = fourthPhase(newString);
  console.log("newString after fourth transformation : " + newString);
  return newString;
}

function firtPhaseOfTranslation(chaine) {
  let newString = "";
  for (let i = 0; i < chaine.length; i++) {
    switch (chaine[i]) {
      case "a":
        newString += "あ";
        break;
      case "i":
        newString += "い";
        break;
      case "u":
        newString += "う";
        break;
      case "e":
        newString += "え";
        break;
      case "o":
        newString += "お";
        break;
      case "A":
        newString += "ア";
        break;
      case "I":
        newString += "イ";
        break;
      case "U":
        newString += "ウ";
        break;
      case "E":
        newString += "エ";
        break;
      case "O":
        newString += "オ";
        break;
      default:
        newString += chaine[i];
    }
  }
  return newString;
}

function secondPhaseOfTranslation(oldString) {
  let newString = oldString;
  let indexCaractereAEnlever = null;
  let tempChaine = "";
  let j = 0;

  if (newString.length > 1) {
    let newString2Letter = newString[0];
    for (let i = 0; i < newString.length - 1; i++) {
      let string = newString[i] + newString[i + 1];
      switch (string) {
        case "kあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "か";
          break;
        case "kい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "き";
          break;
        case "kう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "く";
          break;
        case "kえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "け";
          break;
        case "kお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "こ";
          break;
        case "Kア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "カ";
          break;
        case "Kイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "キ";
          break;
        case "Kウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ク";
          break;
        case "Kエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ケ";
          break;
        case "Kオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "コ";
          break;

        // Ta te to
        case "tあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "た";
          break;
        case "tえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "て";
          break;
        case "tお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "と";
          break;
        case "Tア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "タ";
          break;
        case "Tエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "テ";
          break;
        case "Tオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ト";
          break;

        // sa su se so
        case "sあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "さ";
          break;
        case "sう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "す";
          break;
        case "sえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "せ";
          break;
        case "sお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "そ";
          break;
        case "Sア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "サ";
          break;
        case "Sウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ス";
          break;
        case "Sエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "セ";
          break;
        case "Sオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ソ";
          break;

        // !!!!!!!!!!! na ni nu ne no!!!!!!!!!!!
        case "nあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "な";
          break;
        case "nい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "に";
          break;
        case "nう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぬ";
          break;
        case "nえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ね";
          break;
        case "nお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "の";
          break;
        case "-n":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ん";
          break;
        case "Nア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ナ";
          break;
        case "Nイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ニ";
          break;
        case "Nウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヌ";
          break;
        case "Nエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ネ";
          break;
        case "Nオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ノ";
          break;
        case "-N":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ン";
          break;
        // !!!!!!!!!!! ha hi fu he ho!!!!!!!!!!!
        case "hあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "は";
          break;
        case "hい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ひ";
          break;
        case "fう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ふ";
          break;
        case "hえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "へ";
          break;
        case "hお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ほ";
          break;
        case "Hア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ハ";
          break;
        case "Hイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヒ";
          break;
        case "Fウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "フ";
          break;
        case "Hエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヘ";
          break;
        case "Hオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ホ";
          break;

        // !!!!!!!!!!! ma mi mu me mo!!!!!!!!!!!
        case "mあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ま";
          break;
        case "mい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "み";
          break;
        case "mう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "む";
          break;
        case "mえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "め";
          break;
        case "mお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "も";
          break;
        case "Mア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "マ";
          break;
        case "Mイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ミ";
          break;
        case "Mウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ム";
          break;
        case "Mエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "メ";
          break;
        case "Mオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "モ";
          break;

        // !!!!!!!!!!! ya yu yo!!!!!!!!!!!
        case "yあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "や";
          break;

        case "yう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ゆ";
          break;
        case "yお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "よ";
          break;
        case "Yア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヤ";
          break;
        case "Yウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ユ";
          break;
        case "Yオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヨ";
          break;

        // !!!!!!!!!!! ra ri ru re ro!!!!!!!!!!!
        case "rあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ら";
          break;
        case "rい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "り";
          break;
        case "rう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "る";
          break;
        case "rえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "れ";
          break;
        case "rお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ろ";
          break;
        case "Rア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ラ";
          break;
        case "Rイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "リ";
          break;
        case "Rウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ル";
          break;
        case "Rエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "レ";
          break;
        case "Rオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ロ";
          break;

        // !!!!!!!!!!! wa wo!!!!!!!!!!!
        case "wあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "わ";
          break;
        case "wお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "を";
          break;
        case "Wア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ワ";
          break;
        case "Wオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヲ";
          break;

        // !!!!!!!!!!! ga gi gu ge go!!!!!!!!!!!
        case "gあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "が";
          break;
        case "gい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぎ";
          break;
        case "gう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぐ";
          break;
        case "gえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "げ";
          break;
        case "gお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ご";
          break;
        case "Gア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ガ";
          break;
        case "Gイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ギ";
          break;
        case "Gウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "グ";
          break;
        case "Gエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ゲ";
          break;
        case "Gオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ゴ";
          break;

        // !!!!!!!!!!! za ji zu ze zo!!!!!!!!!!!
        case "zあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ざ";
          break;
        case "jい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "じ";
          break;
        case "zう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ず";
          break;
        case "zえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぜ";
          break;
        case "zお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぞ";
          break;
        case "Zア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ザ";
          break;
        case "Jイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ジ";
          break;
        case "Zウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ズ";
          break;
        case "Zエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ゼ";
          break;
        case "Zオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ゾ";
          break;

        // !!!!!!!!!!! da ji zu de do!!!!!!!!!!!
        case "dあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "だ";
          break;
        case "dえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "で";
          break;
        case "dお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ど";
          break;
        case "Dア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ダ";
          break;
        case "Dエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "デ";
          break;
        case "Dオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ド";
          break;

        // !!!!!!!!!!! ba bi bu be bo!!!!!!!!!!!
        case "bあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ば";
          break;
        case "bい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "び";
          break;
        case "bう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぶ";
          break;
        case "bえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "べ";
          break;
        case "bお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぼ";
          break;
        case "Bア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "バ";
          break;
        case "Bイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ビ";
          break;
        case "Bウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ブ";
          break;
        case "Bエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ベ";
          break;
        case "Bオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ボ";
          break;

        // !!!!!!!!!!! pa pi pu pe po!!!!!!!!!!!
        case "pあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぱ";
          break;
        case "pい":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぴ";
          break;
        case "pう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぷ";
          break;
        case "pえ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぺ";
          break;
        case "pお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぽ";
          break;
        case "Pア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "パ";
          break;
        case "Pイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ピ";
          break;
        case "Pウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "プ";
          break;
        case "Pエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ペ";
          break;
        case "Pオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ポ";
          break;

        // !!!!!!!!! ja ju jo!!!!!!!!
        case "jあ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "じゃ";
          break;
        case "jう":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "じゅ";
          break;
        case "jお":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "じょ";
          break;
        case "Jア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ジャ";
          break;
        case "Jウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ジュ";
          break;
        case "Jオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ジョ";
          break;

        // !!!!!!!!! va vi vu ve vo !!!!!!!!
        case "Vア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヴァ";
          break;
        case "Vイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヴィ";
          break;
        case "Vウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヴ";
          break;
        case "Vエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヴェ";
          break;
        case "Vオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヴォ";
          break;

        // !!!!!!!!!! ti du !!!!!
        case "Tイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ティ";
          break;
        case "Dウ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ドゥ";
          break;

        // !!!!!!!!! fa fi fe fo !!!!!!!!
        case "Fア":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ファ";
          break;
        case "Fイ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "フィ";
          break;
        case "Fエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "フェ";
          break;
        case "Fオ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "フォ";
          break;

        // !!!!!! she je !!!!!!!

        case "Jエ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ジェ";
          break;

        default:
          newString2Letter += string[1];
      }
    }
    return newString2Letter;
  } else {
    return oldString;
  }
}

function thirdPhase(oldString) {
  let newString = oldString;
  let indexCaractereAEnlever = null;
  let tempChaine = "";
  let j = 0;

  if (newString.length > 1) {
    let newString2Letter = newString[0];
    for (let i = 0; i < newString.length - 1; i++) {
      let string = newString[i] + newString[i + 1];
      switch (string) {
        // !!!!!!!!! hya hyu hyo!!!!!!!!
        case "hや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ひゃ";
          break;
        case "hゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ひゅ";
          break;
        case "hよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ひょ";
          break;
        case "Hヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヒャ";
          break;
        case "Hユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヒュ";
          break;
        case "Hヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヒョ";
          break;

        // !!!!!!!!! kya kyu kyo!!!!!!!!
        case "kや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "きゃ";
          break;
        case "kゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "きゅ";
          break;
        case "kよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "きょ";
          break;
        case "Kヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "キャ";
          break;
        case "Kユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "キュ";
          break;
        case "Kヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "キョ";
          break;

        // !!!!!!!!! gya gyu gyo!!!!!!!!
        case "gや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぎゃ";
          break;
        case "gゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぎゅ";
          break;
        case "gよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぎょ";
          break;
        case "Gヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ギャ";
          break;
        case "Gユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ギュ";
          break;
        case "Gヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ギョ";
          break;

        // !!!!!!!!! nya nyu nyo!!!!!!!!
        case "nや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "にゃ";
          break;
        case "nゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "にゅ";
          break;
        case "nよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "にょ";
          break;
        case "Nヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ニャ";
          break;
        case "Nユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ニュ";
          break;
        case "Nヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ニョ";
          break;

        // !!!!!!!!! bya byu byo!!!!!!!!
        case "bや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "びゃ";
          break;
        case "bゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "びゅ";
          break;
        case "bよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "びょ";
          break;
        case "Bヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ビャ";
          break;
        case "Bユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ビュ";
          break;
        case "Bヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ビョ";
          break;

        // !!!!!!!!! pya pyu pyo!!!!!!!!
        case "pや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぴゃ";
          break;
        case "pゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぴゅ";
          break;
        case "pよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぴょ";
          break;
        case "Pヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ピャ";
          break;
        case "Pユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ピュ";
          break;
        case "Pヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ピョ";
          break;

        // !!!!!!!!! mya myu myo!!!!!!!!
        case "mや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "みゃ";
          break;
        case "mゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "みゅ";
          break;
        case "mよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "みょ";
          break;
        case "Mヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ミャ";
          break;
        case "Mユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ミュ";
          break;
        case "Mヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ミョ";
          break;

        // !!!!!!!!! rya ryu ryo!!!!!!!!
        case "rや":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "りゃ";
          break;
        case "rゆ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "りゅ";
          break;
        case "rよ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "りょ";
          break;
        case "Rヤ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "リャ";
          break;
        case "Rユ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "リュ";
          break;
        case "Rヨ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "リョ";
          break;

        // petit tsu
        case "つ=":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "っ";
          break;

        case "ツ=":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ッ";
          break;

        // !!!!!!!!! sha shu sho!!!!!!!!
        case "sは":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "しゃ";
          break;

        case "sひ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "し";
          break;
        case "sほ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "しょ";
          break;
        case "Sハ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "シャ";
          break;

        case "Sヒ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "シ";
          break;

        case "Sヘ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "シェ";
          break;
        case "Sホ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ショ";
          break;

        // !!!!!!!!! cha chu cho!!!!!!!!
        case "cは":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ちゃ";
          break;
        case "cひ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ち";
          break;
        case "cほ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ちょ";
          break;
        case "Cハ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "チャ";
          break;
        case "Cヒ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "チ";
          break;

        case "Cホ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "チョ";
          break;

        case "Cヘ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "チエ";
          break;

        // !!!!!!!!!! tsu
        case "tす":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "つ";
          break;

        case "Tス":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ツ";
          break;

        // !!!!!!!!! DJI DZU!!!!!!!!
        case "dじ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ぢ";
          break;
        case "dず":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "づ";
          break;
        case "Dジ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヂ";
          break;
        case "Dズ":
          indexCaractereAEnlever = newString2Letter.length - 1;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ヅ";
          break;

        default:
          newString2Letter += string[1];
      }
    }
    return newString2Letter;
  } else {
    return oldString;
  }
}

function fourthPhase(oldString) {
  let newString = oldString;
  let indexCaractereAEnlever = null;
  let tempChaine = "";
  let j = 0;

  if (newString.length > 2) {
    let newString2Letter = newString[0] + newString[1];
    for (let i = 0; i < newString.length - 2; i++) {
      let string = newString[i] + newString[i + 1] + newString[i + 2];
      switch (string) {
        case "CHウ":
          indexCaractereAEnlever = newString2Letter.length - 2;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "チュ";
          break;

        case "chう":
          indexCaractereAEnlever = newString2Letter.length - 2;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "ちゅ";
          break;

        case "SHウ":
          indexCaractereAEnlever = newString2Letter.length - 2;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "シュ";
          break;

        case "shう":
          indexCaractereAEnlever = newString2Letter.length - 2;
          tempChaine = "";
          for (j = 0; j < indexCaractereAEnlever; j++) {
            tempChaine += newString2Letter[j];
          }
          newString2Letter = tempChaine;
          newString2Letter += "しゅ";
          break;

        default:
          newString2Letter += string[2];
      }
    }
    return newString2Letter;
  } else {
    return oldString;
  }
}
