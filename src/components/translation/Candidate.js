import CustomSelect from "../common/CustomSelect";
import { useState } from "react";
import translationConstants from "../common/translationConstants";
import ListOfCandidates from "./ListOfCandidates";

const partStyle = {
  display: "grid",
  gridTemplateRows: "repeat(5,max-content)",
  borderRadius: "10px",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  padding: "0.5em",
  height: "min-content",
};

const kanjiStyle = {
  fontWeight: "bold",
};

const Candidate = (props) => {
  const [part, setPart] = useState(props.part);

  const handleSelectCandidate = (event) => {
    props.onCandidateClick(part);
    event.preventDefault();
  };

  function handleChange(event) {
    let newValue = event.target.value;
    let newPart = {
      ...part,
      [event.target.name]: newValue,
    };
    setPart(newPart);
    if (props.onPronunciationChange) {
      props.onPronunciationChange(newPart);
    }
  }

  return (
    <div style={partStyle}>
      <div style={kanjiStyle}>{part.kanjis}</div>
      <CustomSelect
        id="selectedPronunciation"
        name="selectedPronunciation"
        label="Pronunciation"
        value={part.selectedPronunciation}
        listOfValues={part.pronunciations}
        onChange={handleChange}
      />
      <CustomSelect
        id="selectedMeaning"
        name="selectedMeaning"
        label="Meaning"
        value={part.selectedMeaning}
        listOfValues={part.meanings}
        onChange={handleChange}
      />
      <div>
        <label>Type : </label>
        {part.type}
      </div>

      <button className="btn btn-primary" onClick={handleSelectCandidate}>
        Select
      </button>
    </div>
  );
};

export default Candidate;
