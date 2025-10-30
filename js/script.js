var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('pass');
var signUpBtn = document.getElementById('signUpBtn');
var allUsers;
var emailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

if (localStorage.getItem('users')===null){
    allUsers=[];
}else{
    allUsers=JSON.parse(localStorage.getItem('users'));
}


//signUp
signUpBtn.addEventListener('click', function() {
    var oldMsg = document.querySelector('.signup-msg');
    if (oldMsg) oldMsg.remove();

    var existFlag=false;
    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].email == userEmail.value){
        existFlag=true;
        break;
    }
    }

    if (userName.value === '' || userEmail.value === '' || userPassword.value === '') {
        console.log('SignUp failed');

        var div = document.createElement('div');
        div.classList.add('signup-msg'); 
        div.textContent = 'All inputs are required';
        div.style.color = "red";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
    } else if(!emailRegex.test(userEmail.value)){
        console.log('SignUp failed');

        var div = document.createElement('div');
        div.classList.add('signup-msg'); 
        div.textContent = 'Email is invalid';
        div.style.color = "red";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
    }
    else if(existFlag){
        console.log('SignUp failed');

        var div = document.createElement('div');
        div.classList.add('signup-msg'); 
        div.textContent = 'Email is already exist';
        div.style.color = "red";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
    }
    else {
        console.log('SignUp Successfully');

        var div = document.createElement('div');
        div.classList.add('signup-msg');
        div.textContent = 'Success';
        div.style.color = "green";
        div.style.fontWeight = "bold";
        div.style.margin = "10px";
        div.style.textAlign = "center";

        userPassword.insertAdjacentElement("afterend", div);
        var user={
            name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        };
        allUsers.push(user);
        localStorage.setItem('users',JSON.stringify(allUsers));
    }
});

