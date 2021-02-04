import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import KanjisPage from "./kanji/KanjisPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import ManageKanjiPage from "./kanji/ManageKanjiPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/kanjis" component={KanjisPage} />
        <Route path="/kanji/:kanji" component={ManageKanjiPage} />
        <Route path="/kanji" component={ManageKanjiPage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
