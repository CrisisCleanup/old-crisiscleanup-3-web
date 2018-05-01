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
                <p>{{ $t('privacy.purpose_intro') }}</p>
                <p>{{ $t('privacy.must_accept') }}</p>
                <p>{{ $t('privacy.check_for_changes') }}</p>
                
                <h3>1 {{ $t('privacy.highlights_and_principles') }}</h3>
                <p>{{ $t('privacy.read_it_all') }}</p>
                <p>{{ $t('privacy.shared_with_all_participants') }}</p>
                <p>{{ $t('privacy.client_consent') }}</p>
                        
                <h3>2 {{ $t('privacy.definitions') }}</h3>
                <p>{{ $t('privacy.definitions_intro') }}</p>
                <ol class="outline two">
                    <li>{{ $t('privacy.def_npii') }}</li>
                    <li>{{ $t('privacy.def_pii') }}</li>
                    <li>{{ $t('privacy.def_org_info') }}</li>
                    <li>{{ $t('privacy.def_pub_info') }}</li>
                    <li>{{ $t('privacy.def_you') }}</li>
                    <li>{{ $t('privacy.def_company') }}</li>
                    <li>{{ $t('privacy.def_service') }}</li>
                    <li>{{ $t('privacy.def_terms_conditions') }}</li>
                    <li>{{ $t('privacy.def_your_materials') }}</li>           
                </ol>
                    
                <h3>3 {{ $t('privacy.children') }}</h3>
                <p>{{ $t('privacy.not_for_under_13') }}</p>
            
                <h3>4 {{ $t('privacy.information_collected') }}</h3> 
                <ol class="outline four">
                  <li>{{ $t('privacy.how_used_intro') }}
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
                  <p>{{ $t('privacy.visitor_npii_collected') }}</p>
                  <p>{{ $t('privacy.how_use_visitor_npii') }}</p>
                </li>
                <li><strong>{{ $t('privacy.web_cookies') }}</strong>
                  <p>{{ $t('privacy.web_cookie_def') }}</p>
                  <p>{{ $t('privacy.we_use_web_cookies') }}</p>
                </li>
                <li><strong>{{ $t('privacy.web_beacons') }}</strong>
                  <p>{{ $t('privacy.web_beacon_def') }}</p>
                  <p>{{ $t('privacy.how_to_kill_web_beacons') }}</p>
                </li>
              </ol>
                    
                <h3>5 {{ $t('privacy.other_disclosures') }}</h3>

                <p>{{ $t('privacy.disclose_pii_when') }}</p>
                <ol class="outline five">
                    <li>{{ $t('privacy.by_law_or_protect_rights') }}</li>
                    <li>{{ $t('privacy.business_transfers') }}</li>
                    <li>{{ $t('privacy.research_or_history') }}</li>
                    <li>{{ $t('privacy.in_public_interest') }}</li>
                    <li>{{ $t('privacy.other_purposes') }}</li>
                </ol>
                    
                <h3>6 {{ $t('privacy.ssl_encryption') }}</h3>
                <p>{{ $t('privacy.we_use_ssl') }}</p>

                <h3>7 {{ $t('privacy.policy_changes') }}</h3>
                <ol class="outline seven">
                    <li>{{ $t('privacy.how_we_update_policy') }}</li>
                    <li>{{ $t('privacy.effective_date') }}</li>   
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
  name: 'Privacy'
}
</script>
