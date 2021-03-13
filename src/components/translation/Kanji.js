const Kanji = (props) => {
  const kanji = props.kanji;
  return (
    <div className="grid-container">
      <div className="kanji">{kanji.kanji}</div>
      <div className="pronunciation">
        {kanji.pronunciation.map((pro, index) => {
          return (
            <span key={index} className="onemeaning">
              {pro}
            </span>
          );
        })}
      </div>
      <div className="meaning">
        {kanji.meaning.map((mean, index) => {
          return (
            <span key={index} className="onemeaning">
              {mean}
            </span>
          );
        })}
      </div>
      <div className="strokes">
        <span>
          <label>Strokes : </label>
          {kanji.strokeNumber}
        </span>
        <span>
          <label>Radicals : </label>
          {kanji.radicals}
        </span>
      </div>
    </div>
  );
};

export default Kanji;
