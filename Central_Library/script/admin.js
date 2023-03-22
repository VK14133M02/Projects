document.querySelector("form").addEventListener("submit", addBooks);

async function addBooks(e) {
  e.preventDefault();
  let bookDetails = {
    image_url: document.getElementById("image").value,
    book_name: document.getElementById("name").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    edition: document.getElementById("edition").value,
    publisher: document.getElementById("publisher").value,
    cost: document.getElementById("cost").value,
    borrowed: false,
  };

  let res = await fetch(`http://localhost:8080/books`, {
    method: "POST",
    body: JSON.stringify(bookDetails),
    headers: {
      "Content-type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
}

let data = [];

const getBook = async () => {
  let res = await fetch(`http://localhost:8080/books`);
  data = await res.json();
  console.log(data);
  appendBook(data);
};

getBook();

const appendBook = (data) => {
  data.forEach((ele, index) => {
    const { book_name, author, genre, edition, publisher, cost } = ele;

    let row = document.createElement("tr");
    let img = document.createElement("img");
    img.src = "../image/harry_potter.jpg";
    let name = document.createElement("td");
    name.innerText = book_name;
    let auth = document.createElement("td");
    auth.innerText = author;
    let genr = document.createElement("td");
    genr.innerText = genre;
    let editin = document.createElement("td");
    editin.innerText = edition;
    let publishr = document.createElement("td");
    publishr.innerText = publisher;
    let cst = document.createElement("td");
    cst.innerText = cost;
    let edit = document.createElement("td");
    edit.innerText = "Edit";
    edit.style.backgroundColor = "yellow";
    edit.style.cursor = "pointer";
    edit.addEventListener("click", () => {
      updateBook(ele);
    });
    let remove = document.createElement("td");
    remove.innerText = "Remove";
    remove.addEventListener("click", () => {
      removeBook(ele);
    });
    remove.style.backgroundColor = "red";
    remove.style.color = "white";
    remove.style.cursor = "pointer";

    row.append(img, name, auth, genr, editin, publishr, cst, edit, remove);

    document.querySelector("tbody").append(row);
  });
};

const removeBook = async (ele) => {
  await deleteBook(ele.id);
};

const deleteBook = async (id) => {
  let res = await fetch(`http://localhost:8080/books/${id}`, {
    method: "DELETE",
  });
  let data = await res.json();
};

const updateBook = async (ele) => {
  let value = window.prompt("Update New Price");
  let newCost = { cost: value };

  const { id } = ele;

  let res = await fetch(`http://localhost:8080/books/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newCost),
    headers: {
      "Content-type": "application/josn",
    },
  });

  let data = await res.json();
  console.log(data);
};

// const updateBook = (ele) => {
//   const { book_name, author, genre, edition, publisher, cost } = ele;

//   document.querySelector(".overly").classList.add("showOverly");
//   document.querySelector(".editForm").classList.add("openEditForm");

//   let div = document.createElement("div");

//   let updatedName = document.createElement("input");
//   updatedName.value = book_name;
//   updatedName.classList.add("updatedName");
//   let update = document.createElement("button");
//   update.innerText = "Update";
//   update.addEventListener("click", () => {
//     updateDetails(ele);
//   });

//   div.append(updatedName, update);
//   document.querySelector(".editForm").append(div);
// };

// const updateDetails = async (ele) => {
//   const { id } = ele;
//   let newName = document.querySelector(".updatedName").value;

//   let res = await fetch(`http://localhost:8080/books/${id}`, {
//     method: "PATCH",
//     body: newName,
//     headers: {
//       "Content-type": "application/json",
//     },
//   });

//   let data = await res.json();
//   console.log(data);
// };

//   document.getElementById("updatedName").value = book_name;
//   document.getElementById("updatedAuthor").value = author;
//   document.getElementById("updatedGenre").value = genre;
//   document.getElementById("updatedEdition").value = edition;
//   document.getElementById("updatedPublisher").value = publisher;
//   document.getElementById("updatedCost").value = cost;
//   let button = document.createElement("button");
//   button.innerText = "Update";

// const updateDetails = () =>{
//     let newDetals = {
//         book_name: document.getElementById("updatedName").value,
//     author: document.getElementById("updatedAuthor").value,
//     genre: document.getElementById("updatedGenre").value,
//     edition: document.getElementById("updatedEdition").value,
//     publisher: document.getElementById("updatedPublisher").value,
//     cost: document.getElementById("updatedCost").value,
//     }
// }
