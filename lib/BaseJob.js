let getArgs = () => {
  let tempArgs = process.argv.splice(2);
  let args = {};
  for (let i = 0; i < tempArgs.length; i += 2) {
    let key = tempArgs[i].replace('--', '');
    if (key == 'rate') {
      tempArgs[i+1] = parseInt(tempArgs[i+1]);
    }
    args[key] = tempArgs[i+1];
  }
  return args;
};

class BaseJob {
  constructor () {
    this.args = getArgs();
  }

  interval () {
    let self = this;
    setInterval(() => {
      self.run(self);
    }, this.args.rate);
  }

  run () {
    throw 'Implement BaseJob run func';
  }

  out (str) {
    console.log(`[${new Date().toUTCString()} - ${this.args.name}] ${str}`);
  }
}

module.exports = BaseJob;
