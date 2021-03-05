import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _words = [];

class WordStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getWords() {
    return _words;
  }

  getWordByKanjis(kanjis) {
    return _words.find((word) => word.kanjis === kanjis);
  }
}

const store = new WordStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_WORD:
      _words.push(action.word);
      store.emitChange();
      break;
    case actionTypes.UPDATE_WORD:
      _words = _words.map((word) =>
        word.id === action.word.id ? action.word : word
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_WORDS:
      _words = action.words;
      store.emitChange();
      break;
    case actionTypes.DELETE_WORD:
      _words = _words.filter((word) => word.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.FILTER_WORDS:
      _words = action.words;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
