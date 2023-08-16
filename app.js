console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// Program State
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY =  "F1mXnDbGF6p5INGEWalZqF73BT9yvoRb";

//select elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");


//event Handlers
searchBtn.addEventListener ("click", ()  => {
    getGif(searchInput.value);
});

//function getGif(searchTerm) {
  //  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    //.then((res) => res.json())
    //.then((body) => {
        // show the gif on the dom
        //gifEle.src = body.data.images.original.url;
    //})
   //.catch((err) => {
     //   console.error(err);
    //show the error message on the dom
    //feedbackEle.textContent = err.message;
    //});
//}

async function getGif(searchTerm) {
   try {
    let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    let body = await res.json();
    console.log(body)
    //show the gif on the dom
    gifEle.src = body.data.images.original.url;
   } catch (err) {
    console.error(err);
    //show the error message on the dom
    feedbackEle.textContent = err.message;
   }
}