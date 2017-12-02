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
    setInterval(this.run, getArgs().rate);
  }

  run () {
    throw 'Implement BaseJob run func';
  }
}

module.exports = BaseJob;
