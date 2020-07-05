function fizzBuzz(n) {
    // Finding value multiply of 3 and 5 will replace with fizz and buzz
    let result = 0;
    for (let i = 0; i < n;) {
        result = (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i;
    }
    return result;
}
