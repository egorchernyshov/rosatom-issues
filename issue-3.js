let countTask = 5;
const taskTime = 500;
const intervalTime = 250;

/**
 * @param {string} task
 */
const doTask = (function (taskTime) {
    const me = this;
    this._isBusy = false;

    this.unlock = function () {
        this._isBusy = false;
    };

    this.doSomething = function (task, callBack) {
        console.log(task, 'is doing something...');

        // Delay imitation
        setTimeout(callBack.bind(me), taskTime);
    }

    return function (task) {
        if (me._isBusy) {
            console.log('Is busy.', task, 'continued');
            return;
        }

        me._isBusy = true;
        doSomething(task, unlock)
    };
})(taskTime);

// Stream tasks imitation
let indexTask = 1;
const id = setInterval(() => {
    if (countTask) {
        doTask('Task ' + indexTask++);
        countTask--;
    } else {
        clearInterval(id);
    }
}, intervalTime);

// Task 1 is doing something...
// Is busy. Task 2 continued
// Is busy. Task 3 continued
// Task 4 is doing something...
// Is busy. Task 5 continued