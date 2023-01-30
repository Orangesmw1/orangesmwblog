const cardShowInfo = document.querySelector(".card-show-info");
const dataInfo = JSON.parse(localStorage.getItem("infoUser"))
const arrayInfoUser = [];
arrayInfoUser.push(dataInfo);

const showInfo = (dataInfo) => {
    console.log(dataInfo);
    let str = "";
    dataInfo.forEach(element => {
        str += `
        <div class="row no-gutters">
                <div class="col-md-6 img-info">
                    <img src="../image/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body card-info-user">
                            <h5 class="card-title"><span class="full-name">Full name: </span> <span>${element.nameRegister}</span></h5>
                            <h5 class="card-text"><span class="email">Email: </span> <span>${element.emailRegister}</span></h5>
                            <h5 class="card-text block-password"><span class="password">Password: </span> <span class="password-user">${element.passRegister}</span></h5>
                            <div class="form-change-pass" id="form-change-pass">
                                <label class="present-password" for="">Present Password</label>
                                <input type="text">
                                <br>
                                <label class="new-password" for="">New Password</label>
                                <input class="inputPassNew" type="text">
                                <button class="change-pass-new" id="change-pass-new"> Change</button>
                       
                            </div>
                            <button class="change-password" id="change-password"> Change Password </button>
                            
                    </div>
                </div>
               
                
        </div> 
        `
    });
    cardShowInfo.innerHTML = str;
}
showInfo(arrayInfoUser);

const password = document.querySelector(".block-password");
const formChangePass = document.querySelector("#form-change-pass");
const changePass = document.querySelector(".change-password");
const changePassNew = document.querySelector(".change-pass-new");
formChangePass.classList.add("d-none");
changePass.addEventListener("click",() => {
    const showFormChangePass = () => {
        formChangePass.classList.remove("d-none");
        formChangePass.classList.add("d-block");
        changePass.classList.add("d-none");
        password.classList.add("d-none")
    }
    showFormChangePass();
})

changePassNew.addEventListener("click",() => {
    
})


function outAccount() {
    Swal.fire({
        text: 'Do you want to login again?',
        icon: 'question',
        confirmButtonText: 'OK',
        showCloseButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    }) .then((result => {
        if(result.isConfirmed) {
            localStorage.removeItem("dataUserLogin");
            window.location = "../html/indexLogin.html"
        } else {
            localStorage.removeItem("dataUserLogin");
            window.location = "../index.html"
        }
    })) 
    
 }
