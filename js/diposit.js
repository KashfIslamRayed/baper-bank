// step--1
document.getElementById('btn-deposit').addEventListener('click',function(){

    // step--2
    const depositField = document.getElementById('new-deposit');
    const newDepositAmount = parseFloat(depositField.value);
    
        // step--7
        depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number;');
        return;
    }

    // step--3
    const depositMoney = document.getElementById('deposit-money');
    const previousDepositTotal = parseFloat(depositMoney.innerText);

    // step--4
    depositMoney.innerText = previousDepositTotal + newDepositAmount;

    // step--5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step--6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})