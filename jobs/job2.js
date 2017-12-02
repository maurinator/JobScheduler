const BaseJob = require('../lib/BaseJob');
class Job2 extends BaseJob {
  run () {
    console.log(`[${new Date().toUTCString()} - Job2]`);
  }
}
new Job2();
