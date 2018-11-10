function getAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    var result = [sum / arr.length];
    return result;
  }

alert('result = '+getAverage([ 5, -3, -1, 1, 0]));
alert('result = '+getAverage([1,4,2]));