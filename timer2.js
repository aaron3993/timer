const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('ding' + '\n')
  }
});

stdin.on('data', (x) => {
  if (!isNaN(x) && Number(x)) {
    process.stdout.write(`setting timer for ${x} second${x == 1 ? '' : 's'}...`);
    setTimeout(() => {
      process.stdout.write("ding" + '\n')
    }, x * 1000);
  }
});

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!" + '\n');
      setTimeout(() => {
    process.exit();
  }, 1000)
  }
});