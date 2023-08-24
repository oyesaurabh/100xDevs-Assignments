/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const startedAt = Date.now();
  while (new Date().getTime() - startedAt < seconds * 1000) {}
}

//checking the function
function check() {
  console.log("starting..., ");
  sleep(3);
  console.log("ended...");
}
check();
