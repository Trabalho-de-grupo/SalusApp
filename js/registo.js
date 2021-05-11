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