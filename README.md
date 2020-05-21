# Тестовое задание «Росатом»

## Задача 1

```js
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
```

В массиве берется произвольный элемент и перемещается на произвольную позицию.

Нужна функция `move(array, from, to)`, которая это осуществляет.

_Пример:_

```js
move(arr, 1, 3) // ['B', 'C', 'D', 'A', 'E', 'F', 'G', 'H'];
```

[Решение 1](src/solution-1.js)

---

## Задача 2

_Вход:_

```js
const twoWeeks = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
```

Нужна функция, которая выводит 'Sunday' на каждый седьмой день.

[Решение 2](src/solution-2.js)

---

## Задача 3

Есть функция `doJob(task)`, которая что-то делает.

Как только она начинает работу, она становится занята (`busy`) и не обрабатывает новые запросы.

Ей на вход без перерыва поступают задачи `task`, причем, если функция занята, при ее освобождении ей необходимо будет выполнить ПОСЛЕДНЮЮ из поступивших задач в момент ее занятости.

Написать враппер, который будет это реализовывать.

[Решение 3](src/solution-3.js)