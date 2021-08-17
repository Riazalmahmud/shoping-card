








// phone event Increase decrage 
document.getElementById('phone-plus').addEventListener('click', function () {


});
document.getElementById('phone-minus').addEventListener('click', function () {

});

// handale event incrace decrace 


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