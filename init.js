const cluster = require('cluster');
const conf = require('./conf');

for (const job of conf) {
  let args = [];
  for (const key in job) {
    args.push('--'.concat(key));
    args.push(job[key]);
  }
  cluster.setupMaster({
    exec: job.src,
    args: args,
    silent: false
  });
  cluster.fork();
}
process.stdin.on("data", () => {});
