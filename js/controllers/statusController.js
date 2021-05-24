if (sessionStorage.getItem('loggedUser') == null) {
    window.location.replace('/html/registo.html')
}

function menuOn() {
    document.getElementById("menuOverlay").style.display = "block";
}

function menuOff() {
    document.getElementById("menuOverlay").style.display = "none";
}