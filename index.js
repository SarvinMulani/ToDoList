const inputBox = document.querySelector('.js-input');
const list_container = document.querySelector('.listContainer');

function addTask() {
    if (inputBox.value === '') {
        alert('You must enter task before adding!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

list_container.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML = localStorage.getItem('data');
}

showTask();
