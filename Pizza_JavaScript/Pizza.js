function getReceipt() {
    //This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal= 0;
    var sizeArray= document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; //Would grab checked items, value i.e. 'Medium Pizza'
            text1 = text1 + selectedSize + "<br>";
        }
    }
    //Finds and assigns sizeTotal for selected Pizza sizes
    if (selectedSize === "Mini Pizza") {
        sizeTotal = 5;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //Sets sizeTotal as price of pizza
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0; //Count of elements in selected toppings array
    var selectedTopping = []; //Selected Toppings array
    var toppingArray = document.getElementsByClassName("toppings"); //Array of topping from HTML page
    for (var j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //Adds to array checked toppings
            console.log("selected topping item: (" + toppingArray[j].value + ")"); //Outputs to console selected topping
            text1 = text1 + toppingArray[j].value + "<br>"; //Add to text1 string, topping selected. Used in displaying finished orderon webpage
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { //Gives one topping for free as discount
        toppingTotal = (toppingCount - 1)
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //Add pizza cost to toppings cost
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+ ".00" + "</strong></h3>";
};