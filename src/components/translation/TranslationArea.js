import CustomTextArea from "../common/CustomTextArea";

const TranslationArea = (props) => {
  const styleTranslationArea = {
    width: "100%",
    padding: "0.4em",
  };

  const buttonGroupStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1em",
  };

  const pronunciationStyle = {
    fontWeight: "bold",
    fontSize: "Large",
  };

  return (
    <>
      <form id="translationArea" style={styleTranslationArea}>
        <CustomTextArea
          id="textToTranslate"
          label="Sentence to Translate :"
          name="textToTranslate"
          cols={35}
          rows={5}
          value={props.sentence}
          onChange={props.onSentenceChange}
          onKanaClick={props.onKanaClick}
        />
        <div style={buttonGroupStyle}>
          <button className="btn btn-primary" onClick={props.onTranslateClick}>
            Translate
          </button>
          <button className="btn btn-primary" onClick={props.onClearClick}>
            Clear
          </button>
        </div>
        <h4>Pronunciation :</h4>
        <p style={pronunciationStyle}>{props.pronunciation}</p>
      </form>
    </>
  );
};

export default TranslationArea;
