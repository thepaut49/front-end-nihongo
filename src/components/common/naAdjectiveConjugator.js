import verbConstants from "./verbConstants";

export function naForm(adjective) {
  return adjective + "な";
}

export function presentIndicative(adjective, form, sign) {
  if (form === verbConstants.PLAIN_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "だ";
    } else {
      return "じゃない";
    }
  } else if (form === verbConstants.POLITE_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "です";
    } else {
      return "じゃないです/ではないです";
    }
  }
}

export function pastIndicative(verb, form, sign) {
  if (form === verbConstants.PLAIN_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "だった";
    } else {
      return "じゃなかった";
    }
  } else if (form === verbConstants.POLITE_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "でした";
    } else {
      return "じゃなかったです/ではなかったです";
    }
  }
}
