/**
 * @param {number} x
 * @param {number} y
 *
 * @constructor
 */
const Fraction = function (x, y) {
    this.math = {
        /**
         * @private
         *
         * @param {number} number
         *
         * @returns {array}
         */
        _dividers: function (number) {
            const dividers = [];

            for (let index = number; index > 0; index--) {
                if (0 === (number % index)) {
                    dividers.push(index);
                }
            }

            return dividers;
        },

        /**
         * @param {number} x
         * @param {number} y
         *
         * @returns {number}
         */
        greatestCommonDivisor: function (x, y) {
            const xDividers = this._dividers(x);
            const yDividers = this._dividers(y);

            let greatestCommonDivisor = 0;
            for (let index = 0; index < xDividers.length; index++) {
                if (~yDividers.indexOf(xDividers[index]) && greatestCommonDivisor < xDividers[index]) {
                    greatestCommonDivisor = xDividers[index];
                }
            }

            return 0 !== greatestCommonDivisor
                ? greatestCommonDivisor
                : 1;
        },

        /**
         * @param {number} x
         * @param {number} y
         */
        leastCommonMultiple: function (x, y) {
            return (x * y) / this.greatestCommonDivisor(x, y);
        }
    }

    const greatestCommonDivisor = this.math.greatestCommonDivisor(x, y);
    this.x = x / greatestCommonDivisor;
    this.y = y / greatestCommonDivisor;

    /**
     * @param {Fraction} fraction
     *
     * @returns {Fraction}
     */
    this.plus = function (fraction) {
        const leastCommonMultiple = this.math.leastCommonMultiple(fraction.y, this.y);
        const curentX = this.x * (leastCommonMultiple / this.y);
        const nextX = fraction.x * (leastCommonMultiple / fraction.y);

        return new Fraction(curentX + nextX, leastCommonMultiple);
    }

    this.toString = function () {
        return this.x + '/' + this.y;
    }
}

const f1 = new Fraction(1, 8);
const f2 = new Fraction(1, 8);
const f3 = f1
    .plus(f2)
    .plus(new Fraction(1, 4));

console.log(f3.toString());
// 1/2