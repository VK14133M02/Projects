document.querySelector("form").addEventListener("submit", handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  let adminDetails = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  let res = await fetch(`https://reqres.in/api/login`, {
    method: "POST",
    body: JSON.stringify(adminDetails),
    headers: {
      "Content-type": "application/json",
    },
  });

  let data = await res.json();
  localStorage.setItem("token", data.token);
  localStorage.setItem("admin", true);
  alert("Login sucesfully!");
  window.location.href = "./admin.html";
}
