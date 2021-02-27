import React from "react";
import "./NaAdjectiveConjugationTable.css";
import {
  presentIndicative,
  pastIndicative,
} from "../common/naAdjectiveConjugator";

const PLAIN_FORM = "Plain";
const POLITE_FORM = "Polite";
const NEGATIVE_SIGN = "Negative";
const POSITIVE_SIGN = "Positive";

function NaAdjectiveConjugationTable(props) {
  const naAdjective = props.naAdjective;

  return (
    <>
      <h2>{naAdjective.kanjis}'s Conjugation</h2>
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
              {naAdjective.kanjis +
                presentIndicative(naAdjective, PLAIN_FORM, POSITIVE_SIGN)}
            </td>
            <td>
              {naAdjective.kanjis +
                presentIndicative(naAdjective, POLITE_FORM, POSITIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Past</td>
            <td>
              {naAdjective.kanjis +
                pastIndicative(naAdjective, PLAIN_FORM, POSITIVE_SIGN)}
            </td>
            <td>
              {naAdjective.kanjis +
                pastIndicative(naAdjective, POLITE_FORM, POSITIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Present negative</td>
            <td>
              {naAdjective.kanjis +
                presentIndicative(naAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
            </td>
            <td>
              {naAdjective.kanjis +
                presentIndicative(naAdjective, POLITE_FORM, NEGATIVE_SIGN)}
            </td>
          </tr>
          <tr>
            <td>Past negative</td>
            <td>
              {naAdjective.kanjis +
                pastIndicative(naAdjective, PLAIN_FORM, NEGATIVE_SIGN)}
            </td>
            <td>
              {naAdjective.kanjis +
                pastIndicative(naAdjective, POLITE_FORM, NEGATIVE_SIGN)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default NaAdjectiveConjugationTable;
