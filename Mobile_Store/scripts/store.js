let mobile_store = JSON.parse(localStorage.getItem("store")) || [];

const appendMobile = (mobile_store) => {
  document.getElementById("mobile_list").innerHTML = "";
  mobile_store.map(({ brand, name, price, image }, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", image);
    let Brand = document.createElement("h4");
    Brand.innerText = brand;
    let Price = document.createElement("h4");
    Price.innerText = price;
    let Name = document.createElement("h3");
    Name.innerText = name;

    let remove = document.createElement("button");
    remove.innerText = "Remove Product";
    remove.addEventListener("click", () => {
      removeMobile(index);
    });

    div.append(img, Brand, Name, Price, remove);

    document.getElementById("mobile_list").append(div);
  });
};

appendMobile(mobile_store);

document.getElementById("sort_lth").addEventListener("click", sortLtH);

function sortLtH() {
  document.getElementById("mobile_list").innerHTML = "";
  mobile_store.sort((a, b) => {
    return a.price - b.price;
  });
  appendMobile(mobile_store);
}

document.getElementById("sort_htl").addEventListener("click", sortHtL);

function sortHtL() {
  document.getElementById("mobile_list").innerHTML = "";
  mobile_store.sort((a, b) => {
    return b.price - a.price;
  });
  appendMobile(mobile_store);
}

document
  .getElementById("select_filter")
  .addEventListener("change", filterByBrand);

function filterByBrand() {
  document.getElementById("mobile_list").innerHTML = "";
  const brand = document.getElementById("select_filter").value;
  if (brand === "") {
    appendMobile(mobile_store);
  } else {
    let fitered_brand = mobile_store.filter((ele) => {
      return ele.brand === brand;
    });
    appendMobile(fitered_brand);
  }
}

const removeMobile = (index) => {
  mobile_store.splice(index, 1);
  localStorage.setItem("store", JSON.stringify(mobile_store));
  appendMobile(mobile_store);
};
