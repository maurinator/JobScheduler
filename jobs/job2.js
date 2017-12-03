const BaseJob = require('../lib/BaseJob');
class Job2 extends BaseJob {
  run () {
    this.out('job run func');
  }
}

let j = new Job2();
j.interval();
