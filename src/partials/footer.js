const footerForm = document.querySelector(".form");
const footerFormInput = document.querySelector(".form__input");

footerForm.addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem("email", footerFormInput.value);
  footerFormInput.value = " ";
});
