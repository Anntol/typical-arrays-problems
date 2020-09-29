
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < result) result = array[i];
    }
    return result;
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > result) result = array[i];
    }
    return result;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let sum = array.reduce((sum, current) => sum + current, 0);
    return sum / array.length;
  }
  return 0;
}
