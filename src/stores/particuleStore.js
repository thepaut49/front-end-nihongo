import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _particules = [];

class ParticuleStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getParticules() {
    return _particules;
  }

  getParticuleByKanjis(kanjis) {
    return _particules.find((particule) => particule.kanjis === kanjis);
  }
}

const store = new ParticuleStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_PARTICULE:
      _particules.push(action.particule);
      store.emitChange();
      break;
    case actionTypes.UPDATE_PARTICULE:
      _particules = _particules.map((particule) =>
        particule.id === action.particule.id ? action.particule : particule
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_PARTICULES:
      _particules = action.particules;
      store.emitChange();
      break;
    case actionTypes.DELETE_PARTICULE:
      _particules = _particules.filter(
        (particule) => particule.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.FILTER_PARTICULES:
      _particules = action.particules;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
