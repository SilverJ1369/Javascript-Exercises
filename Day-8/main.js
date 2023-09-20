//Exercise 1
const myDiv = document.querySelector('#myDiv');

function changeDivBgColor() {
    myDiv.style.backgroundColor = '#d0c64a';
}
changeDivBgColor();

const pArray = document.querySelectorAll('p');
pArray.forEach((pItem) => console.log(pItem.innerText));

//Exercise 4
const myButton = document.querySelector("button");
myButton.addEventListener('click', clickedAlert);
function clickedAlert() {
    alert("Button was Clicked!");
}

//Exercise 5
const inputText = document.querySelector('#textInput');
const outputText = document.querySelector('#textDisplay');


inputText.addEventListener('input', recordInput);

function recordInput() {
    outputText.innerText = inputText.value;
}

//Exercise 6
const items = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'}
];

const bulletList = document.querySelector('#itemList');
items.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerText = item.name;
    bulletList.appendChild(newLi);
    bulletList.style.backgroundColor = "gray";
})