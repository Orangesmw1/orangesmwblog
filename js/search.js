var btnSearch = document.querySelector(".btn-search");
var inputSearch = document.querySelector(".input-search");
var destinations = document.querySelector(".destinations");

function showInputSearch() {
    inputSearch.style = `
        width: 120px;
        padding: 0 10px;
        opacity: 1;
        margin-left: 10px
    `
}

function hideInputSearch() {
    inputSearch.style = `
        width: 0;
        padding: 0;
        opacity: 0;
    `
}

btnSearch.addEventListener("click",showInputSearch);
addEventListener("scroll",hideInputSearch);