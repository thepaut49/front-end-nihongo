import React, { useState, useEffect } from "react";

function ListObject(props) {
  const [objectList, setObjectList] = useState([]);
  const objectListStyle = props.style;

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
