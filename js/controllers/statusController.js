if (sessionStorage.getItem('loggedUser') == null) {
    window.location.replace('/html/registo.html')
} else {

    users = localStorage.users ? JSON.parse(localStorage.users) : []
    utilizador = sessionStorage.getItem('loggedUser')

    Object.values(users).forEach(user => {
        if (user.username == utilizador && user.status == "admin") {
            btnAdmin = document.querySelectorAll(".botaoConta")
            btnAdmin[0].style.visibility = "hidden";
            btnAdmin[1].style.visibility = "visible";
        }
        if (user.username == utilizador) {
            status = user.status
        }
    })
    if (window.location.href.split("/").pop() == "admin.html" && status != "admin") {
        window.location.replace('../html/perfil.html')
    }
}

function menuOn() {
    document.getElementById("menuOverlay").style.display = "block";
    document.getElementById("usernameMenu").innerHTML = sessionStorage.getItem('loggedUser');
}

function menuOff() {
    document.getElementById("menuOverlay").style.display = "none";
}

function perfilOn() {
    window.location.replace('/html/perfil.html')
}

function logout() {
    sessionStorage.removeItem('loggedUser');
}
