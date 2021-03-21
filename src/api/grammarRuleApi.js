import { handleResponse, handleError } from "./apiUtils";
import { REACT_APP_API_URL } from "./apiConstants";
const baseUrl = REACT_APP_API_URL + "/grammarRules/";

export function getGrammarRules() {
  return fetch(baseUrl + "all")
    .then(handleResponse)
    .catch(handleError);
}

export function getGrammarRuleByTitle(title) {
  return fetch(baseUrl + "findByTitle/" + title)
    .then(handleResponse)
    .catch(handleError);
}

export function saveGrammarRule(grammarRule) {
  const method = grammarRule.id ? "PUT" : "POST"; // POST for create, PUT to update when id already exists.
  let url = baseUrl;
  if (method === "POST") {
    url = url + "create";
  } else {
    url = url + grammarRule.id;
  }
  return fetch(url, {
    method: method, // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...grammarRule,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGrammarRule(grammarRuleId) {
  return fetch(baseUrl + grammarRuleId, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text;
    })
    .catch(handleError);
}
