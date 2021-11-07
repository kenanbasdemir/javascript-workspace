//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan fonksiyon
let isFriendNumber = function isFriendNumber(number1, number2) {
    let result = false;
    if ((number1 == number2) || (number1 <= 1 || number2 <= 1)) {
        console.log(`${number1} and ${number2} are not friend numbers`);
        return;
    }
    let number1SumValue = getFriendNumberValue(number1);
    let number2SumValue = getFriendNumberValue(number2);

    result = number1 == number2SumValue && number2 == number1SumValue;

    console.log(`${number1} and ${number2} are ${result ? "" : "not "}friend numbers`);
}

//Girilen sayının pozitif tam bölenlerinin toplamını bulan fonksiyon
let getFriendNumberValue = function (number) {
    let sumNumbers = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sumNumbers = sumNumbers + i;
        }
    }
    return sumNumbers;
}

isFriendNumber(220,283) //Answer: Numbers are not friend
isFriendNumber(220,284) //Answer: Numbers are friend