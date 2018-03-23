import Vue from 'vue';
import AgentLibrary from '@/../vendor/cf-agent-library';
import store from '@/store';

export default class PhoneService {
    constructor() {
        this.store = store;
        this.phone = this.store.state.phone;
        this.cf = new AgentLibrary({
            // Caution, this is prod
            socketDest: 'wss://c01-con.vacd.biz:8080/', //'ws://d01-test.cf.dev:8080',
            callbacks: {
                closeResponse: this.onCloseFunction,
                openResponse: this.onOpenFunction,
                newCallNotification: this.newCallFunction,
                endCallNotification: this.endCallFunction,
            },
        });
        this.gateway = this.phone.gateway;
        this.user = this.phone.user;
        this.loggedInAgentId = null;
        this.callInfo = {};
    }

    onCloseFunction() {
        console.log('AgentLibrary closed');
    }

    onOpenFunction() {
        console.log('AgentLibrary open');
    }

    newCallFunction(info) {
        return new Promise(function(resolve, reject) {
            console.log(info);
            this.callInfo = info;
            console.log("this.callInfo is ", this.callInfo)
            resolve();
        }); //try .bind(exists)

    }

    endCallFunction(info) {
        console.log(info);
        this.callInfo = {};
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
            var state = newState;
            this.cf.setAgentState(newState, null, (setAgentStateResponse) => {
                if (setAgentStateResponse.previousState != setAgentStateResponse.currentState) {
                    if (setAgentStateResponse.currentState === 'ENGAGED') {
                        console.log("store state = engaged");
                        console.log("callinfo: ", this.callInfo.callType);
                        if (this.callInfo.callType === 'INBOUND') {
                            state = 'ENGAGED-INBOUND';
                        } else if (this.callInfo.callType === 'OUTBOUND') {
                            state = 'ENGAGED-OUTBOUND';
                        }
                    } else {
                        state = newState;
                    }

                    this.store.commit('phone/setState', state);
                    console.log('new store state: ', this.phone.state.callState);
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
                //TODO: remove hard-coded gateway number and used stored information
                this.cf.manualOutdial(destination, '8445286581', () => {
                    resolve();
                });
            });
        });
    }

    hangup() {
        return new Promise((resolve, reject) => {
            this.cf.hangup(this.callInfo.sessionId);
            this.cf.offhookTerm((offhookTermResponse) => {
                console.log('Offhook term response', offhookTermResponse);
                resolve();
            });
        });
    }

}