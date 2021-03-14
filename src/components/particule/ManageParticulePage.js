import React, { useState, useEffect } from "react";
import ParticuleForm from "./ParticuleForm";
import { toast } from "react-toastify";
import particuleStore from "../../stores/particuleStore";
import { Prompt } from "react-router-dom";
import * as particuleActions from "../../actions/particuleActions";

const ManageParticulePage = (props) => {
  const [modified, setModified] = useState(false);
  const [errors, setErrors] = useState({});
  const [particule, setParticule] = useState({
    id: 0,
    kanjis: "",
    summary: "",
    function: "",
    howToUse: "",
    examples: "",
    version: 0,
  });

  useEffect(() => {
    const kanjis = props.match.params.kanjis; // from the path /particules/:particule
    if (kanjis) {
      setParticule(particuleStore.getParticuleByKanjis(kanjis));
    }
  }, [props.match.params.kanjis]);

  function handleChange(event) {
    setParticule({ ...particule, [event.target.name]: event.target.value });
    setModified(true);
  }

  function formIsValid() {
    const _errors = {};
    if (!particule.kanjis)
      _errors.kanjis = "Kanjis of the particule is required";
    if (!particule.summary)
      _errors.summary = "Summary of the particule is required";

    setErrors(_errors);
    // form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setModified(false);
    particuleActions.saveParticule(particule).then(() => {
      props.history.push("/particules");
      toast.success("Particule saved.");
    });
  }

  return (
    <>
      <h2>Manage Particle</h2>
      <Prompt when={modified} message="Are you sure you want to leave ?" />
      <ParticuleForm
        errors={errors}
        particule={particule}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageParticulePage;
