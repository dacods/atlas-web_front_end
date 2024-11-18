function countPrimeNumbers() {
    let count = 0;
    
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

let startTime = performance.now();
setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
    let stopTime = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was ${(stopTime - startTime)} milliseconds.`);
}, 0)
