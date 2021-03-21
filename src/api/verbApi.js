import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/verbs/";

export function getVerbs() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getMostUsedVerbs(quantity) {
  return fetch(baseUrl + "findMostUsedVerbs/" + quantity)
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

export function getVerbByCharacter(neutralForm) {
  return fetch(baseUrl + "findByNeutralForm/" + neutralForm)
    .then(handleResponse)
    .catch(handleError);
}

export function saveVerb(Verb) {
  const method = Verb.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + Verb.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...Verb,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteVerb(VerbId) {
  return fetch(baseUrl + VerbId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}

export function filterVerbs(verbCriteria) {
  let url = baseUrl + "findWithCriteria?";
  let numberOfParameters = 0;
  if (verbCriteria.neutralForm) {
    url = url + "neutralForm=" + verbCriteria.neutralForm;
    numberOfParameters++;
  }
  if (verbCriteria.pronunciation) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "pronunciation=" + verbCriteria.pronunciation;
    } else {
      url = url + "&pronunciation=" + verbCriteria.pronunciation;
    }
  }

  if (verbCriteria.meaning) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "meaning=" + verbCriteria.meaning;
    } else {
      url = url + "&meaning=" + verbCriteria.meaning;
    }
  }

  if (verbCriteria.groupe) {
    numberOfParameters++;
    if (numberOfParameters === 0) {
      url = url + "groupe=" + verbCriteria.groupe;
    } else {
      url = url + "&groupe=" + verbCriteria.groupe;
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
