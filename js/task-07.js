const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const minVal = parseInt(input.getAttribute('min'));
const maxVal = parseInt(input.getAttribute('max'));

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
    const inputValue = event.target.value;
    if (inputValue < minVal) {
         input.value = minVal
    } else if (inputValue > maxVal) {
        input.value = maxVal;
    }
    
    text.style.fontSize = event.currentTarget.value + 'px';
}
