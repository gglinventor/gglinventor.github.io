let password = document.getElementById('password');
let password_icon = document.getElementById('password-icon');

password_icon.onclick = function() {
    if(password.type == "password"){
        password.type = "text"
        password_icon.className = "bx bxs-lock-open"
    }
    else{
         password.type = "password"
         password_icon.className = "bx bxs-lock-alt"
    }
}