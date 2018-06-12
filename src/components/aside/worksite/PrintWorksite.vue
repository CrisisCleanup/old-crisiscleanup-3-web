<script>
  export default {
    props: [
    ],
    data() {
      return {
      }
    },
    computed: {
      site() {
        return this.$store.getters.getCurrentSiteData;
      },
    },
    methods: {
    }
  }
</script>
<style scoped>
  .question {
    width: 280px;
    float: left;
  }

  .answer {
    width: 280px;
    float: right;
  }

  @font-face {
    font-family: Calibri;
    panose-1: 2 15 5 2 2 2 4 3 2 4;
  }

  @font-face {
    font-family: Tahoma;
    panose-1: 2 11 6 4 3 5 4 4 2 4;
  }

  .mainTable {
    border: 1px solid #333;
    width: 728px;
    padding: 0;
    border-collapse: collapse;
    margin-left: 5pt;
  }

  h1 {
    text-align: center;
    margin-bottom: 0;
    line-height: normal;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 24px;
  }

  .blackBackground {
    background-color: black;
    padding: 0;
    border: 1px solid #333;
  }

  p {
    padding: 1px;
    line-height: normal;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9pt;
  }

  .whiteSubtitle {
    text-align: center;
    color: white;
    font-weight: bold;
  }

  .white {
    color: white;
  }

  .allBorders {
    border: 1px solid #333;
  }

  .topThickBorder {
    border-top: 4px solid #333;
    padding: 0;
  }

  .sectionTitle {
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: black;
    padding: 2px;
  }

  .subSectionTitle {
    font-weight: bold;
    font-size: 16px;
    padding: 2px;
  }

  .data {
    font-weight: bold;
  }

  a:link {
    color: blue;
    text-decoration: underline;
  }

  a:visited {
    color: purple;
    text-decoration: underline;
  }

  div.WorkOrderPage {
    page: WorkOrderPage;
  }

  .statusLabel {
    text-align: right;
    padding-right: 0.5em;
  }

  tr {
    vertical-align: baseline;
    line-height: 12px;
  }

  .sizing td {
    height: 0;
    padding: 0;
  }
</style>

<template>
  <b-modal id="modal1" size="lg">
  <div class="WorkOrderPage">
    <table class="mainTable">
      <tbody>
      <tr>
        <td colspan="28">
          <h1 v-html="printWorksite.title') }}: {{site.case_number}}</h1>
        </td>
      </tr>
      <tr>
        <td colspan="28" class="blackBackground">
          <p class="whiteSubtitle" v-html="printWorksite.finished_instructions"></p>
        </td>
      </tr>

      <tr>
        <td class="allBorders">
          <p v-html="printWorksite.case_number"></p>
        </td>
        <td colspan="3" class="blackBackground">
          <p class="whiteSubtitle">{{site.case_number}}</p>
        </td>
        <td colspan="2">
          <p>&nbsp;</p>
        </td>
        <td colspan="15" class="allBorders">
          <p v-html="printWorksite.reported_by') }}: {{site.reported_by_org && site.reported_by_org.name}}</p>
        </td>
        <td colspan="2">
          <p>&nbsp;</p>
        </td>
        <td class="allBorders" colspan="5">
          <p v-html="printWorksite.claimed_by') }}: {{site.claimed_by_org && site.claimed_by_org.name}}</p>
        </td>
      </tr>

      <tr>
        <td colspan="28">
          <p style="font-size: smaller; font-style: italic;" v-html="printWorksite.register_instructions"></p>
        </td>
      </tr>

      <tr>
        <td colspan="8" class="topThickBorder">
          <p class="sectionTitle" v-html="printWorksite.personal_information"></p>
        </td>
        <td colspan="20" class="topThickBorder">
          <p>&nbsp;</p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.todays_date"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data"></p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.request_date"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">{{site.request_date}}</p>
        </td>
      </tr>

      <tr>
        <td colspan="28">
          <p>&nbsp;</p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.name"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data">{{site.name}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.work_type"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">{{site.work_type}}</p>
        </td>
      </tr>

      <tr>
        <td rowspan="2" colspan="2" class="allBorders">
          <p v-html="printWorksite.address"><br>

            &nbsp;&nbsp;&nbsp;<em>({{site.data.rent_or_own}})</em>

          </p>
        </td>
        <td rowspan="2" colspan="16" class="allBorders">
          <p class="data">{{site.address}}<br>
            <!--{{address2}}-->
          </p></td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.cross_street"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">{{site.data.cross_street}}</p>
        </td>
      </tr>

      <tr>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.priority"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">{{site.data.priority}}</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.phone1"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data">{{site.phone1}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.member_of_assessing_organization"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">
            <b>{{ site.data.member_of_assessing_organization == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.time_to_call"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data">{{site.data.time_to_call}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.first_responder"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">
            <b>{{ site.data.first_responder == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.disabled"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data">
            <b>{{ site.data.disabled == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.older_than_60"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p class="data">
            <b>{{ site.data.older_than_60 == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.special_needs"></p>
        </td>
        <td colspan="26" class="allBorders">
          <p class="data">{{site.data.special_needs}}</p>
        </td>
      </tr>


      <tr>
        <td colspan="28">
          <p>&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="8" class="topThickBorder">
          <p class="sectionTitle" v-html="printWorksite.damage_notes"></p>
        </td>
        <td colspan="20" class="topThickBorder">
          <p>{{site.data.damage_notes}}</p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.flood_height"></p>
        </td>
        <td class="allBorders">
          <p class="data">{{site.data.flood_height}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.appliance_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{ site.data.appliance_removal == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="7" class="allBorders">
          <p v-html="printWorksite.num_trees_down"></p>
        </td>
        <td class="allBorders">
          <p class="data">{{site.data.num_trees_down}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p v-html="printWorksite.debris_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.nonvegitative_debris_removal == 'y' ? 'X' : ''}}</b><b>{{site.data.vegitative_debris_removal == 'y' ? 'X': ''}}</b><b>{{
            site.data.debris_removal == 'y' ? 'X' : ''}}</b><b>{{ site.data.interior_debris_removal == 'y' ? 'X' : ''}}</b><b>{{ site.data.debris_in_trees_removal == 'y' ? 'X' : ''}}</b>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.carpet_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.carpet_removal == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.standing_water"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.standing_water == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="7" class="allBorders">
          <p v-html="printWorksite.num_wide_trees"></p>
        </td>
        <td class="allBorders">
          <p class="data">{{site.data.num_wide_trees}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td class="allBorders">
          <p class="data">&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.hardwood_floor_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.hardwood_floor_removal == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.mold_remediation"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.mold_remediation == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="7" class="allBorders">
          <p v-html="printWorksite.house_roof_damage"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.house_roof_damage == 'y'}}</b><b>{{site.data.outbuilding_roof_damage == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td class="allBorders">
          <p class="data">&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.drywall_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.drywall_removal == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.pump_needed"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.pump_needed == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="7" class="allBorders">
          <p v-html="printWorksite.tarps_needed"></p>
        </td>
        <td class="allBorders">
          <p class="data">{{site.data.tarps_needed}}</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td class="allBorders">
          <p class="data">&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.heavy_item_removal"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.heavy_item_removal == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.floors_affected"></p>
        </td>
        <td colspan="16" class="allBorders">
          <p class="data">{{site.data.floors_affected}}</p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.work_requested"></p>
        </td>
        <td colspan="26" class="allBorders">
          <p class="data">{{site.work_requested}}</p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.notes"></p>
        </td>
        <td colspan="26" class="allBorders">
          <p class="data">{{site.data.notes}} {{site.data.damage_notes}} {{site.data.status_notes}}</p>
        </td>
      </tr>


      <tr>
        <td colspan="28">
          <p>&nbsp;</p>
        </td>
      </tr>
      <tr>
        <td colspan="28"><p class="subSectionTitle" v-html="printWorksite.hazards_info"></p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.habitable"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.habitable == 'y'}}{{site.data.uninhabitable == 'n'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="8" class="allBorders">
          <p v-html="printWorksite.electricity"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.electricity == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="7" class="allBorders">
          <p v-html="printWorksite.electrical_lines"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.electrical_lines == 'y'}}</b>
          </p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p v-html="printWorksite.work_without_resident"></p>
        </td>
        <td class="allBorders">
          <p class="data">
            <b>{{site.data.work_without_resident == 'y'}}</b>
          </p>
        </td>
      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.other_hazards"></p>
        </td>
        <td colspan="26" class="allBorders">
          <p class="data">{{site.data.other_hazards}}</p>
        </td>
      </tr>


      <tr>
        <td colspan="28">
          <p>&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="8" class="topThickBorder">
          <p class="sectionTitle" v-html="printWorksite.legal_release_title"></p>
        </td>
        <td colspan="20" class="topThickBorder">
          <p>&nbsp;</p>
        </td>

      </tr>
      <tr>
        <td colspan="28" class="allBorders">
          <p v-html="printWorksite.legal_release"></p>
        </td>
      </tr>
      <tr>
        <td colspan="28">
          <p v-html="printWorksite.homeowner_signature"></p>
          <p>&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="8" class="topThickBorder">
          <p class="sectionTitle" v-html="printWorksite.report"></p>
        </td>
        <td colspan="6" class="topThickBorder">
          <p>&nbsp;</p>
        </td>
        <td colspan="9" class="topThickBorder">
          <p v-html="printWorksite.initials_of_resident_present"></p>
        </td>
        <td class="topThickBorder">
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="topThickBorder">
          <p v-html="printWorksite.misc_notes"></p>
        </td>

      </tr>

      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.hours_worked_per_volunteer"></p>
        </td>
        <td class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.total_volunteers"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="9" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.hours_neighbor"></p>
        </td>
        <td class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.total_volunteers"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="9" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
      </tr>


      <tr>
        <td colspan="2" class="allBorders">
          <p v-html="printWorksite.hours_neighbor"></p>
        </td>
        <td class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="6" class="allBorders">
          <p v-html="printWorksite.total_volunteers"></p>
        </td>
        <td colspan="3" class="allBorders">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="9" class="allBorders">
          <p>&nbsp;</p>
        </td>
        <td>
          <p>&nbsp;</p>
        </td>
        <td colspan="4" class="allBorders">
          <p>&nbsp;</p>
        </td>
      </tr>

      <tr>
        <td colspan="10" class="topThickBorder statusLabel">
          <p v-html="printWorksite.status_as_of"></p>
        </td>
        <td colspan="18" class="topThickBorder">
          <p class="sectionTitle">{{site.status }}</p>
        </td>
      </tr>
      <tr class="sizing">
        <td width="50"></td>
        <td width="50"></td>
        <td width="10"></td>
        <td width="5"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="10"></td>
        <td width="5"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="19"></td>
        <td width="64"></td>
        <td width="10"></td>
        <td width="5"></td>
        <td width="5"></td>
        <td width="50"></td>
        <td width="94"></td>
        <td width="94"></td>
        <td width="10"></td>
      </tr>
      </tbody>
    </table>
  </div>
  </b-modal>
</template>
<script>
  export default {
    name: 'PrintWorksite',
    data() {
      return {
        printWorksite: {
          title: this.$t('printWorksite.title'),
          finished_instructions: this.$t('printWorksite.finished_instructions'),
          reported_by: this.$t('printWorksite.reported_by'),
          claimed_by: this.$t('printWorksite.claimed_by'),
          register_instructions: this.$t('printWorksite.register_instructions'),
          personal_information: this.$t('printWorksite.personal_information'),
          todays_date: this.$t('printWorksite.todays_date'),
          request_date: this.$t('printWorksite.request_date'),
          name: this.$t('printWorksite.name'),
          work_type: this.$t('printWorksite.work_type'),
          address: this.$t('printWorksite.address'),
          cross_street: this.$t('printWorksite.cross_street'),
          priority: this.$t('printWorksite.priority'),
          phone1: this.$t('printWorksite.phone1'),
          member_of_assessing_organization: this.$t('printWorksite.member_of_assessing_organization'),
          time_to_call: this.$t('printWorksite.time_to_call'),
          first_responder: this.$t('printWorksite.first_responder'),
          disabled: this.$t('printWorksite.disabled'),
          older_than_60: this.$t('printWorksite.older_than_60'),
          special_needs: this.$t('printWorksite.special_needs'),
          damage_notes: this.$t('printWorksite.damage_notes'),
          flood_height: this.$t('printWorksite.flood_height'),
          appliance_removal: this.$t('printWorksite.appliance_removal'),
          num_trees_down: this.$t('printWorksite.num_trees_down'),
          debris_removal: this.$t('printWorksite.debris_removal'),
          carpet_removal: this.$t('printWorksite.carpet_removal'),
          standing_water: this.$t('printWorksite.standing_water'),
          num_wide_trees: this.$t('printWorksite.num_wide_trees'),
          hardwood_floor_removal: this.$t('printWorksite.hardwood_floor_removal'),
          mold_remediation: this.$t('printWorksite.mold_remediation'),
          house_roof_damage: this.$t('printWorksite.house_roof_damage'),
          drywall_removal: this.$t('printWorksite.drywall_removal'),
          pump_needed: this.$t('printWorksite.pump_needed'),
          tarps_needed: this.$t('printWorksite.tarps_needed'),
          heavy_item_removal: this.$t('printWorksite.heavy_item_removal'),
          floors_affected: this.$t('printWorksite.floors_affected'),
          work_requested: this.$t('printWorksite.work_requested'),
          case_number: this.$t('printWorksite.case_number'),
          notes: this.$t('printWorksite.notes'),
          hazards_info: this.$t('printWorksite.hazards_info'),
          habitable: this.$t('printWorksite.habitable'),
          electricity: this.$t('printWorksite.electricity'),
          electrical_lines: this.$t('printWorksite.electrical_lines'),
          work_without_resident: this.$t('printWorksite.work_without_resident'),
          other_hazards: this.$t('printWorksite.other_hazards'),
          legal_release_title: this.$t('printWorksite.legal_release_title'),
          legal_release: this.$t('printWorksite.legal_release'),
          homeowner_signature: this.$t('printWorksite.homeowner_signature'),
          report: this.$t('printWorksite.report'),
          initials_of_resident_present: this.$t('printWorksite.initials_of_resident_present'),
          misc_notes: this.$t('printWorksite.misc_notes'),
          hours_worked_per_volunteer: this.$t('printWorksite.hours_worked_per_volunteer'),
          total_volunteers: this.$t('printWorksite.total_volunteers'),
          hours_neighbor: this.$t('printWorksite.hours_neighbor'),
          status_as_of: this.$t('printWorksite.status_as_of')
        }
      }
    },
    components: {},
    mounted() {},
    computed: {},
    methods: {}
  }

</script>