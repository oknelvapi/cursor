
// btn1 - пульсуюча кнопка

// мій план роботи:
// 1. Створити квадратний блок й заокруглити його до кола;
// 2. Зпозиціонувати його відносно кнопки;
// 3. Надати ефект пульсації;
// 4. Цей ефет прив'язати до області кліка мишкою.
//  4.1. Обчислити координати моменту кліку
//  4.2. Задаємо свої розміри для позиціонування заокругленого квадрату (яке стало колом);
//  4.3. В момент кліка мишкою - коло з'являється і збільшується до заданого розміру, після чого зникає.

const btn1 = document.querySelector('#btn1');

//forEach = Array.prototype.forEach;
// Array.prototype.forEach.call(btn1, (b) => {
//     b.addEventListener('click', createRipple); 
// });
const createRipple = (e) => {
    if (btn1.getElementsByClassName('pulse').length > 0) { 
        btn1.removeChild(btn1.childNodes[1]); 
    }    
    const addDiv = document.createElement('div');
    btn1.appendChild(addDiv);

    
    const diameter = Math.max(btn1.clientWidth, btn1.clientHeight);
    const rect = btn1.getBoundingClientRect();
    addDiv.style.width = addDiv.style.height = diameter + 'px';
    addDiv.style.left = e.clientX - rect.left - diameter / 2 + 'px';
    addDiv.style.top = e.clientY - rect.top - diameter / 2 + 'px';
    addDiv.className = 'pulse';
    // 2й варіант того, як видаляти елементи:
    // setTimeout(() =>{   
    //     btn1.removeChild(addDiv); 
    // },1000);
    
}
btn1.addEventListener('click', createRipple);

//3й варіант як видаляти дівки, недороблений:
// btn1.addEventListener('mouseout', () =>{  
//     let div = document.querySelector('.pulse')
//     btn1.removeChild(div);
// })