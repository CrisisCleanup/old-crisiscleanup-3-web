<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-8">
              <div class="row">
                <h1>{{ $t('privacy.privacy_and_security_policy') }}</h1>
              </div>
              <div class="row">
                <p v-html="privacy.purpose_intro"></p>
                <p v-html="privacy.must_accept"></p>
                <p v-html="privacy.check_for_changes"></p>
                
                <h3>1 {{ $t('privacy.highlights_and_principles') }}</h3>
                <p v-html="privacy.read_it_all"></p>
                <p v-html="privacy.shared_with_all_participants"></p>
                <p v-html="privacy.client_consent"></p>
                        
                <h3>2 {{ $t('privacy.definitions') }}</h3>
                <p v-html="privacy.definitions_intro"></p>
                <ol class="outline two">
                    <li v-html="privacy.def_npii"></li>
                    <li v-html="privacy.def_pii"></li>
                    <li v-html="privacy.def_org_info"></li>
                    <li v-html="privacy.def_pub_info"></li>
                    <li v-html="privacy.def_you"></li>
                    <li v-html="privacy.def_company"></li>
                    <li v-html="privacy.def_service"></li>
                    <li v-html="privacy.def_terms_conditions"></li>
                    <li v-html="privacy.def_your_materials"></li>           
                </ol>
                    
                <h3>3 {{ $t('privacy.children') }}</h3>
                <p v-html="privacy.not_for_under_13"></p>
            
                <h3>4 {{ $t('privacy.information_collected') }}</h3> 
                <ol class="outline four">
                  <li v-html="privacy.how_used_intro"></li>
                  <table>
                    <thead>
                      <tr>
                        <th>{{ $t('privacy.table_th_info_collected') }}</th>
                        <th>{{ $t('privacy.table_th_info_primary_purpose') }}</th>
                        <th>{{ $t('privacy.table_th_info_required') }}</th>
                        <th>{{ $t('privacy.table_th_shared_participants') }}</th>
                        <th>{{ $t('privacy.table_th_shared_public') }}</th>
                        <th>{{ $t('privacy.table_th_pii_npii') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t('privacy.table_client_contact_info') }}</td>
                        <td>{{ $t('privacy.table_empower_recovery') }}</td>
                        <td>{{ $t('privacy.table_required') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_not_shared_public') }}</td>
                        <td>{{ $t('privacy.table_pii') }}</td>                
                      </tr>
                      <tr>
                        <td>{{ $t('privacy.table_lat_lon') }}</td>
                        <td>{{ $t('privacy.table_derived_from_address') }}</td>
                        <td>{{ $t('privacy.table_required') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_randomized_public') }}</td>
                        <td>{{ $t('privacy.table_pii') }}</td>                
                      </tr> 
                      <tr>
                        <td>{{ $t('privacy.table_priortization_info') }}</td>
                        <td>{{ $t('privacy.table_variety_questions') }}</td>
                        <td>{{ $t('privacy.table_optional') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_not_shared_public') }}</td>
                        <td>{{ $t('privacy.table_npii') }}</td>                
                      </tr>
                      <tr>
                        <td>{{ $t('privacy.table_damage_info') }}</td>
                        <td>{{ $t('privacy.table_variety_questions_response') }}</td>
                        <td>{{ $t('privacy.table_optional') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_some_shared_public') }}</td>
                        <td>{{ $t('privacy.table_npii') }}</td>                
                      </tr>
                      <tr>
                        <td>{{ $t('privacy.table_your_name_contact') }}</td>
                        <td>{{ $t('privacy.table_your_name_contact_purpose') }}</td>
                        <td>{{ $t('privacy.table_required') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_not_shared_public') }}</td>
                        <td>{{ $t('privacy.table_pii') }}</td>                
                      </tr>     
                      <tr>
                        <td>{{ $t('privacy.table_usage_habits') }}</td>
                        <td>{{ $t('privacy.table_usage_habits_google') }}</td>
                        <td>{{ $t('privacy.table_some_optional_no_cookies') }}</td>
                        <td>{{ $t('privacy.table_shared_only_aggregate') }}</td>
                        <td>{{ $t('privacy.table_shared_only_aggregate') }}</td>
                        <td>{{ $t('privacy.table_npii') }}</td>                
                      </tr>
                      <tr>
                        <td>{{ $t('privacy.table_your_materials') }}</td>
                        <td>{{ $t('privacy.table_videos_pictures') }}</td>
                        <td>{{ $t('privacy.table_optional') }}</td>
                        <td>{{ $t('privacy.table_shared_orgs') }}</td>
                        <td>{{ $t('privacy.table_shared_public') }}</td>
                        <td>{{ $t('privacy.table_npii') }}</td>                
                      </tr>                
                    </tbody>
                  </table>
                  <p v-html="privacy.visitor_npii_collected"></p>
                  <p v-html="privacy.how_use_visitor_npii"></p>
                </li>
                <li><strong>{{ $t('privacy.web_cookies') }}</strong>
                  <p v-html="privacy.web_cookie_def"></p>
                  <p v-html="privacy.we_use_web_cookies"></p>
                </li>
                <li><strong>{{ $t('privacy.web_beacons') }}</strong>
                  <p v-html="privacy.web_beacon_def"></p>
                  <p v-html="privacy.how_to_kill_web_beacons"></p>
                </li>
              </ol>
                    
                <h3>5 {{ $t('privacy.other_disclosures') }}</h3>

                <p v-html="privacy.disclose_pii_when"></p>
                <ol class="outline five">
                    <li v-html="privacy.by_law_or_protect_rights"></li>
                    <li v-html="privacy.business_transfers"></li>
                    <li v-html="privacy.research_or_history"></li>
                    <li v-html="privacy.in_public_interest"></li>
                    <li v-html="privacy.other_purposes"></li>
                </ol>
                    
                <h3>6 {{ $t('privacy.ssl_encryption') }}</h3>
                <p v-html="privacy.we_use_ssl"></p>

                <h3>7 {{ $t('privacy.policy_changes') }}</h3>
                <ol class="outline seven">
                    <li v-html="privacy.how_we_update_policy"></li>
                    <li v-html="privacy.effective_date"></li>   
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_terms-privacy.scss";
</style>

<script>
export default {
  name: 'Privacy',
    data() {
      return {
        privacy: {
          privacy_and_security_policy: this.$t('privacy.privacy_and_security_policy'),
          purpose_intro: this.$t('privacy.purpose_intro'),
          must_accept: this.$t('privacy.must_accept'),
          check_for_changes: this.$t('privacy.check_for_changes'),
          highlights_and_principles: this.$t('privacy.highlights_and_principles'),
          read_it_all: this.$t('privacy.read_it_all'),
          shared_with_all_participants: this.$t('privacy.shared_with_all_participants'),
          client_consent: this.$t('privacy.client_consent'),
          definitions: this.$t('privacy.definitions'),
          definitions_intro: this.$t('privacy.definitions_intro'),
          def_npii: this.$t('privacy.def_npii'),
          def_pii: this.$t('privacy.def_pii'),
          def_org_info: this.$t('privacy.def_org_info'),
          def_pub_info: this.$t('privacy.def_pub_info'),
          def_you: this.$t('privacy.def_you'),
          def_company: this.$t('privacy.def_company'),
          def_service: this.$t('privacy.def_service'),
          def_terms_conditions: this.$t('privacy.def_terms_conditions'),
          def_your_materials: this.$t('privacy.def_your_materials'),
          children: this.$t('privacy.children'),
          not_for_under_13: this.$t('privacy.not_for_under_13'),
          information_collected: this.$t('privacy.information_collected'),
          how_used_intro: this.$t('privacy.how_used_intro'),
          table_th_info_collected: this.$t('privacy.table_th_info_collected'),
          table_th_info_primary_purpose: this.$t('privacy.table_th_info_primary_purpose'),
          table_th_info_required: this.$t('privacy.table_th_info_required'),
          table_th_shared_participants: this.$t('privacy.table_th_shared_participants'),
          table_th_shared_public: this.$t('privacy.table_th_shared_public'),
          table_th_pii_npii: this.$t('privacy.table_th_pii_npii'),
          table_client_contact_info: this.$t('privacy.table_client_contact_info'),
          table_empower_recovery: this.$t('privacy.table_empower_recovery'),
          table_required: this.$t('privacy.table_required'),
          table_shared_orgs: this.$t('privacy.table_shared_orgs'),
          table_not_shared_public: this.$t('privacy.table_not_shared_public'),
          table_pii: this.$t('privacy.table_pii'),
          table_lat_lon: this.$t('privacy.table_lat_lon'),
          table_derived_from_address: this.$t('privacy.table_derived_from_address'),
          table_randomized_public: this.$t('privacy.table_randomized_public'),
          table_priortization_info: this.$t('privacy.table_priortization_info'),
          table_variety_questions: this.$t('privacy.table_variety_questions'),
          table_optional: this.$t('privacy.table_optional'),
          table_npii: this.$t('privacy.table_npii'),
          table_damage_info: this.$t('privacy.table_damage_info'),
          table_variety_questions_response: this.$t('privacy.table_variety_questions_response'),
          table_some_shared_public: this.$t('privacy.table_some_shared_public'),
          table_your_name_contact: this.$t('privacy.table_your_name_contact'),
          table_your_name_contact_purpose: this.$t('privacy.table_your_name_contact_purpose'),
          table_usage_habits: this.$t('privacy.table_usage_habits'),
          table_usage_habits_google: this.$t('privacy.table_usage_habits_google'),
          table_some_optional_no_cookies: this.$t('privacy.table_some_optional_no_cookies'),
          table_shared_only_aggregate: this.$t('privacy.table_shared_only_aggregate'),
          table_your_materials: this.$t('privacy.table_your_materials'),
          table_videos_pictures: this.$t('privacy.table_videos_pictures'),
          table_shared_public: this.$t('privacy.table_shared_public'),
          visitor_npii_collected: this.$t('privacy.visitor_npii_collected'),
          how_use_visitor_npii: this.$t('privacy.how_use_visitor_npii'),
          web_cookies: this.$t('privacy.web_cookies'),
          web_cookie_def: this.$t('privacy.web_cookie_def'),
          we_use_web_cookies: this.$t('privacy.we_use_web_cookies'),
          web_beacons: this.$t('privacy.web_beacons'),
          web_beacon_def: this.$t('privacy.web_beacon_def'),
          how_to_kill_web_beacons: this.$t('privacy.how_to_kill_web_beacons'),
          other_disclosures: this.$t('privacy.other_disclosures'),
          disclose_pii_when: this.$t('privacy.disclose_pii_when'),
          by_law_or_protect_rights: this.$t('privacy.by_law_or_protect_rights'),
          business_transfers: this.$t('privacy.business_transfers'),
          research_or_history: this.$t('privacy.research_or_history'),
          in_public_interest: this.$t('privacy.in_public_interest'),
          other_purposes: this.$t('privacy.other_purposes'),
          ssl_encryption: this.$t('privacy.ssl_encryption'),
          we_use_ssl: this.$t('privacy.we_use_ssl'),
          policy_changes: this.$t('privacy.policy_changes'),
          how_we_update_policy: this.$t('privacy.how_we_update_policy'),
          effective_date: this.$t('privacy.effective_date')
        }
      }
    }
}
</script>
