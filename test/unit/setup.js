require('jsdom-global')();

// EXPECT
// global.expect = require('expect')

// EXPECT
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
global.expect = chai.expect;
chai.use(sinonChai);
