import React, { useState, useEffect } from "react";
import grammarRuleStore from "../../stores/grammarRuleStore";
import GrammarRuleList from "./GrammarRuleList";
import { Link } from "react-router-dom";
import {
  loadGrammarRules,
  deleteGrammarRule,
} from "../../actions/grammarRuleActions";

const GrammarRulesPage = () => {
  const [grammarRules, setGrammarRules] = useState(
    grammarRuleStore.getGrammarRules()
  );

  useEffect(() => {
    grammarRuleStore.addChangeListener(onChange);
    if (grammarRuleStore.getGrammarRules().length === 0) loadGrammarRules();
    return function () {
      grammarRuleStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [grammarRules.length]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setGrammarRules(grammarRuleStore.getGrammarRules());
  }
  return (
    <>
      <h2>GrammarRules</h2>
      <Link className="btn btn-primary" to="/grammarRule">
        Add GrammarRule
      </Link>
      {grammarRules && grammarRules.length > 0 && (
        <GrammarRuleList
          grammarRules={grammarRules}
          deleteGrammarRule={deleteGrammarRule}
        />
      )}
    </>
  );
};

export default GrammarRulesPage;
