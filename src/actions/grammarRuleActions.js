import dispatcher from "../appDispatcher";
import * as grammarRuleApi from "../api/grammarRuleApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveGrammarRule(grammarRule) {
  return grammarRuleApi
    .saveGrammarRule(grammarRule)
    .then((savedGrammarRule) => {
      // Hey dispatcher go tell all the stores that a grammarrule was created.
      dispatcher.dispatch({
        actionType: grammarRule.id
          ? actionTypes.UPDATE_GRAMMAR_RULE
          : actionTypes.CREATE_GRAMMAR_RULE,
        grammarRule: savedGrammarRule,
      });
    });
}

export function deleteGrammarRule(id) {
  return grammarRuleApi.deleteGrammarRule(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_GRAMMAR_RULE,
      id: id,
    });
    toast.success("GrammarRule deleted.");
  });
}

export function loadGrammarRules() {
  return grammarRuleApi.getGrammarRules().then((grammarRules) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_GRAMMAR_RULES,
      grammarRules: grammarRules,
    });
  });
}
