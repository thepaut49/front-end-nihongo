const listOfPartsStyle = {
  height: "100%",
};

const showListOfParts = (event) => {
  event.preventDefault();
  let listOfPartsToHide = document.getElementById("ListOfPartsToHide");
  let listOfKanjisToHide = document.getElementById("ListOfKanjisToHide");
  listOfKanjisToHide.style.display = "none";
  listOfPartsToHide.style.display = "block";
};

const showListOfKanjis = (event) => {
  event.preventDefault();
  let listOfPartsToHide = document.getElementById("ListOfPartsToHide");
  let listOfKanjisToHide = document.getElementById("ListOfKanjisToHide");
  listOfPartsToHide.style.display = "none";
  listOfKanjisToHide.style.display = "block";
};

const listOfKanjisToHideStyle = {
  display: "none",
  padding: "0.4em",
  margin: "0.4em",
};

const listOfPartsToHideStyle = {
  display: "block",
  padding: "0.4em",
  margin: "0.4em",
};

const showbuttonGroupStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1em",
};

const ListOfParts = (props) => {
  return (
    <div id="ListOfParts" style={listOfPartsStyle}>
      <div style={showbuttonGroupStyle}>
        <button
          id="buttonListOfParts"
          onClick={showListOfParts}
          className="btn btn-success"
        >
          List of parts
        </button>

        <button
          id="buttonListOfKanji"
          onClick={showListOfKanjis}
          className="btn btn-success"
        >
          List of Kanjis
        </button>
      </div>

      <div id="ListOfPartsToHide" style={listOfPartsToHideStyle}>
        <h2>List Of Parts</h2>
      </div>

      <div id="ListOfKanjisToHide" style={listOfKanjisToHideStyle}>
        <h2>List Of Kanjis</h2>
      </div>
    </div>
  );
};

export default ListOfParts;
