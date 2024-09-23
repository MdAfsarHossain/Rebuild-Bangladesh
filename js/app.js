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
    
    if(amount < 0) {
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