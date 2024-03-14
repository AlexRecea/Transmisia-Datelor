// console.log("welcome to data transmision");

// document.getElementById("message").innerHTML = "Message from JavaScroipt";

// var sum = 10;
// var name = "Alex";
// var isActive = true;
// var user = { id: 1, name: "Bibi", age: 16, };

// console.log(user.name);
// console.log(user.age);
// console.log(user.id);

// function print(message) {
//     console.log(message);
// }
// print("hello");

document.getElementById("n"), addEventListener('input', inputSum);
function inputSum() {
    var inputNumber = parseInt(document.getElementById("n").value);
    sum(inputNumber);
}

function sum(n) {
    if (typeof n === 'undefined') return "n is undefined";
    var sum = 0;
    for (var i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}


