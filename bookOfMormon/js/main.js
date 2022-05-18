

let button = document.querySelector('#add');
let list = document.querySelector('ul');
let input = document.querySelector('input');

let add = () => {
    let Item = input.value;

    if(input.value!==""){
        input.value = '';
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('img');
        const listA = document.createElement('a');

        listItem.appendChild(listText);
        listText.textContent = Item;
        listBtn.src = 'images/exit.png';
        listA.appendChild(listBtn);
        listItem.appendChild(listA);
        listItem.style="text-align: center";
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        input.focus();
    }else{
        alert("Please enter a movie name");
        input.focus();
    }
    
}
button.addEventListener("click", add);


