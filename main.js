let totalValue = document.querySelector('.balance')
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
totalChange()
openDash ()
closeDash ()

totalEdit.onclick = () => {
    totalValue.focus()
    totalValue.disabled = false;
}

totalValue.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        totalValue.blur()
        totalValue.disabled = true
    }
  }
)

addExpense.addEventListener('click', (event) => {
    event.preventDefault()
})

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
       })
}

function openDash() {
    dashview.onclick = () => {
        dashboard.showModal()
    }
}

function expenseChange() {
  switch (typeSave) {
   case 'Contas':
    valueSave[0] += parseInt(expenseValue.value)
    break

    case 'Mercado':
        valueSave[1] += parseInt(expenseValue.value)
    break

    case 'Uber':
        valueSave[2] += parseInt(expenseValue.value)
    break

    case 'Lanche':
        valueSave[3] += parseInt(expenseValue.value)
    break

    case 'Presente':
        valueSave[4] += parseInt(expenseValue.value)
    break

    case 'Assinaturas':
        valueSave[5] += parseInt(expenseValue.value)
    break

    case 'Outros':
        valueSave[6] += parseInt(expenseValue.value)
    break
  }
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0]},00</li>
        <li>Mercado - $${valueSave[1]},00</li>
        <li>Uber - $${valueSave[2]},00</li>
        <li>Lanche - $${valueSave[3]},00</li>
        <li>Presente - $${valueSave[4]},00</li>
        <li>Assinaturas - $${valueSave[5]},00</li>
        <li>Outros - $${valueSave[6]},00</li>`
}

function saveDataUser () {
    localStorage.setItem("expenseData", valueSave)
    localStorage.setItem("userTotal", totalValue.value)
}

function verifyUserData() {
    if(!localStorage.getItem('expenseData') && !localStorage.getItem('userTotal')) {
        totalValue.disabled = false;
        totalValue.focus();

    } else {
        for (let i = 0; i<valueSave.length; i++) {
           valueSave[i] = parseInt(localStorage.getItem('expenseData').split(',')[i])
        }

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