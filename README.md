# Forum Application

This is the repository for the forum application that demonstrates the best practises for JavaScript development using all the available tools in 2017.

This application is built using JavaScript and the following main libraries:

* Node.js
* Express with Pug Templates
* MongoDB
* Mongoose
* Winston - Logging
* Passport - Security
* ESLint - Linting

We will use Node version 7+ and use coding best practises enforced by eslint and modern JavaScript design patterns to make the code efficent and maintainable. 

To set up the project locally for the first time use:
```bash
yarn add express mongoose body-parser pug dotenv eslint winston
```
Install eslint-config-airbnb using: 
```bash
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
)
```