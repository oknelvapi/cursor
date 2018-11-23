//  |---------------------------|
//  |  XMLHttpRequest method    |
//  |---------------------------|

window.onload = () => {
    document.querySelector('#btn1').onclick = function () {
        ajaxGet('https://test-users-api.herokuapp.com/users/');
    }
}

const ajaxGet = requestURL => {
    var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        if (request.readyState == 4 && request.status ==  200) { 
            // ставимо умову, при якій AJAX запит буде опрацьований лише тоді, коли сервер
            // пришле відповідь повністю та з кодом 200 (що все ОК)
            const users = request.response;
            // застосовуємо метод _.each з бібліотеки LoDash для перебирання об'єктів:
            // можна циклом for - буде працювати, але мені так захотілося :)
            _.each(users['data'], value => {
                const userField = document.createElement('ul');
                const userId = document.createElement('li');
                const userName = document.createElement('li');
                const userAge = document.createElement('li');
            
                userId.textContent = 'Id: '+value.id;
                userName.textContent = 'Name: '+value.name;
                userAge.textContent = 'Age: '+value.age;
                
                userField.className = "main__userField";
                main__sectionLeft.appendChild(userField);
            
                userField.appendChild(userId);
                userField.appendChild(userName);
                userField.appendChild(userAge);
            })
        }
    }
}


//  |---------------------------|
//  |     Async/await method    |
//  |---------------------------|

window.onload = () => {
    document.querySelector('#btn2').onclick = function () {
        ajaxGet('https://test-users-api.herokuapp.com/users/');
    }
}