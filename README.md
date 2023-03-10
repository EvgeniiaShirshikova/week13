# week13

### Вопросы 💎

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
2. Для чего предназначен метод `getDay()`?
3. Как посчитать, сколько секунд осталось до завтра?
4. Для чего предназначен метод `getDate()`?
5. Что выведет `console.log(d)` ?

   ```jsx
   let d = new Date(2016, 2, 9);

   console.log(d);
   ```

6. Что делает `getTimezoneOffset()` ?
7. Что выведет консоль?

   ```jsx
   let date = new Date();

   console.log(date.getUTCHours());
   ```

8. Для чего предназначен метод `getHours()` объекта Date?
9. Что выведет консоль?

   ```jsx
   let d = new Date();
   let y = d.getFullYear();
   console.log(y);
   ```

10. В чём ошибка в коде?

    ```jsx
    let y = new Date();
    let d = y.getDate();
    console.log(d);
    ```
