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
let time = 0;
setTimeout(() => {console.log("Execution time of printing countPrimeNumbers was " + time +  " milliseconds.");})
let t0 = performance.now();
for ( i = 0; i < 100; ++i) {
    countPrimeNumbers();
}
let t1 = performance.now();
time = t1 - t0;
