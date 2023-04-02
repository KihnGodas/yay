// chuyển sang các trang khác
const view = {}; // Dùng để hiển thị lên màn hình dao diện 

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'navbar':
            document.getElementById("app").innerHTML = components.navbar;
            break;

        case 'registerScreen':
            document.getElementById("app").innerHTML =components.register
            break;

        case 'loginScreen':
            document.getElementById("app").innerHTML  = components.login;
            break;

        case 'homeScreen':

            break;
        
    }
}
