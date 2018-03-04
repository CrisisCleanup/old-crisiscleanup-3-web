import Vue from 'vue';
import AgentLibrary from '@/../vendor/cf-agent-library';
import phone from '@/store/phone';
import store from '@/store';

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
        this.loggedInAgentId = null;
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
                if (data.status === 'FAILURE') {
                    throw new Error('Could not log in.');
                }
                console.log('AgentLibrary successfully logged in');
                this.loggedInAgentId = data.agentSettings.agentId;
                //const hardCodedGateId = data.inboundSettings.availableQueues[0].gateId;
                this.cf.configureAgent(this.user.last_used_phone_number, [this.gateway.external_gateway_id], null, null, null, null, (configureResponse) => {
                    console.log('Configure response', configureResponse);
                    resolve();
                });
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.cf.logoutAgent(this.loggedInAgentId, (data) => {
                console.log('logged out agent', data);
                resolve();
            });
        });
    }

    changeState(newState) {
        return new Promise((resolve, reject) => {
            this.cf.setAgentState(newState, null, (setAgentStateResponse) => {
                if (setAgentStateResponse.previousState != setAgentStateResponse.currentState) {
                    store.dispatch('phone/changeState', setAgentStateResponse.currentState);
                    console.log('new store state: ', phone.state.callState);
                }
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
                //TODO: change second input to gateway number
                this.cf.manualOutdial(destination, this.user.last_used_phone_number, (manualOutdialResponse) => {
                    console.log('Manual outdial response', manualOutdialResponse);
                    resolve();
                });
            });
        });
    }
}