const myHeader = document.querySelector("#my-header");

addEventListener("scroll",() => {
    if(document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        myHeader.style =`
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 105;
        `
    } else {
        myHeader.style =`
            position: none;
            top: 0;
            width: 100%;
            z-index: 105;
        `
    }
})