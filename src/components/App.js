import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import KanjisPage from "./kanji/KanjisPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/kanjis") return <KanjisPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Header /> {getPage()}
    </div>
  );
}

export default App;
