import React from "react";
import "./IAdjectivesPage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function IAdjectiveList(props) {
  return (
    <table>
      <tbody>
        {props.iAdjectives.map((iAdjective) => {
          return (
            <tr key={iAdjective.id}>
              <td>
                <div className="grid-container-iAdjective">
                  <div className="iAdjective">
                    <Link to={"/iAdjective/" + iAdjective.kanjis}>
                      {iAdjective.kanjis}
                    </Link>
                  </div>
                  <div className="pronunciation">
                    {iAdjective.pronunciation}
                  </div>
                  <div className="meaning">
                    {iAdjective.meaning.map((mean, index) => {
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
                        props.deleteIAdjective(iAdjective.id);
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

IAdjectiveList.propTypes = {
  deleteIAdjective: PropTypes.func.isRequired,
  iAdjectives: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      kanjis: PropTypes.string.isRequired,
      pronunciation: PropTypes.string.isRequired,
      meaning: PropTypes.arrayOf.isRequired,
      numberOfUse: PropTypes.number,
      version: PropTypes.number,
    })
  ).isRequired,
};

export default IAdjectiveList;
