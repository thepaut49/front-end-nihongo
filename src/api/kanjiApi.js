import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/kanjis/";

export function getKanjis() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getKanjiByCharacter(character) {
  return fetch(baseUrl + character)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((kanjis) => {
        if (kanjis.length !== 1)
          throw new Error("Kanji not found: " + character);
        return kanjis[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveKanji(kanji) {
  const method = kanji.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + kanji.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...kanji,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteKanji(kanjiId) {
  return fetch(baseUrl + kanjiId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
