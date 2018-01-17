# Crisis Cleanup Web
<p align="center"><a href="https://www.crisiscleanup.org" target="_blank"><img width="100"src="https://www.crisiscleanup.org/assets/ccu-logo-balloons-2a4fa4ff9ee5ad03846e1d7bdb3cc71d.png"></a></p>

# Crisis Cleanup (3.X)

Crisis Cleanup is a web platform that connects disaster recovery organization volunteers with people who need help after a disaster. The Crisis Cleanup platform has been used to connected 306,340 volunteers from 1,079 organizations with 51,831 households in 34 states and 75 disasters in 6 countries; a new disaster every two weeks.

Crisis Cleanup works best in a collaborative environment where multiple voluntary organizations and agencies work together and coordinate efforts. Because these organizations do not take orders from one another, Crisis Cleanup is designed to facilitate Collaborative Accountability models of inter-agency interaction, rather than command-and-control operations, or or heirarchical accountability models of interaction. 

This is the primary repository for the main Crisis Cleanup web application, a collaborative map-based coordination tool. This implementation is built upon a service-based model, designed for Google Cloud, with Python and PostgreSQL.


Other Project Stats (As of 2017-10-29)
-------------

 - 25%: Increase in volunteer efficiency through re-engagement and elimination of time spent on travel, coordination, collaboration, and management.
 - 12,957: Households that could not have been helped without Crisis Cleanup.
 - 3.1 Million: Number of volunteer hours facilitated.
 - 777,000: Volunteer hours that would have otherwise been wasted in management, travel, and overhead without Crisis Cleanup.
 - $292.4 Million: Minimum total market value of services to survivors.
 - $954: Value of each cleanup volunteer to his/her community.
 - $73.1 Million: Market value of services to survivors that would have otherwise been wasted in travel, management, overhead, and standing in lines.
 - $37,894: Money Crisis Cleanup has saved survivors every single day since July 18, 2012.
 - $8,273: Average commercial value of service to each homeowner.
 - $225: Return on investment to survivors, for every $1 invested in Crisis Cleanup.
How we calculate these statistics: http://blog.crisiscleanup.org/2017/10/how-we-calculate-value-of-services.html

Find out more
-------------

 - Crisis Cleanup homepage: https://www.crisiscleanup.org/
 - Help & Support: https://crisiscleanup.zendesk.com/
 - Demo app: https://crisiscleanup-demo.herokuapp.com/
 - Blog: http://blog.crisiscleanup.org/
 - Twitter: https://twitter.com/CrisisCleanup
 - Facebook: https://www.facebook.com/CrisisCleanup/
 - Version 1.X: https://github.com/aarontitus/crisiscleanup-legacy (Google App Engine, Python, NoSQL)
 - Version 2.X: https://github.com/CrisisCleanup/crisiscleanup (Heroku, Ruby, Postgres)

## Supporters
<img src="http://www.browserstack.com/images/layout/browserstack-logo-600x315.png" width="280"/>

We thank [BrowserStack](http://www.browserstack.com) for supporting Crisis Cleanup by providing live and automated browser testing tools.

## Contribute

We welcome all contributors! You can also join us on our Slack channel - https://crisiscleanup.slack.com

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
1. Ensure you have the Microsoft .NET framework 2.0 or greater installed. https://www.microsoft.com/en-us/download/details.aspx?id=55170
2. Install chocolately
    1. Open an administrator command prompt (https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx)
    2. Install choco as administrator `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"` 
    3. More info: https://chocolatey.org/install
3. `choco install nodejs-lts -y` (requires that chocolately already been installed and configured. This will not work if node.js has already been installed in some other way.)
4. `choco install yarn --version 1.3.2 -y` (requires that chocolately already been installed and configured)
5. `choco install python2 -y`
6. Clone `git@github.com:tsanders/crisiscleanup-web.git`
7. Refresh or reopen administrative shell. `cd [PATH]/crisiscleanup-web`
8. `yarn install` If this does not work, yarn might not be able to find the Python path, or the correct .NET framework might not be installed.
    1. If you get a persistent .NET error, and you know it's installed, try running `npm install -g windows-build-tools`, followed by `npm config set msvs_version 2015 -g` (see https://github.com/sass/node-sass/issues/2074).
    2. See https://stackoverflow.com/a/33047257. Run `get-command python` to find the path, then run `npm config set python [PATH]\python.exe` to manually set the path. Delete `[PATH]/crisiscleanup-web/node_modules`, open a fresh administrative shell, `cd [PATH]/crisiscleanup-web`, and try `yarn install` again.
9. `yarn run dev` (It will automatically load and launch a new browser tab)
10. `Ctrl+c` to kill the local server when done. Note: Powershell has a bug where `Ctrl+c` does not work. Try a regular administrative shell. (see https://stackoverflow.com/questions/42039231/ctrl-c-for-quitting-python-in-powershell-now-not-working)

## Technologies
Familiarity with these technologies will help you be a productive contributor:

- Frontend
	- Solid SPA framework experience - Vue.js, React, Angular (ideally Vue.js)
	- JavaScript - ES6/Node
	- HTML5, CSS3, SCSS
	- WebPack/Babel ecosystem
	- Unit/functional testing libraries (Mocha, Chai, Karma, Nightwatch)
- Backend
	- Experience with Microservice/Service Oriented Architectures
	- REST APIs
	- Strong Python ecosystem skills (Django, Flask, Celery, etc)
	- PostgreSQL
	- Neo4j
	- GIS - PostGIS, OpenLayers, Google Maps API, etc.
	- Strong Docker ecosystem experience
	- Security experience (JWT, Authentication servers, OAuth, etc.)
	- Message queueing - Redis / RabbitMQ
- DevOps
	- Very strong Docker/container ecosystem skills
	- Strong Unix/Linux experience
	- Kubernetes / Helm
	- Kong API Gateway / Nginx
	- Google Cloud Platform (GCE, GKE, Load Balancer, Container Registry/Builder, Storage, etc.)

