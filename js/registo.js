var x= document.getElementById("login");
var y=document.getElementById("registar");
var z= document.getElementById("btn");

function registar(){
    x.style.left ="-400px";
    y.style.left="50px";
    z.style.left="104px";
}

function login(){
    x.style.left ="50px";
    y.style.left="450px";
    z.style.left="0";
}






function registoFunction()
{ 
    localStorage.setItem("nomeUtilizador", document.getElementById("txtUtilizador").value)
    localStorage.setItem("passUtilizador", document.getElementById("txtPassword").value)
}

function registoTable()
{
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
