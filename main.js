'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "lhsf",
    email: "lhsf@hotmail.com",
    celular: "256326655",
    cidade: "Martinopolis"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const createClient = (client) => {
    const dbClient = getLocalStorage() 
    dbClient.push(client)
    setLocalStorage(dbClient)
    
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)