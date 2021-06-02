if (sessionStorage.getItem('loggedUser') == null) {
    window.location.replace('/html/registo.html')
} else {

    this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    utilizador = sessionStorage.getItem('loggedUser')

    Object.values(users).forEach(user => {
        if (user.id == utilizador && user.status == "admin") {
            console.log("ADMIN")
        } else {
            console.log("UTILIZADOR")
        }
    })
}

function menuOn() {
    document.getElementById("menuOverlay").style.display = "block";
}

function menuOff() {
    document.getElementById("menuOverlay").style.display = "none";
}

function perfilOn() {
    window.location.replace('/html/perfil.html')
}