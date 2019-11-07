import '../scss/main.scss';
import './page.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts');
});


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-modal")[0];
const cancelButton = document.querySelector(".cancelbtn");
const input = document.querySelector("#userName");
const output = document.querySelector("#userPassword");
const formContent = document.querySelector('.container__form')
const login = document.querySelector('#register')
const register = document.querySelector('userRegister')
let userRegistration = {};
console.dir(formContent)

//  const loginBtn = formContent.querySelector('#userLogin');

console.log(login);

input.addEventListener('input', e => {
  event.preventDefault();
  userRegistration.userName = e.target.value
})

output.addEventListener('input', e => {
  event.preventDefault();
  userRegistration.userPassword = e.target.value
  if (input.lengths <= 6){
    alert ('enter 7')
    return false;
  }
})
console.log(userRegistration);


register.addEventListener('click', e => {

})
// submit (register)
// fetch('http://localhost:3000/api/auth/signup', {
//     method: 'post',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({ email: 'test@mail.com', password: 'qwer4321' })
// }).then(res => res.json()).then(data => console.log('data', data));















// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

cancelButton.onclick = function(event) {
  if (event.target === cancelButton) {
    modal.style.display = "none";
  }
}



