const input = document.querySelector('#input-field');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    //const ul = document.createElement('ul');
    const li = document.createElement('li');
    const messageBox = document.querySelector('#message-box');

    //ul.appendChild(li);
    
    const name = input.value;
    var num = name.length - 1;
    var print = '';

    for (let i = 0; i < name.length; i++) {
        console.log(name[num]);
        print = name[num];
        num = num - 1;
        li.textContent = `${print}`;
        messageBox.appendChild(li);
    }
    
    //messageBox.appendChild(ul);
})
