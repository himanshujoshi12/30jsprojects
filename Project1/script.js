
function updateResult(value) {
    document.getElementById("result").value = value;
}


function appendToResult(value) {
    document.getElementById("result").value += value;
}


function clearResult() {
    updateResult("");
}

function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        updateResult(result);
    } catch (error) {
        updateResult("Error");
    }
}