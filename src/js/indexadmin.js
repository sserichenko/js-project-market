import { nbind } from "q";

// Get the modal
const modal = document.getElementById("isModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-modal")[0];
const cancelButton = document.querySelector(".cancelbtn");
const input = document.querySelector("#userName");
const output = document.querySelector("#userPassword");
const formContent = document.querySelector(".container__form");
const buttonLogin = document.querySelector("#userRegister");
const registerButton = document.getElementById("register");
const userLogin = document.getElementById("userLogin");
let userRegistration = {};

//  const loginBtn = formContent.querySelector('#userLogin');

// console.log(login);

// When the user clicks on the button, open the modal
btn.onclick = function() {
  if ((btn.textContent = "Log in")) {
    modal.style.display = "block";
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// When the user clicks cencel modal form close
cancelButton.onclick = function(event) {
  if (event.target === cancelButton) {
    modal.style.display = "none";
  }
};

input.addEventListener("input", e => {
  // event.preventDefault();
  userRegistration.email = e.target.value;
});

// input.addEventListener((inputOur) {
//   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(inputOur).toLowerCase())
// })

//   alert ('enter 7')
//   }else {userRegistration.password = e.target.value}
// })

output.addEventListener("input", e => {
  // event.preventDefault();
  // if (output.lengths <= 6) {
  //   alert("enter 7");
  // } else {
  userRegistration.password = e.target.value;
  // }
});
console.log(userRegistration);
console.log(output);

buttonLogin.addEventListener("click", e => {
  event.preventDefault();

  fetch("http://localhost:3000/api/auth/signup", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"
    },
    body: JSON.stringify(userRegistration)
  })
    .then(res => res.json())
    .then(data => console.log("data", data));

  modal.style.display = "none";
  output.value = "";
  input.value = "";

  userLogin.addEventListener("click", e => {
    event.preventDefault();
    modal.style.display = "none";
    output.value = "";
    input.value = "";
    fetch("http://localhost:3000/api/auth/signin", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"
      },
      body: JSON.stringify(userRegistration)
    })
      .then(res => res.json())
      .then(data => {
        //add token to localstorage. Don't delete
        if (localStorage.getItem("token")) {
          return;
        } else {
          localStorage.setItem("token", data.token);
          document.location.href = "admin-products.html";
        }
      });
  });
});
