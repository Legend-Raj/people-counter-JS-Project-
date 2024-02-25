let count = 0;
let sab;

document.addEventListener("DOMContentLoaded", function() {
    sab = document.getElementById("docc1");
});

function Increment() {
    count += 1;
    document.getElementById("count").textContent = count;
}

function decrement() {
    if (count > 0) {
        count = count - 1;
        document.getElementById("count").textContent = count;
    }
}

function save() {
    let c = count + "-";
    sab.innerText += c;
    document.getElementById("count").textContent = 0;
    count = 0;
}
