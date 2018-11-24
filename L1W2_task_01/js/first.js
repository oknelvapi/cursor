let corency = prompt ('Do you want excange:\n - USD > UAH (Press "1")\n - UAH > USD (Press "2")');
let amount = prompt ('What amount of money do you want to exchange?');
const val = 26; 

if (corency == 1 ) {
    alert ('You will receive '+(amount *= val)+ ' UAH');
}  else  if (corency == 2) {
    alert ('You will receive '+(amount *= 1/val).toFixed(2)+' USD');
}  else {
    alert ('You entered the wrong data :(');
}