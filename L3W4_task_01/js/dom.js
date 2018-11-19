// Ця ф-ція підв'язуватиметься до кнопки ОК і створюватиме блоки:
function createNewChild() { 
    // пошук по id контейнеру wrapper і запис його до змінної:
    var wrapperDiv = document.getElementById('wrapper'); 
    // зчитуємо вказану користувачем в інпуті кількість блоків: 
    var count = parseInt(document.getElementById("counter").value); 
    // крутимо цикл, поки не створиться задана к-сть блоків:
    while (count){  
        // вмикаємо рандомайзер для пошуку кольору по rgb
        var r=Math.floor(Math.random() * (256)); 
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        // отримані значення записуємо до змінної color у вигляді #rgb
        var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
        // створюємо блоки - к-сть блоків == к-сті проходжень циклу
        var childDiv = document.createElement('div');
        wrapperDiv.appendChild(childDiv);
        // даємо блокам клас, текст всередині і колір;
        childDiv.className = "wrapper__insider";
        childDiv.innerHTML = "DIV №"+count;
        childDiv.style.backgroundColor = color;
        
        count--;
        // параметри блоків, бордери і відступи задамо в style.css
    }
}
// Ф-ція, що видалятиме створені блоки, підв'яжемо до кнопки reset:
function resetDivs() { 
    var myNode = document.getElementById("wrapper");
    // крутимо цикл, який знаходитиме блоки "поштучно":
    while (myNode.firstChild) { 
    // і поштучно їх видалятиме:
    myNode.removeChild(myNode.firstChild); 
    }
}