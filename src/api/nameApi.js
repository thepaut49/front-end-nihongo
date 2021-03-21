import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/names/";

export function getNames() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedNames(quantity) {
  return fetch(baseUrl + "findMostUsedNames/" + quantity)
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

export function getNameByKanjis(kanjis) {
  return fetch(baseUrl + "findByKanjis/" + kanjis)
    .then(handleResponse)
    .catch(handleError);
}

export function saveName(name) {
  const method = name.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + name.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...name,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteName(nameId) {
  return fetch(baseUrl + nameId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterNames(nameCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (nameCriteria.kanjis) {
    url = url + "kanjis=" + nameCriteria.kanjis;
    numberOfParameters++;
  }
  if (nameCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + nameCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + nameCriteria.pronunciation;
    }
  }

  if (nameCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + nameCriteria.meaning;
    } else {
      url = url + "&meaning=" + nameCriteria.meaning;
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
