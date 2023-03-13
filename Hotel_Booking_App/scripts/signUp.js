document.querySelector("form").addEventListener("submit", handleForm);

let user = JSON.parse(localStorage.getItem("users")) || [];

function handleForm(e) {
  e.preventDefault();

  let details = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  for (let i = 0; i < user.length; i++) {
    if (user[i].email === details.email) {
      alert("User already exist!");
      return;
    }
  }

  if (details.name && details.email && details.password) {
    user.push(details);
    console.log(user);
    localStorage.setItem("users", JSON.stringify(user));
    alert("user has been registered");
    window.location.href = "../login.html";
  } else {
    alert("Fill all the details!");
  }
}
