








// phone event Increase decrage 
function getPhoneUpdate(isIncreasePhone) {

    const phoneField = document.getElementById('phone-field');
    let phoneText = phoneField.value;

    if (isIncreasePhone == true) {
        phoneText = parseInt(phoneText) + 1;
    }
    else if (phoneText > 0) {
        phoneText = parseInt(phoneText) - 1;
    }
    phoneField.value = phoneText;



    // update phone  price 

    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneText * 1219;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    getPhoneUpdate(true)

});

document.getElementById('phone-minus').addEventListener('click', function () {
    getPhoneUpdate(false)
});

//casing handale event incrace decrace 


function getCasingUpdate(isIncrease) {

    const casingNumber = document.getElementById('casing-number');
    let casingNumberText = casingNumber.value;

    if (isIncrease == true) {
        casingNumberText = parseInt(casingNumberText) + 1;
    }
    else if (casingNumberText > 0) {
        casingNumberText = parseInt(casingNumberText) - 1;
    }
    casingNumber.value = casingNumberText
    // update casing 
    const casingPrice = document.getElementById('casing-price');
    casingPrice.innerText = casingNumberText * 59;



}
document.getElementById('casing-plus').addEventListener('click', function () {
    getCasingUpdate(true);
});

document.getElementById('casing-minus').addEventListener('click', function () {
    getCasingUpdate(false);

});