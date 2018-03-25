<template>
    <div class = "row justify-content-center">
        <div class = "col-12">
            <incoming-call-script :name="user.name" />
            <b-card-group deck>
                <b-card no-body class="text-white bg-dark text-center"
                header="Incoming Call From"
                header-tag="header"
                header-bg-variant="secondary">
                            <table style="width:96%; margin-left:2%; margin-right:2%; margin-top:2%">
                                <tr>
                                    <td style="width:80%" align="left">
                                        <p style = "font-size:medium; margin:0px">{{caller.phoneNumber}}</p>
                                        <p style = "font-size:small; margin:0px">Florida: Jacksonville, Jacksonvile Beach, Lakeside</p> 
                                    </td>
                                    <td style = "width:20%" align="right">
                                        <b-badge pill variant="light" style="vertical-align:middle">
                                            <table width = "100%">
                                                <tr>
                                                    <td style = "width:50%; font-size:medium; border-right:1px solid black">2</td>
                                                    <td style = "width:50%; font-size:medium">8</td>
                                                </tr>
                                                <tr>
                                                    <td style = "width:50%; font-size:x-small; border-right:1px solid black">calls</td>
                                                    <td style = "width:50%; font-size:x-small">days</td>
                                                </tr>
                                            </table>
                                        </b-badge>
                                    </td>
                                </tr>
                            </table>
                            <table style="width:96%; margin-left:2%; margin-right:2%; margin-top:2%">
                                <tr>
                                    <td style="width:5%" align="left"><img :src="boot_image"></td>
                                    <td style="width:75%" align="left">
                                        <p style = "font-size:large; margin-top:10px; margin-bottom:0px; margin-left:10px; margin-right:0px">
                                        Julie Smith</P>
                                        <p style = "font-size:small; margin-top:0px; margin-bottom:10px; margin-left:10px; margin-right:0px">1411 North Terrace Drive, Jacksonville FL
                                        </p>
                                    </td>
                                    <td style="width:20%" align="right">
                                        <p style = "font-size: xx-large; vertical-align:middle">
                                            K12109
                                        </p>
                                    </td>
                                </tr>
                            </table>
                    <!--TODO: In the future, add component to show information at bottom - Area for chat, map, etc. 
                    <b-tabs class>
                        <b-tab title="Log" active>
                            <br>Log
                        </b-tab>
                        <b-tab title="Chat" >
                            <br>Chat
                        </b-tab>
                        <b-tab title="Map">
                            <br>Map
                        </b-tab>
                    </b-tabs-->
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import IncomingCallScript from "@/components/phone/IncomingCallScript";

export default {
  components: {
    "incoming-call-script": IncomingCallScript
  },
  name: "phone-incoming-call",
  data() {
    return {
      boot_image: "../../static/img/map_icons/Muck_Out_orange.png"
    };
  },
  computed: {
    ...mapGetters("phone", {
      user: "getUser",
      caller: "getCaller"
    })
  }
};
</script>