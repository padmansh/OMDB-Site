let searched = document.querySelector("#searched"); //Search Button
let input = document.querySelector("#input"); //Form element taking name of movie
let poster = document.querySelector("#poster"); //for the images from API

searched.addEventListener("click", () => console.log("clicked"));

searched.addEventListener("click", () => (poster.textContent = "")); // clearing earlier fetched images when new movie searched
let i;
searched.addEventListener("click", async function(event) {
    event.preventDefault();
    let title = input.value;
    let res = await fetch(` http://www.omdbapi.com/?s=${title}&apikey=e10b009d&`);
    console.log(res);
    let data = await res.json();
    console.log(data);
    for (i = 0; i < data.Search.length; i++) {
        console.log(i);
        console.log(data.Search[i].Title); //title print just to check
        poster.insertAdjacentHTML("beforeend", `<div class="grid-item" id="img${i}"><img src=${data.Search[i].Poster}/></div>`);
    } // displaying all fetched images in grid
    let image = [];
    for (i = 0; i < data.Search.length; i++) {
        image.push(document.querySelector(`#img${i}`));
    } // making dicument object of all fetched images in grid
    console.log(image);
    for (i = 0; i < data.Search.length; i++) {
        (function(index) {
            image[index].addEventListener("click", () => { // adds click event on each poster displayed
                let link = `http://www.omdbapi.com/?t=${data.Search[index].Title}&apikey=e10b009d&plot=full&`; // link to fetch details on info page
                window.open("./info.html" + '?link=' + link); // opens new info page in new window
                console.log(link); // link print for check
                //localStorage.setItem("locallink", link);
            });
        })(i);
    };
});