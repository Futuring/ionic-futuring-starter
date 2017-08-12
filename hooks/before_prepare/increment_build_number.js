#!/usr/bin/env node

const { exec } = require('child_process');
const cordovaSetVersion = require('cordova-set-version').default;

exec('git rev-list --count HEAD', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  cordovaSetVersion(`1.0.${stdout.trim()}`);
})
