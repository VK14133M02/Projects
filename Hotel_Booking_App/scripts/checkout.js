let hotel_details = JSON.parse(localStorage.getItem("hotel"));

let appendHotel = ({
  image,
  location,
  price,
  rating,
  status,
  title,
} = hotel_details) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", image);
  let name = document.createElement("h3");
  name.innerText = title;
  let city = document.createElement("p");
  city.innerText = location;
  let Rating = document.createElement("h4");
  Rating.innerText = rating;
  let Price = document.createElement("h4");
  Price.innerText = price;
  let Status = document.createElement("h5");
  Status.innerText = status;
  div.append(img, name, city, Rating, Price, Status);
  document.getElementById("hotels_list").append(div);
};

appendHotel(hotel_details);

document.querySelector("form").addEventListener("submit", formFunc);

function formFunc(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;

  setTimeout(() => {
    alert(`${name} Your Booking is Confirmed!`);
  }, 5000);
}
