import CustomTextArea from "../common/CustomTextArea";

const TranslationArea = (props) => {
  const styleTranslationArea = {
    backgroundColor: "red",
    width: "100%",
  };

  const buttonGroupStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1em",
  };

  return (
    <>
      <form id="translationArea" style={styleTranslationArea}>
        <h2>Sentence to translate</h2>
        <CustomTextArea
          id="textToTranslate"
          label="Sentence to translate"
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
      </form>
    </>
  );
};

export default TranslationArea;
