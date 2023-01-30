// element slide carousel 
var elementSlideCarousel1 = document.querySelector(".slide-carousel-1");
var elementSlideCarousel2 = document.querySelector(".slide-carousel-2");
var elementSlideCarousel3 = document.querySelector(".slide-carousel-3");

// content slide carousel 1 
var contentCarousel1 = [
    {
        id: 1,
        nameDestination: "DANANG",
        avatarDestination: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"
    },

    {
        id: 2,
        nameDestination: "HANOI",
        avatarDestination: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg"
    },

    {
        id: 3,
        nameDestination: "SAIGON",
        avatarDestination: "../image/bg-logo.jpg",
    },
];

// content slide carousel 2 
var contentCarousel2 = [
    {
        id: 1,
        nameDestination: "QUYNHON",
        avatarDestination: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg"
    },

    {
        id: 2,
        nameDestination: "HUE",
        avatarDestination: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"
    },

    {
        id: 3,
        nameDestination: "QUANGBINH",
        avatarDestination: "../image/bg-logo.jpg",
    }
];

// content slide carousel 3 
var contentCarousel3 = [
    {
        id: 1,
        nameDestination: "DALAT",
        avatarDestination: "../image/bg-logo.jpg"
    },

    {
        id: 2,
        nameDestination: "QUANGTRI",
        avatarDestination: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg"
    },

    {
        id: 3,
        nameDestination: "THANHHOA",
        avatarDestination: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg",
    }
];

// push content slide carousel 1
function pushContentCarousel1(listContentCarousel1) {
    var str1 = "";
    listContentCarousel1.forEach(element => {
        str1 +=`
        <div class="col-4">
            <div class="block-border"></div>
            <a href="/html/detailDestination.html?post=${element.id}" class="title-destinations"><span>${element.nameDestination}</span></a>
            <img src="${element.avatarDestination}" alt="">
        </div>
        `
    });

    elementSlideCarousel1.innerHTML = str1;
};
pushContentCarousel1(contentCarousel1);

// push content slide carousel 2
function pushContentCarousel2(listContentCarousel2) {
    var str2 = "";
    listContentCarousel2.forEach(element2 => {
        str2 +=`
        <div class="col-4">
            <div class="block-border"></div>
            <a href="../html/detailDestination.html?itemPost=${element2.id}" class="title-destinations"><span>${element2.nameDestination}</span></a>
            <img src="${element2.avatarDestination}" alt="">
        </div>
        `
    });

    elementSlideCarousel2.innerHTML = str2;
};
pushContentCarousel2(contentCarousel2);

// push content slide carousel 3
function pushContentCarousel3(listContentCarousel3) {
    var str3 = "";
    listContentCarousel3.forEach(element3 => {
        str3 +=`
        <div class="col-4">
            <div class="block-border"></div>
            <a href="../html/detailDestination.html?itemPost=${element3.id}" class="title-destinations"><span>${element3.nameDestination}</span></a>
            <img src="${element3.avatarDestination}" alt="">
        </div>
        `
    });

    elementSlideCarousel3.innerHTML = str3;
};
pushContentCarousel3(contentCarousel3);

