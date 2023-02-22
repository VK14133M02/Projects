const product = JSON.parse(localStorage.getItem("puma"));

appendProduct(product);

function appendProduct(product) {
  document.getElementById("all_products").innerHTML = "";

  product.forEach((ele, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    let type = document.createElement("h3");
    type.innerText = ele.type;
    let desc = document.createElement("p");
    desc.innerText = ele.desc;
    let price = document.createElement("h4");
    price.innerText = ele.price;
    let remove = document.createElement("button");
    remove.innerText = "Remove Item";
    remove.addEventListener("click", () => {
      removeItem(ele, index);
    });
    div.append(img, type, desc, price, remove);
    document.getElementById("all_products").append(div);
  });
}

const removeItem = (ele, index) => {
  product.splice(index, 1);
  localStorage.setItem("puma", JSON.stringify(product));
  appendProduct(product);
};
