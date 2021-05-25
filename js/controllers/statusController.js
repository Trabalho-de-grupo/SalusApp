if (sessionStorage.getItem('loggedUser') == null) {
    window.location.replace('/html/registo.html')
} else {

    this.users = localStorage.users ? JSON.parse(localStorage.users) : []

    Object.keys(users).forEach(function (key) {
        if (this.users.find(user => user.status == 'admin')) {
            console.log(key, users[key]);
        }
    });
}

function menuOn() {
    document.getElementById("menuOverlay").style.display = "block";
}

function menuOff() {
    document.getElementById("menuOverlay").style.display = "none";
}