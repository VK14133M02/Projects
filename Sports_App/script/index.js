let page = 1;
let limit = 10;
let data = [];

const getPlayer = async () => {
  try {
    let name = document.getElementById("searchPlayer").value;
    let res = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${name}&page=${page}&per_page=${limit}`
    );
    data = await res.json();
    // console.log(data.data);
    appendPlayer(data.data);
  } catch (err) {
    console.log(err);
  }
};

getPlayer();

const appendPlayer = (data) => {
  data.forEach((ele, index) => {
    let { first_name, last_name, position } = ele;
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = `https://images.unsplash.com/photo-1589881787083-0fcfec1db918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`;

    let name = document.createElement("h3");
    name.innerText = `Name : ${first_name + " " + last_name}`;

    let Position = document.createElement("h4");
    Position.innerText = `Position ${position}`;

    let button = document.createElement("button");
    button.innerText = "TEAM DETAILS";
    button.addEventListener("click", () => {
      teamDetails(ele);
    });

    div.append(img, name, Position, button);

    document.getElementById("player").append(div);
  });
};

const teamDetails = (ele) => {
  console.log(ele);

  const { first_name, last_name, position, team } = ele;
  const { abbreviation, city, conference, division, full_name, name } = team;

  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = `https://images.unsplash.com/photo-1589881787083-0fcfec1db918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`;

  let Name = document.createElement("h3");
  Name.innerText = `Name : ${first_name + " " + last_name}`;

  let Position = document.createElement("h4");
  Position.innerText = `Position ${position}`;

  let h2 = document.createElement("h2");
  h2.innerText = "Team Details";

  let team_name = document.createElement("p");
  team_name.innerText = `Team : ${full_name}`;

  let abbr = document.createElement("p");
  abbr.innerText = `Abbreviation : ${abbreviation}`;
  let conf = document.createElement("p");
  conf.innerText = `Conference : ${conference}`;
  let Division = document.createElement("p");
  Division.innerText = `Division : ${division}`;
  let City = document.createElement("p");
  City.innerText = `City : ${city}`;

  let closeButton = document.createElement("button");
  closeButton.innerText = "close";
  closeButton.addEventListener("click", () => {
    closeModal();
  });

  div.append(
    img,
    Name,
    Position,
    h2,
    team_name,
    abbr,
    conf,
    Division,
    City,
    closeButton
  );

  document.querySelector(".details").append(div);

  document.querySelector(".overly").classList.add("showOverly");
  document.querySelector(".details").classList.add("openModal");
};

const closeModal = () => {
  document.querySelector(".details").innerHTML = "";
  document.querySelector(".overly").classList.remove("showOverly");
  document.querySelector(".details").classList.remove("openModal");
};

const previous = () => {
  document.getElementById("player").innerHTML = "";
  if (page === 1) {
    return;
  }
  page--;
  getPlayer();
};

const next = () => {
  document.getElementById("player").innerHTML = "";
  if (page === 10) {
    return;
  }
  page++;
  getPlayer();
};

const main = async () => {
  document.getElementById("player").innerHTML = "";
  let name = document.getElementById("searchPlayer").value;
  if (name === null) {
    appendPlayer(data.data);
  } else {
    try {
      let res = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${name}&page=${page}&per_page=${limit}`
      );
      let Data = await res.json();
      console.log(Data.data);
      appendPlayer(Data.data);
    } catch (err) {
      console.log(err);
    }
  }
};

let id;
const debouncing = (func, deley) => {
  if (id) {
    clearInterval(id);
  }

  id = setTimeout(() => {
    func();
  }, deley);
};
