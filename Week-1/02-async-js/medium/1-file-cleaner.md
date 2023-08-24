## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

## Answer

### Traditional way

```js
const fs = require("fs");

function cleanFile(path) {
  fs.readFile(path, "utf-8", (err, content) => {
    //cleaning the content
    const newcontent = content
      .trim()
      .split(" ")
      .filter((val) => val != "")
      .join(" ");

    //writing to file
    fs.writeFile(path, newcontent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File has been cleaned");
      }
    });
  });
}

cleanFile("./file.txt");
```

### Better Approach

```js
const fs = require("fs").promises;

async function cleanFile(path) {
  try {
    let content = await fs.readFile(path, "utf-8");
    let newContent = content
      .trim()
      .split(" ")
      .filter((val) => val != "")
      .join(" ");
    await fs.writeFile(path, newContent);
    console.log("File has been cleaned");
  } catch (err) {
    console.log(err);
  }
}

cleanFile("./file.txt");
```
