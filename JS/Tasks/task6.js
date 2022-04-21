// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    const neighboringNumbers = [];
    neighboringNumbers[0] = number - 1;
    neighboringNumbers[1] = number;
    neighboringNumbers[2] = number + 1;
    return neighboringNumbers;
}

// Место для третьей задачи
function getMathResult(number, numberRepeat) {
    let result = number;
    let progressionElement = number;
    if (typeof(numberRepeat) != 'number' || numberRepeat <= 0) {
        return number;
    } else {
        for (let i = 0; i < numberRepeat - 1; i++) {
            progressionElement += number;
            result += '---' + progressionElement;
        }
        return result;
    }
}
