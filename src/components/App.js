import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import KanjisPage from "./kanji/KanjisPage";
import VerbsPage from "./verb/VerbsPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import ManageKanjiPage from "./kanji/ManageKanjiPage";
import ManageVerbPage from "./verb/ManageVerbPage";
import ManageNaAdjectivePage from "./naAdjective/ManageNaAdjectivePage";
import NaAdjectivesPage from "./naAdjective/NaAdjectivesPage";
import ManageIAdjectivePage from "./iAdjective/ManageIAdjectivePage";
import IAdjectivesPage from "./iAdjective/IAdjectivesPage";
import ManageNamePage from "./name/ManageNamePage";
import NamesPage from "./name/NamesPage";
import ManageWordPage from "./word/ManageWordPage";
import WordsPage from "./word/WordsPage";
import ManageParticulePage from "./particule/ManageParticulePage";
import ParticulesPage from "./particule/ParticulesPage";
import ManageGrammarRulePage from "./grammarrule/ManageGrammarRulePage";
import GrammarRulesPage from "./grammarrule/GrammarRulesPage";
import HiraganasPage from "./hiragana/HiraganasPage";
import KatakanasPage from "./katakana/KatakanasPage";
import Translation from "./translation/Translation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/kanjis" component={KanjisPage} />
          <Route path="/kanji/:kanji" component={ManageKanjiPage} />
          <Route path="/kanji" component={ManageKanjiPage} />
          <Route path="/verbs" component={VerbsPage} />
          <Route path="/verb/:neutralForm" component={ManageVerbPage} />
          <Route path="/verb" component={ManageVerbPage} />
          <Route path="/naAdjectives" component={NaAdjectivesPage} />
          <Route
            path="/naAdjective/:kanjis"
            component={ManageNaAdjectivePage}
          />
          <Route path="/naAdjective" component={ManageNaAdjectivePage} />
          <Route path="/iAdjectives" component={IAdjectivesPage} />
          <Route path="/iAdjective/:kanjis" component={ManageIAdjectivePage} />
          <Route path="/iAdjective" component={ManageIAdjectivePage} />
          <Route path="/names" component={NamesPage} />
          <Route path="/name/:kanjis" component={ManageNamePage} />
          <Route path="/name" component={ManageNamePage} />
          <Route path="/words" component={WordsPage} />
          <Route path="/word/:kanjis" component={ManageWordPage} />
          <Route path="/word" component={ManageWordPage} />
          <Route path="/particules" component={ParticulesPage} />
          <Route path="/particule/:kanjis" component={ManageParticulePage} />
          <Route path="/particule" component={ManageParticulePage} />
          <Route path="/grammarRules" component={GrammarRulesPage} />
          <Route path="/grammarRule/:title" component={ManageGrammarRulePage} />
          <Route path="/grammarRule" component={ManageGrammarRulePage} />
          <Route path="/translation" component={Translation} />
          <Route path="/hiraganas" component={HiraganasPage} />
          <Route path="/katakanas" component={KatakanasPage} />
          <Route path="/about" component={AboutPage} />
          <Redirect from="/about-page" to="/about" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
