import verbConstants from "./verbConstants";

export function presentIndicative(adjective, form, sign) {
  if (form === verbConstants.PLAIN_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "";
    } else {
      if (adjective.kanjis === "いい") {
        return "よくない";
      } else {
        return "くない";
      }
    }
  } else if (form === verbConstants.POLITE_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      return "です";
    } else {
      if (adjective.kanjis === "いい") {
        return "よくないです";
      } else {
        return "くないです";
      }
    }
  }
}

export function pastIndicative(adjective, form, sign) {
  if (form === verbConstants.PLAIN_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      if (adjective.kanjis === "いい") {
        return "よかった";
      } else {
        return "かった";
      }
    } else {
      if (adjective.kanjis === "いい") {
        return "よくなかった";
      } else {
        return "くなかった";
      }
    }
  } else if (form === verbConstants.POLITE_FORM) {
    if (sign === verbConstants.POSITIVE_SIGN) {
      if (adjective.kanjis === "いい") {
        return "よかったです";
      } else {
        return "かったです";
      }
    } else {
      if (adjective.kanjis === "いい") {
        return "よくなかったです";
      } else {
        return "くなかったです";
      }
    }
  }
}
