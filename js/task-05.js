const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    span.textContent = inputValue;

    if (inputValue === "") {
        span.textContent = "Anonymous"
    }
});
