function calculateWeight() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = parseFloat(weight) / Math.pow(parseFloat(height), 2);
    document.getElementById("bmiResult").innerHTML = result;
}