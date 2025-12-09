// ЗАВДАННЯ 1
const task1Btn = document.getElementById('task1-btn');
const task1Input = document.getElementById('task1-input');

task1Btn.addEventListener('click', () => {
    console.log("Завдання 1:", task1Input.value);
});


// ЗАВДАННЯ 3
const task3Input = document.getElementById('task3-input');
const task3Btn = document.getElementById('task3-btn');

task3Btn.addEventListener('click', () => {
    if (task3Input.type === "password") {
        task3Input.type = "text";
        task3Btn.textContent = "Приховати";
    } else {
        task3Input.type = "password";
        task3Btn.textContent = "Розкрити";
    }
});


// ЗАВДАННЯ 5
const place = document.getElementById('place');

window.addEventListener('click', (e) => {
    if (e.target === place) {
        console.log("Завдання 5: true (клік по зеленому прямокутнику)");
    } else {
        console.log("Завдання 5: false");
    }
});


// ЗАВДАННЯ 7
const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Завдання 7. Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});


// ЗАВДАННЯ 8
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const { elements: { email, password } } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("All form fields must be filled in");
        return;
    }

    const userData = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    console.log("Завдання 8:", userData);
    e.currentTarget.reset();
});


// ЗАВДАННЯ 9
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});


// ЗАВДАННЯ 10
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
const amountInput = document.getElementById('task10-input');

createBtn.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        amountInput.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    destroyBoxes(); 
    
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.marginTop = '5px';
        elements.push(div);
        size += 10;
    }
    
    boxesContainer.append(...elements);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}