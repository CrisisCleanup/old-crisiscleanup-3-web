import AgentLibrary from '@/../vendor/cf-agent-library';

const myPhoneNumber = '';
const inboundNumber = '';
const outboundNumber = '';
const agentLogin = '';
const agentPassword = '';

export default class PhoneService {
  constructor() {
    this.cf = new AgentLibrary({
      // Caution, this is prod
      socketDest: 'wss://c01-con.vacd.biz:8080/', //'ws://d01-test.cf.dev:8080',
      callbacks: {
        closeResponse: this.onCloseFunction,
        openResponse: this.onOpenFunction,
      },
    });
  }

  onCloseFunction() {
    console.log('AgentLibrary closed');
  }

  onOpenFunction() {
    console.log('AgentLibrary open');
  }

  login() {
    return new Promise((resolve, reject) => {
      this.cf.loginAgent(agentLogin, agentPassword, (data) => {
        console.log('Logged in agent', data);
        console.log('AgentLibrary logged in');
        const hardCodedGateId = data.inboundSettings.availableQueues[0].gateId;
        this.cf.configureAgent(myPhoneNumber, [hardCodedGateId], null, null, null, null, (configureResponse) => {
          console.log('Configure response', configureResponse);
          resolve();
        });
      });
    });
  }

  goAvailable() {
    return new Promise((resolve, reject) => {
      this.cf.setAgentState('AVAILABLE', null, (setAgentStateResponse) => {
        console.log('Set agent state response', setAgentStateResponse);
        resolve();
      })
    });
  }

  dial(destination) {
    return new Promise((resolve, reject) => {
      this.cf.offhookInit((offhookInitResponse) => {
        console.log('Offhook init response', offhookInitResponse);
        this.cf.manualOutdial(outboundNumber, inboundNumber, (manualOutdialResponse) => {
          console.log('Manual outdial response', manualOutdialResponse);
          resolve();
        });
      });      
    });
  }
}
