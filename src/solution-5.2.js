const Fraction = function (x, y) {
    this.math = {
        /**
         * @private
         *
         * @param {int} number
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
         * @param {int} x
         * @param {int} y
         *
         * @returns {int}
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
         * @param {int} x
         * @param {int} y
         */
        leastCommonMultiple: function (x, y) {
            return (x * y) / this.greatestCommonDivisor(x, y);
        }
    }

    this.collection = [];
    const greatestCommonDivisor = this.math.greatestCommonDivisor(x, y);
    this.collection.push({
        x: x / greatestCommonDivisor,
        y: y / greatestCommonDivisor,
    });

    /**
     * @param {Fraction} fraction
     *
     * @returns {Fraction}
     */
    this.plus = function (fraction) {
        this.collection = this.collection.concat(fraction.collection);

        return this;
    }

    this.cursor = 0;
    this.toString = function () {
        let cursor = this.cursor;
        if (cursor >= this.collection.length) {
            return 'Collection is empty';
        }

        const item = this.collection[cursor];
        this.cursor++;

        return item.x + '/' + item.y;
    }
}

const f1 = new Fraction(1, 8);
const f2 = new Fraction(2, 16);
const f3 = f1
    .plus(f2)
    .plus(new Fraction(1, 4));

console.log(f3.toString());
// 1/8
console.log(f3.toString());
// 1/8
console.log(f3.toString());
// 1/4
