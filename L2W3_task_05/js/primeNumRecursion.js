// Ф-ція рекурсії для простих чисел
const primeRecursion = num => {
    if ( num == 2 || num == 3 || num == 5 || num == 7) {
        return num;
    } else if (num % 2 === 0) {
        num = primeRecursion (num / 2); 
    } else if (num % 3) {    
        num = primeRecursion (num / 3);
    } else if (anum % 5 ) {
        num = primeRecursion (num / 5);
    } else if (anum % 7 ) {
        num = primeRecursion (num / 7);
    }   
    return num;
}
document.write(primeRecursion(10));

