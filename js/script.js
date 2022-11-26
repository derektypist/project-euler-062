// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num<2 || num>5 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 5.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Smallest cube for which exactly ${num} permutations of its digits are cube is ${cubicPermutations(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}