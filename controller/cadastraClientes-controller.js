import { clienteService } from '../service/cliente-service.js'

// Percorendo a arvore DOM e seleceonando o input com data atribute
const formulario =  document.querySelector('[data-form]')

// Criando evento

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})