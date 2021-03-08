import * as kanjiApi from "./kanjiApi";
import * as verbApi from "./verbApi";
import * as naAdjectiveApi from "./naAdjectiveApi";
import * as iAdjectiveApi from "./iAdjectiveApi";
import * as nameApi from "./nameApi";
import * as wordApi from "./wordApi";

export function getMostUsedObject(typeSelect, quantity) {
  switch (typeSelect) {
    case "Kanji":
      return kanjiApi.getMostUsedKanjis(quantity);
    case "Verb":
      return verbApi.getMostUsedVerbs(quantity);
    case "Na-Adjective":
      return naAdjectiveApi.getMostUsedNaAdjectives(quantity);
    case "I-Adjective":
      return iAdjectiveApi.getMostUsedIAdjectives(quantity);
    case "Name":
      return nameApi.getMostUsedNames(quantity);
    case "Word":
      return wordApi.getMostUsedWords(quantity);
    default:
      return kanjiApi.getMostUsedKanjis(quantity);
  }
}

export function updateNumberOfUse(typeSelect, id) {
  switch (typeSelect) {
    case "Kanji":
      kanjiApi.updateNumberOfUse(id);
      break;
    case "Verb":
      verbApi.updateNumberOfUse(id);
      break;
    case "Na-Adjective":
      naAdjectiveApi.updateNumberOfUse(id);
      break;
    case "I-Adjective":
      iAdjectiveApi.updateNumberOfUse(id);
      break;
    case "Name":
      nameApi.updateNumberOfUse(id);
      break;
    case "Word":
      wordApi.updateNumberOfUse(id);
      break;
    default:
  }
}
