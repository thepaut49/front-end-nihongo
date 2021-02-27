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
              {iAdjective.kanjis +
                presentIndicative(iAdjective, PLAIN_FORM, POSITIVE_SIGN)}
            </td>
            <td>
              {iAdjective.kanjis +
                presentIndicative(iAdjective, POLITE_FORM, POSITIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Past</td>
            <td>
              {iAdjective.kanjis +
                pastIndicative(iAdjective, PLAIN_FORM, POSITIVE_SIGN)}
            </td>
            <td>
              {iAdjective.kanjis +
                pastIndicative(iAdjective, POLITE_FORM, POSITIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Present negative</td>
            <td>
              {iAdjective.kanjis +
                presentIndicative(iAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
            </td>
            <td>
              {iAdjective.kanjis +
                presentIndicative(iAdjective, POLITE_FORM, NEGATIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Past negative</td>
            <td>
              {iAdjective.kanjis +
                pastIndicative(iAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
            </td>
            <td>
              {iAdjective.kanjis +
                pastIndicative(iAdjective, POLITE_FORM, NEGATIVE_SIGN)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default IAdjectiveConjugationTable;
