import React from "react";
import "./IAdjectiveConjugationTable.css";
import {
  presentIndicative,
  pastIndicative,
} from "../common/iAdjectiveConjugator";

const PLAIN_FORM = "Plain";
const POLITE_FORM = "Polite";
const NEGATIVE_SIGN = "Negative";
const POSITIVE_SIGN = "Positive";

function IAdjectiveConjugationTable(props) {
  const iAdjective = props.iAdjective;
  const stem = iAdjective.kanjis.substring(0, iAdjective.kanjis.length - 1);

  function isII(adjective) {
    return adjective.kanjis === "いい" ? true : false;
  }

  return (
    <>
      <h2>{iAdjective.kanjis}'s Conjugation</h2>
      <p>
        Because na-adjectives take the auxiliary verb we already know their
        conjugation: we just need to conjugate the auxiliary verb to get the
        negative, past, or past negative for both the standard and polite forms.
      </p>
      <table className="naConjugationTable">
        <thead>
          <th>Tense</th>
          <th>Standard</th>
          <th>Polite</th>
        </thead>
        <tbody>
          <tr>
            <td>Present</td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {presentIndicative(iAdjective, PLAIN_FORM, POSITIVE_SIGN)}
              </span>
            </td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {presentIndicative(iAdjective, POLITE_FORM, POSITIVE_SIGN)}
              </span>
            </td>
          </tr>
          <tr>
            <td>Past</td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {pastIndicative(iAdjective, PLAIN_FORM, POSITIVE_SIGN)}
              </span>
            </td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {pastIndicative(iAdjective, POLITE_FORM, POSITIVE_SIGN)}
              </span>
            </td>
          </tr>
          <tr>
            <td>Present negative</td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {presentIndicative(iAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
              </span>
            </td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {presentIndicative(iAdjective, POLITE_FORM, NEGATIVE_SIGN)}
              </span>
            </td>
          </tr>
          <tr>
            <td>Past negative</td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {pastIndicative(iAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
              </span>
            </td>
            <td>
              <span className="stem">{isII(iAdjective) || stem}</span>
              <span className="ending">
                {pastIndicative(iAdjective, POLITE_FORM, NEGATIVE_SIGN)}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default IAdjectiveConjugationTable;
