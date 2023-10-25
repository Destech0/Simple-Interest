document.querySelector("button").addEventListener("click", function() {
    var amount = parseInt(document.getElementById("amount").value);
    var rate = parseInt(document.getElementById("rate").value);
    var time = parseInt(document.getElementById("time").value);

    if (isNaN(amount) || isNaN(rate) || isNaN(time)) {
        alert("Please enter the valid numbers for all fields.");
        return;
    }

    var simpleInterest = (amount * rate * time) / 100;

    alert("The Simple Interest is " + simpleInterest + " answer.");
});