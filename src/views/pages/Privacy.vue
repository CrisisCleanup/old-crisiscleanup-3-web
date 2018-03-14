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
                  <p>Like most website operators, we gather NPII from visitors of the sort that web browsers, depending on their settings, may make available. That information includes the user's Internet Protocol (IP) address, operating system and browser type, the size of your computer screen, and whether your browser has enabled Javascript. We may also collect the locations of the web pages you view right before arriving at, while navigating, and immediately after leaving the Website. If you navigated to the Website from a search engine, the words you searched for (your "search string") may also be collected.</p>
                  <p>We analyze this NPII gathered from users of the Website to help us better understand how the Website is being used. By identifying patterns and trends in usage, we are able to better design the Website to improve your experience. For example, analyzing the size of our users' screens helps ensure that we do not make our website too wide; analyzing search strings helps us improve content; and analyzing browser types helps us make our website accessible to the greatest number of users possible. Occasionally we may publish aggregated NPII, such as a report on trends in the usage of the Website.</p>
                </li>
                <li><strong>Web Cookies</strong>
                  <p>A "Web Cookie" is a string of information that a website stores on a user's computer, and that the user's browser provides to the website each time the user submits a query to the site. For example, Cookies enable users to visit multiple pages on the Website and log in only once. We use Web Cookies to track the pages that users visit during each Website session, both to help us improve your experience and to help us understand how the Website is being used. We do not attempt to link information gathered using Web Cookies to PII.</p>
                  <p>This site uses cookies for some interactive features. Most browsers will automatically accept cookies. You can set your browser to reject cookies but some parts of the web site may not function properly if the cookies are rejected.</p>
                </li>
                <li><strong>Web Beacons</strong>
                  <p>A "Web Beacon" is an object that is embedded in a web page or email message that is usually invisible to the user (such as a small, invisible image), and allows website operators to check whether a user has viewed a particular web page or image. We may use Web Beacons on the Website to count users who have visited particular pages and to deliver co-branded services. Web Beacons are not used to access users' PII; they are a technique we may use to compile aggregated statistics about Website usage. Web Beacons collect only a limited set of information including a cookie number, time and date of a page view, and a description of the page on which the Web Beacon resides.</p>
                  <p>Though you may not decline Web Beacons, they may be rendered ineffective by declining all cookies, changing your email client settings, modifying your browser setting to notify you each time a cookie is tendered and permit you to accept or decline cookies on an individual basis.</p>
                </li>
              </ol>
                    
                <h3>5 Other Disclosures</h3>

                <p>We will disclose Personally-Identifying Information under the following circumstances:</p>
                <ol class="outline five">
                    <li><strong>By Law or to Protect Rights</strong>: We disclose PII and NPII when required to do so by law, or in response to a subpoena or court order, to cooperate with a legitimate law enforcement investigation, or when we believe in our sole discretion that disclosure is reasonably necessary to protect our property or rights, or those of third parties or the public at large.</li>
                    <li><strong>Business Transfers; Bankruptcy</strong>: We reserve the right to transfer all PII and NPII in our possession to a successor organization in the event of a merger, acquisition, bankruptcy, or other sale of all or a portion of our assets. Other than to the extent ordered by a bankruptcy or other court, the use and disclosure of all transferred PII will be subject to this Policy, or to a new privacy policy if you are given notice of that new privacy policy and are given an opportunity to affirmatively opt-out of it. PII submitted or collected after a transfer, however, may be subject to a new privacy policy by the successor organization.</li>
                    <li><strong>Research or Historical Purposes</strong>: Crisis Cleanup information may be useful to improve future response and coordination efforts, or to ensure a correct historical narrative is preserved. We may partner and share information with recognized research institutions or organizations. However, we will only do so if the research project has been approved by an institutional review board or privacy board that has established protocols to ensure the privacy of the information shared.  We may also, upon request and at our sole discretion, share a reasonable amount of information with community or national historical preservation organizations in a manner reasonably designed to protect the identities of survivors, and after a reasonable time has passed from the disaster.</li>
                    <li><strong>In the Public Interest</strong>: After disasters, such as a flood, Crisis Cleanup containst information (such as flood heights) that can help public officials determine the disaster's impact, cost, and possible mitigation strategies. Likewise, long-term recovery groups (LTRGs) and unmet needs committees want access to Crisis Cleanup information to help survivors for years after a disaster. In situations like these, we may share an appropriately limited amount of case information to aid the public interest. Though each request is unique, we generally do not share information like client names, phone numbers or email addresses with government. We always try to reach out to local VOADs (Voluntary Organizations Active in Disaster) to ensure the data is shared transparently, and consistent with local values.</li>
                    <li><strong>Other Purposes</strong>: As otherwise described in this Policy.</li>
                </ol>
                    
                <h3>6 SSL Encryption</h3>
                <p>The transfer of online transaction data to and from the web site is protected by the implementation of a Secure Sockets Layer (SSL) protocol. Our security certificate allows web browsers to verify the authenticity of the secure sections of the Website and to communicate with our site securely, encrypting confidential information as it passes over the internet. It is your responsibility to keep your password secure at all times to avoid unauthorized use of your account.</p>

                <h3>7 Policy Changes</h3>
                <ol class="outline seven">
                    <li><strong>Changes</strong>: We may, at our sole discretion, change this Policy from time to time. Any and all changes to our Policy will also be reflected on this page. Unless we obtain your express consent, any revised Policy will apply only to information collected after such time as the revised Policy takes effect, and not to information collected under any earlier Privacy Policies. We will attempt to notify you whenever there are material changes to this Policy. We encourage you to frequently check this page for any changes to our Policy. If you have any questions about our Policy, please contact us.</li>
                    <li><strong>Effective Date</strong>: This Policy is effective July 28, 2013. Last Updated: March 17, 2016.</li>   
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
