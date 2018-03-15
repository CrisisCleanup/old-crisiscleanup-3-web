<template>
    <div class = "row justify-content-center">
        <div class = "col-6">
            <b-card-group deck>
                <b-card no-body class="text-white bg-dark text-center"
                header="Outbound/Return Calls"
                header-tag="header"
                header-bg-variant="secondary">
                        <b-table v-if="!makingCall" :items="outboundCallOptions" :fields="fields" hover >
                            <template slot="value" scope="row">
                                <b-btn :variant="row.item.buttonclass" @click.stop="callHeaderClicked(row)">{{row.item.value}}</b-btn>
                            </template>
                            <template slot="row-details" scope="row">
                                <b-card no-body class="text-white bg-dark text-center" style="position:relative; height:200px; overflow-y:scroll;">
                                <b-list-group>
                                    <b-list-item hover v-for="call in row.item.calls" v-bind:key="call.id">
                                        <table style="width:96%; margin-left:2%; margin-right:2%; margin-top:2%">
                                            <tr @click="callRowClicked(call)">
                                                <td style="width:90%" align="left">
                                                    <p style = "font-size:medium; margin:0px">{{call.number}}</p>
                                                    <p style = "font-size:small; margin:0px">{{getCallerAddress(call)}}</p>
                                                    <p style = "font-size:large; margin-top:10px; margin-bottom:0px; margin-left:10px; margin-right:0px">{{getCallerName(call)}}</p>
                                                    <p style = "font-size:small; margin-top:0px; margin-bottom:10px; margin-left:10px; margin-right:0px">{{getCallerAddress(call)}}</p> 
                                                </td>
                                                <td style = "width:10%" align="right">
                                                    <b-badge pill variant="light" style="vertical-align:middle">
                                                        <table c width = "100%">
                                                            <tr style="background-color:transparent">
                                                                <td style = "width:25%; font-size:small; border-right:1px solid black; border-top: 0">{{getNumberCalls(call)}}</td>
                                                                <td style = "width:25%; font-size:small; border-top: 0">{{getTotalDays(call)}}</td>
                                                            </tr>
                                                        </table>
                                                    </b-badge>
                                                    <p style = "font-size: x-large; vertical-align:middle">{{' '}}</p>
                                                    <p style = "font-size: x-large; vertical-align:middle">{{getCallerId(call)}}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </b-list-item>
                                </b-list-group>
                                </b-card>
                            </template>
                        </b-table>
                        <table v-if="makingCall">
                            <tr>
                                <td style="width:80%" align="left">
                                    <b-form-input
                                        id="callNumberInput" 
                                        type="tel" 
                                        v-model="outboundCallNumber"
                                        :state="phoneState"
                                        aria-describedby="inputLiveFeedback"></b-form-input>
                                </td>
                                <td style = "width:10%" align="right">
                                    <b-button variant='success' @click="makeCall">Call</b-button>
                                </td>
                                <td style = "width:10%" align="right">
                                    <b-btn variant="danger" @click="cancelCall">{{this.getCancelMessage()}}</b-btn>
                                </td>
                            </tr>
                        </table>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapGetters} from 'vuex'
const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export default {
    components: {
    },
    name: 'phone-outbound-call-home',
    props: [
    ],
    data() {
        return {
            makingCall: false,
            outboundCallNumber: '',
            outboundCallOptions: [
                { 
                    id: 1, name:'Missed Calls',  value: '127', buttonclass: 'danger', 
                    calls: [
                    { 
                        id: 1,
                        identifier: 'K12109',
                        number: '123-456-1234',
                        status: 'Missed',
                        caller:{
                            name: 'Julie Smith',
                            number: '123-456-7890',
                            address: {
                                street: '1411 North Terrace Drive',
                                unit: '',
                                city: 'Jacksonville',
                                state: 'FL'
                            },
                            call_info: {
                                total_call: 8,
                                total_days: 2
                            }
                    }
                    },
                    { 
                        id: 2,
                        number: "123-456-7890"
                    },
                    { 
                        id: 3,
                        number: "123-456-7890"
                    },
                    { 
                        id: 4,
                        number: "123-456-7890"
                    },
                    { 
                        id: 5,
                        number: "123-456-7890"
                    },
                    { 
                        id: 6,
                        number: "123-456-7890"
                    }
                ]
                },
                {   id: 2, name:'Needs Special Assistance',  value: '3', buttonclass:'secondary',
                    calls: [
                        { 
                        id: 1,
                        number: "123-456-7890"
                        },
                        { 
                        id: 2,
                        number: "123-456-7890"
                        },
                        { 
                        id: 3,
                        number: "123-456-7890"
                        }
                    ]
                },
                {   id: 3, name:'Confirm They Still Need Help',  value: '4928', buttonclass:'secondary',
                    calls: [
                        { 
                        id: 1,
                        number: "123-456-7890"
                        },
                        { 
                        id: 2,
                        number: "123-456-7890"
                        },
                        { 
                        id: 3,
                        number: "123-456-7890"
                        }
                ]
                },
                { id: 4, name:'Make Manual Outbound Call',  value: 'GO', buttonclass:'success', calls: []}
            ],
            fields: [
                {key:'name', label: 'Call Status','class':'text-center' },
                {key:'value', label:'# Calls Waiting','class':'text-center' }
            ]
        };
    },
        computed: {
        ...mapState('phone', {
            state: state => state.callState
        }),
        ...mapGetters('phone', {
            callState: 'getCallState'
        }),
        phoneState(){
            return PHONE_NUMBER_REGEX.test(this.outboundCallNumber)
        }
    },
        methods: {
            startTakingCalls() {
                this.$emit('availableForCalls');
                if (this.state != 'availableForCalls') {
                this.message = 'Start Taking Calls'
                }
                else {
                    this.message = 'Stop Taking Calls' 
                }
            },
            callHeaderClicked(row){
                if(row.item.buttonclass != "success"){
                    row.toggleDetails()
                }else{
                    this.makingCall = true
                }
            },
            getCallerName(call){
                let name = ''
                if(call.caller){
                    name = call.caller.name
                }
                return name
            },
            getNumberCalls(call){
                let callTotal = ''
                if(call.caller){
                    callTotal = call.caller.call_info ? call.caller.call_info.total_call : ''
                }
                return callTotal + " calls"
            },
            getTotalDays(call){
                let dayTotal  =''
                if(call.caller){
                    dayTotal = call.caller.call_info ? call.caller.call_info.total_days : ''
                }
                return dayTotal + " days"
            },
            getCallerAddress(call){
                let address = ''
                if(call.caller){
                    let addressObj = call.caller.address
                    if(addressObj){
                        address = addressObj.street + ' ' + addressObj.unit + ', ' + addressObj.city + ', ' + addressObj.state
                    }
                }
                return address
            },
            getCallerId(call){
                return call.identifier
            },
            cancelCall(){
                this.$emit('cancelCall');
                this.outboundCallNumber = ''
                this.makingCall = false
            },
            callRowClicked(call){
                this.outboundCallNumber = call.number
                this.makingCall = tru
            },
            makeCall(){
                this.$emit('makingCall',this.outboundCallNumber)
            },
            getCancelMessage() {
                if (this.callState == 'AVAILABLE' || this.callState == 'RNA-STATE') {
                    return 'Cancel';
                } else {
                    return 'Hangup';
                }
            }
        }
}
</script>