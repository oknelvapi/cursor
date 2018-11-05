const wrapper = {
    input (count) {
        const promise = new Promise(function(resolve, reject){ 
        if (!count){
            reject();
            return console.log("Невірне введення");
        }
        setTimeout(() => {
        resolve();
            console.log('Зараз викликатиметься 2й Promise');    
        }, 1500)
        alert("Тисни ОК щоб почати!");
        });
        return promise;
    },
    timerOk (count) {
        const promise = new Promise(function(resolve, reject){ 
            if (!count){
            reject();
            return console.log("Невірне введення");
            } 
            setTimeout(() => {
   	            console.log("Наступне повідомлення буде надруковано через "
                             +count+"сек" )
            }, 1000)    
            // // розпочати повтори с інтервалом 1 сек
             const timerId = setInterval(function() {
               console.log("тік" );
             }, 1000);
            // // через 10 сек зупинити повтори:
             setTimeout(function() {
               clearInterval(timerId);
             }, 1000 * count);

             setTimeout(() => {
           	    console.log("Ось це повідомлення!")
             }, count * 1000) 
        });
        return promise;
    },
}   

wrapper.input(10)
.then (() => {
    return wrapper.timerOk(10)
})