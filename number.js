let number = document.getElementById("half-input");
let numberOutput = document.getElementById("half-button");

numberOutput.addEventListener("click", half);

function half() {
    let inpNumber = num.value;
    let newNumber = inpNumber / 2;
    alert( newNumber + " is half of" + inpNumber);
}
