import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const grammarRuleListStyle = {
  borderRadius: "10px",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  margin: "0.5em",
  padding: "0.5em",
};

const grammarRuleTitleStyle = {
  fontWeight: "bold",
  fontSize: "xxx-large",
};

const keywordStyle = {
  fontWeight: "bold",
  fontSize: "large",
};

function GrammarRuleList(props) {
  return (
    <div>
      {props.grammarRules.map((grammarRule) => {
        return (
          <div key={grammarRule.id} style={grammarRuleListStyle}>
            <div style={grammarRuleTitleStyle}>
              <Link to={"/grammarRule/" + grammarRule.title}>
                {grammarRule.title}
              </Link>
            </div>

            <div>
              <h2>Description</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: grammarRule.htmlDescription,
                }}
              />

              <h2>Keywords</h2>
              <ul style={keywordStyle}>
                <li>{grammarRule.firstKeyWord}</li>
                {grammarRule.secondKeyWord && (
                  <li>{grammarRule.secondKeyWord}</li>
                )}

                {grammarRule.thirdKeyWord && (
                  <li>{grammarRule.thirdKeyWord}</li>
                )}

                {grammarRule.fourthKeyWord && (
                  <li>{grammarRule.fourthKeyWord}</li>
                )}
              </ul>
            </div>

            <div className="delete">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  props.deleteGrammarRule(grammarRule.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

GrammarRuleList.propTypes = {
  deleteGrammarRule: PropTypes.func.isRequired,
  grammarRules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      htmlDescription: PropTypes.string.isRequired,
      firstKeyWord: PropTypes.string.isRequired,
      secondKeyWord: PropTypes.string,
      thirdKeyWord: PropTypes.string,
      fourthKeyWord: PropTypes.string,
      version: PropTypes.number,
    })
  ).isRequired,
};

export default GrammarRuleList;
