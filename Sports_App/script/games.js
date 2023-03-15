let data = [];

let page = 1;
let limit = 10;

const getAllgames = async () => {
  //   const seasons = document.getElementById("sesaons").
  //   console.log(seasons);
  let res = await fetch(
    `https://www.balldontlie.io/api/v1/games?seasons[]=${2018}&page=${page}&per_page=${limit}`
  );
  data = await res.json();
  console.log(data.data);
};
getAllgames();
