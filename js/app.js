const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationCardContainer = document.getElementById('donationCardContainer');
const historyCardContainer = document.getElementById('historyCardContainer');

const myTotalMoney = document.getElementById('myTotalMoney');

// Donate Card - 1
const donateMoney1 = document.getElementById('donateMoney1');
const donateMoneyInputField1 = document.getElementById('donateMoneyInput1');
const donateMoneyBtn1 = document.getElementById('donateMoneyButton1');

// Donate Card - 2
const donateMoney2 = document.getElementById('donateMoney2');
const donateMoneyInputField2 = document.getElementById('donateMoneyInput2');
const donateMoneyBtn2 = document.getElementById('donateMoneyButton2');

// Donate Card - 3
const donateMoney3 = document.getElementById('donateMoney3');
const donateMoneyInputField3 = document.getElementById('donateMoneyInput3');
const donateMoneyBtn3 = document.getElementById('donateMoneyButton3');


// Invalid Amount modal
const invalidAmountModal = document.getElementById('invalidAmount');

// Insufficient Amount Modal
const insufficientAmountModal = document.getElementById('insufficientModal');


// Add and remove buttons classes functionality
function buttonClassesAddRemove(addButton, removeButton) {
    addButton.classList.add('bg-[#B4F461]', 'text-black');
    addButton.classList.remove('text-gray-600', 'border-2');

    removeButton.classList.remove('bg-[#B4F461]', 'text-black');
    removeButton.classList.add('text-gray-600', 'border-2');
}


// Donation button
donationBtn.addEventListener('click', () => {

    buttonClassesAddRemove(donationBtn, historyBtn);
    donationCardContainer.classList.remove('hidden');
    historyCardContainer.classList.add('hidden');
    historyCardContainer.classList.remove('flex');
});


// History button
historyBtn.addEventListener('click', () => {
    buttonClassesAddRemove(historyBtn, donationBtn);
  
    donationCardContainer.classList.add('hidden');
    historyCardContainer.classList.add('flex');
    historyCardContainer.classList.remove('hidden');
  
});


// Input Field Validation functionality
function inputFieldValidation(amount, amountString) {
    
    if(amount <= 0) {
        return false;
    }
    
    let isValidNumber = !isNaN(Number(amountString)) && amountString.trim() !== '';
    if(isValidNumber) {
        return true;
    }
    return false;
}


// Money Validation functionality
function moneyValidation(amount, myMoney){
    if(amount > myMoney) {
        return false;
     }
    return true; 
}


// Update History card 
function updateHistory(amount, donateTitle) {

    const currentDate = new Date();
    const formattedDate = currentDate.toString();
    // new Date().toLocaleDateString()

    const div = document.createElement('div');
    div.classList.add('flex', 'flex-col', 'rounded-lg', 'border-2', 'p-7', 'gap-3');
    div.innerHTML = `
    <h1 class="font-bold text-black">
        <span>${amount.toFixed(2)}</span> Taka is ${donateTitle}
    </h1>
    <p class="text-gray-600">
        Date : ${formattedDate}
    </p>
    `;

    historyCardContainer.appendChild(div);
}


// Calculate Donation and Update Money
function calculateDonation(donateMoney, newAmount, myTotalMoney, myMoney, donateMoneyInputField) {
    donateMoney.innerText = newAmount.toFixed(2);
    myTotalMoney.innerText = myMoney.toFixed(2);
    donateMoneyInputField.value = '';
}


// Get Donate Title
function getDonateTtile(donateMoneyBtn) {
    return donateMoneyBtn.parentNode.parentNode.children[1].innerText;
}


// Calculate new Amount
function calculateNewAmount(amount, donateMoney) {
    const currentDonateAmount = parseFloat(donateMoney.innerText);
    return amount + currentDonateAmount;
}


// Donate Money button - 1
donateMoneyBtn1.addEventListener('click', () => {
    const amountString = donateMoneyInputField1.value;
    const amount = parseFloat(donateMoneyInputField1.value);
    let myMoney = parseFloat(myTotalMoney.innerText);

    if(!inputFieldValidation(amount, amountString)) {
        // alert('Please enter a valid amount');
        invalidAmountModal.showModal();
        return;
    }

    if(!moneyValidation(amount, myMoney)) {
        // alert('Insufficient funds');
        insufficientAmountModal.showModal();
        return;
    }

    const donateTitle = getDonateTtile(donateMoneyBtn1);

    myMoney -= amount;   

    const newDonateAmount = calculateNewAmount(amount, donateMoney1);
    
    calculateDonation(donateMoney1, newDonateAmount, myTotalMoney, myMoney, donateMoneyInputField1);
    updateHistory(amount, donateTitle);

    document.getElementById('my_modal').showModal();
});


// Donate Money button - 2
donateMoneyBtn2.addEventListener('click', () => {
    const amountString = donateMoneyInputField2.value;
    const amount = parseFloat(donateMoneyInputField2.value);
    let myMoney = parseFloat(myTotalMoney.innerText);

    if(!inputFieldValidation(amount, amountString)) {
        // alert('Please enter a valid amount');
        invalidAmountModal.showModal();
        return;
    }

    if(!moneyValidation(amount, myMoney)) {
        // alert('Insufficient funds');
        insufficientAmountModal.showModal();
        return;
    }

    const donateTitle = getDonateTtile(donateMoneyBtn2);

    myMoney -= amount;   

    const newDonateAmount = calculateNewAmount(amount, donateMoney2);
    
    calculateDonation(donateMoney2, newDonateAmount, myTotalMoney, myMoney, donateMoneyInputField2);
    updateHistory(amount, donateTitle);

    document.getElementById('my_modal').showModal();
});


// Donate Money button - 3
donateMoneyBtn3.addEventListener('click', () => {
    const amountString = donateMoneyInputField3.value;
    const amount = parseFloat(donateMoneyInputField3.value);
    let myMoney = parseFloat(myTotalMoney.innerText);

    if(!inputFieldValidation(amount, amountString)) {
        // alert('Please enter a valid amount');
        invalidAmountModal.showModal();
        return;
    }

    if(!moneyValidation(amount, myMoney)) {
        // alert('Insufficient funds');
        insufficientAmountModal.showModal();
        return;
    }

    const donateTitle = getDonateTtile(donateMoneyBtn3);

    myMoney -= amount;   

    const newDonateAmount = calculateNewAmount(amount, donateMoney3);
    
    calculateDonation(donateMoney3, newDonateAmount, myTotalMoney, myMoney, donateMoneyInputField3);
    updateHistory(amount, donateTitle);

    document.getElementById('my_modal').showModal();
});
