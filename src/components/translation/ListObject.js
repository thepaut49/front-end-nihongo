import React, { useState, useEffect } from "react";
import translationConstants from "../common/translationConstants";

function ListObject(props) {
  const typeSelect = props.typeSelect;
  const [objectList, setObjectList] = useState([]);

  let objectListStyle = {};
  if (!typeSelect || typeSelect === translationConstants.TYPE_KANJI) {
    objectListStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,3em)",
    };
  } else {
    objectListStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,10em)",
    };
  }

  useEffect(() => {
    props.list
      .then((_objectList) => setObjectList(_objectList))
      .catch((error) => console.log(error));
  }, [props.list]);

  return (
    <div id="objectList" style={objectListStyle}>
      {objectList &&
        objectList.map((object) => {
          return (
            <button
              id={object.id}
              key={object.id}
              className="btn btn-primary"
              onClick={props.onClick}
            >
              {object.value}
            </button>
          );
        })}
    </div>
  );
}

export default ListObject;
