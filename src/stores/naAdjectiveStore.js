import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _naAdjectives = [];

class NaAdjectiveStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNaAdjectives() {
    return _naAdjectives;
  }

  getNaAdjectiveByKanjis(kanjis) {
    return _naAdjectives.find((naAdjective) => naAdjective.kanjis === kanjis);
  }
}

const store = new NaAdjectiveStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_NA_ADJECTIVE:
      _naAdjectives.push(action.naAdjective);
      store.emitChange();
      break;
    case actionTypes.UPDATE_NA_ADJECTIVE:
      _naAdjectives = _naAdjectives.map((naAdjective) =>
        naAdjective.id === action.naAdjective.id
          ? action.naAdjective
          : naAdjective
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_NA_ADJECTIVES:
      _naAdjectives = action.naAdjectives;
      store.emitChange();
      break;
    case actionTypes.DELETE_NA_ADJECTIVE:
      _naAdjectives = _naAdjectives.filter(
        (naAdjective) => naAdjective.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.FILTER_NA_ADJECTIVES:
      _naAdjectives = action.naAdjectives;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
