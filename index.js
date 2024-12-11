let countEL = document.getElementById("count-el");
let records = document.getElementById("records");
let count = 0;

function increment() {
	count += 1;
	countEL.textContent = count;
}

function save() {
	let latestCount = count + " - ";
	records.textContent += latestCount;
	count = 0;
	countEL.textContent = count;
}
