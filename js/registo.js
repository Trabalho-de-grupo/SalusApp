var x = document.getElementById("login");
var y = document.getElementById("registar");
var z = document.getElementById("btn");

var users = []

class User {
    constructor(id, nome, email, pass) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.pass = pass;
    }
}

function registar() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "104px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function confirmarRegisto() {
    let nome = document.getElementById("txtRegisterNome").value
    let email = document.getElementById("txtRegisterEmail").value
    let password = document.getElementById("txtRegisterPassword").value
    let confPassword = document.getElementById("txtRegisterConfPassword").value

    if (password == confPassword) {

        if (localStorage.getItem("usersList")) {
            
            users = JSON.parse(localStorage.getItem("usersList"));

        }

        const user1 = new User(users.length + 1,nome,email,password)
        users.push(user1);
        localStorage.setItem("usersList", JSON.stringify(users));

    }

    else {
        alert("Password's não coincidem")
    }
}






/*


function registoFunction() {
    localStorage.setItem("nomeUtilizador", document.getElementById("txtRegisterNome").value)
    localStorage.setItem("passUtilizador", document.getElementById("txtRegisterPassword").value)
}

function registoTable() {
    const tableUtilizador = document.getElementById("tableUtilizador")

    tableUtilizador.innerHTML += `
        <tbody>
            <tr>
                <td scope="row">${localStorage.getItem("nomeUtilizador")}</td>
                <td>${localStorage.getItem("passUtilizador")}</td>
            </tr>
        </tbody>
    `
}

*/

