/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.querySelector("form").addEventListener("submit", signup);

function signup(e) {
  e.preventDefault();
  let signupData = {
    img: document.getElementById("image").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
  };
  localStorage.setItem("user", JSON.stringify(signupData));
  console.log(signupData);
}
