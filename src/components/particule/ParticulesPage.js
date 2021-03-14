import React, { useState, useEffect } from "react";
import particuleStore from "../../stores/particuleStore";
import ParticuleList from "./ParticuleList";
import { Link } from "react-router-dom";
import {
  loadParticules,
  deleteParticule,
} from "../../actions/particuleActions";

const ParticulesPage = () => {
  const [particules, setParticules] = useState(particuleStore.getParticules());

  useEffect(() => {
    particuleStore.addChangeListener(onChange);
    if (particuleStore.getParticules().length === 0) loadParticules();
    return function () {
      particuleStore.removeChangeListener(onChange); //cleanup on unmount
    };
  }, [particules.length]);
  // le second arg [] empeche de relancer en boucle l'appel à l'api

  function onChange() {
    setParticules(particuleStore.getParticules());
  }
  return (
    <>
      <h2>Particules</h2>
      <Link className="btn btn-primary" to="/particule">
        Add Particule
      </Link>
      {particules && particules.length > 0 && (
        <ParticuleList
          particules={particules}
          deleteParticule={deleteParticule}
        />
      )}
    </>
  );
};

export default ParticulesPage;
