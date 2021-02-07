import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/kanjis/";

export function getKanjis() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getKanjiByCharacter(character) {
  return fetch(baseUrl + "findByKanji/" + character)
    .then(handleResponse)
    .catch(handleError);
  /*.then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      debugger;
      return response.json().then((kanjis) => {
        console.log(kanjis);
        if (kanjis.length !== 1)
          throw new Error("Kanji not found: " + character);
        return kanjis[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);*/
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
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterKanjis(kanjiCriteria) {
  let url = baseUrl + "findWithCriteria?";
  if (kanjiCriteria.kanji) url = url + "kanji=" + kanjiCriteria.kanji;
  if (kanjiCriteria.pronunciation)
    url = url + "pronunciation=" + kanjiCriteria.pronunciation;
  if (kanjiCriteria.meaning) url = url + "meaning=" + kanjiCriteria.meaning;
  if (kanjiCriteria.strokeNumber)
    url = url + "strokeNumber=" + kanjiCriteria.strokeNumber;
  if (kanjiCriteria.minStrokeNumber)
    url = url + "minStrokeNumber=" + kanjiCriteria.minStrokeNumber;
  if (kanjiCriteria.maxStrokeNumber)
    url = url + "maxStrokeNumber=" + kanjiCriteria.maxStrokeNumber;
  if (kanjiCriteria.radicals) url = url + "radicals=" + kanjiCriteria.radicals;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        const result = response.json();
        if (result) return result;
        else return {};
      }
      if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = response.text();
        throw new Error(error);
      }
      throw new Error("Network response was not ok.");
    })
    .catch(handleError);
}
