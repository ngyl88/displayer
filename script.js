function getNumber() {
    const inputVal = document.querySelector('input#number').value;
    console.log('Input number is', inputVal);
    document.querySelector('div#display').textContent = inputVal;
}