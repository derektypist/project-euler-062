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

/*
    Function to return the smallest cube for which exactly n permutations of
    its digits are cube
    cubicPermutations(2) returns 125
    cubicPermutations(3) returns 41063625
    cubicPermutations(4) returns 1006012008
    cubicPermutations(5) returns 127035954683
*/
function cubicPermutations(n) {
    function getDigits(num) {
        const digits = [];
        while (num > 0) {
            digits.push(num%10);
            num = Math.floor(num/10);
        }
        return digits;
    }

    function getCube(num) {
        return num**3;
    }

    const digitsToCubeCounts = {};
    let curNum = 1;
    let digits;
    while (!digitsToCubeCounts[digits] || digitsToCubeCounts[digits].count < n) {
        const cube = getCube(curNum);
        digits = getDigits(cube).sort().join();
        if (!digitsToCubeCounts[digits]) {
            digitsToCubeCounts[digits] = {
                count: 1,
                smallestCube: cube
            };
        } else {
            digitsToCubeCounts[digits].count += 1;
        }
        curNum++;
    }
    return digitsToCubeCounts[digits].smallestCube;
}