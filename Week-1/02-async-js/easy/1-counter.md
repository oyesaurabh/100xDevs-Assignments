## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

```js
function stopwatch() {
  let t = 1;
  setInterval(() => {
    console.clear();
    console.log(t);
    t += 1;
  }, 1000);
}
stopwatch();
```
