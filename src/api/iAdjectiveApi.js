import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/iAdjectives/";

export function getIAdjectives() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedIAdjectives(quantity) {
  return fetch(baseUrl + "findMostUsedIAdjectives/" + quantity)
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

export function getIAdjectiveByKanjis(kanjis) {
  return fetch(baseUrl + "findByKanjis/" + kanjis)
    .then(handleResponse)
    .catch(handleError);
}

export function saveIAdjective(iAdjective) {
  const method = iAdjective.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + iAdjective.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...iAdjective,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteIAdjective(iAdjectiveId) {
  return fetch(baseUrl + iAdjectiveId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterIAdjectives(iAdjectiveCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (iAdjectiveCriteria.kanjis) {
    url = url + "kanjis=" + iAdjectiveCriteria.kanjis;
    numberOfParameters++;
  }
  if (iAdjectiveCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + iAdjectiveCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + iAdjectiveCriteria.pronunciation;
    }
  }

  if (iAdjectiveCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + iAdjectiveCriteria.meaning;
    } else {
      url = url + "&meaning=" + iAdjectiveCriteria.meaning;
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
