// On clicking remove button the item should be removed from DOM as well as localstorage.
const product = JSON.parse(localStorage.getItem("product")) || [];

const appendData = (product) => {
  document.getElementById("product").innerHTML = "";
  product.forEach(({ image, category, price }, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", image);
    let Category = document.createElement("h3");
    Category.innerText = category;
    let Price = document.createElement("price");
    Price.innerText = price;
    let button = document.createElement("button");
    button.innerText = "Remove Product";
    button.addEventListener("click", () => {
      removeFunction(index);
    });
    div.append(img, Category, Price, button);
    document.getElementById("product").append(div);
  });
};

appendData(product);

const removeFunction = (index) => {
  product.splice(index, 1);
  localStorage.setItem("product", JSON.stringify(product));
  appendData(product);
  window.location.reload();
};

let total = product.reduce((sum, { price }) => {
  return sum + price;
}, 0);

document.getElementById(
  "total-div"
).innerHTML = `Total cart Price : $ ${total}`;
