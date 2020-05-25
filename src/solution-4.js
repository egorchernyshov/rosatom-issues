function karatsubaMultiplication(A, B) {
    if (A < 10 || B < 10) {
        return A * B;
    }

    const toSting = function (number) {
        const str = String(number);
        return str.length % 2 !== 0
            ? '0' + str
            : str;
    }

    let AString = toSting(A);
    let BString = toSting(B);

    let n = Math.min(
        AString.length,
        BString.length
    );

    const half = Math.round(n / 2);

    const AArray = AString.split('');
    const BArray = BString.split('');

    const ALeft = Number(AArray.slice(0, half).join(''));
    const ARight = Number(AArray.slice(half).join(''));

    const BLeft = Number(BArray.slice(0, half).join(''));
    const BRight = Number(BArray.slice(half).join(''));

    const k = karatsubaMultiplication(ALeft + ARight, BLeft + BRight);
    const ALeftBLeft = karatsubaMultiplication(ALeft, BLeft);
    const ARightBRight = karatsubaMultiplication(ARight, BRight);

    return Number(String(ALeftBLeft) + '0'.repeat(half) + '0'.repeat(half))
        + Number(String(k - ALeftBLeft - ARightBRight) + '0'.repeat(half))
        + ARightBRight;
}

console.log(karatsubaMultiplication(123456789, 234567890));
// 28958998501905210

console.log(karatsubaMultiplication(1234, 2345));
// 2893730

console.log(karatsubaMultiplication(11, 11));
// 121