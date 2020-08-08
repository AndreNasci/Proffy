// EventListener - clique
document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    //console.log("Cheguei aqui")

    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo
    fields.forEach(function(field) {
        //limpar cada field
        field.value = ""
    })

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

