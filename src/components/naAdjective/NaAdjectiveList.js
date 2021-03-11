import React from "react";
import "./NaAdjectivesPage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NaAdjectiveList(props) {
  return (
    <table>
      <tbody>
        {props.naAdjectives.map((naAdjective) => {
          return (
            <tr key={naAdjective.id}>
              <td>
                <div className="grid-container-naAdjective">
                  <div className="naAdjective">
                    <Link to={"/naAdjective/" + naAdjective.kanjis}>
                      {naAdjective.kanjis}
                    </Link>
                  </div>
                  <div className="pronunciation">
                    {naAdjective.pronunciation.map((pro, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {pro}
                        </span>
                      );
                    })}
                  </div>
                  <div className="meaning">
                    {naAdjective.meaning.map((mean, index) => {
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
                        props.deleteNaAdjective(naAdjective.id);
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

NaAdjectiveList.propTypes = {
  deleteNaAdjective: PropTypes.func.isRequired,
  naAdjectives: PropTypes.arrayOf(
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

export default NaAdjectiveList;
