




var numberArray = [];

function AddNumber(){
    var inputNumber = document.getElementById("userNumber").value;
    var iNumber = Number(inputNumber);
    numberArray.push(iNumber);
    document.getElementById("userNumber").value = " ";
    ShowTotal();
}


function ShowTotal(){
    // to display out what is in array
    var total = 0;
    console.log("Numbers Entered: ");
    for(var i = 0; i < numberArray.length; i++){
        // console.log("numberArray[i] ", numberArray[i]);
        total += numberArray[i];
        console.log(numberArray[i]);
    }
    console.log("_____________________");
    console.log("Total of all numbers: ", total);
}

function ResetButton(){
    numberArray.length = 0;
    console.log("Number Array Reset")
}

















