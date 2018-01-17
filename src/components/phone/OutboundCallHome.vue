<template>
    <div class = "row justify-content-center">
        <div class = "col-6">
            <b-card-group deck>
                <b-card no-body class="text-white bg-dark text-center"
                header="Outbound/Return Calls"
                header-tag="header"
                header-bg-variant="secondary">
                        <!-- <table width="100%"> 
                            <tr style="height:25%; border-top:1px solid white; border-bottom:1px solid white" v-for="option in outboundCallOptions" v-bind:key="option.id">
                                <td style="width:70%; font-size:medium" align="center">{{ option.name }}</td>
                                <td style="width:30%"><button v-bind:class="option.buttonclass" style="width:60%; margin:5px" align="center">{{ option.value }}</button></td>
                            </tr>
                        </table> -->
                        <b-table :items="outboundCallOptions" :fields="fields" hover >
                            <template slot="value" scope="row">
                                <b-btn :variant="row.item.buttonclass" @click.stop="row.toggleDetails">{{row.item.value}}</b-btn>
                            </template>
                            <template slot="row-details" scope="row">
                                <b-card no-body class="text-white bg-dark text-left" style="position:relative; height:100px; overflow-y:scroll;">
                                <b-list-group>
                                    <b-list-item v-for="call in row.item.calls" v-bind:key="call.id">{{call.number}}</b-list-item>
                                </b-list-group>
                                </b-card>
                            </template>
                        </b-table>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState} from 'vuex'

  export default {
      components: {
      },
      name: 'phone-outbound-call-home',
      props: [
      ],
      data() {
        return {
            outboundCallOptions: [
                { id: 1, name:'Missed Calls',  value: '127', buttonclass: 'danger', 
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
        state: state => state.state
      }),
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
        callHeaderClicked(record, index){
            record._showDetails = true;
            console.log(record)
        }
      }
  }
</script>