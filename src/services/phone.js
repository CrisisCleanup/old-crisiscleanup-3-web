import AgentLibrary from '@/../vendor/cf-agent-library';
import phone from '@/store/phone';

/*const myPhoneNumber = '';
const inboundNumber = '';
const outboundNumber = '';
const agentLogin = '';
const agentPassword = ''; */

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
        this.gateway = phone.state.gateway;
        this.user = phone.state.user;
    }

    onCloseFunction() {
        console.log('AgentLibrary closed');
    }

    onOpenFunction() {
        console.log('AgentLibrary open');
    }

    login() {
        return new Promise((resolve, reject) => {
            console.log(this.gateway);

            this.cf.loginAgent(this.gateway.agent_username, this.gateway.agent_password, (data) => {
                console.log('Logged in agent', data);
                console.log('AgentLibrary logged in');
                //const hardCodedGateId = data.inboundSettings.availableQueues[0].gateId;
                this.cf.configureAgent(this.user.last_used_phone_number, [this.gateway.gate_id], null, null, null, null, (configureResponse) => {
                    console.log('Configure response', configureResponse);
                    resolve();
                });
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.cf.logoutAgent(this.gateway.agent_id, (data) => {
                console.log('logged out agent', data);
                resolve();
            });
        });
    }

    changeState(newState) {
        return new Promise((resolve, reject) => {
            this.cf.setAgentState(newState, null, (setAgentStateResponse) => {
                console.log('Set agent state response', setAgentStateResponse);
                resolve();
            })
        });
    }

    dial(destination) {
        return new Promise((resolve, reject) => {
            this.cf.offhookInit((offhookInitResponse) => {
                console.log('Offhook init response', offhookInitResponse);
                //first input = number to call, second input = number that shows up
                this.cf.manualOutdial(destination, this.user.last_used_phone_number, (manualOutdialResponse) => {
                    console.log('Manual outdial response', manualOutdialResponse);
                    resolve();
                });
            });
        });
    }
}