var Counter = function () {
    var privateCounter = 0
    function changeBy(val) {
        privateCounter += val
    }
    return {
        increment: function () {
            changeBy(1)
        },
        decrement: function () {
            changeBy(-1)
        },
        value: function () {
            return privateCounter
        }
    }
}

var Counter1 = Counter()
var Counter2 = Counter()
Counter1.increment()
Counter1.increment()
Counter2.increment()

console.log(Counter1.value())
console.log(Counter2.value())