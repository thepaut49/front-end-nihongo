import React from "react";
import "./WordsPage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WordList(props) {
  return (
    <table>
      <tbody>
        {props.words.map((word) => {
          return (
            <tr key={word.id}>
              <td>
                <div className="grid-container-word">
                  <div className="word">
                    <Link to={"/word/" + word.kanjis}>{word.kanjis}</Link>
                  </div>
                  <div className="pronunciation">
                    {word.pronunciation.map((pronunciation, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {pronunciation}
                        </span>
                      );
                    })}
                  </div>
                  <div className="meaning">
                    {word.meaning.map((mean, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {mean}
                        </span>
                      );
                    })}
                  </div>
                  <div className="delete">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        props.deleteWord(word.id);
                      }}
                    >
                      Delete
                    </button>
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

WordList.propTypes = {
  deleteWord: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      kanjis: PropTypes.string.isRequired,
      pronunciation: PropTypes.arrayOf.isRequired,
      meaning: PropTypes.arrayOf.isRequired,
      numberOfUse: PropTypes.number,
      version: PropTypes.number,
    })
  ).isRequired,
};

export default WordList;
