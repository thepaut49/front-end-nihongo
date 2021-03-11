import CustomSelect from "../common/CustomSelect";

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
  const part = props.part;
  return (
    <div style={part.unknown ? partStyleUnknown : partStyle} key={props.key}>
      <div style={kanjiStyle}>{part.kanjis}</div>
      <CustomSelect
        id="pronunciations"
        name="pronunciations"
        label="Pronunciation"
        listOfValues={part.pronunciations}
      />
      <CustomSelect
        id="meanings"
        name="meanings"
        label="Meaning"
        listOfValues={part.meanings}
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
