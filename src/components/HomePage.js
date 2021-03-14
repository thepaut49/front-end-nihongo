import React from "react";
import { Link } from "react-router-dom";

const styleHomePage = {
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(38, 113, 22, 0.48)",
  borderRadius: "30px",
  padding: "1em",
};

function HomePage() {
  return (
    <div style={styleHomePage}>
      <h1>Nihongo tools</h1>
      <h2>Pronunciation fields</h2>
      <p>
        All the pronunciation criteria fields in filters and in the translation
        in this app translate automatically romaji into hiragana and katakana.
        The others pronunciation fields have a button to translate romaji into
        hiragana and katakana.
      </p>
      <p>For these six hiragana and katakana you have to type :</p>
      <ul>
        <li>ん: -n</li>
        <li>ぢ: dji</li>
        <li>づ: dzu</li>
        <li>ン: -N</li>
        <li>ヂ: DJI</li>
        <li>ヅ: DZU</li>
      </ul>
      <h2>Kanjis</h2>
      <ul>
        <li>List the kanjis in the database</li>
        <li>Add and modify a Kanji in the database</li>
        <li>Delete a Kanji in the database</li>
        <li>
          Find kanjis with search criteria (kanji, pronunciation, meaning,
          strokes)
        </li>
      </ul>
      <h2>Verbs</h2>
      <ul>
        <li>List the verbs in the database</li>
        <li>Add and modify a verb in the database</li>
        <li>Delete a verb in the database</li>
        <li>
          Find verbs with search criteria (neutralForm, pronunciation, meaning)
        </li>
      </ul>
      <h2>Na-Adjectives</h2>
      <ul>
        <li>List the Na-Adjectives in the database</li>
        <li>Add and modify a Na-Adjective in the database</li>
        <li>Delete a Na-Adjective in the database</li>
        <li>
          Find Na-Adjectives with search criteria (kanjis, pronunciation,
          meaning)
        </li>
      </ul>
      <h2>I-Adjectives</h2>
      <ul>
        <li>List the I-Adjectives in the database</li>
        <li>Add and modify a I-Adjective in the database</li>
        <li>Delete a I-Adjective in the database</li>
        <li>
          Find I-Adjectives with search criteria (kanjis, pronunciation,
          meaning)
        </li>
      </ul>
      <h2>Names</h2>
      <ul>
        <li>List the Names in the database</li>
        <li>Add and modify a Name in the database</li>
        <li>Delete a Name in the database</li>
        <li>
          Find Names with search criteria (kanjis, pronunciation, meaning)
        </li>
      </ul>
      <h2>Words</h2>
      <ul>
        <li>List the Words in the database</li>
        <li>Add and modify a Word in the database</li>
        <li>Delete a Word in the database</li>
        <li>
          Find Words with search criteria (kanjis, pronunciation, meaning)
        </li>
      </ul>
      <h2>Particles</h2>
      <ul>
        <li>List the Particles in the database</li>
        <li>Add and modify a Particle in the database</li>
        <li>Delete a Particle in the database</li>
      </ul>
      <h2>Grammar rules</h2>
      <ul>
        <li>List the Grammar rules in the database</li>
        <li>Add and modify a Grammar rule in the database</li>
        <li>Delete a Grammar rule in the database</li>
      </ul>
      <h2>Translation</h2>
      <ul>
        <li>List the kanjis in a sentence</li>
        <li>Identify each part of the sentence (type,pronunciation,meaning)</li>
        <li>
          The meaning and pronunciation can be selected from the list of meaning
          and pronunciation by the user to adapt the result of the search
          according to the context
        </li>
      </ul>
      <h2>Hiragana</h2>
      <ul>
        <li>List the Hiraganas with their pronunciation</li>
      </ul>
      <h2>Katakana</h2>
      <ul>
        <li>List the Katakanas with their pronunciation</li>
      </ul>

      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
