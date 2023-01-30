// get Local User Login 
var dataUserLogin = JSON.parse(localStorage.getItem("dataUserLogin"));
var nameUserLogin = document.querySelector(".nameUserLogin");
var listAccountUser = JSON.parse(localStorage.getItem("listAccountUserLogin"));

// btn login
var btnLogin = document.querySelector(".btn-switch-login");
var btnLogin2 = document.querySelector(".btn-switch-login-2");
var btnSwitchLogin = document.querySelector(".btn-login");
var dropdownMenuAccount = document.querySelector(".dropdown-menu-account");

// btn Info 
var btnInfo = document.querySelector(".btn-switch-Info");

// btn out 
var btnOut = document.querySelector(".btn-out");

// content dropdownMenuAccount 
var contentDrop = {
    contentDropItem1: "Info",
    contentDropItem2: "Out"
}

// show name user nav
var dataUser = [];
dataUser.push(dataUserLogin);
function showNameLogin(dataUser) {
    var strNameLogin = "";
    dataUser.forEach(elementNameLogin => {
        strNameLogin +=`
            <span>${elementNameLogin?.emailRegister}</span>
        `
    });
    nameUserLogin.innerHTML = strNameLogin;

};
showNameLogin(dataUser);

// icon user
function iconUser() {
   if(localStorage.getItem("dataUserLogin")) {
    btnLogin2.style = `
        display: none;
    `
    btnLogin.style = `
        display: block;
    `
    find();
    
   } else {
    btnLogin2.style = `
        display: block;
    `
    btnLogin.style = `
        display: none;
    `
    nameUserLogin.style = `
        opacity: 0;
    `
   }
};
iconUser(); 

// show Drop menu Account
dataDropAccount = [];
dataDropAccount.push(contentDrop);
function showDropmenuAccount(dataDropAccount) {
    var infoUser = JSON.parse(localStorage.getItem("infoUser"));
    var str = "";
    dataDropAccount.forEach(elementDrop => {
        str+= `
            <a href = "../html/infoUser.html?info=${infoUser?.id}" class="dropdown-item btn-switch-Info" href="">${elementDrop.contentDropItem1}</a>
            <div class="dropdown-divider"></div>
            <a onclick="outAccount()" class="dropdown-item btn-out">${elementDrop.contentDropItem2}</a>
        `
    })
    dropdownMenuAccount.innerHTML = str;
};
showDropmenuAccount(dataDropAccount);

// out accout 
function outAccount() {
   nameUserLogin.style = `
     display: none;
   `   
   localStorage.removeItem("dataUserLogin");
    iconUser(); 
}

// switch page login
function switchLogin() {
    console.log(123);
    window.location = "../html/indexLogin.html"
} 
btnSwitchLogin.addEventListener("click",switchLogin);

// check id user 
function find() {
    listAccountUser.find((userItem,index) => {
        var result = userItem.emailRegister === dataUserLogin.emailRegister
        if(result) {
            localStorage.setItem("infoUser",JSON.stringify(userItem));
        }
    })
}