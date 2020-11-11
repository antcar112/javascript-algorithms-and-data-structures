const { swap } = require('./helpers.js')

const selectionSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, i, min)
    }
  }

  return arr
}

module.exports = selectionSort
