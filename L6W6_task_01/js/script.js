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
                SectionLeft.appendChild(userField);
            
                userField.appendChild(userId);
                userField.appendChild(userName);
                userField.appendChild(userAge);
            })
        }
    }
}


//  |---------------------------|
//  |         Fetch API         |
//  |---------------------------|


const URL = "https://test-users-api.herokuapp.com/users/";

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", async () =>{
        try {
            const users = await request();
            //setContent(users);
            setSinglContent(users)
        } catch (err) {
            alert(`getUsers func: ${err}`);
        }
    
});
const request = (method = "GET", data = {}) => {
    const body = method === "GET" ? void 0 : JSON.stringify(data);
    return fetch(`${URL}`, {
        method,
        body,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then((res) => res.json())
    .catch((err) => {
        alert(`request func: ${err}`);
    });
};

const setContent = users => {
    
}
const setSinglContent = users => {
    const sectionRight = document.querySelector("#SectionRight"); 
        _.each(users['data'], value => {
        const userDiv = document.createElement("div");
        userDiv.className = "user";
            userDiv.innerHTML += 
            `
            <span>Name: ${value.name}</span> <br />
            <span>Age: ${value.age}</span> <br /> 
            `
        sectionRight.prepend(userDiv);
        })
    }



