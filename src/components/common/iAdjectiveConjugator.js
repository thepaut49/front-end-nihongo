const PLAIN_FORM = "Plain";
const POLITE_FORM = "Polite";
const POSITIVE_SIGN = "Positive";

export function presentIndicative(adjective, form, sign) {
  if (form === PLAIN_FORM) {
    if (sign === POSITIVE_SIGN) {
      return "だ";
    } else {
      return "じゃない";
    }
  } else if (form === POLITE_FORM) {
    if (sign === POSITIVE_SIGN) {
      return "です";
    } else {
      return "じゃないです/ではないです";
    }
  }
}

export function pastIndicative(adjective, form, sign) {
  if (form === PLAIN_FORM) {
    if (sign === POSITIVE_SIGN) {
      return "だった";
    } else {
      return "じゃなかった";
    }
  } else if (form === POLITE_FORM) {
    if (sign === POSITIVE_SIGN) {
      return "でした";
    } else {
      return "じゃなかったです/ではなかったです";
    }
  }
}
