import CustomSelect from "../common/CustomSelect";
import { useState } from "react";

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
    setPart({
      ...part,
      [event.target.name]: newValue,
    });
  }

  return (
    <div style={part.unknown ? partStyleUnknown : partStyle} key={props.key}>
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
    </div>
  );
};

export default Part;
