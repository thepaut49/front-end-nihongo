import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const particuleListStyle = {
  borderRadius: "10px",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  margin: "0.5em",
  padding: "0.5em",
};

const particuleTitleStyle = {
  fontWeight: "bold",
  fontSize: "xxx-large",
};

function ParticuleList(props) {
  return (
    <div>
      {props.particules.map((particule) => {
        return (
          <div key={particule.id} style={particuleListStyle}>
            <div style={particuleTitleStyle}>
              <Link to={"/particule/" + particule.kanjis}>
                The Japanese particle {particule.kanjis}
              </Link>
            </div>

            <div>
              <h2>Summary</h2>
              {particule.summary}

              <h2>Function of the {particule.kanjis}</h2>
              {particule.function}

              <h2>How to use the particle {particule.kanjis}</h2>
              {particule.howToUse}

              <h2>
                Japanese Examples SENTENCES with the particle {particule.kanjis}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: particule.examples,
                }}
              />
            </div>

            <div className="delete">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  props.deleteParticule(particule.id);
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

ParticuleList.propTypes = {
  deleteParticule: PropTypes.func.isRequired,
  particules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      kanjis: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      function: PropTypes.string,
      howToUse: PropTypes.string,
      examples: PropTypes.arrayOf(Object),
      version: PropTypes.number,
    })
  ).isRequired,
};

export default ParticuleList;
