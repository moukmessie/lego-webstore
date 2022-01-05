const path = require('path');
const sqlite3 = require('better-sqlite3');
const link ='../db/db.db';

exports.connect = () => new sqlite3(
   path.join(__dirname, '../db/legowebstore.db')

);
