const { GridFSBucket } = require('mongodb');
const db = require('./db');

if (!db.s) db.s = {};
module.exports = new GridFSBucket(db);