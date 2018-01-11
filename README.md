# Crisis Cleanup Web


## Pre-reqs
- Node 9.0.0
- NPM 5.5.1
- YARN 1.3.2

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

## Full Setup (OSX)
1. `brew install nvm` (OSX)
2. `brew install yarn` (OSX)
3. `mkdir -p ~/.nvm`
4. Add the following to your `~/.bash_profile`
  ```
  export NVM_DIR="$HOME/.nvm"
  . "/usr/local/opt/nvm/nvm.sh"
  ```
5. Open new terminal
6. `nvm install 9.0.0`
7. Clone `git@github.com:tsanders/crisiscleanup-web.git`
8. `cd crisiscleanup3-web`
9. `yarn install`
10. `yarn run dev` (It will automatically load and launch a new browser tab)



## Full Setup (Windows)
1. Install chocolately
    1. Open an administrator command prompt (https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx)
    2. Install choco as administrator `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"` 
    3. More info: https://chocolatey.org/install
2. `choco install nodejs-lts -y` (requires that chocolately already been installed and configured. This will not work if node.js has already been installed in some other way.)
3. `choco install yarn --version 1.3.2 -y` (requires that chocolately already been installed and configured)
4. `choco install python2 -y`
5. Clone `git@github.com:tsanders/crisiscleanup-web.git`
6. `cd crisiscleanup3-web`
7. `yarn install`
8. `yarn run dev` (It will automatically load and launch a new browser tab)

