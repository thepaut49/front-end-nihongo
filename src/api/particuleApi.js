import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/particules/";

export function getParticules() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getParticuleByKanjis(kanjis) {
  return fetch(baseUrl + "findByKanjis/" + kanjis)
    .then(handleResponse)
    .catch(handleError);
}

export function saveParticule(particule) {
  const method = particule.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + particule.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...particule,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteParticule(particuleId) {
  return fetch(baseUrl + particuleId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}
