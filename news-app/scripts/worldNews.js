const base_url = "https://newsapi.org/v2/top-headlines";

const key = "53d1eb58481b4e7ea9a375db7919134b";

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

const getNewsByUserCountry = async () => {
  let country = details.country;
  try {
    let res = await fetch(`${base_url}?country=${country}&apiKey=${key}`);
    let data = await res.json();
    appendNews(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

getNewsByUserCountry();

const appendNews = (data) => {
  data.articles.forEach(
    ({ author, title, content, description, urlToImage }) => {
      let div = document.createElement("div");
      div.addEventListener("click", () => {
        newsInDetails(author, title, content, description, urlToImage);
      });
      div.style.border = "1px solid green";
      div.style.cursor = "pointer";
      div.style.margin = "20px";
      div.style.padding = "20px";
      let Author = document.createElement("h3");
      Author.innerText = `Author : ${author}`;
      let Title = document.createElement("p");
      Title.innerText = `Title : ${title}`;
      div.append(Author, Title);
      document.getElementById("news").append(div);
    }
  );
};

document.getElementById("search").addEventListener("keypress", enter);

async function enter(e) {
  let conpaney = document.getElementById("search").value;
  if (e.keyCode === 13) {
    document.getElementById("news").innerHTML = "";
    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${conpaney}&apiKey=${key}`
      );
      let data = await res.json();
      appendNews(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

document.getElementById("select").addEventListener("change", selectCountry);

async function selectCountry() {
  document.getElementById("news").innerHTML = "";
  const country = document.getElementById("select").value;
  if (country == "") {
  }
  try {
    let res = await fetch(`${base_url}?country=${country}&apiKey=${key}`);
    let data = await res.json();
    appendNews(data);
    console.log(data.articles);
    return data;
  } catch (err) {
    console.log(err);
  }
}

const newsInDetails = (author, title, content, description, urlToImage) => {
  let detailNews = { author, title, content, description, urlToImage };
  localStorage.setItem("news", JSON.stringify(detailNews));
  window.location.href = "../news.html";
};
