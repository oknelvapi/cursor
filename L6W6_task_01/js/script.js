const URL = "https://test-users-api.herokuapp.com/users/";

const btnXmlh = document.querySelector("#btn-xmlh"),
    btnAsync = document.querySelector("#btn-async"),
    faq = document.querySelector(".button__faq"),
    userCreate = document.querySelector(".button__create"),
    btnSave = document.querySelector("#btnSave"),
    cardBox = document.getElementsByClassName("main__cardBox"),
    swipe = document.querySelector(".button__swipe");


//  |---------------------------|
//  |    Users cards creator    |
//  |---------------------------|
const renderUsers = users => {
    const cardBox = document.querySelector("#card-box")
    cardBox.innerHTML = "";
    _.each(users['data'], value => {
        renderOneUser(value);
    })
}

//  |---------------------------|
//  |  Singl user card creator  |
//  |---------------------------|
const renderOneUser = (value) => {
    const cardBox = document.querySelector("#card-box")
    const userField = document.createElement('div'),
        userImg = document.createElement('img'),
        cardBody = document.createElement('div'),
        userName = document.createElement('h5'),
        userAge = document.createElement('p'),
        btnEdit = document.createElement('button'),
        btnDel = document.createElement('button');

    userName.textContent = `Name: ${value.name}`;
    userAge.textContent = `Age: ${value.age}`;

    userField.className = "card";
    userImg.className = "card-img-top";
    cardBody.className = "card-body";
    userName.className = "card-title";
    btnEdit.className = "btn btn-primary"
    btnDel.className = "btn del btn-primary"

    userImg.setAttribute('src', 'img/man.svg');
    userImg.setAttribute('alt', 'User image');
    btnEdit.innerText = 'Edit';
    btnDel.innerText = 'Delete';

    btnEdit.setAttribute('data-toggle', 'modal'),
        btnEdit.setAttribute('data-target', '#editModal');

    cardBox.prepend(userField);

    userField.appendChild(userImg);
    userField.appendChild(cardBody);
    cardBody.appendChild(userName);
    cardBody.appendChild(userAge);
    cardBody.appendChild(btnEdit);
    cardBody.appendChild(btnDel);

    btnDel.addEventListener('click', delUser.bind(userField, value.id));
    btnEdit.addEventListener('click', getId.bind(userField, value.id));
}

//  |---------------------------|
//  |      Add a new user       |
//  |---------------------------|
const addUser = async () => {
    try {
        const uname = document.querySelector("#modal-name").value,
            uage = document.querySelector("#modal-age").value;
        const userResponse = await request('.', 'POST', {
            name: uname,
            age: uage
        });
        renderOneUser(userResponse.data);
    } catch (err) {
        alert(err);
    }
}

document.querySelector("#add-User").addEventListener("click", addUser);

//  |---------------------------|
//  |    Delete a singl user    |
//  |---------------------------|
const delUser = async function (id) {
    try {
        await request(`${id}`, 'DELETE')
        this.remove();
    } catch (err) {
        alert(err);
    }
}


//  |---------------------------|
//  |      Edit a singl user    |
//  |---------------------------|

const getId = async function (id) {
    try {
        btnSave.onclick = await

        function () {
            const uname = document.querySelector("#modal-name2").value;
            const uage = document.querySelector("#modal-age2").value;
            request(`${id}`, 'PUT', {
                name: uname,
                age: uage
            });
        };
        //await request();
    } catch (err) {
        alert(err);
    }
}

//  |---------------------------|
//  |  Modal windows settings   |
//  |---------------------------|
userCreate.addEventListener('click', () => {
    const modal = document.querySelector("#modalBox");
    modal.style.width = "15vw";
})

//  |---------------------------|
//  |     Remove all cards      |
//  |---------------------------|
swipe.addEventListener('click', () => {
    const cardBox = document.querySelector("#card-box")
    cardBox.innerHTML = "";
})

//  |---------------------------|
//  |  XMLHttpRequest method    |
//  |---------------------------|
btnXmlh.addEventListener('click', () => {
    //cardBox.innerHTML = "";
    const request = new XMLHttpRequest();
    request.open('GET', URL, true);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            const users = request.response;
            renderUsers(users);
        }
    }
})

//  |---------------------------|
//  |         Fetch API         |
//  |---------------------------|
btnAsync.addEventListener('click', async () => {
    try {
        const users = await request();
        renderUsers(users);
    } catch (err) {
        alert(`Get Users: ${err}`);
    }
})

const request = (endpoint = '.', method = "GET", data = {}) => {
    const body = method === "GET" ? void 0 : JSON.stringify(data);
    return fetch(`${URL}${endpoint}`, {
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


//  |---------------------------|
//  |      Bootstrap modal      |
//  |---------------------------|
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
//  |---------------------------|
//  |      Bootstrap tooltip    |
//  |---------------------------|
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})