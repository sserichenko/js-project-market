const server = window.location.origin;
const serverURL =
      window.location.hostname.indexOf('localhost') !== -1
        ? 'https://nike-market.herokuapp.com'
        : server;

const navigationLinks = document.querySelector("#insert-before");
const loginButton = document.querySelector("#myBtn");
const linkProductAdmin = `
  <li class="site-navigation__item" id='admin'>
  <a href="admin-products.html" id="myBtn" class="site-navigation__link">Admin</a>
  </li>
`;

isAuthorization();

function isAuthorization() {
  if (localStorage.getItem("token")) {
    checkToken();
    if ((loginButton.textContent = "Log Out")) {
      loginButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        document.location.href = "index.html";
      });
    }
  }
}

function checkToken() {
  const token = localStorage.getItem("token");

  fetch(`${serverURL}/api/auth/current`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        navigationLinks.insertAdjacentHTML("beforebegin", linkProductAdmin);
        loginButton.textContent = "Log Out";
      }
    });
}
