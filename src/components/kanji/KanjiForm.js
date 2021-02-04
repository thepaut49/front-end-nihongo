import { GridList, GridListTile } from "@material-ui/core";
import { radicals } from "../common/Radicals";
import CustomInput from "../common/CustomInput";

import React from "react";

function KanjiForm(props) {
  const gridListStyle = { width: "60%" };

  return (
    <form onSubmit={props.onSubmit}>
      <CustomInput
        id="kanji"
        label="Kanji"
        typeInput="text"
        onChange={props.onChange}
        name="kanji"
        value={props.kanji.kanji}
      />

      <CustomInput
        id="pronunciation"
        label="Pronunciation"
        typeInput="text"
        onChange={props.onChange}
        name="pronunciation"
        value={props.kanji.pronunciation}
      />

      <CustomInput
        id="meaning"
        label="Meaning"
        typeInput="text"
        onChange={props.onChange}
        name="meaning"
        value={props.kanji.meaning}
      />

      <CustomInput
        id="strokeNumber"
        label="Strokes"
        typeInput="number"
        onChange={props.onChange}
        step="1"
        name="strokeNumber"
        value={props.kanji.strokesNumber}
      />

      <CustomInput
        id="radicals"
        label="Radicals"
        typeInput="text"
        onChange={props.onChange}
        name="radicals"
        value={props.kanji.radicals}
      />

      <input type="submit" value="Save" className="btn btn-primary" />

      <br />
      <br />
      <GridList cellHeight={"auto"} cols={10} style={gridListStyle}>
        {radicals.map((radical) => {
          return (
            <GridListTile key={radical} cols={1}>
              <button>{radical}</button>
            </GridListTile>
          );
        })}
      </GridList>
    </form>
  );
}

export default KanjiForm;
