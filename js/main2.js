// element register
var elementNameRegister = document.querySelector("#inputNameRegister");
var elementEmailRegister = document.querySelector("#inputEmailRegister");
var elementPassRegister = document.querySelector("#inputPasswordRegister");
var elementRepeatPassRegister = document.querySelector("#inputRepeatPasswordRegister");
var elementCheckBox = document.querySelector("#checkBox");

// btn ShowPass & hidePass
var btnShowPass = document.querySelector("#showPassword");
var btnHidePass = document.querySelector("#hidePassword");
var btnShowRepeatPass = document.querySelector("#showRepeatPassword");
var btnHideRepeatPass = document.querySelector("#hideRepeatPassword");


// btn register 
var btnRegister = document.querySelector(".btn-register");

// switch Login
var switchLogin = document.querySelector(".switch-login");

// callAPI 
function callAPI() {
    axios({
        method: 'GET',
        url: 'https://637b5d216f4024eac20b7454.mockapi.io/orangesmw-login',
      })
        .then(function (response) {
            var listUserRegistered = response.data;
            localStorage.setItem("listAccountUser",JSON.stringify(listUserRegistered));
        }) .catch(function(error) {
            console.log(error);
        })
}

callAPI();

// event register
btnRegister.addEventListener("click",function() {
    var dataUserRegister = {
        nameRegister: elementNameRegister.value.replace(/\s+/g, '').toLowerCase(),
        emailRegister: elementEmailRegister.value,
        passRegister: elementPassRegister.value,
        rePassRegister: elementRepeatPassRegister.value,
    };
    
    if(dataUserRegister.nameRegister === "" 
        || dataUserRegister.emailRegister === ""
        || dataUserRegister.passRegister === "" 
        || dataUserRegister.rePassRegister === "") {
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
    } else {
        if(/\d/.test(dataUserRegister.nameRegister)) {
            Swal.fire({
                text: 'Names without numbers',
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
        } else { 
            if(dataUserRegister.passRegister !== dataUserRegister.rePassRegister) {
                Swal.fire({
                    text: 'Enter the correct password',
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
            } else if(elementCheckBox.checked === false) {
                Swal.fire({
                    text: 'Please select I agree to all statements in the Terms of Service',
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
            } else if(dataUserRegister.emailRegister.includes("@gmail.com") === false ){
                Swal.fire({
                    text: 'Missing word @gmail.com',
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
            } else if(JSON.parse(localStorage.getItem("listAccountUser")).find(element => element.emailRegister === dataUserRegister.emailRegister)) {
                Swal.fire({
                    text: 'Email already exists',
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
            } else {
                axios({
                    method: 'POST',
                    url: 'https://637b5d216f4024eac20b7454.mockapi.io/orangesmw-login',
                    data: dataUserRegister,
                  }) 
                  .then(function(response) {
                    Swal.fire({
                        text: 'Successful account registration',
                        icon: 'success',
                        confirmButtonText: 'Login',
                        showCloseButton: true,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                    }) .then((result)=> {
                        if(result.isConfirmed) {
                            window.location = "../html/indexLogin.html"
                        } else{
                            elementNameRegister.value = "";
                            elementEmailRegister.value = "";
                            elementPassRegister.value = "";
                            elementRepeatPassRegister.value = "";
                            elementCheckBox.checked = false;
                        }
                    }) 
                  }) 
            }
        }
    }
})

// event enter 
addEventListener("keypress",function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
        btnRegister.click();
    }
})

// switch eyes password  
btnShowPass.addEventListener("click",function(){
    if(elementPassRegister.type = "password") {
        elementPassRegister.type = "text";
        btnHidePass.classList.remove("d-none");
        btnHidePass.classList.add("d-block");
        btnShowPass.classList.add("d-none");
        btnShowPass.classList.remove("d-block");

    }
});

btnHidePass.addEventListener("click",function(){
    if(elementPassRegister.type = "text") {
        elementPassRegister.type = "password";
        btnHidePass.classList.remove("d-block");
        btnHidePass.classList.add("d-none");
        btnShowPass.classList.add("d-block");
        btnShowPass.classList.remove("d-none");
    }
})

// switch eyes Repeat password  
btnShowRepeatPass.addEventListener("click",function(){
    if(elementRepeatPassRegister.type = "password") {
        elementRepeatPassRegister.type = "text";
        btnHideRepeatPass.classList.remove("d-none");
        btnHideRepeatPass.classList.add("d-block");
        btnShowRepeatPass.classList.add("d-none");
        btnShowRepeatPass.classList.remove("d-block");
    }
});

btnHideRepeatPass.addEventListener("click",function(){
    if(elementRepeatPassRegister.type = "text") {
        elementRepeatPassRegister.type = "password";
        btnHideRepeatPass.classList.remove("d-block");
        btnHideRepeatPass.classList.add("d-none");
        btnShowRepeatPass.classList.add("d-block");
        btnShowRepeatPass.classList.remove("d-none");
    }
})

// switch Login 
switchLogin.addEventListener("click",function() {
    window.location = "../html/indexLogin.html";
})







