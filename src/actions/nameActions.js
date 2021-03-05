import dispatcher from "../appDispatcher";
import * as nameApi from "../api/nameApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveName(name) {
  return nameApi.saveName(name).then((savedName) => {
    // Hey dispatcher go tell all the stores that a name was created.
    dispatcher.dispatch({
      actionType: name.id ? actionTypes.UPDATE_NAME : actionTypes.CREATE_NAME,
      name: savedName,
    });
  });
}

export function deleteName(id) {
  return nameApi.deleteName(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_NAME,
      id: id,
    });
    toast.success("Name deleted.");
  });
}

export function loadNames() {
  return nameApi.getNames().then((names) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_NAMES,
      names: names,
    });
  });
}

export function filterNames(nameCriteria) {
  return nameApi.filterNames(nameCriteria).then((names) => {
    dispatcher.dispatch({
      actionType: actionTypes.FILTER_NAMES,
      names: names,
    });
  });
}
