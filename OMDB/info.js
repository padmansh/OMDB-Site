let flink = document.location.search.replace(/^.*?\=/, '');
let title = document.querySelector("#title");
let actors = document.querySelector("#actors");
let awards = document.querySelector("#awards");
let boxoffice = document.querySelector("#boxoffice");
let country = document.querySelector("#country");
let director = document.querySelector("#director");
let genre = document.querySelector("#genre");
let language = document.querySelector("#language");
let rated = document.querySelector("#rated");
let imdb = document.querySelector("#imdb");
let rt = document.querySelector("#rt");
let meta = document.querySelector("#meta");
let runtime = document.querySelector("#runtime");
let votes = document.querySelector("#votes");
let year = document.querySelector("#year");
let plot = document.querySelector("#plot");

console.log(flink);

let image = document.querySelector("#image > img");
window.onload = async function() {
    let res = await fetch(flink);
    console.log(res);
    let data = await res.json();
    console.log(data);
    image.setAttribute("src", data.Poster);
    title.innerHTML = data.Title;
    actors.innerHTML = data.Actors;
    awards.innerHTML = data.Awards;
    boxoffice.innerHTML = data.BoxOffice;
    country.innerHTML = data.Country;
    director.innerHTML = data.Director;
    genre.innerHTML = data.Genre;
    language.innerHTML = data.Language;
    rated.innerHTML = data.Rated;
    imdb.innerHTML = data.Ratings[0].Value;
    rt.innerHTML = data.Ratings[1].Value;
    meta.innerHTML = data.Ratings[2].Value;
    runtime.innerHTML = data.Runtime;
    votes.innerHTML = data.imdbVotes;
    year.innerHTML = data.Year;
    plot.innerHTML = data.Plot;
}