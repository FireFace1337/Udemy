// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

firstTask();

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 9; i--) {
        if (i === 13) {
            break;
        } else {
            console.log(i);
        }
    }
}

secondTask();

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i < 11; i = i + 2) {
        console.log(i);
    }
}

thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
        } else {
            console.log(i);
            i++;
        }
    }
}

fourthTask();

// Место для пятой задачи

function fifthTask() {
    let arrayOfNumbers = [];
    
    let j = 5;
    for (let i = 0; i < 6; i++) {
        arrayOfNumbers[i] = j;
        j++;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
    
fifthTask();

