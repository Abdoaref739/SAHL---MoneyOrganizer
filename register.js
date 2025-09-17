  let username_field = document.getElementById("username-field");
        let email = document.getElementById("email-field");
        let password_field = document.getElementById("password-field");
        let confirm_password_field = document.getElementById("confirm-password-field");
 let registerButton = document.getElementById('register-button');
        registerButton.addEventListener('click', function() {
            add_account_button.onclick = function(){
            localStorage.setItem("username", username_field.value);
            localStorage.setItem("banktype", account_type.value);
            localStorage.setItem("password", password_field.value);
            localStorage.setItem("confirmpassword", confirm_password_field.value);
            window.location.href = "./dashboard.html";
        }
        });