#!/usr/bin/env node

const { exec } = require('child_process');
const cordovaSetVersion = require('cordova-set-version').default;

exec('git rev-list --count HEAD', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  const baseVersion = '1.0';
  const minorVersion = stdout.trim();
  const version = `${baseVersion}.${minorVersion}`;

  const buildNumber = parseInt(baseVersion.split('.').map(d => parseInt(d, 10) * 10).join('') + minorVersion, 10);

  cordovaSetVersion(version, buildNumber);
})
