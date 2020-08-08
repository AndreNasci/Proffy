// Dados
const proffys = [
    {
        name: "Diego Fernantes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "23984328573", 
        bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "André Nascimento", 
        avatar: "https://avatars0.githubusercontent.com/u/37906395?s=460&u=60ca6daa062dc11de9c4ba3f1cb9a0d0bd5747a7&v=4", 
        whatsapp: "23984328573", 
        bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Programção", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    //transforma no tamanho/comprimento de um array
    const isNotEmpty = Object.keys(data).length > 0

    //adicionar dados a lista de proffys
    if( isNotEmpty ) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        console.log("entrei")
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configuração do servidor
//Configurar arquivos estático / rotas da aplicação
server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
//Servidor na porta 5500