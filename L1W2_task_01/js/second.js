function minMax (arr) {
  var maxNum = -Infinity;
  var minNum = Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= maxNum) {
      maxNum = arr[i];
    }
    if (arr[i] <= minNum) {
      minNum = arr[i];
    }
  }
  return ['max: '+maxNum,'\n'+'min: '+minNum];
  }
alert(minMax([ 5, 58, 995444, -852214 -89, 1, 56987]));
