exports.addTogether = function () {
  var arg1 = arguments[0];
  var arg2 = arguments[1];
  if (arguments.length === 1 && Number.isInteger(arg1)) {
    return function(y) {
      return addTogether(arg1, y);
    };
  } else {
    return Number.isInteger(arg1 + arg2) ? arg1 + arg2 : undefined;
  }
}
