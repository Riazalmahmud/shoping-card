





document.getElementById('pluse-btn').addEventListener('click', function () {
    const pluseFlied = document.getElementById('pluse-flied');
    const pluseText = pluseFlied.value;
    pluseFlied.value = parseInt(pluseText) + 1;
    console.log('pluseText value', pluseText)

});

document.getElementById('case-minnus').addEventListener('click', function () {

    const pluseFlied = document.getElementById('pluse-flied');
    const pluseText = pluseFlied.value;
    pluseFlied.value = parseInt(pluseText) - 1;
    console.log('pluseText value', pluseText)

})