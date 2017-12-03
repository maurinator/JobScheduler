const BaseJob = require('../lib/BaseJob');
class Job1 extends BaseJob {
  run () {
    this.out('job run func');
  }
}

let j = new Job1();
j.interval();
