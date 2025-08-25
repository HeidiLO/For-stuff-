let single = document.getElementById("1Point");
let five = document.getElementById("5Point")
let ten = document.getElementById("10Point")
let output = document.getElementById("total");
let total = 0;

single.addEventListener("click", function () {
    let point = total += 1;
    output.textContent = point
});

five.addEventListener("click", function () {
    let points = total += 5;
    output.textContent = points
});

ten.addEventListener("click", function () {
    let tens = total += 10;
    output.textContent = tens
});