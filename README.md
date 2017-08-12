# Ionic Futuring Starter

This is an [Ionic](https://ionicframework.com/) starter app with [Jest](https://facebook.github.io/jest/), Crashlytics & Mixpanel.

[Ionic](https://ionicframework.com/) is a great framework for building amazing mobile apps with
[Angular](https://angular.io/), but as you may know, it comes without support for unit tests.
Yes, that's even if it seems incredible in the 21st century :-(

Of course, there are different approaches to have unit tests working with an Ionic 2+ Project, but most
of then require too much configuration and knowledge about the related tooling (jasmine, karma, ...).

[Jest](https://facebook.github.io/jest/) is a complete and easy to set-up JavaScript testing solution
created by Facebook. Some of its benefits are:

- Fast and sandboxed
- Built-in code coverage reports
- Zero configuration

This project tries to illustrate how to add support for unit tests to an Ionic 2+ project with a minimal
configuration. It's based on the awesome article [Testing Angular faster with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)
by [Michal Pierzchala](https://www.xfive.co/blog/author/michal/) and is a fork of [datencia/ionic2-jest-example](https://github.com/datencia/ionic2-jest-example).

## Summary

- Prerequisites
- Steps to run the example
- Steps to add Jest to your own Ionic 2 project

### Prerequisites

You’ll need to install the latest version of the Ionic CLI and Cordova. Before you do that,
you’ll need a recent version of Node.js. [Download the installer](https://nodejs.org/en/) for
Node.js 6 or greater and then proceed to install the Ionic CLI and Cordova for native app development:

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal / console window. Older versions may produce errors.

### Steps to run then example

- Install the latest version of the Ionic CLI and Cordova.
```bash
$ npm install -g cordova ionic
```

 > You may need to add “sudo” in front of these commands to install the utilities globally

 > If you run `ionic -v` it should return 3.0.0 (or greater)

- Clone this repo into a new project folder.
 ```bash
 $ git clone https://github.com/datencia/ionic-futuring-starter.git
 $ cd ionic-futuring-starter
 ```

- Run `npm test` (or `yarn test` if you have [yarn](https://yarnpkg.com/) installed) to run the tests.

- You can also run the command `ionic serve` to get a quick preview of the app in the browser.
