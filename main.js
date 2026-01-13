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

verifyDataUser()
totalChange()
openDash()
closeDash()

totalEdit.onclick = () => {
    totalValue.focus()
    totalValue.disabled = false;
}

totalValue.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        totalValue.blur()
        totalValue.disabled = true
        totalChange()
    }
  }
)

function totalChange() {
    addExpense.addEventListener('click', () => {
       if (input.value !== "") {
        typeSave = input.value
        expenseChange()
        calculate = parseFloat(totalValue.value) - parseFloat(expenseValue.value)
        totalValue.value = Number(calculate.toFixed(2))
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
    valueSave[0] += parseFloat(expenseValue.value)
    break

    case 'Mercado':
        valueSave[1] += parseFloat(expenseValue.value)
    break

    case 'Uber':
        valueSave[2] += parseFloat(expenseValue.value)
    break

    case 'Lanche':
        valueSave[3] += parseFloat(expenseValue.value)
    break

    case 'Presente':
        valueSave[4] += parseFloat(expenseValue.value)
    break

    case 'Assinaturas':
        valueSave[5] += parseFloat(expenseValue.value)
    break

    case 'Outros':
        valueSave[6] += parseFloat(expenseValue.value)
    break
  }
        dashboardUpdate()
}

function saveDataUser () {
    localStorage.setItem("expenseData", valueSave)
    localStorage.setItem("userTotal", totalValue.value)
}

function verifyDataUser() {
    if(!localStorage.getItem('expenseData') && !localStorage.getItem('userTotal')) {
        totalValue.disabled = false;
        totalValue.focus();

    } else {
        for (let i = 0; i<valueSave.length; i++) {
           valueSave[i] = parseInt(localStorage.getItem('expenseData').split(',')[i])
        }

        dashboardUpdate()
        totalValue.value = localStorage.getItem('userTotal')
    }
}

function closeDash() {
    buttonClose.onclick = () => {
        dashboard.close()
    }
}

function dashboardUpdate() {
        expenses.innerHTML = `
        <li>Contas - $${valueSave[0].toFixed(2)}</li>
        <li>Mercado - $${valueSave[1].toFixed(2)}</li>
        <li>Uber - $${valueSave[2].toFixed(2)}</li>
        <li>Lanche - $${valueSave[3].toFixed(2)}</li>
        <li>Presente - $${valueSave[4].toFixed(2)}</li>
        <li>Assinaturas - $${valueSave[5].toFixed(2)}</li>
        <li>Outros - $${valueSave[6].toFixed(2)}</li>`
}