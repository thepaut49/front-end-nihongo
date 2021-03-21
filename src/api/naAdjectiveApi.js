import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/naAdjectives/";

export function getNaAdjectives() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedNaAdjectives(quantity) {
  return fetch(baseUrl + "findMostUsedNaAdjectives/" + quantity)
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

export function getNaAdjectiveByKanjis(kanjis) {
  return fetch(baseUrl + "findByKanjis/" + kanjis)
    .then(handleResponse)
    .catch(handleError);
}

export function saveNaAdjective(naAdjective) {
  const method = naAdjective.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + naAdjective.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...naAdjective,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteNaAdjective(naAdjectiveId) {
  return fetch(baseUrl + naAdjectiveId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterNaAdjectives(naAdjectiveCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (naAdjectiveCriteria.kanjis) {
    url = url + "kanjis=" + naAdjectiveCriteria.kanjis;
    numberOfParameters++;
  }
  if (naAdjectiveCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + naAdjectiveCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + naAdjectiveCriteria.pronunciation;
    }
  }

  if (naAdjectiveCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + naAdjectiveCriteria.meaning;
    } else {
      url = url + "&meaning=" + naAdjectiveCriteria.meaning;
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
