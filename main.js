let valorTotal = document.getElementById('valor')
let totalEdit = document.getElementById('editValue')
let addExpense = document.getElementById('addExpense')
let inputA = document.querySelector('.inputA')
let inputB = document.querySelector('.inputB')
let inputC = document.querySelector('.inputC') 
let reserveInput
let expenseValueA = document.querySelector('.valueA')
let expenseValueB = document.querySelector('.valueB')
let expenseValueC = document.querySelector('.valueC')
let data = []

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
        data.push(inputC.value)
        inputC.value = inputB.value
        inputB.value = inputA.value
        inputA.value = ''
        inputA.focus()
        expenseValueC.value = expenseValueB.value
        expenseValueB.value = expenseValueA.value
        expenseValueA.value = ''
    })
}

