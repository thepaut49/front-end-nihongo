import CustomSelect from "../common/CustomSelect";
import { useState } from "react";
import translationConstants from "../common/translationConstants";
import ListOfCandidates from "./ListOfCandidates";

const partStyle = {
  display: "grid",
  gridTemplateRows: "repeat(6,max-content)",
  borderRadius: "10px",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  padding: "0.5em",
  height: "min-content",
};

const partStyleUnknown = {
  ...partStyle,
  backgroundColor: "#0e5805",
};

const kanjiStyle = {
  fontWeight: "bold",
};

const Part = (props) => {
  const [part, setPart] = useState(props.part);

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

  const onCandidateClick = (candidate) => {
    setPart(candidate);
    if (props.onPartChange) {
      props.onPartChange(candidate);
    }
  };

  return (
    <div style={part.unknown ? partStyleUnknown : partStyle}>
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
      <div>
        <label>Current Index : </label>
        {part.currentIndex}
      </div>
      <div>
        <label>Length : </label>
        {part.length}
      </div>
      {translationConstants.TYPE_UNKNOWN === part.type && (
        <ListOfCandidates
          candidatesList={part.listOfValues}
          onCandidateClick={onCandidateClick}
        />
      )}
    </div>
  );
};

export default Part;
