document.querySelector("form").addEventListener("submit", handleForm);

let user = JSON.parse(localStorage.getItem("users")) || [];

function handleForm(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < user.length; i++) {
    if (user[i].email === email) {
      if (user[i].password === password) {
        localStorage.setItem("login", true);
        alert("Login Sucessfully!");
        window.location.href = "../index.html";
        return;
      } else {
        alert("wrong credentials!");
        return;
      }
    }
  }
  alert("user doesnot exist signup Please!");
}
