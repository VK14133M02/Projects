let url = "https://database-json-server.vercel.app";

let data = [];

let getHotel = async (city) => {
  let res = await fetch(`${url}/${city}`);
  data = await res.json();
  return data;
};

let search = async () => {
  let city = document.getElementById("query").value;

  data = await getHotel(city);

  appendHotel(data);
};

let enter = (e) => {
  if (e.keyCode === 13) {
    search();
  }
};

let appendHotel = (data) => {
  document.getElementById("hotels_list").innerHTML = "";
  data.forEach(({ image, location, price, rating, status, title }) => {
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
    let book = document.createElement("button");
    book.innerText = "Book Now";
    book.addEventListener("click", () => {
      bookOnline(image, location, price, rating, status, title);
    });

    div.append(img, name, city, Rating, Price, Status, book);

    document.getElementById("hotels_list").append(div);
  });
};

function price_low_to_high() {
  document.getElementById("hotels_list").innerHTML = "";
  data.sort((a, b) => {
    return a.price - b.price;
  });
  appendHotel(data);
}

function price_high_to_low() {
  document.getElementById("hotels_list").innerHTML = "";
  data.sort((a, b) => {
    return b.price - a.price;
  });
  appendHotel(data);
}

function excillentHotel() {
  document.getElementById("hotels_list").innerHTML = "";
  let excillent_hotel = data.filter((ele) => {
    return ele.status === "Excellent";
  });
  appendHotel(excillent_hotel);
}

function veryGoodHotel() {
  document.getElementById("hotels_list").innerHTML = "";
  let very_good_hotel = data.filter((ele) => {
    return ele.status === "Very Good";
  });
  appendHotel(very_good_hotel);
}

const bookOnline = (image, location, price, rating, status, title) => {
  let hotelDetails = { image, location, price, rating, status, title };
  let login = localStorage.getItem("login");
  if (!login) {
    alert("Login to continue");
  } else {
    localStorage.setItem("hotel", JSON.stringify(hotelDetails));
    window.location.href = "checkout.html";
  }
};
