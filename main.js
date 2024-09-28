let valorTotal = document.getElementById('valor')
let totalEdit = document.getElementById('editValue')
let addExpense = document.getElementById('addExpense')
let input = document.querySelector('.input')
let expenseValue = document.querySelector('.value')
let calculate = 0
const dashview = document.getElementById('dashview')
const dashboard = document.querySelector('#dashboard')
const buttonClose = document.getElementById('close')
let totalExpenses = document.querySelector('.data')

if(valorTotal.value === "") { 
    alert("PREENCHA COM SEU VALOR TOTAL!")
}

totalEdit.addEventListener('dblclick', () => {
    valorTotal.focus()
})

totalEdit.addEventListener('click', () => {
    valorTotal.blur()
})

addExpense.addEventListener('click', (event) => {
    event.preventDefault()
})

expenseChange()

function expenseChange() {
    addExpense.addEventListener('click', () => {
       if (input.value !== "") {
        calculate = parseFloat(valorTotal.value) - parseFloat(expenseValue.value)
        valorTotal.value = calculate
        input.value = ''
        expenseValue.value = '' 
       } 
       if(isNaN(valorTotal.value)) {
        alert("PREENCHA APENAS COM NÚMEROS!")
        valorTotal.value = ''
       }
       })
}

dataUpdate()

function dataUpdate() {
    switch(input) {
        case "Contas":
            totalExpenses.textContent =
            "Contas - teste"
            "Mercado - $00,00"
            "Uber - $00,00"
            "Lanche - $00,00"
            "Presente - $00,00"
            "Assinaturas - $00,00"
            "Outros - $00,00"
        break
    }
}

openDash ()

function openDash() {
    dashview.onclick = () => {
        dashboard.showModal()
    }
}

closeDash ()

function closeDash() {
    buttonClose.onclick = () => {
        dashboard.close()
    }
}