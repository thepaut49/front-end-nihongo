import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _names = [];

class NameStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNames() {
    return _names;
  }

  getNameByKanjis(kanjis) {
    return _names.find((name) => name.kanjis === kanjis);
  }
}

const store = new NameStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_NAME:
      _names.push(action.name);
      store.emitChange();
      break;
    case actionTypes.UPDATE_NAME:
      _names = _names.map((name) =>
        name.id === action.name.id ? action.name : name
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_NAMES:
      _names = action.names;
      store.emitChange();
      break;
    case actionTypes.DELETE_NAME:
      _names = _names.filter((name) => name.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.FILTER_NAMES:
      _names = action.names;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
