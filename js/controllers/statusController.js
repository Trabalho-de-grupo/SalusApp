if (sessionStorage.getItem('loggedUser') == null) {
    window.location.replace('/html/registo.html')
} else {
    /*
            this.users = localStorage.users ? JSON.parse(localStorage.users) : []
            utilizador = sessionStorage.getItem('loggedUser')

            Object.values(users).forEach(user => {
                if (user.id == utilizador && user.status == "admin") {
                    console.log("ADMIN")
                    let botaoAdmin= document.getElementsByClassName("botaoAdmin")
                    console.log(botaoAdmin)
                    document.getElementsByClassName("botaoAdmin").style.visibility = "hidden";
                    document.getElementsByClassName("botaoPerfil").style.visibility= "hidden";
                }
            })
    */
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
