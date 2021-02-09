import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _kanjis = [];

class KanjiStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getKanjis() {
    return _kanjis;
  }

  getKanjiByCharacter(character) {
    return _kanjis.find((kanji) => kanji.kanji === character);
  }
}

const store = new KanjiStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_KANJI:
      _kanjis.push(action.kanji);
      store.emitChange();
      break;
    case actionTypes.UPDATE_KANJI:
      _kanjis = _kanjis.map((kanji) =>
        kanji.id === action.kanji.id ? action.kanji : kanji
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_KANJIS:
      _kanjis = action.kanjis;
      store.emitChange();
      break;
    case actionTypes.DELETE_KANJI:
      _kanjis = _kanjis.filter((kanji) => kanji.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.FILTER_KANJIS:
      _kanjis = action.kanjis;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
