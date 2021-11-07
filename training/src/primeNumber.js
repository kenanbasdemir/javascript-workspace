//Fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığı yazılır.
//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
function findPrime(...numbers) {
    for(let i=0; i < numbers.length; i++) {
        let number = numbers[i];
        if(isPrime(number)){
            console.log(`Number: ${number} is prime.`);
        } else {
            console.log(`Number: ${number} is not prime.`);
        }
    }
} 

//Sayının asal sayı olup olmadığını bildirir.
let isPrime = function(number){
    if(number <= 1) return false;
    if(number == 2) return true;
    if(number % 2 == 0) return false;

    let numberSquare = Math.floor(Math.sqrt(number));
    
    for(let i=2; i<=numberSquare; i++) {
        if(number %i == 0){
            return false;
        }
    }
    return true;
}

//1000'e kadarki tüm asal sayıları listeleyen
let getPrimeNumbersUpToBe1000 = () => {
    console.log("Prime numbers up to be 1000 values:");
    for(let number=0; number<=1000; number++){
        if(isPrime(number)){
            console.log(number)
        }
    }
}

findPrime(2,5,8,21, 13)
findPrime(3,5)

getPrimeNumbersUpToBe1000()