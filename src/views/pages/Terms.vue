<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-8">
              <div class="row">
                <h1>{{ $t('terms.terms_and_conditions') }}</h1>
              </div>
              <div class="row">
                <h3>1. {{ $t('terms.preamble') }}</h3>
                <p>{{ $t('terms.preamble_intro') }}</p>

                <h3>2. {{ $t('terms.code_of_conduct') }}</h3>
                <p>{{ $t('terms.code_of_conduct_intro') }}</p>
                <ul>
                    <li>{{ $t('terms.noncommercial_use') }}</li>
                    <li>{{ $t('terms.no_pii') }}</li>
                    <li>{{ $t('terms.property_info_only') }}</li>
                    <li>{{ $t('terms.reputable_nonprofit') }}</li>
                    <li>{{ $t('terms.safeguard_password') }}</li>
                    <li>{{ $t('terms.client_consent') }}</li>
                    <li>{{ $t('terms.responsible_for_exported_data') }}</li>
                    <li>{{ $t('terms.minimize_sharing') }}</li>
                    <li>{{ $t('terms.non_emergency_use') }}</li>
                    <li>{{ $t('terms.ccu_not_responsible_for_your_services') }}</li>
                    <li>{{ $t('terms.do_not_represent_ccu') }}</li>
                    <li>{{ $t('terms.no_hacking') }}</li>
                    <li>{{ $t('terms.accept_sms') }}</li>
                    <li>{{ $t('terms.abide_by_tc') }}</li>
                </ul>    
                
                <h3>3. {{ $t('terms.definitions') }}</h3>
                <p>{{ $t('terms.definitions_intro') }}</p>
                <ol class="outline three">
                    <li>{{ $t('terms.def_company') }}</li>
                    <li>{{ $t('terms.def_website') }}</li>
                    <li>{{ $t('terms.def_service') }}</li>
                    <li>{{ $t('terms.def_third_party_service') }}</li>
                    <li>{{ $t('terms.def_you') }}</li>
                    <li>{{ $t('terms.def_client') }}</li>
                    <li>{{ $t('terms.def_incident') }}</li>
                    <li>{{ $t('terms.def_your_materials') }}</li>
                    <li>{{ $t('terms.def_trademarks') }}</li>
                    <ul>
                        <li class="indent"><strong>3.9.1</strong> {{ $t('terms.tm_ccu_name') }}</li>
                        <li class="indent"><strong>3.9.2</strong> {{ $t('terms.tm_ccu_logo') }}</li>
                        <li class="indent"><strong>3.9.3</strong> {{ $t('terms.tm_ccu_other_marks') }}</li>
                        <li class="indent"><strong>3.9.4</strong> {{ $t('terms.tm_no_other_company') }}</li>
                    </ul>
                </ol>
                    
                <h3>4. {{ $t('terms.your_acceptance') }}</h3>
                <ol class="outline four">
                    <li>{{ $t('terms.your_acceptance_intro') }}</li>
                    <ul>
                        <li class="indent"><strong>4.1.1</strong> {{ $t('terms.bound_by_tc') }}</li>
                        <li class="indent"><strong>4.1.2</strong> {{ $t('terms.comply_privacy_policy') }}</li>
                        <li class="indent"><strong>4.1.3</strong> {{ $t('terms.comply_other_policies') }}</li>
                        <li class="indent"><strong>4.1.4 </strong> {{ $t('terms.accept_tc_updates') }}</li>
                    </ul>
                </ol> 
                    
                <h3>5. {{ $t('terms.our_services') }}</h3>
                <ol class="outline five">
                    <li>{{ $t('terms.ccu_services_description') }}</li>
                    <li>{{ $t('terms.update_or_remove_functions') }}</li>
                </ol>    
                
                <h3>6. {{ $t('terms.website_content') }}</h3>
                <ol class="outline six">
                    <li>{{ $t('terms.third_party_links') }}</li>
                </ol>
                
                <h3>7. {{ $t('terms.ip_rights') }}</h3>
                <ol class="outline seven">
                    <li>{{ $t('terms.your_materials') }}</li>
                    <li>{{ $t('terms.infringement') }}</li>
                    <li>{{ $t('terms.dmca_intro') }}</li>
                    <ul>
                        <li class="indent"><strong>7.3.1</strong> {{ $t('terms.dmca_signature') }}</li>
                        <li class="indent"><strong>7.3.2</strong> {{ $t('terms.dmca_description') }}</li>
                        <li class="indent"><strong>7.3.3</strong> {{ $t('terms.dmca_location') }}</li>
                        <li class="indent"><strong>7.3.4</strong> {{ $t('terms.dmca_your_contact_info') }}</li>
                        <li class="indent"><strong>7.3.5</strong> {{ $t('terms.dmca_not_authorized_statement') }}</li>
                        <li class="indent"><strong>7.3.6</strong> {{ $t('terms.dmca_statement_perjury') }}</li>
                        <li class="indent"><strong>7.3.7</strong> {{ $t('terms.dmca_contact_us') }}</li>
                    </ul>
                    <li>{{ $t('terms.no_trademark_authorization') }}</li>
                    <li>{{ $t('terms.apache_license') }}</li>
                </ol>      
                    
                <h3>8. {{ $t('terms.representations_warranties') }}</h3>
                <ol class="outline eight">
                    <li>{{ $t('terms.no_warranties') }}</li>
                    <li>{{ $t('terms.no_representations') }}</li>
                </ol>  
                    
                <h3>9. {{ $t('terms.indemnification') }}</h3>
                <ol class="outline nine">
                    <li>{{ $t('terms.by_you') }}</li>
                    <li>{{ $t('terms.procedures') }}</li>
                </ol>          
                    
                <h3>10. {{ $t('terms.limitations_on_liability') }}</h3>
                <ol class="outline ten">
                    <li>{{ $t('terms.liability_limits') }}</li>
                    <li>{{ $t('terms.liability_disclaimer') }}</li>
                    <li>{{ $t('terms.statute_of_limitations') }}</li>
                </ol>    
                    
                <h3>11. {{ $t('terms.jurisdiction_consent') }}</h3>
                <ol class="outline eleven">
                    <li>{{ $t('terms.venue') }}</li>
                    <li>{{ $t('terms.jurisdiction') }}</li>
                </ol>

                <h3>12. {{ $t('terms.miscellaneous_provisions') }}</h3>            
                <ol class="outline twelve">
                    <li>{{ $t('terms.severability') }}</li>
                    <li>{{ $t('terms.not_partners') }}</li>
                    <li>{{ $t('terms.third_party_beneficiaries') }}</li>
                    <li>{{ $t('terms.force_majeure') }}</li>
                    <li>{{ $t('terms.no_waiver') }}</li>
                    <li>{{ $t('terms.headings') }}</li>
                    <li>{{ $t('terms.assignment') }}</li>
                    <li>{{ $t('terms.address_intro') }}<br />
                        Crisis Cleanup, LLC<br />
                        Attn: Aaron Titus<br />
                        5905 Blue Mountain Cir.<br />
                        Longmont, CO 80503
                    <li>{{ $t('terms.entire_agreement') }}</li>
                    <li>{{ $t('terms.updated') }}</li>
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
  name: 'Terms'
}
</script>
