//Sayının mükemmel sayı olup olmadığını bildirir.
let isPerfect = function (number) {
    if (number <= 0) return false;

    let sumNumbers = 0;

    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            sumNumbers = sumNumbers + i;
        }
    }
    return sumNumbers == 2 * number;
}

//1000'e kadarki tüm mükemmel sayıları listeleyen fonksiyon
let getPerfectNumbersUpToBe1000 = function() {
    console.log("Perfect numbers up to be 1000 values:");
    for (let number = 0; number <= 1000; number++) {
        if (isPerfect(number)) {
            console.log(number)
        }
    }
}

getPerfectNumbersUpToBe1000() //Answer: 6, 28, 496