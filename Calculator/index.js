const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const ans = eval(display.value);
        display.value = ans;
    }
    catch (error) {
        display.value = "Error";
    }
}