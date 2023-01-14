const counter = (function () {
    let counter = 0;

    function increment() {
        counter++;
    }

    function getCurrentCount() {
        return counter;
    }

    return {
        increment,
        getCurrentCount,
    }
})();

counter.increment();
console.log(counter.getCurrentCount())