import React, { useState, useEffect } from "react";
import GrammarRuleForm from "./GrammarRuleForm";
import { toast } from "react-toastify";
import grammarRuleStore from "../../stores/grammarRuleStore";
import { Prompt } from "react-router-dom";
import * as grammarRuleActions from "../../actions/grammarRuleActions";

const ManageGrammarRulePage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [grammarRule, setGrammarRule] = useState({
    id: 0,
    title: "",
    htmlDescription: "",
    firstKeyWord: "",
    secondKeyWord: "",
    thirdKeyWord: "",
    fourthKeyWord: "",
    version: 0,
  });

  useEffect(() => {
    const title = props.match.params.title; // from the path /grammarrules/:grammarrule
    if (title) {
      setGrammarRule(grammarRuleStore.getGrammarRuleByTitle(title));
    }
  }, [props.match.params.title]);

  function handleChange(event) {
    setGrammarRule({ ...grammarRule, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!grammarRule.title)
      _errors.title = "Title of the grammar rule is required";
    if (!grammarRule.htmlDescription)
      _errors.summary = "Html description of the grammar rule is required";
    if (!grammarRule.firstKeyWord)
      _errors.firstKeyWord = "First keyword of the grammar rule is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    grammarRuleActions.saveGrammarRule(grammarRule).then(() => {
      props.history.push("/grammarRules");
      toast.success("GrammarRule saved.");
    });
  }

  return (
    <>
      <h2>Manage Grammar rule</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <GrammarRuleForm
        errors={errors}
        grammarRule={grammarRule}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageGrammarRulePage;
