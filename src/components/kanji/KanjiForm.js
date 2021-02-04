import { GridList, GridListTile } from "@material-ui/core";
import { radicals } from "../common/Radicals";

import React from "react";

function KanjiForm(props) {
  const gridListStyle = { width: "400px" };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="kanji">Kanji</label>
        <div className="field">
          <input
            id="kanji"
            type="text"
            name="kanji"
            className="form-control"
            value=""
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pronunciation">Pronunciation</label>
        <div className="field">
          <button>Add</button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="meaning">Meaning</label>
        <div className="field">
          <button>Add</button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="radical">Radicals</label>
        <div className="field">
          <input
            id="radical"
            type="text"
            name="radical"
            className="form-control"
            value=""
          />
        </div>
      </div>

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
