let input = (count) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!count) {
          reject();
            return console.log("Невірне введення");
        } else {
          resolve();
            console.log('Зараз викликатиметься 2й Promise');
        }
      }, count*50);
    });
  };
  
  let timerOk = (count) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!count) {
          reject();
            return console.log("Невірне введення");
        } else {
          resolve();
            console.log("Наступне повідомлення буде надруковано через "+count+"сек" );
        }
      }, 1500);
      setTimeout(() => {
        console.log("Ось це повідомлення!")
      }, count * 1000); 
    });
    return promise;
  };
  
  input(10)
  .then (() => {
      return timerOk(10)
  })