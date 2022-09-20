const input = document.querySelector('#input-field');
const input2 = document.querySelector('#input-field2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const num = input.value;
    const num2 = input2.value;
    const c = Math.sqrt(num * num + num2 * num2)
    if (Number.isNaN(c)) {
        alert('you are stupid');
    }
    else {
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Hypotenuse: ${c}`;
    messageBox.appendChild(message);
    }
})