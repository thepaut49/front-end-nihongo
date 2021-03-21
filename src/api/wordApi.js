import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/words/";

export function getWords() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedWords(quantity) {
  return fetch(baseUrl + "findMostUsedWords/" + quantity)
    .then((response) => {
      if (response.ok) {
        const result = response.json();
        if (result) return result;
        else return [];
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

export function getWordByKanjis(kanjis) {
  return fetch(baseUrl + "findByKanjis/" + kanjis)
    .then(handleResponse)
    .catch(handleError);
}

export function saveWord(word) {
  const method = word.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + word.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...word,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteWord(wordId) {
  return fetch(baseUrl + wordId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterWords(wordCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (wordCriteria.kanjis) {
    url = url + "kanjis=" + wordCriteria.kanjis;
    numberOfParameters++;
  }
  if (wordCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + wordCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + wordCriteria.pronunciation;
    }
  }

  if (wordCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + wordCriteria.meaning;
    } else {
      url = url + "&meaning=" + wordCriteria.meaning;
    }
  }

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

export function updateNumberOfUse(id) {
  return fetch(baseUrl + id, {
    method: "PATCH",
  })
    .then(handleResponse)
    .catch(handleError);
}
