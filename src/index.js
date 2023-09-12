#!/usr/bin/env node

const os = require('os');
const username = os.userInfo().username;

if (process.argv[2] === 'hi') {
  console.log(`Hello ${username}`);
}