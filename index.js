 const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";

 mainHeading.style.color = "orange";

 const headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = "green";

 headerDiv.style.borderBottom = "2px solid orange";

 const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanksDiv = document.getElementById("thanks");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Please visit us again";
thanksDiv.appendChild(newParagraph);

const fruitItems = document.querySelectorAll(".fruit");

fruitItems[2].style.backgroundColor = "yellow";

fruitItems.forEach((fruit) => {
    fruit.style.fontWeight = "bold";
});