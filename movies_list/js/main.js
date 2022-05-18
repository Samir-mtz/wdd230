

let button = document.querySelector('#add');
let list = document.querySelector('ul');
let input = document.querySelector('input');

let add = () => {
    let Item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = Item;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listItem.style="text-align: center";
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
}

button.addEventListener("click", add);

