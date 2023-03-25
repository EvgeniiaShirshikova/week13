# week13

### Вопросы 💎

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.

let num = new Date(2021,0,24,22,51);

console.log(num);

2. Для чего предназначен метод `getDay()`?

Вернёт день недели от 0 (воскресенье) до 6 (суббота). Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.

3. Как посчитать, сколько секунд осталось до завтра?

let date = new Date(2023,2,26,0,0);

let diff = Date.now() - date;

console.log(diff/1000);

4. Для чего предназначен метод `getDate()`?

чтобы получить день месяца из объекта дэйт по местному времени

5. Что выведет `console.log(d)` ?

выведет 9 марта 2016 0 часов 0 минут

```jsx
let d = new Date(2016, 2, 9);

console.log(d);
```

6. Что делает `getTimezoneOffset()` ?

возвращает разницу в минутах между местным часовым поясом и UTC

7. Что выведет консоль?

Выведет текущие часы во временной зоне UTC+0 (лондонское время без перехода на летнее время)

```jsx
let date = new Date();

console.log(date.getUTCHours());
```

8. Для чего предназначен метод `getHours()` объекта Date?

чтобы получить часы из объекта дэйт по местному времени

9. Что выведет консоль?

текущий год 2023

```jsx
let d = new Date();
let y = d.getFullYear();
console.log(y);
```

10. В чём ошибка в коде?

нет ошибки, будет показывать сегодняшнее число всегда, т.е. будет меняться каждый день, т.к. нью дэйт задает текущеее число и время.
Можно сократить и написать просто

let y = new Date();

console.log(y.getDate());

    ```jsx
    let y = new Date();
    let d = y.getDate();
    console.log(d);
    ```
