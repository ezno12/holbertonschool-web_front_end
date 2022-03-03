function countPrimeNumbers() {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        let flag = true;

        for(let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
            }
        }

        if (flag) {
            counter +=1;
        }
    }
    return counter + 1;
}
let t0 = performance.now();
for ( i = 0; i < 100; ++i) {
    countPrimeNumbers();
}
let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) +  " milliseconds.");