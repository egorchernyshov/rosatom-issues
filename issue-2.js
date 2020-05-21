/*
 * Задача 2.
 *
 * Вход:
 * const twoWeeks = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
 *
 * Нужна функция, которая выводит 'Sunday' на каждый седьмой день.
 */

/**
 * @param {int[]} days
 */
function printAllSundaysByDays(days) {
    for (let i = days.length; i > 0; i--) {
        if (0 === (days[i] % 7)) {
            console.log('Sunday');
        }
    }
}

const twoWeeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
printAllSundaysByDays(twoWeeks);
// Sunday
// Sunday
