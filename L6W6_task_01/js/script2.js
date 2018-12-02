const URL = "https://test-users-api.herokuapp.com/users/"; 

const btnXmlh = document.querySelector("#btn-xmlh"),
      btnAsync = document.querySelector("#btn-async"),
      faq = document.querySelector(".button__faq"),
      userCreate = document.querySelector(".button__create"),
      //btnEdit = document.querySelector("#btn-edit"),
      cardBox = document.getElementsByClassName("main__cardBox"),
      swipe = document.querySelector(".button__swipe");

//  |---------------------------|
//  |    Users cards creator    |
//  |---------------------------|

const renderUsers = users => {
    const cardBox = document.querySelector("#card-box")
    cardBox.innerHTML = "";
    _.each(users['data'], value => {
        const userField = document.createElement('div'),
              userImg = document.createElement('img'),
              cardBody = document.createElement('div'),
              userName = document.createElement('h5'),
              userAge = document.createElement('p'),
              btnEdit = document.createElement('button');
              btnDel = document.createElement('button');

        userName.textContent = 'Name: '+value.name;
        userAge.textContent = 'Age: '+value.age;
        
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

        cardBox.prepend(userField);
        
        
        userField.appendChild(userImg);
        userField.appendChild(cardBody);
        cardBody.appendChild(userName);
        cardBody.appendChild(userAge);
        cardBody.appendChild(btnEdit);
        cardBody.appendChild(btnDel);

    })
}


userCreate.addEventListener('click', () =>{
    const modal = document.querySelector(".modal-content");
    modal.style.width = "15vw";
})
//  |---------------------------|
//  |     Delete the cards      |
//  |---------------------------|
swipe.addEventListener('click', () =>{
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
        if (request.readyState == 4 && request.status ==  200) { 
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
        debugger
        const users = await request();
        
        renderUsers(users);
            //setSinglContent(users)
    } catch (err) {
        alert(`Get Users: ${err}`);
    }
})

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




$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


//  |---------------------------|
//  |      Bootstrap tooltip    |
//  |---------------------------|

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })