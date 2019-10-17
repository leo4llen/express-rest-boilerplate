const chalk = require('chalk')

function logs() {
  const methods = {
    print: type => (...msg) =>
      process.env.NODE_ENV === 'development' ? console.log(chalk[type](...msg)) : undefined,
    log: (...msg) => methods.print('green')(...msg),
    info: (...msg) => methods.print('blue')(...msg),
    error: (...msg) => methods.print('red')(...msg)
  }

  return Object.freeze(methods)
}

module.exports = logs()
