// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
	count += 1;
	countEL.textContent = count;
}

function save() {
	let latestCount = count + " - ";
	saveEl.textContent += latestCount;
	count = 0;
	countEL.textContent = count;
}

// Welcome

// let welcomeEL = document.getElementById("welcome-el");
// let userName = "Wayne";
// let greeting = "Welcome back ";
// welcomeEL.innerText = greeting + userName;
// welcomeEL.innerText += " 👋";
