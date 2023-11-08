const input = document.querySelector('#validation-input');
const dataInputValue = parseInt(input.dataset.length);

input.addEventListener("input", (event) => {
    const inputValue = event.target.value;

})


input.addEventListener("blur", () => {

    const inputValue = input.value

    if (inputValue.length >= dataInputValue) {
        input.classList.remove('invalid')
        input.classList.add('valid')
        } else {
        input.classList.remove('valid')
         input.classList.add('invalid')
    }
});
