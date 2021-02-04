import React from "react";
import "./KanjiPage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function KanjiList(props) {
  return (
    <table className="table">
      <tbody>
        {props.kanjis.map((kanji) => {
          return (
            <tr key={kanji.id}>
              <td>
                <div className="grid-container">
                  <div className="kanji">
                    <Link to={"/kanji/" + kanji.kanji}>{kanji.kanji}</Link>
                  </div>
                  <div className="pronunciation">
                    {kanji.pronunciation.map((pro, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {pro}
                        </span>
                      );
                    })}
                  </div>
                  <div className="meaning">
                    {kanji.meaning.map((mean, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {mean}
                        </span>
                      );
                    })}
                  </div>
                  <div className="strokes">
                    <span>
                      <label>Strokes :</label>
                      {kanji.strokeNumber}
                    </span>
                    <span>
                      <label>Radicals : </label>
                      {kanji.radicals}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

KanjiList.propTypes = {
  kanjis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      kanji: PropTypes.string.isRequired,
      pronunciation: PropTypes.arrayOf.isRequired,
      meaning: PropTypes.arrayOf.isRequired,
      strokeNumber: PropTypes.number.isRequired,
      radicals: PropTypes.string,
      version: PropTypes.number.isRequired,
      numberOfUse: PropTypes.number,
    })
  ).isRequired,
};

export default KanjiList;
