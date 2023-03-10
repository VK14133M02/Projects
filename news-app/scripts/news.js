const details = JSON.parse(localStorage.getItem("user"));

const appendData = ({ img, name, email, country } = details) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.setAttribute("src", img);
  let Name = document.createElement("h3");
  Name.innerText = `Name : ${name}`;
  let Email = document.createElement("p");
  Email.innerText = `Email : ${email}`;
  let Country = document.createElement("h4");
  Country.innerText = `Country : ${country}`;

  div.append(image, Name, Email, Country);
  document.getElementById("sidebar").append(div);
};

appendData(details);
