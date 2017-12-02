const BaseJob = require('../lib/BaseJob');
class Job1 extends BaseJob {
  run () {
    console.log(`[${new Date().toUTCString()} - Job1]`);
  }
}
new Job1();
