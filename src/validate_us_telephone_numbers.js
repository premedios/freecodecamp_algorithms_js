exports.telephoneCheck = function (str) {
  // Good luck!
  //return str.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/g) !== null;
  return str.match(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g) !== null;
}

