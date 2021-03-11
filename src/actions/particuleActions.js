import dispatcher from "../appDispatcher";
import * as particuleApi from "../api/particuleApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveParticule(particule) {
  return particuleApi.saveParticule(particule).then((savedParticule) => {
    // Hey dispatcher go tell all the stores that a particule was created.
    dispatcher.dispatch({
      actionType: particule.id
        ? actionTypes.UPDATE_PARTICULE
        : actionTypes.CREATE_PARTICULE,
      particule: savedParticule,
    });
  });
}

export function deleteParticule(id) {
  return particuleApi.deleteParticule(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_PARTICULE,
      id: id,
    });
    toast.success("Particule deleted.");
  });
}

export function loadParticules() {
  return particuleApi.getParticules().then((particules) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PARTICULES,
      particules: particules,
    });
  });
}
