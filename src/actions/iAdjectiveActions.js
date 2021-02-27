import dispatcher from "../appDispatcher";
import * as iAdjectiveApi from "../api/iAdjectiveApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveIAdjective(iAdjective) {
  return iAdjectiveApi.saveIAdjective(iAdjective).then((savedIAdjective) => {
    // Hey dispatcher go tell all the stores that a iAdjective was created.
    dispatcher.dispatch({
      actionType: iAdjective.id
        ? actionTypes.UPDATE_I_ADJECTIVE
        : actionTypes.CREATE_I_ADJECTIVE,
      iAdjective: savedIAdjective,
    });
  });
}

export function deleteIAdjective(id) {
  return iAdjectiveApi.deleteIAdjective(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_I_ADJECTIVE,
      id: id,
    });
    toast.success("IAdjective deleted.");
  });
}

export function loadIAdjectives() {
  return iAdjectiveApi.getIAdjectives().then((iAdjectives) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_I_ADJECTIVES,
      iAdjectives: iAdjectives,
    });
  });
}

export function filterIAdjectives(iAdjectiveCriteria) {
  return iAdjectiveApi
    .filterIAdjectives(iAdjectiveCriteria)
    .then((iAdjectives) => {
      dispatcher.dispatch({
        actionType: actionTypes.FILTER_I_ADJECTIVES,
        iAdjectives: iAdjectives,
      });
    });
}
