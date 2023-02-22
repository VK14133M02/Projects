document.getElementById("add_product").addEventListener("click", pumaProduct);

let productArr = JSON.parse(localStorage.getItem("puma")) || [];

function pumaProduct() {
  const product = {
    type: document.getElementById("type").value,
    desc: document.getElementById("desc").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
  };

  productArr.push(product);

  console.log(productArr);
  localStorage.setItem("puma", JSON.stringify(productArr));
}
