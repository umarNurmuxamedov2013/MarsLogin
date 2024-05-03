let password = document.getElementById("password")
let ID = document.getElementById("ID")
let button = document.getElementById("loginOk")


button.addEventListener("click" , ok)
function ok() {
    if (+ID.value === 123456 && +password.value === 7890) {
        alert("To'gri")
    }else{

        alert("Parol yoki ID xato")
    }
}
