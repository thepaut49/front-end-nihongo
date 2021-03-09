import React from "react";
import "./NamesPage.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NameList(props) {
  return (
    <table>
      <tbody>
        {props.names.map((name) => {
          return (
            <tr key={name.id}>
              <td>
                <div className="grid-container-name">
                  <div className="name">
                    <Link to={"/name/" + name.kanjis}>{name.kanjis}</Link>
                  </div>
                  <div className="pronunciation">
                    {name.pronunciation.map((pronunciation, index) => {
                      return (
                        <span key={index} className="onemeaning">
                          {pronunciation}
                        </span>
                      );
                    })}
                  </div>
                  <div className="meaning">
                    {name.meaning.map((mean, index) => {
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
                        props.deleteName(name.id);
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

NameList.propTypes = {
  deleteName: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(
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

export default NameList;
