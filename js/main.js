var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('pass');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');
var signUpBtn = document.getElementById('signUpBtn');
var header = document.getElementById('head');
var welcomeSection = document.getElementById('welcome');
var loginSection = document.getElementById('loginSec');
var welcomeHeader = document.getElementById('welcomeHeader');
var allUsers = JSON.parse(localStorage.getItem('users'));
var currentUser;



//LogIn
loginBtn.addEventListener('click',function(){
    var oldMsg = document.querySelector('.login-msg');
    if (oldMsg) oldMsg.remove();

    var existFlag=false;
    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].email == userEmail.value && allUsers[i].password == userPassword.value){
        existFlag=true;
        currentUser=allUsers[i];
        break;
    }
    }

    if (userEmail.value === '' || userPassword.value === '') {
        console.log('login failed');

        var div = document.createElement('div');
        div.classList.add('login-msg'); 
        div.textContent = 'All inputs are required';
        div.style.color = "red";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
    } 
    else if(existFlag==false){
        console.log('login failed');

        var div = document.createElement('div');
        div.classList.add('login-msg'); 
        div.textContent = 'incorrect email or password';
        div.style.color = "red";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
    }
    else{
        console.log('login Successfully');
        header.classList.replace('d-none','d-block');
        welcomeSection.classList.replace('d-none','d-block');
        loginSection.classList.replace('d-block','d-none');
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        welcomeHeader.innerHTML = `Welcome, ${currentUser.name}!`;
    }
});


//signOut
logoutBtn.addEventListener('click',function(){
        console.log('LogOut Successfully');
        header.classList.replace('d-block','d-none');
        welcomeSection.classList.replace('d-block','d-none');
        loginSection.classList.replace('d-none','d-block');
        userEmail.value=null;
        userPassword.value=null;
        localStorage.removeItem('currentUser');

    });