import React from "react";
import "./VerbConjugationTable.css";

const PLAIN_FORM = "Plain";
const POLITE_FORM = "Polite";
const NEGATIVE_SIGN = "Negative";
const POSITIVE_SIGN = "Positive";

function Tense(props) {
  const verb = props.verb;
  const stem = verb.neutralForm.substring(0, verb.neutralForm.length - 1);
  const tense = props.tense;
  const tenseFunction = props.tenseFunction;

  function isSuru(verb) {
    return verb.neutralForm === "する" ? true : false;
  }

  return (
    <div className="tenseGrid">
      <div className="tense">{tense}</div>
      <div className="empty"></div>
      <div className="positive">Positive</div>
      <div className="negative">Negative</div>
      <div className="plain">Plain</div>
      <div className="polite">Polite</div>
      <div className="plainpositive">
        <span className="stem">{isSuru(verb.neutralForm) || stem}</span>
        <span className="ending">
          {tenseFunction(verb, PLAIN_FORM, POSITIVE_SIGN)}
        </span>
      </div>
      <div className="plainnegative">
        <span className="stem">{isSuru(verb.neutralForm) || stem}</span>
        <span className="ending">
          {tenseFunction(verb, PLAIN_FORM, NEGATIVE_SIGN)}
        </span>
      </div>
      <div className="politepositive">
        <span className="stem">{isSuru(verb.neutralForm) || stem}</span>
        <span className="ending">
          {tenseFunction(verb, POLITE_FORM, POSITIVE_SIGN)}
        </span>
      </div>
      <div className="politenegative">
        <span className="stem">{isSuru(verb.neutralForm) || stem}</span>
        <span className="ending">
          {tenseFunction(verb, POLITE_FORM, NEGATIVE_SIGN)}
        </span>
      </div>
    </div>
  );
}

export default Tense;
