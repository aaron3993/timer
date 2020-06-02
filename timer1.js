const args = process.argv.slice(2)

const timer = input => {
  for (let arg of input) {
    if (!isNaN(arg) && arg >= 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, arg * 1000)
    }
  }
}
timer(args)