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

    const startBtn = document.createElement('button');
    const pauseBtn = document.createElement('button');
    const resetBtn = document.createElement('button');

    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);
    
    main.className = "main";
    wrapper.insertBefore(main, null);

    timerBox.className = "main__timer";
    main.insertBefore(timerBox, null);

    navBox.className = "main__nav";
    main.insertBefore(navBox, main[1]);

    startBtn.className = "main__start";
    navBox.insertBefore(startBtn, null);
    pauseBtn.className = "main__pause";
    navBox.insertBefore(pauseBtn, navBox[1]);
    resetBtn.className = "main__reset";
    navBox.insertBefore(resetBtn, navBox[2]);
}

createDom();