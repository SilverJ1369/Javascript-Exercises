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