// reduce expect callback function and initial value. Default initial value is 0
// polyfill should have the same name as an original method
Array.prototype.reduce = function (callback, initialValue = 0) {
         if (!Array.isArray(arr)) {
            throw new Error("The first parameter might be an array!");
         }
         if (typeof callback !== 'function') {
            throw new Error("The second parameter might be a function!");
         }
         let accumulator = initialValue;
         for (let i = 0; i < this.length; i++) {
                 // callback returns new value for accumulator
           accumulator = callback(accumulator, this[i]);
         }
         return accumulator;
     };
    
    var arr = [1,2,2,-20, 30]
    // reduce's callback accept two arguments: accumulator and current value
    console.log(arr.reduce(function(accumulator, value) {
        // here might be whatever you want to perform
        return accumulator + value;
    }, 0));