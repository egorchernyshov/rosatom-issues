/**
 * @see https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9A%D0%B0%D1%80%D0%B0%D1%86%D1%83%D0%B1%D1%8B
 *
 * @param {number} A
 * @param {number} B
 *
 * @returns {number}
 */
function karatsubaMultiplication(A, B) {
    if (A < 10 || B < 10) {
        return A * B;
    }

    /**
     * @private
     *
     * @param {number} number
     *
     * @returns {string}
     */
    this._toSting = function (number) {
        const str = String(number);
        return 0 !== (str.length % 2)
            ? '0' + str
            : str;
    }

    let AString = this._toSting(A);
    let BString = this._toSting(B);

    const n = Math.min(AString.length, BString.length);
    const half = Math.round(n / 2);
    const zeros = '0'.repeat(half);

    const AArray = AString.split('');
    const BArray = BString.split('');

    const ALeft = Number(AArray.slice(0, half).join(''));
    const ARight = Number(AArray.slice(half).join(''));

    const BLeft = Number(BArray.slice(0, half).join(''));
    const BRight = Number(BArray.slice(half).join(''));

    const ALeftBLeft = karatsubaMultiplication(ALeft, BLeft);
    const ARightBRight = karatsubaMultiplication(ARight, BRight);

    return Number(String(ALeftBLeft) + zeros + zeros)
        + Number(String(karatsubaMultiplication(ALeft + ARight, BLeft + BRight) - ALeftBLeft - ARightBRight) + zeros)
        + ARightBRight;
}

console.log(karatsubaMultiplication(123456789, 234567890));
// 28958998501905210

console.log(karatsubaMultiplication(1234, 2345));
// 2893730

console.log(karatsubaMultiplication(11, 11));
// 121
