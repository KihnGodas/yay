// chuyển sang các trang khác
const view = {}; // Dùng để hiển thị lên màn hình dao diện 

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'navbar':
            document.getElementById("app").innerHTML = components.navbar;
            break;

        case 'registerScreen':
            document.getElementById("app").innerHTML = components.register;


            const registerForm = document.getElementById("register-form");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                console.log(data);
                controller.register(data)
    
            })

            
            document.getElementById("redirect-to-login").addEventListener("click", () => {
                view.setActiveScreen("loginScreen")
            });

            break;

        case 'loginScreen':
            document.getElementById("app").innerHTML = components.login;
            document.getElementById("redirect-to-register").addEventListener("click", () => {
                view.setActiveScreen("registerScreen")
            })
            break;

        case 'homeScreen':

            break;
    }
}
