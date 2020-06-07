let flink = document.location.search.replace(/^.*?\=/, '');
console.log(flink);

let image = document.querySelector("#image > img");
window.onload = async function() {
    let res = await fetch(flink);
    console.log(res);
    let data = await res.json();
    console.log(data);
    image.setAttribute("src", data.Poster);
}