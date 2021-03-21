import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/kanjis/";

export function getKanjis() {
  debugger;
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedKanjis(quantity) {
  return fetch(baseUrl + "findMostUsedKanji/" + quantity)
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

export function getKanjiByCharacter(character) {
  return fetch(baseUrl + "findByKanji/" + character)
    .then(handleResponse)
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
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterKanjis(kanjiCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (kanjiCriteria.kanji) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "kanji=" + kanjiCriteria.kanji;
    } else {
      url = url + "&kanji=" + kanjiCriteria.kanji;
    }
  }

  if (kanjiCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + kanjiCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + kanjiCriteria.pronunciation;
    }
  }

  if (kanjiCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + kanjiCriteria.meaning;
    } else {
      url = url + "&meaning=" + kanjiCriteria.meaning;
    }
  }

  if (kanjiCriteria.strokeNumber) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "strokeNumber=" + kanjiCriteria.strokeNumber;
    } else {
      url = url + "&strokeNumber=" + kanjiCriteria.strokeNumber;
    }
  }

  if (kanjiCriteria.minStrokeNumber) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "minStrokeNumber=" + kanjiCriteria.minStrokeNumber;
    } else {
      url = url + "&minStrokeNumber=" + kanjiCriteria.minStrokeNumber;
    }
  }

  if (kanjiCriteria.maxStrokeNumber) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "maxStrokeNumber=" + kanjiCriteria.maxStrokeNumber;
    } else {
      url = url + "maxStrokeNumber=" + kanjiCriteria.maxStrokeNumber;
    }
  }

  if (kanjiCriteria.radicals) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "radicals=" + kanjiCriteria.radicals;
    } else {
      url = url + "&radicals=" + kanjiCriteria.radicals;
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
