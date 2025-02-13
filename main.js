let valorTotal = document.getElementById('valor')
const totalEdit = document.getElementById('editValue')
const addExpense = document.getElementById('addExpense')
let input = document.querySelector('.input')
let expenseValue = document.querySelector('.value')
let calculate = 0
let typeSave
const valueSave = [0, 0, 0, 0, 0, 0, 0]
const dashview = document.getElementById('dashview')
const dashboard = document.getElementById('dashboard')
let expenses = document.getElementById('expenselist')
const buttonClose = document.getElementById('close')

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

totalChange()

function totalChange() {
    addExpense.addEventListener('click', () => {
       if (input.value !== "") {
        typeSave = input.value
        expenseChange()
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

openDash ()
closeDash ()


function openDash() {
    dashview.onclick = () => {
        dashboard.showModal()
    }
}

function expenseChange() {
  switch (typeSave) {
   case 'Contas':
    valueSave[0] += parseInt(expenseValue.value)
    expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Mercado':
        valueSave[1] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Uber':
        valueSave[2] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Lanche':
        valueSave[3] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Presente':
        valueSave[4] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Assinaturas':
        valueSave[5] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break

    case 'Outros':
        valueSave[6] += parseInt(expenseValue.value)
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
    break
  }
}

function closeDash() {
    buttonClose.onclick = () => {
        dashboard.close()
    }
}