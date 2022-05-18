const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function () {

    var favchap = document.querySelector('#favchap').value;
    if (favchap.length >= 1) {
        const liElement = document.createElement('li');
        liElement.textContent = favchap;
        list.appendChild(liElement);

        const delButton = document.createElement('button');
        delButton.textContent = 'X';
        delButton.addEventListener('click', function () {
            list.removeChild(liElement);
            list.removeChild(delButton);
        })
        list.appendChild(delButton);
        }
        input.focus()
        input.value = ''
        
        
         
        });



