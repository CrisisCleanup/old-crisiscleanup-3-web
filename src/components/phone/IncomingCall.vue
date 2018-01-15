<template>
    <div class = "row justify-content-center">
        <div class = "col-6">
            <b-card-group deck>
                <b-card header="Incoming Call From"
                    header-tag="header"
                    class="text-white bg-dark text-center">

                    <b-card-body>
                        <div class = "row justify-content-center card-text">
                            <div style= "width:80%" align = "left">
                                <p style = "font-size:medium; margin:0px">601-496-4984</p>
                                <p style = "font-size:small; margin:0px">Florida: Jacksonville, Jacksonvile Beach, Lakeside</p> 
                            </div>
                            <div style="width:20%" align = "right">
                                <div>
                                    right justify
                                </div>
                            </div>
                            <table width="100%">
                                <tr>
                                    <td style="width:5%; vertical-align: middle" align="left"><img :src="boot"></td>
                                    <td style="width:75%; vertical-align: middle" align="left">
                                        <p style = "font-size:large; margin-top:10px; margin-bottom:0px; margin-left:10px; margin-right:0px">
                                        Julie Smith</P>
                                        <p style = "font-size:small; margin-top:0px; margin-bottom:10px; margin-left:10px; margin-right:0px">1411 North Terrace Drive, Jacksonville FL
                                        </p>
                                    </td>
                                    <td style="20%; vertical-align: middle" align="right">
                                        <p style = "font-size: xx-large">
                                            K12109
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </b-card-body>

                    <b-tabs class>
                        <b-tab title="Log" active>
                            <br>Log
                        </b-tab>
                        <b-tab title="Intake" >
                            <br>Intake
                        </b-tab>
                        <b-tab title="Map">
                            <br>Map
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex' //do we want to map acitons here?
  export default {
      name: 'phone-incoming-call',
      props: [
      ],
      data() {
        return {
            boot: '../../static/img/map_icons/Muck_Out_orange.png'
        };
        },
      computed: {
      ...mapState('phone', {
        state: state => state.state
      }),
    },
      methods: {
      }
  }
</script>