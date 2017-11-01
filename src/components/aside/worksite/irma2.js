export const output = `
<!--Hurricane Irma Form Last Updated: 2017-10-07 10:33:48. Heroku Format-->
<p><strong>Hurricane Irma</strong>: Enter property damage and needs. <u>No sensitive information!</u> Tell the client
  this information will be shared with many organizations to provide service as fast as possible, which may be several
  weeks. Service is not guaranteed.</p>
<div class="">
  <div class="small-12 medium-12 large-12 columns"><h5>Property and Personal Information <span data-tooltip
                                                                                               aria-haspopup="true"
                                                                                               class="has-tip tip-bottom"
                                                                                               title="<u>Crisis Cleanup is about property, not people.</u> <br /><strong>Never include SSNs, FEMA numbers, dates of birth, detailed medical information, etc.</strong>"><i
    class="fa fa-question"></i></span></h5></div>
</div>
<div class="">
  <div class="form-group string optional legacy_legacy_site_status"><label class="" for="legacy_legacy_site_status">Current
    Status <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                 title="<strong>Definitions</strong><br /><u>Open, unassigned</u>: Has not been assigned to an organization's internal team.<br /><u>Open, assigned</u>: Has been assigned to an internal team, and work is imminent.<br /><u>Open, partially completed</u>: Is partially complete, but needs additional work.<br /><u>Open, needs follow-up</u>: Needs additional information or work in order to continue.<br /><u>Closed, completed</u>: Is completed, and no further action for the current phase is necessary.<br /><u>Closed, incomplete</u>: Is not complete, but the organization will not complete the remaining work (e.g. deferred maintenance, demobiliztation).<br /><u>Closed, out of scope</u>: Is not complete, but the requested work is not in scope for any responding relief organization. (e.g. 4-foot diameter trees)<br /><u>Closed, done by others</u>: Is completed, but the work was done by others. No further action necessary.<br /><u>Closed, no help wanted</u>: Was declined by owner. No help was wanted. No further action necessary.<br /><u>Closed, rejected</u>: Was rejected by the responding organization. Please note the reason for rejection.<br /><u>Closed, duplicate</u>: Was a duplicate. No further action necessary. Use this status instead of trying do delete a record."><i
      class="fa fa-question"></i></span></label> <select class="form-control" v-model="legacy_legacy_site.status"
                                                         id="legacy_legacy_site_status">
    <option value="Open, unassigned">Open, unassigned</option>
    <option value="Open, assigned">Open, assigned</option>
    <option value="Open, partially completed">Open, partially completed</option>
    <option value="Open, needs follow-up">Open, needs follow-up</option>
    <option value="Closed, completed">Closed, completed</option>
    <option value="Closed, incomplete">Closed, incomplete</option>
    <option value="Closed, out of scope">Closed, out of scope</option>
    <option value="Closed, done by others">Closed, done by others</option>
    <option value="Closed, no help wanted">Closed, no help wanted</option>
    <option value="Closed, rejected">Closed, rejected</option>
    <option value="Closed, duplicate">Closed, duplicate</option>
  </select></div>
</div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_name"><label class="" for="legacy_legacy_site_name">Resident
      Name <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                 title="This may be the primary contact, resident, or owner."><i
        class="fa fa-question"></i></span></label> <input class="form-control string optional" type="text"
                                                          v-model="legacy_legacy_site.name"
                                                          id="legacy_legacy_site_name"/></div>
  </div>
    <div class="form-group string required legacy_legacy_site_phone1"><label class=""
                                                                             for="legacy_legacy_site_phone1"><abbr
      title="required">*</abbr> Phone 1 <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                                               title="At least one phone number is required. Call before helping."><i
      class="fa fa-question"></i></span></label> <input class="form-control string required" type="text"
                                                        v-model="legacy_legacy_site.phone1"
                                                        id="legacy_legacy_site_phone1"/></div>
    <div class="form-group string optional legacy_legacy_site_phone2"><label class=""
                                                                             for="legacy_legacy_site_phone2">Phone 2</label>
      <input class="form-control string optional" type="text" v-model="legacy_legacy_site.phone2"
             id="legacy_legacy_site_phone2"/></div>
<div class="unhide" id="property_info">
  <div class="">
    <div class="form-group datetime-local optional legacy_legacy_site_request_date"><label class=""
                                                                                           for="legacy_legacy_site_request_date">Request
      Date
      <small>(<a href="#"
                 onclick="document.getElementById('legacy_legacy_site_request_date').readOnly=false; document.getElementById('legacy_legacy_site_request_date').focus(); return false;">edit</a>)
      </small>
    </label> <input class="form-control datetime-local optional" type="text" v-model="legacy_legacy_site.request_date"
                    id="legacy_legacy_site_request_date" readonly/></div>
  </div>

  <div class="">
    <div class="form-group string optional legacy_legacy_site_address"><label class="" for="legacy_legacy_site_address">Street
      Address</label> <input class="form-control string optional" type="text" v-model="legacy_legacy_site.address"
                             id="legacy_legacy_site_address"/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_city"><label class=""
                                                                           for="legacy_legacy_site_city">City</label>
      <input class="form-control string optional" type="text" v-model="legacy_legacy_site.city"
             id="legacy_legacy_site_city"/></div>
  </div>
  <div class="">
    <div class="form-group string required legacy_legacy_site_county"><label class=""
                                                                             for="legacy_legacy_site_county"><abbr
      title="required">*</abbr> County <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                                             title="County is used for reporting purposes. Please do not edit unless you are sure it is incorrect."><i
      class="fa fa-question"></i></span>
      <small>(<a href="#"
                 onclick="document.getElementById('legacy_legacy_site_county').readOnly=false; document.getElementById('legacy_legacy_site_county').focus(); return false;">edit</a>)
      </small>
    </label> <input class="form-control string required" type="text" v-model="legacy_legacy_site.county"
                    id="legacy_legacy_site_county" readonly/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_state"><label class="" for="legacy_legacy_site_state">State</label>
      <input class="form-control string optional" type="text" v-model="legacy_legacy_site.state"
             id="legacy_legacy_site_state"/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_zip_code"><label class=""
                                                                               for="legacy_legacy_site_zip_code">Zip
      Code</label> <input class="form-control string optional" type="text" v-model="legacy_legacy_site.zip_code"
                          id="legacy_legacy_site_zip_code"/></div>
  </div>
  <div class="">
    <div class="input-group float legacy_legacy_site_latitude">
      <div class="col-sm-1 col-md-1 col-lg-1"><input class="float" type="hidden" v-model="legacy_legacy_site.latitude"
                                                     id="legacy_legacy_site_latitude"/></div>
    </div>
  </div>
  <div class="">
    <div class="input-group float legacy_legacy_site_longitude">
      <div class="col-sm-1 col-md-1 col-lg-1"><input class="float" type="hidden" v-model="legacy_legacy_site.longitude"
                                                     id="legacy_legacy_site_longitude"/></div>
    </div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_cross_street"><label class=""
                                                                                   for="legacy_legacy_site_cross_street">Cross
      Street or Nearby Landmark</label> <input class="form-control string optional" type="text"
                                               v-model="legacy_legacy_site.cross_street"
                                               id="legacy_legacy_site_cross_street"/></div>
  </div>

  <div class="">
    <div class="form-group string required legacy_legacy_site_work_type"><label class=""
                                                                                for="legacy_legacy_site_work_type"><abbr
      title="required">*</abbr> Primary help needed <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                                                          title="Chooses the icon that appears on the map. If there is more than one type, choose the type that is most pressing."><i
      class="fa fa-question"></i></span></label> <select class="form-control" v-model="legacy_legacy_site.work_type"
                                                         id="legacy_legacy_site_work_type">
      <option value="">--Choose One--</option>
      <option value="Muck_Out">Muck Out</option>
      <option value="Trees">Trees</option>
      <option value="Tarp">Tarp</option>
      <option value="Debris">Debris</option>
      <option value="Mold_Remediation">Mold Remediation</option>
      <option value="Deferred_Maintenance">Deferred Maintenance</option>
      <option value="Rebuild">Rebuild</option>
      <option value="Other">Other</option>
    </select></div>
  </div>
  <div class="">
    <div class="form-group email optional legacy_legacy_site_email"><label class=""
                                                                           for="legacy_legacy_site_email">Email</label>
      <input class="form-control email optional" type="text" v-model="legacy_legacy_site.email"
             id="legacy_legacy_site_email"/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_residence_type"><label class=""
                                                                                     for="legacy_legacy_site_residence_type">Residence
      Type <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                 title="A person displaced from their primary home, or living in squalid conditions in their primary home are often higher priorities for relief organizations."><i
        class="fa fa-question"></i></span></label> <select class="form-control"
                                                           v-model="legacy_legacy_site.residence_type"
                                                           id="legacy_legacy_site_residence_type">
      <option value="">--Choose One--</option>
      <option value="Primary-Living in Home">Primary-Living in Home</option>
      <option value="Primary-Displaced from Home">Primary-Displaced from Home</option>
      <option value="Second Home">Second Home</option>
      <option value="Guest Home">Guest Home</option>
      <option value="Other Secondary Property">Other Secondary Property</option>
      <option value="Non-Residence">Non-Residence</option>
    </select></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_dwelling_type"><label class=""
                                                                                    for="legacy_legacy_site_dwelling_type">Structure
      Type</label> <select class="form-control" v-model="legacy_legacy_site.dwelling_type"
                           id="legacy_legacy_site_dwelling_type">
      <option value="">--Choose One--</option>
      <option value="House">House</option>
      <option value="Duplex">Duplex</option>
      <option value="Mobile Home">Mobile Home</option>
      <option value="Apartment">Apartment</option>
      <option value="Condo">Condo</option>
      <option value="Townhouse">Townhouse</option>
      <option value="RV">RV</option>
      <option value="Other">Other</option>
    </select></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_rent_or_own"><label class=""
                                                                                  for="legacy_legacy_site_rent_or_own">Rent/
      Own/ Public</label> <select class="form-control" v-model="legacy_legacy_site.rent_or_own"
                                  id="legacy_legacy_site_rent_or_own">
      <option value="">--Choose One--</option>
      <option value="Rent">Rent</option>
      <option value="Own">Own</option>
      <option value="Public Land">Public Land</option>
      <option value="Non-Profit">Non-Profit</option>
      <option value="Business">Business</option>
    </select></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_older_than_60"><label class="form-check-label"
                                                                                    for="legacy_legacy_site_older_than_60">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.older_than_60"
             id="legacy_legacy_site_older_than_60_h" value="n"/> <input class="form-check-input string optional"
                                                                        type="checkbox"
                                                                        v-model="legacy_legacy_site.older_than_60"
                                                                        id="legacy_legacy_site_older_than_60"
                                                                        value="y"/>Older than 60 <span data-tooltip
                                                                                                       aria-haspopup="true"
                                                                                                       class="has-tip tip-bottom"
                                                                                                       title="Never include dates (or years) of birth in the notes."><i
      class="fa fa-question"></i></span> </label></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_children_in_home"><label class="form-check-label"
                                                                                       for="legacy_legacy_site_children_in_home">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.children_in_home"
             id="legacy_legacy_site_children_in_home_h" value="n"/> <input class="form-check-input string optional"
                                                                           type="checkbox"
                                                                           v-model="legacy_legacy_site.children_in_home"
                                                                           id="legacy_legacy_site_children_in_home"
                                                                           value="y"/>Children In Home </label></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_first_responder"><label class="form-check-label"
                                                                                      for="legacy_legacy_site_first_responder">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.first_responder"
             id="legacy_legacy_site_first_responder_h" value="n"/> <input class="form-check-input string optional"
                                                                          type="checkbox"
                                                                          v-model="legacy_legacy_site.first_responder"
                                                                          id="legacy_legacy_site_first_responder"
                                                                          value="y"/>First Responder <span data-tooltip
                                                                                                           aria-haspopup="true"
                                                                                                           class="has-tip tip-bottom"
                                                                                                           title="First responders and their families are often the last to receive help. Consequently, many relief agencies prioritize them."><i
      class="fa fa-question"></i></span> </label></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_insured"><label class="form-check-label"
                                                                              for="legacy_legacy_site_insured"> <input
      class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.insured"
      id="legacy_legacy_site_insured_h" value="n"/> <input class="form-check-input string optional" type="checkbox"
                                                           v-model="legacy_legacy_site.insured"
                                                           id="legacy_legacy_site_insured" value="y"/>Flood Insurance
    </label></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_unrestrained_animals"><label class="form-check-label"
                                                                                           for="legacy_legacy_site_unrestrained_animals">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.unrestrained_animals"
             id="legacy_legacy_site_unrestrained_animals_h" value="n"/> <input class="form-check-input string optional"
                                                                               type="checkbox"
                                                                               v-model="legacy_legacy_site.unrestrained_animals"
                                                                               id="legacy_legacy_site_unrestrained_animals"
                                                                               value="y"/>Unrestrained Animals </label>
    </div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_work_without_resident"><label class="form-check-label"
                                                                                            for="legacy_legacy_site_work_without_resident">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.work_without_resident"
             id="legacy_legacy_site_work_without_resident_h" value="n"/> <input class="form-check-input string optional"
                                                                                type="checkbox"
                                                                                v-model="legacy_legacy_site.work_without_resident"
                                                                                id="legacy_legacy_site_work_without_resident"
                                                                                value="y"/>Work without resident
      present? <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                     title="Note: Even if this is box is checked, it may not be a good idea to work without the resident present. Follow your organization's policy on this matter."><i
      class="fa fa-question"></i></span> </label></div>
  </div>
  <div class="">
    <div class="input-group string optional legacy_legacy_site_special_needs"><label class=""
                                                                                     for="legacy_legacy_site_special_needs">Special
      needs <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                  title="Please only include special needs that are directly related to service, e.g. 'Wheelchair-bound,' or 'Has difficulty hearing&mdash;knock hard.'"><i
        class="fa fa-question"></i></span></label> <textarea class="form-control string optional"
                                                             v-model="legacy_legacy_site.special_needs"
                                                             id="legacy_legacy_site_special_needs"></textarea></div>
  </div>
  <div class="">
    <div class="input-group string optional legacy_legacy_site_work_requested"><label class=""
                                                                                      for="legacy_legacy_site_work_requested">Work
      Details</label> <textarea class="form-control string optional" v-model="legacy_legacy_site.work_requested"
                                id="legacy_legacy_site_work_requested"></textarea></div>
  </div>
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Utilities</h6></div>
  </div>
  <div class="unhide" id="utilities_info">
    <div class="">
      <div class="form-group string optional legacy_legacy_site_water_status"><label class=""
                                                                                     for="legacy_legacy_site_water_status">Water
        Status</label> <select class="form-control" v-model="legacy_legacy_site.water_status"
                               id="legacy_legacy_site_water_status">
        <option value="">--Choose One--</option>
        <option value="On">On</option>
        <option value="Off">Off</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-group string optional legacy_legacy_site_gas_status"><label class=""
                                                                                   for="legacy_legacy_site_gas_status">Gas
        Status</label> <select class="form-control" v-model="legacy_legacy_site.gas_status"
                               id="legacy_legacy_site_gas_status">
        <option value="">--Choose One--</option>
        <option value="On">On</option>
        <option value="Off">Off</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-group string optional legacy_legacy_site_power_status"><label class=""
                                                                                     for="legacy_legacy_site_power_status">Power
        Status</label> <select class="form-control" v-model="legacy_legacy_site.power_status"
                               id="legacy_legacy_site_power_status">
        <option value="">--Choose One--</option>
        <option value="On">On</option>
        <option value="Off">Off</option>
      </select></div>
    </div>
  </div> <!--utilities_info_end-->
</div> <!--property_info_end-->
<div class="">
  <div class="small-12 medium-12 large-12 columns"><h5>Work <span data-tooltip aria-haspopup="true"
                                                                  class="has-tip tip-bottom"
                                                                  title="Contact <a href='mailto:help@crisiscleanup.org'>help@crisiscleanup.org</a> to request another question. Be sure to include the incident name."><i
    class="fa fa-question"></i></span></h5></div>
</div>
<div class="unhide" id="work_info">
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Muck Out</h6></div>
  </div>
  <div class="unhide" id="muck_out_info">
    <div class="">
      <div class="form-group string optional legacy_legacy_site_floors_affected"><label class=""
                                                                                        for="legacy_legacy_site_floors_affected">Floors
        Affected</label> <select class="form-control" v-model="legacy_legacy_site.floors_affected"
                                 id="legacy_legacy_site_floors_affected">
        <option value="">--Choose One--</option>
        <option value="Ground Floor Only">Ground Floor Only</option>
        <option value="Crawlspace">Crawlspace</option>
        <option value="Basement Only">Basement Only</option>
        <option value="Basement and Ground Floor">Basement and Ground Floor</option>
        <option value="None">None</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-group string optional legacy_legacy_site_flood_height_select"><label class=""
                                                                                            for="legacy_legacy_site_flood_height_select">Height
        of Flood</label> <select class="form-control" v-model="legacy_legacy_site.flood_height_select"
                                 id="legacy_legacy_site_flood_height_select">
        <option value="">--Choose One--</option>
        <option value="0-3in">0-3in</option>
        <option value="3-6in">3-6in</option>
        <option value="6-12in">6-12in</option>
        <option value="12-18in">12-18in</option>
        <option value="18in-2ft">18in-2ft</option>
        <option value="2-3ft">2-3ft</option>
        <option value="3-4ft">3-4ft</option>
        <option value="4-5ft">4-5ft</option>
        <option value="5-6ft">5-6ft</option>
        <option value="6-7ft">6-7ft</option>
        <option value="7-8ft">7-8ft</option>
        <option value="Above the Ceiling">Above the Ceiling</option>
        <option value="In the Attic">In the Attic</option>
        <option value="Over the House">Over the House</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_carpet_removal"><label class="form-check-label"
                                                                                       for="legacy_legacy_site_carpet_removal">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.carpet_removal"
               id="legacy_legacy_site_carpet_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                           type="checkbox"
                                                                           v-model="legacy_legacy_site.carpet_removal"
                                                                           id="legacy_legacy_site_carpet_removal"
                                                                           value="y"/>Carpet Removal </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_hardwood_floor_removal"><label class="form-check-label"
                                                                                               for="legacy_legacy_site_hardwood_floor_removal">
        <input class="form-check-input string optional" type="hidden"
               v-model="legacy_legacy_site.hardwood_floor_removal" id="legacy_legacy_site_hardwood_floor_removal_h"
               value="n"/> <input class="form-check-input string optional" type="checkbox"
                                  v-model="legacy_legacy_site.hardwood_floor_removal"
                                  id="legacy_legacy_site_hardwood_floor_removal" value="y"/>Hardwood Floor Removal
      </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_tile_removal"><label class="form-check-label"
                                                                                     for="legacy_legacy_site_tile_removal">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.tile_removal"
               id="legacy_legacy_site_tile_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                         type="checkbox"
                                                                         v-model="legacy_legacy_site.tile_removal"
                                                                         id="legacy_legacy_site_tile_removal"
                                                                         value="y"/>Tile </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_drywall_removal"><label class="form-check-label"
                                                                                        for="legacy_legacy_site_drywall_removal">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.drywall_removal"
               id="legacy_legacy_site_drywall_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                            type="checkbox"
                                                                            v-model="legacy_legacy_site.drywall_removal"
                                                                            id="legacy_legacy_site_drywall_removal"
                                                                            value="y"/>Drywall Removal </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_appliance_removal"><label class="form-check-label"
                                                                                          for="legacy_legacy_site_appliance_removal">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.appliance_removal"
               id="legacy_legacy_site_appliance_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.appliance_removal"
                                                                              id="legacy_legacy_site_appliance_removal"
                                                                              value="y"/>Appliance Removal </label>
      </div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_heavy_item_removal"><label class="form-check-label"
                                                                                           for="legacy_legacy_site_heavy_item_removal">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.heavy_item_removal"
               id="legacy_legacy_site_heavy_item_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                               type="checkbox"
                                                                               v-model="legacy_legacy_site.heavy_item_removal"
                                                                               id="legacy_legacy_site_heavy_item_removal"
                                                                               value="y"/>Heavy Item Removal </label>
      </div>
    </div>
  </div> <!--muck_out_info_end-->
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Tree Work</h6></div>
  </div>
  <div class="unhide" id="tree_info">
    <div class="">
      <div class="form-group integer optional legacy_legacy_site_num_trees_down"><label class=""
                                                                                        for="legacy_legacy_site_num_trees_down">Number
        of trees 1-18 inches wide</label> <select class="form-control" v-model="legacy_legacy_site.num_trees_down"
                                                  id="legacy_legacy_site_num_trees_down">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5+</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-group integer optional legacy_legacy_site_num_wide_trees"><label class=""
                                                                                        for="legacy_legacy_site_num_wide_trees">Number
        of trees wider than 18 inches <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                                            title="Many chainsaws have 18-inch blades."><i
          class="fa fa-question"></i></span></label> <select class="form-control"
                                                             v-model="legacy_legacy_site.num_wide_trees"
                                                             id="legacy_legacy_site_num_wide_trees">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5+</option>
      </select></div>
    </div>
  </div> <!--tree_info_end-->
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Tarping</h6></div>
  </div>
  <div class="unhide" id="tarping_info">
    <div class="">
      <div class="form-check string optional legacy_legacy_site_house_roof_damage"><label class="form-check-label"
                                                                                          for="legacy_legacy_site_house_roof_damage">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.house_roof_damage"
               id="legacy_legacy_site_house_roof_damage_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.house_roof_damage"
                                                                              id="legacy_legacy_site_house_roof_damage"
                                                                              value="y"/>House Roof Damage </label>
      </div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_outbuilding_roof_damage"><label class="form-check-label"
                                                                                                for="legacy_legacy_site_outbuilding_roof_damage">
        <input class="form-check-input string optional" type="hidden"
               v-model="legacy_legacy_site.outbuilding_roof_damage" id="legacy_legacy_site_outbuilding_roof_damage_h"
               value="n"/> <input class="form-check-input string optional" type="checkbox"
                                  v-model="legacy_legacy_site.outbuilding_roof_damage"
                                  id="legacy_legacy_site_outbuilding_roof_damage" value="y"/>Outbuilding Roof Damage
      </label></div>
    </div>
    <div class="">
      <div class="form-group integer optional legacy_legacy_site_tarps_needed"><label class=""
                                                                                      for="legacy_legacy_site_tarps_needed">Number
        of 20' x 30'Tarps Needed</label> <input class="form-control integer optional" type="text"
                                                v-model="legacy_legacy_site.tarps_needed"
                                                id="legacy_legacy_site_tarps_needed"/></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_help_install_tarp"><label class="form-check-label"
                                                                                          for="legacy_legacy_site_help_install_tarp">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.help_install_tarp"
               id="legacy_legacy_site_help_install_tarp_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.help_install_tarp"
                                                                              id="legacy_legacy_site_help_install_tarp"
                                                                              value="y"/>Need Help Installing </label>
      </div>
    </div>
  </div> <!--tarping_info_end-->
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Debris</h6></div>
  </div>
  <div class="unhide" id="debris_info">
    <div class="">
      <div class="form-check string optional legacy_legacy_site_nonvegitative_debris_removal"><label
        class="form-check-label" for="legacy_legacy_site_nonvegitative_debris_removal"> <input
        class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.nonvegitative_debris_removal"
        id="legacy_legacy_site_nonvegitative_debris_removal_h" value="n"/> <input
        class="form-check-input string optional" type="checkbox"
        v-model="legacy_legacy_site.nonvegitative_debris_removal" id="legacy_legacy_site_nonvegitative_debris_removal"
        value="y"/>Non-vegetative Debris </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_vegitative_debris_removal"><label
        class="form-check-label" for="legacy_legacy_site_vegitative_debris_removal"> <input
        class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.vegitative_debris_removal"
        id="legacy_legacy_site_vegitative_debris_removal_h" value="n"/> <input class="form-check-input string optional"
                                                                               type="checkbox"
                                                                               v-model="legacy_legacy_site.vegitative_debris_removal"
                                                                               id="legacy_legacy_site_vegitative_debris_removal"
                                                                               value="y"/>Vegetative Debris </label>
      </div>
    </div>
    <div class="">
      <div class="input-group string optional legacy_legacy_site_debris_description"><label class=""
                                                                                            for="legacy_legacy_site_debris_description">Debris
        Description</label> <textarea class="form-control string optional"
                                      v-model="legacy_legacy_site.debris_description"
                                      id="legacy_legacy_site_debris_description"></textarea></div>
    </div>
  </div> <!--debris_info_end-->
  <div class="">
    <div class="small-12 medium-12 large-12 columns"><h6>Mold Remediation</h6></div>
  </div>
  <div class="unhide" id="mold_remediation_info">
    <div class="">
      <div class="form-group string optional legacy_legacy_site_mold_amount"><label class=""
                                                                                    for="legacy_legacy_site_mold_amount">Mold
        Amount</label> <select class="form-control" v-model="legacy_legacy_site.mold_amount"
                               id="legacy_legacy_site_mold_amount">
        <option value="">--Choose One--</option>
        <option value="Small Isolated Area">Small Isolated Area</option>
        <option value="Medium Isolated Area">Medium Isolated Area</option>
        <option value="Large Area">Large Area</option>
        <option value="Extensive Mold Throughout">Extensive Mold Throughout</option>
        <option value="Other">Other</option>
      </select></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_mold_drying"><label class="form-check-label"
                                                                                    for="legacy_legacy_site_mold_drying">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.mold_drying"
               id="legacy_legacy_site_mold_drying_h" value="n"/> <input class="form-check-input string optional"
                                                                        type="checkbox"
                                                                        v-model="legacy_legacy_site.mold_drying"
                                                                        id="legacy_legacy_site_mold_drying" value="y"/>Drying
        Needed </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_mold_scraping"><label class="form-check-label"
                                                                                      for="legacy_legacy_site_mold_scraping">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.mold_scraping"
               id="legacy_legacy_site_mold_scraping_h" value="n"/> <input class="form-check-input string optional"
                                                                          type="checkbox"
                                                                          v-model="legacy_legacy_site.mold_scraping"
                                                                          id="legacy_legacy_site_mold_scraping"
                                                                          value="y"/>Mold Scraping </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_mold_spraying"><label class="form-check-label"
                                                                                      for="legacy_legacy_site_mold_spraying">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.mold_spraying"
               id="legacy_legacy_site_mold_spraying_h" value="n"/> <input class="form-check-input string optional"
                                                                          type="checkbox"
                                                                          v-model="legacy_legacy_site.mold_spraying"
                                                                          id="legacy_legacy_site_mold_spraying"
                                                                          value="y"/>Mold Spraying </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_mold_replace_studs"><label class="form-check-label"
                                                                                           for="legacy_legacy_site_mold_replace_studs">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.mold_replace_studs"
               id="legacy_legacy_site_mold_replace_studs_h" value="n"/> <input class="form-check-input string optional"
                                                                               type="checkbox"
                                                                               v-model="legacy_legacy_site.mold_replace_studs"
                                                                               id="legacy_legacy_site_mold_replace_studs"
                                                                               value="y"/>Mold Replace Studs </label>
      </div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_mold_hvac"><label class="form-check-label"
                                                                                  for="legacy_legacy_site_mold_hvac">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.mold_hvac"
               id="legacy_legacy_site_mold_hvac_h" value="n"/> <input class="form-check-input string optional"
                                                                      type="checkbox"
                                                                      v-model="legacy_legacy_site.mold_hvac"
                                                                      id="legacy_legacy_site_mold_hvac" value="y"/>HVAC
      </label></div>
    </div>
    <div class="">
      <div class="input-group string optional legacy_legacy_site_notes"><label class="" for="legacy_legacy_site_notes">Notes</label>
        <textarea class="form-control string optional" v-model="legacy_legacy_site.notes"
                  id="legacy_legacy_site_notes"></textarea></div>
    </div>
  </div> <!--mold_remediation_info_end-->
  <div class="">
    <div class="small-9 medium-7 large-7 columns"><h6>Maintenance &amp; Reconstruction</h6></div>
    <div class="small-3 medium-5 large-5 columns">
      <button type="button"
              onclick="document.getElementById('maintenance_reconstruction_info').style.display = 'block';"
              class="unhide_button">+
      </button>
      <button type="button" onclick="document.getElementById('maintenance_reconstruction_info').style.display = 'none';"
              class="hide_button">-
      </button>
    </div>
  </div>
  <div class="unhide" id="maintenance_reconstruction_info">
    <div class="">
      <div class="form-check string optional legacy_legacy_site_needs_visual"><label class="form-check-label"
                                                                                     for="legacy_legacy_site_needs_visual">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.needs_visual"
               id="legacy_legacy_site_needs_visual_h" value="n"/> <input class="form-check-input string optional"
                                                                         type="checkbox"
                                                                         v-model="legacy_legacy_site.needs_visual"
                                                                         id="legacy_legacy_site_needs_visual"
                                                                         value="y"/>Needs Visual </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_furnace"><label class="form-check-label"
                                                                                            for="legacy_legacy_site_maintenance_furnace">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_furnace"
               id="legacy_legacy_site_maintenance_furnace_h" value="n"/> <input class="form-check-input string optional"
                                                                                type="checkbox"
                                                                                v-model="legacy_legacy_site.maintenance_furnace"
                                                                                id="legacy_legacy_site_maintenance_furnace"
                                                                                value="y"/>Furnace </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_water_heater"><label
        class="form-check-label" for="legacy_legacy_site_maintenance_water_heater"> <input
        class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_water_heater"
        id="legacy_legacy_site_maintenance_water_heater_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.maintenance_water_heater"
                                                                              id="legacy_legacy_site_maintenance_water_heater"
                                                                              value="y"/>Water Heater </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_plumbing"><label class="form-check-label"
                                                                                             for="legacy_legacy_site_maintenance_plumbing">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_plumbing"
               id="legacy_legacy_site_maintenance_plumbing_h" value="n"/> <input
        class="form-check-input string optional" type="checkbox" v-model="legacy_legacy_site.maintenance_plumbing"
        id="legacy_legacy_site_maintenance_plumbing" value="y"/>Plumbing </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_drainage"><label class="form-check-label"
                                                                                             for="legacy_legacy_site_maintenance_drainage">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_drainage"
               id="legacy_legacy_site_maintenance_drainage_h" value="n"/> <input
        class="form-check-input string optional" type="checkbox" v-model="legacy_legacy_site.maintenance_drainage"
        id="legacy_legacy_site_maintenance_drainage" value="y"/>Drainage </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_sewer_septic"><label
        class="form-check-label" for="legacy_legacy_site_maintenance_sewer_septic"> <input
        class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_sewer_septic"
        id="legacy_legacy_site_maintenance_sewer_septic_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.maintenance_sewer_septic"
                                                                              id="legacy_legacy_site_maintenance_sewer_septic"
                                                                              value="y"/>Sewer Septic </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_caulking"><label class="form-check-label"
                                                                                             for="legacy_legacy_site_maintenance_caulking">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_caulking"
               id="legacy_legacy_site_maintenance_caulking_h" value="n"/> <input
        class="form-check-input string optional" type="checkbox" v-model="legacy_legacy_site.maintenance_caulking"
        id="legacy_legacy_site_maintenance_caulking" value="y"/>Caulking </label></div>
    </div>
    <div class="">
      <div class="input-group string optional legacy_legacy_site_maintenance_appliances"><label class=""
                                                                                                for="legacy_legacy_site_maintenance_appliances">Appliances</label>
        <textarea class="form-control string optional" v-model="legacy_legacy_site.maintenance_appliances"
                  id="legacy_legacy_site_maintenance_appliances"></textarea></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_hvac"><label class="form-check-label"
                                                                                         for="legacy_legacy_site_maintenance_hvac">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_hvac"
               id="legacy_legacy_site_maintenance_hvac_h" value="n"/> <input class="form-check-input string optional"
                                                                             type="checkbox"
                                                                             v-model="legacy_legacy_site.maintenance_hvac"
                                                                             id="legacy_legacy_site_maintenance_hvac"
                                                                             value="y"/>HVAC </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_electrical"><label class="form-check-label"
                                                                                               for="legacy_legacy_site_maintenance_electrical">
        <input class="form-check-input string optional" type="hidden"
               v-model="legacy_legacy_site.maintenance_electrical" id="legacy_legacy_site_maintenance_electrical_h"
               value="n"/> <input class="form-check-input string optional" type="checkbox"
                                  v-model="legacy_legacy_site.maintenance_electrical"
                                  id="legacy_legacy_site_maintenance_electrical" value="y"/>Electrical </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_roof"><label class="form-check-label"
                                                                                         for="legacy_legacy_site_maintenance_roof">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_roof"
               id="legacy_legacy_site_maintenance_roof_h" value="n"/> <input class="form-check-input string optional"
                                                                             type="checkbox"
                                                                             v-model="legacy_legacy_site.maintenance_roof"
                                                                             id="legacy_legacy_site_maintenance_roof"
                                                                             value="y"/>Roof </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_siding"><label class="form-check-label"
                                                                                           for="legacy_legacy_site_maintenance_siding">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_siding"
               id="legacy_legacy_site_maintenance_siding_h" value="n"/> <input class="form-check-input string optional"
                                                                               type="checkbox"
                                                                               v-model="legacy_legacy_site.maintenance_siding"
                                                                               id="legacy_legacy_site_maintenance_siding"
                                                                               value="y"/>Siding </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_doors"><label class="form-check-label"
                                                                                          for="legacy_legacy_site_maintenance_doors">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_doors"
               id="legacy_legacy_site_maintenance_doors_h" value="n"/> <input class="form-check-input string optional"
                                                                              type="checkbox"
                                                                              v-model="legacy_legacy_site.maintenance_doors"
                                                                              id="legacy_legacy_site_maintenance_doors"
                                                                              value="y"/>Doors </label></div>
    </div>
    <div class="">
      <div class="form-check string optional legacy_legacy_site_maintenance_windows"><label class="form-check-label"
                                                                                            for="legacy_legacy_site_maintenance_windows">
        <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.maintenance_windows"
               id="legacy_legacy_site_maintenance_windows_h" value="n"/> <input class="form-check-input string optional"
                                                                                type="checkbox"
                                                                                v-model="legacy_legacy_site.maintenance_windows"
                                                                                id="legacy_legacy_site_maintenance_windows"
                                                                                value="y"/>Windows </label></div>
    </div>
    <div class="">
      <div class="input-group string optional legacy_legacy_site_other_needs"><label class=""
                                                                                     for="legacy_legacy_site_other_needs">Other
        Needs</label> <textarea class="form-control string optional" v-model="legacy_legacy_site.other_needs"
                                id="legacy_legacy_site_other_needs"></textarea></div>
    </div>
  </div> <!--maintenance_reconstruction_info_end-->
</div> <!--work_info_end-->
<div class="">
  <div class="small-12 medium-12 large-12 columns"><h5>Hazards</h5></div>
</div>
<div class="unhide" id="hazards_info">
  <div class="">
    <div class="form-group string optional legacy_legacy_site_habitable"><label class=""
                                                                                for="legacy_legacy_site_habitable">Is
      the home habitable</label> <select class="form-control" v-model="legacy_legacy_site.habitable"
                                         id="legacy_legacy_site_habitable">
      <option value="">--Choose One--</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_hoarder"><label class="form-check-label"
                                                                              for="legacy_legacy_site_hoarder"> <input
      class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.hoarder"
      id="legacy_legacy_site_hoarder_h" value="n"/> <input class="form-check-input string optional" type="checkbox"
                                                           v-model="legacy_legacy_site.hoarder"
                                                           id="legacy_legacy_site_hoarder" value="y"/>Hoarder </label>
    </div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_possible_asbestos"><label class="form-check-label"
                                                                                        for="legacy_legacy_site_possible_asbestos">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.possible_asbestos"
             id="legacy_legacy_site_possible_asbestos_h" value="n"/> <input class="form-check-input string optional"
                                                                            type="checkbox"
                                                                            v-model="legacy_legacy_site.possible_asbestos"
                                                                            id="legacy_legacy_site_possible_asbestos"
                                                                            value="y"/>Possible Asbestos </label></div>
  </div>
  <div class="">
    <div class="form-check string optional legacy_legacy_site_known_lead_paint"><label class="form-check-label"
                                                                                       for="legacy_legacy_site_known_lead_paint">
      <input class="form-check-input string optional" type="hidden" v-model="legacy_legacy_site.known_lead_paint"
             id="legacy_legacy_site_known_lead_paint_h" value="n"/> <input class="form-check-input string optional"
                                                                           type="checkbox"
                                                                           v-model="legacy_legacy_site.known_lead_paint"
                                                                           id="legacy_legacy_site_known_lead_paint"
                                                                           value="y"/>Known Lead Paint </label></div>
  </div>
  <div class="">
    <div class="input-group string optional legacy_legacy_site_other_hazards"><label class=""
                                                                                     for="legacy_legacy_site_other_hazards">Other
      Hazards</label> <textarea class="form-control string optional" v-model="legacy_legacy_site.other_hazards"
                                id="legacy_legacy_site_other_hazards"></textarea></div>
  </div>
</div> <!--hazards_info_end-->
<div class="">
  <div class="small-12 medium-12 large-12 columns"><h5>Claim, Status and Report</h5></div>
</div>
<div class="unhide" id="claim_status_report_info">

  <div class="hide">
    <div class="form-group string optional legacy_legacy_site_assigned_to"><label class=""
                                                                                  for="legacy_legacy_site_assigned_to">Assigned
      To <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
               title="Name of the worker with primary responsibility for this request."><i
        class="fa fa-question"></i></span></label> <input class="form-control string optional" type="text"
                                                          v-model="legacy_legacy_site.assigned_to"
                                                          id="legacy_legacy_site_assigned_to"/></div>
  </div>
  <div class="">
    <div class="form-group integer optional legacy_legacy_site_total_volunteers"><label class=""
                                                                                        for="legacy_legacy_site_total_volunteers">Volunteers
      <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
            title="Number of volunteers who participated in relief efforts."><i
        class="fa fa-question"></i></span></label> <input class="form-control integer optional" type="text"
                                                          v-model="legacy_legacy_site.total_volunteers"
                                                          id="legacy_legacy_site_total_volunteers"/></div>
  </div>
  <div class="">
    <div class="form-group float optional legacy_legacy_site_hours_worked_per_volunteer"><label class=""
                                                                                                for="legacy_legacy_site_hours_worked_per_volunteer">Hours
      per volunteer <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                          title="Number of hours volunteers worked on this request."><i
        class="fa fa-question"></i></span></label> <input class="form-control float optional" type="text"
                                                          v-model="legacy_legacy_site.hours_worked_per_volunteer"
                                                          id="legacy_legacy_site_hours_worked_per_volunteer"/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_initials_of_resident_present"><label class=""
                                                                                                   for="legacy_legacy_site_initials_of_resident_present">Initials
      of resident present during work <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
                                            title="This may help if there is ever a misunderstanding about the work performed."><i
        class="fa fa-question"></i></span></label> <input class="form-control string optional" type="text"
                                                          v-model="legacy_legacy_site.initials_of_resident_present"
                                                          id="legacy_legacy_site_initials_of_resident_present"/></div>
  </div>
  <div class="">
    <div class="input-group string optional legacy_legacy_site_status_notes"><label class=""
                                                                                    for="legacy_legacy_site_status_notes">Status
      notes</label> <textarea class="form-control string optional" v-model="legacy_legacy_site.status_notes"
                              id="legacy_legacy_site_status_notes"></textarea></div>
  </div>
</div> <!--claim_status_report_info_end-->
<div class="">
  <div class="small-9 medium-7 large-7 columns"><h5>Other Information</h5></div>
  <div class="small-3 medium-5 large-5 columns">
    <button type="button" onclick="document.getElementById('other_information_info').style.display = 'block';"
            class="unhide_button">+
    </button>
    <button type="button" onclick="document.getElementById('other_information_info').style.display = 'none';"
            class="hide_button">-
    </button>
  </div>
</div>
<div class="hide" id="other_information_info">
  <div class="">
    <div class="form-group string optional legacy_legacy_site_prepared_by"><label class=""
                                                                                  for="legacy_legacy_site_prepared_by">Prepared
      by <span data-tooltip aria-haspopup="true" class="has-tip tip-bottom"
               title="Name of person who created the work request."><i class="fa fa-question"></i></span></label> <input
      class="form-control string optional" type="text" v-model="legacy_legacy_site.prepared_by"
      id="legacy_legacy_site_prepared_by"/></div>
  </div>
  <div class="">
    <div class="form-group string optional legacy_legacy_site_do_not_work_before"><label class=""
                                                                                         for="legacy_legacy_site_do_not_work_before">Do
      not work before</label> <input class="form-control string optional" type="text"
                                     v-model="legacy_legacy_site.do_not_work_before"
                                     id="legacy_legacy_site_do_not_work_before"/></div>
  </div>
</div> <!--other_information_info_end-->
<!--END OF FORM-->

`;
