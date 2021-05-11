function registoFunction()
{ 
    let nomeUtilizador = document.querySelector("#txtUtilizador")
    let passUtilizador = document.querySelector("#txtPassword")

    console.log(nomeUtilizador.value)
    console.log(passUtilizador.value)

    let tbodyUtilizador = document.querySelector("#tbodyUtilizador")
    alert("oi2")

    tbodyUtilizador.innerHTML += `
    <tr>
        <td scope="row">${nomeUtilizador.value}</td>
        <td>${passUtilizador.value}</td>
    </tr>
    `

    alert("oi")
}