import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _verbs = [];

class VerbStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getVerbs() {
    return _verbs;
  }

  getVerbByNeutralForm(neutralForm) {
    return _verbs.find((verb) => verb.neutralForm === neutralForm);
  }
}

const store = new VerbStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_VERB:
      _verbs.push(action.verb);
      store.emitChange();
      break;
    case actionTypes.UPDATE_VERB:
      _verbs = _verbs.map((verb) =>
        verb.id === action.verb.id ? action.verb : verb
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_VERBS:
      _verbs = action.verbs;
      store.emitChange();
      break;
    case actionTypes.DELETE_VERB:
      _verbs = _verbs.filter((verb) => verb.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.FILTER_VERBS:
      _verbs = action.verbs;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
