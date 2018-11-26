const breackfast = {
  
    oatmeal (volume) {
      const promise = new Promise(function(resolve, reject){ 
        const timeForOatmeal = 10;
        if (!volume){
          reject();
          return console.log("Залишився голодним :(");
        }
        setTimeout(() => {
          resolve();
          console.log('Додано', volume,'гр вівсянки/мюслей');    
        }, timeForOatmeal * volume)
        console.log('Засипаю в миску вівсянку');
      });
      return promise;
    },
     
    yoghurt (volume) {
      const promise = new Promise(function(resolve, reject){
        const timeForYoghurt = 10;
        if (!volume){
          reject();
          return console.log("Вдавився сухою вівсянкою :(");
        }
        setTimeout(() => {
          resolve();
          console.log('Додано', volume,'мл йогурту');  
        }, timeForYoghurt * volume)
        console.log('Додаю до вівсянки йогурт');
      });
      return promise;    
    },
         
    addition (volume) {
      const promise = new Promise(function(resolve, reject){
        const timeForAddition = 7;
        if (!volume){
          reject();
          return console.log("Не смачно, залишився голодним :(");
        }
        setTimeout(() => {
          resolve();
          console.log('Додано', volume,'гр банану та журавлини');
        }, timeForAddition * volume)
        console.log('Додаю банан і журавлину');
      });
      return promise;
    },
        
    coffe (volume) {
      const promise = new Promise(function(resolve, reject){ 
        const timeForCofee = 10;
        if (!volume){
          reject();
          return console.log("Ранок без кави - зіпсований день");
        }
        setTimeout(() => {
          resolve();
          console.log('Зварено', volume,'мл кави');
        }, timeForCofee * volume)
        console.log('Заварюю каву в кавоварці');
      });
      return promise;
    },
                                     
    milk (volume) {
      const promise = new Promise(function(resolve, reject){
        const timeForMilk = 7;
        if (!volume){
          reject();
          return console.log("Кава без молока? Ні, це не дял мене!");
        }
        setTimeout(() => {
          resolve();
          console.log('Додано', volume,'мл молока в каву');
        }, timeForMilk * volume)
        console.log('Додаю трохи молока в каву');
      });
      return promise;
    },
      
    eating (oatmeal, yoghurt, ddition){
      const promise = new Promise(function(resolve, reject){ 
        if (oatmeal+yoghurt+ddition < 1000){
          reject();
          return console.log("Залишився голодним :(");
        }
        setTimeout(() => {
          resolve();
          console.log('Поснідав');    
        }, 3500)
  
        console.log('Починаю снідати');
      });
      return promise;
    }, 
    drinking (coffe, milk){
      const promise = new Promise(function(resolve, reject){ 
        if (coffe + milk < 350){
          reject();
          return console.log("Ранок без кави - зіпсований день");
        }
        setTimeout(() => {
          resolve();
          console.log('Попив каву!');    
        }, 3000)
  
        console.log('Починаю пити каву');
      });
      return promise;
    }, 
  }
  
  breackfast.oatmeal(350)
  .then(() => {
      return breackfast.yoghurt(400);
  })
  .then(() => {
      return breackfast.addition(200);
  })
  .then(() => {
      return breackfast.coffe(200);
  })
  .then (() => {
      return breackfast.eating();
  })
  .then (() => {
      return breackfast.drinking();
  })
  .catch((err) => { 
  })