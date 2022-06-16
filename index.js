const shell = require('shelljs');

const exec = ( cmd ) => new Promise((resolve) => {
  shell.exec(cmd, {
    async: true,
    silent: true,
  }, (code, stdout, stderr) => {
    resolve({ code, stdout, stderr });
  });
});

module.exports = {
  exec,
  cli: (command) => exec(
    `${command}`,
  ),
  wpvipcli: (command) => exec(
    `./node_modules/.bin/vip ${command}`,
  ),
}
