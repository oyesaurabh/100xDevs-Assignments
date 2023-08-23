## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```js
const fs = require("fs");

fs.writeFile("./file.txt", "this is new content", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) sum += i;
console.log(sum);
```

```
output:
499999999067109000
The file has been saved!
```
