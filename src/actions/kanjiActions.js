import dispatcher from "../appDispatcher";
import * as kanjiApi from "../api/kanjiApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveKanji(kanji) {
  return kanjiApi.saveKanji(kanji).then((savedKanji) => {
    // Hey dispatcher go tell all the stores that a kanji was created.
    dispatcher.dispatch({
      actionType: kanji.id
        ? actionTypes.UPDATE_KANJI
        : actionTypes.CREATE_KANJI,
      kanji: savedKanji,
    });
  });
}

export function deleteKanji(id) {
  return kanjiApi.deleteKanji(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_KANJI,
      id: id,
    });
    toast.success("Kanji deleted.");
  });
}

export function loadKanjis() {
  return kanjiApi.getKanjis().then((kanjis) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_KANJIS,
      kanjis: kanjis,
    });
  });
}

export function filterKanjis(kanjiCriteria) {
  return kanjiApi.filterKanjis(kanjiCriteria).then((kanjis) => {
    dispatcher.dispatch({
      actionType: actionTypes.FILTER_KANJIS,
      kanjis: kanjis,
    });
  });
}
