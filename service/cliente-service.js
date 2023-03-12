const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`) // fetch com GET
    .then(resposta => {
        return resposta.json()
    })
}

// FORMULARIO NOVO CLIENTE - POST

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            email: email
        })
        
        })
        .then(resposta => {
            return resposta.body
    })
}

// Objeto Service
export const clienteService = {
    listaClientes,
    criaCliente
}
