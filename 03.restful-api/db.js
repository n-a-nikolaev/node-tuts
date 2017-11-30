const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: config.db_host,
  user: config.db_user,
  password: config.db_pass,
  database: config.db_name
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.info({ connection: 'success', database: config.db_name, id: connection.threadId });
});

module.exports = connection;