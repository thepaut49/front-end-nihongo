import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _grammarRules = [];

class GrammarRuleStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getGrammarRules() {
    return _grammarRules;
  }

  getGrammarRuleByTitle(title) {
    return _grammarRules.find((grammarRule) => grammarRule.title === title);
  }
}

const store = new GrammarRuleStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_GRAMMAR_RULE:
      _grammarRules.push(action.grammarRule);
      store.emitChange();
      break;
    case actionTypes.UPDATE_GRAMMAR_RULE:
      _grammarRules = _grammarRules.map((grammarRule) =>
        grammarRule.id === action.grammarRule.id
          ? action.grammarRule
          : grammarRule
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_GRAMMAR_RULES:
      _grammarRules = action.grammarRules;
      store.emitChange();
      break;
    case actionTypes.DELETE_GRAMMAR_RULE:
      _grammarRules = _grammarRules.filter(
        (grammarRule) => grammarRule.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});
export default store;
