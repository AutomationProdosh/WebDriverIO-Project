# WebDriverIO-Project

Configuring Commands:
--------------------
npm init

npm i @wdio/cli

npx wdio config


Execute command:
------------------
npx wdio run wdio.conf.js //here, in wdio.conf.js inside spec file give the path of the file which want to run and run command

or

to run a specific spec file: npm test -- --spec ./test/specs/login.test.js
