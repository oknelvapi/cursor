// Описать функцию конструктор для автосалона.
// Mark(Toyota), Volume(2.5L), Price(30000$), Year(2016),
// getTax() -> (price * 0.2) + (0.01 * 2.5 * price);
// getDiscount -> (currentYear - year) * 0.1 * price;

  
// Function-constructor for car salon  
     
function Сatalog(mark, volume, price, year) {
    this.mark = mark;
    this.volume = volume;
    this.price = price;
    this.year = year;
}
Сatalog.prototype.getTax = function () {
    return  ((parseInt(this.price) * 0.2)+(0.01*parseFloat(this.volume)*parseFloat(this.price)));
}
Сatalog.prototype.getDiscount = function () {
      return ((2018-this.year)*0.1*parseInt(this.price));
}

const lot1 = new Сatalog("Toyota", "2.5L", "3000$", 2016);

console.log(`*********** ${lot1.mark} ***********`)
console.log("getTax is: ", lot1.getTax());
console.log("getDiscount is: ", lot1.getDiscount());