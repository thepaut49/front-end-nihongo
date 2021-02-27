import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _iAdjectives = [];

class IAdjectiveStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getIAdjectives() {
    return _iAdjectives;
  }

  getIAdjectiveByKanjis(kanjis) {
    return _iAdjectives.find((iAdjective) => iAdjective.kanjis === kanjis);
  }
}

const store = new IAdjectiveStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_I_ADJECTIVE:
      _iAdjectives.push(action.iAdjective);
      store.emitChange();
      break;
    case actionTypes.UPDATE_I_ADJECTIVE:
      _iAdjectives = _iAdjectives.map((iAdjective) =>
        iAdjective.id === action.iAdjective.id ? action.iAdjective : iAdjective
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_I_ADJECTIVES:
      _iAdjectives = action.iAdjectives;
      store.emitChange();
      break;
    case actionTypes.DELETE_I_ADJECTIVE:
      _iAdjectives = _iAdjectives.filter(
        (iAdjective) => iAdjective.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.FILTER_I_ADJECTIVES:
      _iAdjectives = action.iAdjectives;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
