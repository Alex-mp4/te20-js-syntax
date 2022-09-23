const input = document.querySelector('#input-field');
const button = document.querySelector('button');

gurk.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        button.click();
    }
});

button.addEventListener('click', () => {
    const num = input.value;
    const c = num * 0.25;
    if (Number.isNaN(c)) {
        alert('you are stupid');
    }
    else {
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Moms: ${c}`;
    messageBox.appendChild(message);
    }
})