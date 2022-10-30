let outputscren = document.getElementById("outputscreen");

function display(num) {
    outputscren.value += num;
}

function calculate() {
    try {
        outputscren.value = eval(outputscren.value);
    } catch (error) {
        alert("Invalid");
    }
}

function Clear() {
    outputscren.value = "";
}

function del() {

    outputscren.value = outputscren.value.slice(0, -1);
}