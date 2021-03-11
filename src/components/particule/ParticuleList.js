import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const htmlDescriptionStyle = {
  borderRadius: "10px",
  with: "100%",
};

function ParticuleList(props) {
  return (
    <div>
      {props.particules.map((particule) => {
        return (
          <div className="grid-container-particule" key={particule.id}>
            <div className="particule">
              <Link to={"/particule/" + particule.kanjis}>
                {particule.kanjis}
              </Link>
            </div>
            <iframe
              className="htmlDescription"
              title="particule test"
              srcdoc={particule.htmlDescription}
              style={htmlDescriptionStyle}
              width="100%"
            />
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
      description: PropTypes.string.isRequired,
      version: PropTypes.number,
    })
  ).isRequired,
};

export default ParticuleList;
