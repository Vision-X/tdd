const bubble = array => {
  if(Array.isArray(array)) {
    for(let i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if(array[j] > array[i]) {
          [array[j], array[j+1]] = [array[j+1], array[j]]
        }
      }
    }
    return array
  } else {
    return `${array} is not an array.`
  }
}

export default bubble;
