/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

document.querySelector("form").addEventListener("submit", handleForm);

let mobile_store = JSON.parse(localStorage.getItem("store")) || [];

function handleForm(e) {
  e.preventDefault();
  let product = {
    brand: document.getElementById("mobile_brand").value,
    name: document.getElementById("mobile_name").value,
    price: document.getElementById("mobile_price").value,
    image: document.getElementById("mobile_image").value,
  };
  mobile_store.push(product);
  localStorage.setItem("store", JSON.stringify(mobile_store));
  console.log(mobile_store);

  document.getElementById("mobile_brand").value = "";
  document.getElementById("mobile_name").value = "";
  document.getElementById("mobile_price").value = "";
  document.getElementById("mobile_image").value = "";
}
