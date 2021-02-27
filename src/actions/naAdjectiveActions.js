import dispatcher from "../appDispatcher";
import * as naAdjectiveApi from "../api/naAdjectiveApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveNaAdjective(naAdjective) {
  return naAdjectiveApi
    .saveNaAdjective(naAdjective)
    .then((savedNaAdjective) => {
      // Hey dispatcher go tell all the stores that a naAdjective was created.
      dispatcher.dispatch({
        actionType: naAdjective.id
          ? actionTypes.UPDATE_NA_ADJECTIVE
          : actionTypes.CREATE_NA_ADJECTIVE,
        naAdjective: savedNaAdjective,
      });
    });
}

export function deleteNaAdjective(id) {
  return naAdjectiveApi.deleteNaAdjective(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_NA_ADJECTIVE,
      id: id,
    });
    toast.success("NaAdjective deleted.");
  });
}

export function loadNaAdjectives() {
  return naAdjectiveApi.getNaAdjectives().then((naAdjectives) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_NA_ADJECTIVES,
      naAdjectives: naAdjectives,
    });
  });
}

export function filterNaAdjectives(naAdjectiveCriteria) {
  return naAdjectiveApi
    .filterNaAdjectives(naAdjectiveCriteria)
    .then((naAdjectives) => {
      dispatcher.dispatch({
        actionType: actionTypes.FILTER_NA_ADJECTIVES,
        naAdjectives: naAdjectives,
      });
    });
}
