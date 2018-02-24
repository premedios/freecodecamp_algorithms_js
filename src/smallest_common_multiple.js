exports.smallestCommons = function (arr) {
  arr = arr.sort();
	var rangeArray = [];
	for (i = arr[0]; i <= arr[arr.length - 1]; i++) {
		rangeArray.push(i);
	}

  rangeArray = rangeArray.sort(function(a,b) {
    return b - a;
  });
  
	var running = 1;
	var leastCommonMultiple = 1;
	var i = 2;
	while (i !== rangeArray.length) {
		leastCommonMultiple = rangeArray[0] * running * rangeArray[1];
		for (i = 2; i < rangeArray.length; i++) {
			if (leastCommonMultiple % rangeArray[i] !== 0) {
				break;
			}
		}
		running++;
	}
	return leastCommonMultiple;
}
