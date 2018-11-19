// Таймер
// Создаст и поместит в DOM новый timer
    // start, reset(сбрасывает таймер в 0), pause(Останавливает счёт);
    // start – секундомер идет вперед (00:00, 00:01...)
    // reset – сбрасываем значения в 00:00
// pause – приостанавливаем время

function createDom() {
    const wrapper = document.createElement('div');
    const main = document.createElement('div');
    const timerBox = document.createElement('div');
    const navBox = document.createElement('div');
    const span = document.createElement('span');

    const start = document.createElement('button');
    const pause = document.createElement('button');
    const reset = document.createElement('button');

    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);
    
    main.className = "main";
    wrapper.appendChild(main);

    timerBox.className = "main__timer";
    main.appendChild(timerBox);

    span.className = "main__span";
    timerBox.appendChild(span);
    span.innerHTML = "00:00";

    navBox.className = "main__nav";
    main.appendChild(navBox);

    start.className = "main__start";
    navBox.appendChild(start);
    start.innerHTML = "start";

    pause.className = "main__pause";
    navBox.appendChild(pause);
    pause.innerHTML = "pause";

    reset.className = "main__reset";
    navBox.appendChild(reset);
    reset.innerHTML = "reset";
};

createDom();

var timer = document.querySelector(".main__timer");
     //debugger
     setInterval ( () => {
         timer = parseInt(timer.innerText.match(/\d$/)) +1;
     }, 1000)
//console.log(parseInt(timer));

    // function DomCreator (name, type, xclass, parent){
//     this.name = name;
//     this.type = type;
//     this.xclass = xclass;
//     this.parent = parent;
// }
// DomCreator.prototype.createElement = function() {
//     return this.name = document.createElement(this.type);
// }
// DomCreator.prototype.getClass = function() {
//     return this.name.className = this.xclass;
// }
// DomCreator.prototype.getClass = function() {
//     return this.parent.appendChild(this.name);
// }

// const wrapper = new DomCreator ('wrapper', 'div', 'wrapper', 'body');

// wrapper.createElement();
// wrapper.getClass();
// wrapper.getClass();

