// Write your code below:
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";

// 2. Change the font color of 'Fruit World' from black to orange
mainHeading.style.color = "orange";

// 3. Change background color of div with id = "header" to green color
const headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = "green";

// 4. Add a bottom border of orange color to div with id = "header"
headerDiv.style.borderBottom = "2px solid orange";

// 5. Change the font color of 'Fruits In Basket' from black to green
const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanksDiv = document.getElementById("thanks");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Please visit us again";
thanksDiv.appendChild(newParagraph);
