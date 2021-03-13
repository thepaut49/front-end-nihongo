import React from "react";
import Popup from "reactjs-popup";
import "./ListOfCandidates.css";
import Candidate from "./Candidate";

const ListOfCandidates = (props) => {
  const candidatesList = props.candidatesList;
  return (
    <Popup
      trigger={(open) => (
        <button className="btn btn-primary">Candidates</button>
      )}
      position="center center"
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="popupCandidate">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">
            <h4>Candidates</h4>{" "}
          </div>

          <div className="content">
            {candidatesList &&
              candidatesList.map((candidate, index) => {
                return (
                  <Candidate
                    part={candidate}
                    key={index}
                    onCandidateClick={props.onCandidateClick}
                  />
                );
              })}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ListOfCandidates;
