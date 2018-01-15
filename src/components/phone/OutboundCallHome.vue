<template>
    <div class = "row justify-content-center">
        <div class = "col-6">
            <b-card-group deck>
                <b-card no-body class="text-white bg-dark text-center"
                header="Outbound/Return Calls"
                header-tag="header"
                header-bg-variant="secondary">
                        <table width="100%"> 
                            <tr style="height:25%; border-top:1px solid white; border-bottom:1px solid white" v-for="option in outboundCallOptions" v-bind:key="option.id">
                                <td style="width:70%; font-size:medium" align="center">{{ option.name }}</td>
                                <td style="width:30%"><button v-bind:class="option.buttonclass" style="width:60%; margin:5px" align="center">{{ option.value }}</button></td>
                            </tr>
                        </table>
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
                { id: 1, name:'Missed Calls',  value: '127', buttonclass: 'btn-danger'},
                { id: 2, name:'Needs Special Assistance',  value: '3', buttonclass:'btn-secondary'},
                { id: 3, name:'Confirm They Still Need Help',  value: '4928', buttonclass:'btn-secondary'},
                { id: 4, name:'Make Manual Outbound Call',  value: 'GO', buttonclass:'btn-success'}
            ],
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
      }
  }
</script>