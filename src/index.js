exports.min = function min(array) {
  let res = 0
  if (array == undefined || array.length == 0) {
    return res
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i] < res) {
        res = array[i]
      }
    }
    return res
  }
}

exports.max = function max(array) {
  let res = 0
  if (array == undefined || array.length == 0) {
    return res
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i] > res) {
        res = array[i]
      }
    }
    return res
  }
}

exports.avg = function avg(array) {
  let res = 0
  if (array == undefined || array.length == 0) {
    return res
  } else {
    let sum = 0
    for (i = 0; i < array.length; i++) {
      sum += array[i]
    }
    res = sum / array.length
    return res
  }
}
