import dispatcher from "../appDispatcher";
import * as wordApi from "../api/wordApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveWord(word) {
  return wordApi.saveWord(word).then((savedWord) => {
    // Hey dispatcher go tell all the stores that a word was created.
    dispatcher.dispatch({
      actionType: word.id ? actionTypes.UPDATE_WORD : actionTypes.CREATE_WORD,
      word: savedWord,
    });
  });
}

export function deleteWord(id) {
  return wordApi.deleteWord(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_WORD,
      id: id,
    });
    toast.success("Word deleted.");
  });
}

export function loadWords() {
  return wordApi.getWords().then((words) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_WORDS,
      words: words,
    });
  });
}

export function filterWords(wordCriteria) {
  return wordApi.filterWords(wordCriteria).then((words) => {
    dispatcher.dispatch({
      actionType: actionTypes.FILTER_WORDS,
      words: words,
    });
  });
}
