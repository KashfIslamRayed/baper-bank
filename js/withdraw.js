// step--1
document.getElementById('btn-withdraw').addEventListener('click',function(){

    // step--2
    const withdrawField = document.getElementById('new-withdraw');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    // step--7
    withdrawField.value = ''; 

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number;');
        return;
    }

    // step--3
    const withdrawMoney = document.getElementById('withdraw-money');
    const previousWithdraw = parseFloat(withdrawMoney.innerText);
    
    // step--5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insufficient balance.')
        return;
    }
    
    // step--4
    withdrawMoney.innerText = previousWithdraw + newWithdrawAmount;

    // step--6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})