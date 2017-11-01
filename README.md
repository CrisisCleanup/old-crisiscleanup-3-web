# Crisis Cleanup Web


## Pre-reqs
- Node 8.8.1
- NPM 5.4.2
- YARN 1.1+

## Quick Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run unit tests with watch
yarn run unit:watch

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Full Setup
1. `brew install nvm` (OSX)
2. `brew install yarn` (OSX)
3. `mkdir -p ~/.nvm`
4. Add the following to your `~/.bash_profile`
  ```
  export NVM_DIR="$HOME/.nvm"
  . "/usr/local/opt/nvm/nvm.sh"
  ```
5. Open new terminal
6. `nvm install 8.8.1`
7. Clone `git@github.com:tsanders/crisiscleanup-web.git`
8. `cd crisiscleanup3-web`
9. `yarn install`
10. `yarn run dev` (It will automatically load and launch a new browser tab)
