## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

```js
function stopwatch(t = 1) {
  setTimeout(() => {
    console.clear();
    console.log(t);
    stopwatch(t + 1);
  }, 1000);
}
stopwatch();
```

(Hint: setTimeout)
