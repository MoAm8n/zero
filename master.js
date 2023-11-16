// onclick
let toggleMenu = () =>
document.body.classList.toggle('open');

let toggleA = () =>
document.body.classList.toggle('opens');

let toggleAa = () =>
document.body.classList.toggle('opens2')

let img = document.getElementById('img');
window.onscroll = function(){   
  let value = scrollY;
  img.style.left = value * 2 +'px';
}

// eyeIcon
let passwordInput = document.querySelector('.password input');
let eyeIcon = document.querySelector('.password i');
eyeIcon.addEventListener("click" , function(){
  if(passwordInput.type === "text"){
    passwordInput.setAttribute('type' , 'password');
    eyeIcon.classList.add('fa-eye');
    eyeIcon.classList.remove('fa-eye-slash');
  }else{
    passwordInput.setAttribute('type' , 'text');
    eyeIcon.classList.add('fa-eye-slash');
    eyeIcon.classList.remove('fa-eye');
  }
});

// localStorage
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let button = document.getElementById('button');
let dataPro;
if(localStorage.name !=null){
  dataPro = JSON.parse(localStorage.name);
}else{
  dataPro = [];
}

button.onclick = function(){
  let NewData = {
    email:email.value,
    pass:pass.value
  }
  dataPro.push(NewData);
window.localStorage.setItem('name' , JSON.stringify(dataPro));
}


