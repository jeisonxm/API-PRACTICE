const URL = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
let URL2;
let x = 1;
let y = 1;
let maxX, maxY;
const img = document.querySelector("img");
const tittle = document.querySelector("h2");
const quote = document.querySelector(".answer");

const takeData = async (url_api) => {
  try {
    const object = await fetch(url_api);
    const objectJson = await object.json();
    maxX = await objectJson.data.length;

    const animeName = await objectJson.data[x].anime_name;
    tittle.innerText = animeName.split("_").join(" ");
    img.src = objectJson.data[x].anime_img;

    const factObject = await fetch(`${url_api}${animeName}`);
    const factObjectJson = await factObject.json();
    maxY = await factObjectJson.total_facts;

    quote.innerText = factObjectJson.data[y].fact;
  } catch (error) {
    console.error("no sirve");
  }
  console.log(maxX);
};
takeData(URL);
function changeAnime() {
  x = Math.floor(Math.random() * maxX);
  takeData(URL);
}
function changeFact() {
  y = Math.floor(Math.random() * maxY);
  takeData(URL);
}
console.log(maxX);

//* Promise way
// fetch(URL)
//   .then((res) => res.json())
//   .then((obj) => {
//     tittle.innerText = obj.data[8].anime_name.split("_").join(" ");
//     console.log(obj.data[8].anime_name.split("_"));
//     img.src = obj.data[8].anime_img;
//     return fetch(`${URL}${obj.data[8].anime_name}`);
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     quote.innerText =
//       data.data[Math.floor(Math.random() * data.total_facts)].fact;
//     console.log(data.data[Math.floor(Math.random() * data.total_facts)].fact);
//   });
