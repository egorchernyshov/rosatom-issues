function move(array, from, to) {
    if (from === to) {
        return array;
    }

    if (from <= 0) {
        throw Error('Array should starts at 1');
    }

    if (to >= array.length) {
        throw Error('Position number is out of range');
    }

    const clonedArray = array.slice(0);
    const oneElementArray = clonedArray.splice(from - 1, 1);

    clonedArray.splice(to - 1, 0, oneElementArray[0]);

    return clonedArray;
}

/*
 * Пример приведён с ошибкой. Должно быть:
 *  - либо вызов: move(arr, 1, 4)
 *  - либо результат вызова move(arr, 1, 3): ['B', 'C', 'A', 'D', 'E', 'F', 'G', 'H']
 */
// const testDataSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// console.log(move(testDataSet, 1, 3)); // [ 'B', 'C', 'A', 'D', 'E', 'F', 'G', 'H' ]
// console.log(move(testDataSet, 5, 1)); // [ 'E', 'A', 'B', 'C', 'D', 'F', 'G', 'H' ]
// console.log(move(testDataSet, 0, 3)); // Error: Array should starts at 1
// console.log(move(testDataSet, 1, 100)); // Error: Position number is out of range

module.exports = move;