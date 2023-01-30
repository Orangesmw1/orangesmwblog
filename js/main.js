// clear local 
localStorage.clear();

// callAPI 
function callAPI() {
    axios({
        method: 'GET',
        url: 'https://637b5d216f4024eac20b7454.mockapi.io/orangesmw-login',
      })
        .then(function (response) {
            var listUserRegistered = response.data;
            localStorage.setItem("listAccountUserLogin",JSON.stringify(listUserRegistered));
        }) .catch(function(error) {
            console.log(error);
        })    
}

callAPI();

// element login
var elementNameUser = document.querySelector("#inputUserNameLogin");
var elementPassUser = document.querySelector("#inputPasswordLogin");

// btn login 
var btnLogin = document.querySelector("#btn-login");

// switch register 
var switchRegister = document.querySelector(".switch-register");

// btn ShowPass & hidePass
var btnShowPass = document.querySelector("#showPassword");
var btnHidePass = document.querySelector("#hidePassword");



// event btn login 
btnLogin.addEventListener("click",function() {
    var dataUser = {
        emailRegister: elementNameUser.value,
        passRegister: elementPassUser.value, 
    };

    var checkEmailUser = JSON.parse(localStorage.getItem("listAccountUserLogin")).find(element => element.emailRegister === dataUser.emailRegister)
    var checkPassUser = JSON.parse(localStorage.getItem("listAccountUserLogin")).find(element => element.passRegister === dataUser.passRegister)
    
    if(dataUser.emailRegister === "" && dataUser.passRegister === "") {
        Swal.fire({
            text: 'Fill full the information',
            icon: 'error',
            confirmButtonText: 'OK',
            showCloseButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
        })
    } else if(dataUser) {
       if(checkEmailUser){
            if(checkPassUser) {
                localStorage.setItem("dataUserLogin",JSON.stringify(dataUser));
                window.location.href = "/index.html";
            } else {
                Swal.fire({
                    text: 'Wrong Password',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    showCloseButton: true,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
       } else {
            Swal.fire({
                text: 'Wrong email login',
                icon: 'error',
                confirmButtonText: 'OK',
                showCloseButton: true,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
            })
       }
    } 
})

// event enter login 
addEventListener("keypress",function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
        btnLogin.click();
    }
})

// event switchRegister 
switchRegister.addEventListener("click",function() {
    window.location = "../html/indexReg.html";
})

// switch eyes password  
btnShowPass.addEventListener("click",function(){
    if(elementPassUser.type = "password") {
        elementPassUser.type = "text";
        btnHidePass.classList.remove("d-none");
        btnHidePass.classList.add("d-block");
        btnShowPass.classList.add("d-none");
        btnShowPass.classList.remove("d-block");

    }
});

btnHidePass.addEventListener("click",function(){
    if(elementPassUser.type = "text") {
        elementPassUser.type = "password";
        btnHidePass.classList.remove("d-block");
        btnHidePass.classList.add("d-none");
        btnShowPass.classList.add("d-block");
        btnShowPass.classList.remove("d-none");
    }
})
