import AgentLibrary from '@/../vendor/cf-agent-library';

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
      this.cf.loginAgent('pariveda', 'Pariveda1', () => {
        console.log('AgentLibrary logged in');
        resolve();
      });
    });
  }
}
