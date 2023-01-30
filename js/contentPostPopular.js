// element slide post popular
var elementPopular1 = document.querySelector(".post-popular-1");
var elementPopular2 = document.querySelector(".post-popular-2");
var elementPopular3 = document.querySelector(".post-popular-3");

// content slide post popular 1 
var contentPostPopular1 = [
    {
        id: 1,
        namePostPopular: "DANANG",
        avatarPostPopular: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 2,
        namePostPopular: "HANOI",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 3,
        namePostPopular: "SAIGON",
        avatarPostPopular: "../image/bg-logo.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 4,
        namePostPopular: "HANOI",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },
];

// content slide post popular 2 
var contentPostPopular2 = [
    {
        id: 1,
        namePostPopular: "QUYNHON",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 2,
        namePostPopular: "HUE",
        avatarPostPopular: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 3,
        namePostPopular: "QUANGBINH",
        avatarPostPopular: "../image/bg-logo.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 4,
        namePostPopular: "HANOI",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },
    
];

// content slide post popular 3 
var contentPostPopular3 = [
    {
        id: 1,
        namePostPopular: "DALAT",
        avatarPostPopular: "../image/bg-logo.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 2,
        namePostPopular: "QUANGTRI",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 3,
        namePostPopular: "THANHHOA",
        avatarPostPopular: "../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

    {
        id: 4,
        namePostPopular: "HANOI",
        avatarPostPopular: "../image/ian-stauffer-bH7kZ0yazB0-unsplash.jpg",
        contentPostPopular: "Lorem ipsum dolor sit amet, consectetur",
    },

];

// push content slide post popular 1
function pushContentPopular1(listContentPopular1) {
    var str1 = "";
    listContentPopular1.forEach(element => {
        str1 +=`
        <div class="col-3">
            <div class="block-img-post-popular">
                <img src="${element.avatarPostPopular}" alt="">
            </div>
            <div class="post-popular-item-content">
                <h3>${element.namePostPopular}</h3>
                <p>${element.contentPostPopular}</p>
            </div>
        </div>
        `
    });

    elementPopular1.innerHTML = str1;
};
pushContentPopular1(contentPostPopular1);

// push content slide post popular 2
function pushContentPopular2(listContentPopular2) {
    var str2 = "";
    listContentPopular2.forEach(element2 => {
        str2 +=`
        <div class="col-3">
        <div class="block-img-post-popular">
            <img src="${element2.avatarPostPopular}" alt="">
        </div>
            <div class="post-popular-item-content">
                <h3>${element2.namePostPopular}</h3>
                <p>${element2.contentPostPopular}</p>
            </div>
        </div>
        `
    });

    elementPopular2.innerHTML = str2;
};
pushContentPopular2(contentPostPopular2);

// push content slide post popular 3
function pushContentPopular3(listContentPopular3) {
    var str3 = "";
    listContentPopular3.forEach(element3 => {
        str3 +=`
        <div class="col-3">
            <div class="block-img-post-popular">
                <img src="${element3.avatarPostPopular}" alt="">
            </div>
            <div class="post-popular-item-content">
                <h3>${element3.namePostPopular}</h3>
                <p>${element3.contentPostPopular}</p>
            </div>
        </div>
        `
    });

    elementPopular3.innerHTML = str3;
};
pushContentPopular3(contentPostPopular3);