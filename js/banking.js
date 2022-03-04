//add event handler in deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);


    //pass the deposited amount to current deposit
    const currentDeposit = document.getElementById('current-deposit');
    const previousDepositeText = currentDeposit.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositTotal = previousDepositeAmount + newDepositAmount;
    currentDeposit.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    const newBalance = previousBalance + newDepositAmount;

    balanceTotal.innerText = newBalance;


    //clear the deposit input field
    depositInput.value = '';
})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const NewWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const NewWithdrawTotal = previousWithdrawAmount + NewWithdrawAmount;
    withdrawTotal.innerText = NewWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;


    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input field
    withdrawInput.value = '';
})