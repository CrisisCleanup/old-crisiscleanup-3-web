import Vue from 'vue';
import AgentLibrary from '@/../vendor/cf-agent-library';
import store from '@/store';

export default class PhoneService {
    constructor() {
        this.store = store;
        this.phone = this.store.state.phone;
        let self = this;
        this.cf = new AgentLibrary({
            // Caution, this is prod
            socketDest: 'wss://c01-con.vacd.biz:8080/', //'ws://d01-test.cf.dev:8080',
            callbacks: {
                closeResponse: this.onCloseFunction,
                openResponse: this.onOpenFunction,
                // TODO: Figure out a way to access 'self' context when put in seperate function
                newCallNotification: (info) => {
                    console.log("callinfo: ", info);
                    //need to store callInfo to get sessionId
                    this.callInfo = info;
                    return new Promise(function(resolve, reject) {
                        let state = null;
                        if (info.callType === 'INBOUND') {
                            state = 'ENGAGED-INBOUND';
                        } else if (info.callType === 'OUTBOUND') {
                            state = 'ENGAGED-OUTBOUND';
                        }
                        self.store.commit('phone/setState', state);
                        self.store.dispatch("phone/getCallerDetails", info.ani).then((caller) => {
                            // Save call info
                            let call = {
                                call_start: Date.now,
                                user_number: info.dialDest,
                                caller: caller.id,
                                gateway: self.gateway.id,
                                call_type: info.callType,
                                ccu_number: info.ani, //we want to show the caller's number
                                external_id: info.uii
                            };
                            self.store.dispatch("phone/updateCall", call).then(resolve());
                        });
                    })
                },
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
                this.store.commit('phone/setState', "AVAILABLE");
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
                        if (this.callInfo.callType === 'INBOUND') {
                            state = 'ENGAGED-INBOUND';
                        } else if (this.callInfo.callType === 'OUTBOUND') {
                            state = 'ENGAGED-OUTBOUND';
                        }
                    } else {
                        state = newState;
                    }

                    this.store.commit('phone/setState', state);
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
            //TODO: inbound calls are not handling this hangup function correctly, I suspect we need to handle offhookTerm differently!
            this.store.commit('phone/setState', "AVAILABLE");
            console.log(this.store.callstate);
            this.cf.offhookTerm((offhookTermResponse) => {
                console.log('Offhook term response', offhookTermResponse);
                resolve();
            });
        });
    }

}