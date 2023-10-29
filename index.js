//**Functionality **
//When the user clicks the "Add Number" button, the number they entered into the input field is added to the number bank.
//The number bank is not changed if the user enters a non-numeric value.
//The number bank displays all the numbers the user has entered.
//When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.
//When the "Sort All" button is clicked, all the numbers in the number bank are moved into either the odd or even category.
//The numbers are placed into the correct bucket based on whether they are odd or even.

//** Code Architecture **
//References to selected DOM elements are stored in variables.
//The event listeners are listening for appropriate events, such as `submit` and `click`.
//The numbers in the bank, odd category, and even category are stored in state.
//The DOM is accurately rendered to reflect the state.

// TODO: this file! :)
// State
const state = {
    numbers : [],
    odds: [],
    evens: [],
};

// *** References ***
const numberBank = document.querySelector("#numberBank output");
const oddBank = document.querySelector("#odds output");
const evenBank = document.querySelector("#evens output");

const form = document.querySelector("form");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

// Initial Render
render();

// TODO: Add event listener so that numbers are added when the form is submitted
// *** Event Listeners ***
form.addEventListener("submit", addNumber);
addNumber.value = "";
function addNumber(event) {
    event.preventDefault();
    // const itemValue = form.elements.grocery.value
    const number = form.elements.number.value;
    state.numbers.push(number);
    // Reset input value so it's empty after adding item   
    //console.log(number);
    render();
}

sortOneButton.addEventListener("click", (event) => {
    event.preventDefault();
    sortOne();
    render();
});

sortAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    sortAll();
    render();
});


// *** Render ***
function render() {
    // Render number on the Number Bank
    const startingNumber = state.numbers.join(', ');
    numberBank.textContent = startingNumber;
    console.log(startingNumber);
    numberBank.replaceChildren(...startingNumber);
     
    const oddNumbers = state.odds.join(', ');
    oddBank.textContent = oddNumbers;
    const evenNumbers = state.evens.join(', ');
    evenBank.textContent = evenNumbers;
  }
  

//*** Functions ****
function sortOne () {
    const  firstElement = state.numbers.shift();
    if (firstElement % 2 === 0){
        state.evens.push(firstElement);
    } else {
        state.odds.push(firstElement);
    }
   console.log(state.evens);
   console.log(state.odds);
}

function sortAll () {
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i]%2 == 0){
        state.evens.push(numbers[i]);
      }  else {
        state.odds.push(numbers[i]);
    }
    }
    //render();
}

