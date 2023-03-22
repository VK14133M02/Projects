// Add the coffee to local storage with key "coffee"

const getCoffee = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(data);
    appendData(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

getCoffee();

const appendData = (data) => {
  data.forEach(({ image, category, price }) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", image);
    let Category = document.createElement("h3");
    Category.innerText = category;
    let Price = document.createElement("price");
    Price.innerText = price;
    let button = document.createElement("button");
    button.innerText = "Add to Bucket";
    button.addEventListener("click", () => {
      bucketFunction(image, category, price);
    });
    div.append(img, Category, Price, button);
    document.getElementById("product").append(div);
  });
};

const product = JSON.parse(localStorage.getItem("product")) || [];

document.getElementById("cart").innerHTML = product.length;

const bucketFunction = (image, category, price) => {
  const payload = {
    image,
    category,
    price,
  };
  product.push(payload);
  localStorage.setItem("product", JSON.stringify(product));
  window.location.reload();
};
