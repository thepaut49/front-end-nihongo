import React, { useState, useEffect } from "react";

function ListObject(props) {
  const typeSelect = props.typeSelect;
  const [objectList, setObjectList] = useState([]);

  let buttonStyle = {};
  if (typeSelect === "Kanji") {
    buttonStyle = {
      width: "10px",
      height: "10px",
    };
  }

  const objectListStyle = {
    display: "grid",
    gridTemplateColumn: "repeat(auto-fill,min-content())",
  };

  useEffect(() => {
    props.list
      .then((objectList) => setObjectList(objectList))
      .catch((error) => this.setState({ error }));
  });

  return (
    <div id="objectList" style={objectListStyle}>
      {objectList &&
        objectList.map((object) => {
          return (
            <button
              key={object.id}
              className="btn btn-primary"
              onClick={props.onClick}
              style={buttonStyle}
            >
              {object.value}
            </button>
          );
        })}
    </div>
  );
}

export default ListObject;
