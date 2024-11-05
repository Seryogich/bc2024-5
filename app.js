const express = require('express');
const { Command } = require('commander');
const app = express();
const program = new Command();

program
  .requiredOption('-h, --host <host>', 'server address')
  .requiredOption('-p, --port <port>', 'server port')
  .requiredOption('-c, --cache <cache>', 'path to the directory for cache');

program.parse(process.argv);

const options = program.opts();

if (!options.host || !options.port || !options.cache) {
  console.error('Error: all parameters --host, --port, and --cache are required.');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(options.port, options.host, () => {
  console.log(`Server running at http://${options.host}:${options.port}`);
});
