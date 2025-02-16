let totalValue = document.getElementById('valor')
const totalEdit = document.getElementById('editValue')
const addExpense = document.getElementById('addExpense')
let input = document.querySelector('.input')
let expenseValue = document.querySelector('.value')
let calculate = 0
let typeSave
let valueSave = [0, 0, 0, 0, 0, 0, 0]
const dashview = document.getElementById('dashview')
const dashboard = document.getElementById('dashboard')
let expenses = document.getElementById('expenselist')
const buttonClose = document.getElementById('close')

verifyUserData()

totalEdit.addEventListener('click', () => {
    totalValue.focus()
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
        calculate = parseFloat(totalValue.value) - parseFloat(expenseValue.value)
        totalValue.value = calculate
        saveDataUser()  
        input.value = ''
        expenseValue.value = ''
       } 
       if(isNaN(totalValue.value)) {
        alert("PREENCHA APENAS COM NÚMEROS!")
        totalValue.value = ''
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

function saveDataUser () {
    localStorage.setItem("expenseData", valueSave)
    localStorage.setItem("userTotal", totalValue.value)
}

function verifyUserData() {
    if(!localStorage.getItem('expenseData') && !localStorage.getItem('userTotal')) {
        alert("PREENCHA COM SEU VALOR TOTAL!")

    } else {
        valueSave[0] = parseInt(localStorage.getItem('expenseData').split(',')[0])
        valueSave[1] = parseInt(localStorage.getItem('expenseData').split(',')[1])
        valueSave[2] = parseInt(localStorage.getItem('expenseData').split(',')[2])
        valueSave[3] = parseInt(localStorage.getItem('expenseData').split(',')[3])
        valueSave[4] = parseInt(localStorage.getItem('expenseData').split(',')[4])
        valueSave[5] = parseInt(localStorage.getItem('expenseData').split(',')[5])
        valueSave[6] = parseInt(localStorage.getItem('expenseData').split(',')[6])

        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`

        totalValue.value = localStorage.getItem('userTotal')
    }
}

function closeDash() {
    buttonClose.onclick = () => {
        dashboard.close()
    }
}