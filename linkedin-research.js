// Getting Needed Info from the page
const locationElement = document.getElementsByClassName("jobs-details-top-card__bullet");
const locationText = locationElement[0].innerText;


// Adding the button
const jobHeaderContainer = document.getElementsByClassName("jobs-details-top-card__content-container")[0];
const researchButton = document.createElement('a');
researchButton.setAttribute("id", "research-button")
researchButton.setAttribute("href", "https://www.google.com/maps/place/" + locationText)
let textNode = document.createTextNode('Water is gold.. but better');
researchButton.style.background = "blue"
researchButton.style.color = "white"
researchButton.style.padding = "5px"
researchButton.appendChild(textNode);
jobHeaderContainer.appendChild(researchButton);
