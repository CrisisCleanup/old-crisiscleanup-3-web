<template>
  <div class="app">
    <div class="app-body">
      <div class="container-fluid">

        <div class="card mx-4">

          <div class="card-body p-4">

            <div class="row">
              <div class="col-md-12">
                <h1>Register Your Organization</h1>
                <h6>
                  If you need help, please, please, please do NOT sign up here. You are in the wrong place, and we can't help. Call 800-451-1954 or 844-965-1386</h6>
              </div>
            </div>
            <br>

            <div class="row">
              <div class="col-md-12">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <b-form-fieldset
                  label="Choose a Disaster"
                  :label-cols="3"
                  :horizontal="true">
                  <b-form-select
                    :plain="true"
                    :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                    value="Please select">
                  </b-form-select>
                </b-form-fieldset>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h5>Primary Contacts</h5>

              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <input type="text" class="form-control" placeholder="First Name">
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-envelope"></i></span>
                  <input type="text" class="form-control" placeholder="Email">
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-phone"></i></span>
                  <input type="text" class="form-control" placeholder="Phone Number">
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <h5>Organization Info</h5>
                <p>
                  Please use your local team name. E.g. "American Red Cross-TX Chapter" or "LDS Church-Plainview Stake" rather than "American Red Cross" or "LDS Church".</p>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <input type="text" class="form-control" placeholder="Organization Name">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <input type="text" class="form-control" placeholder="Address">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <input type="password" class="form-control" placeholder="State">
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <input type="password" class="form-control" placeholder="Referral">
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-social-facebook"></i></span>
                  <input type="password" class="form-control" placeholder="Facebook">
                </div>


              </div>
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-envelope"></i></span>
                  <input type="text" class="form-control" placeholder="Email">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <input type="text" class="form-control" placeholder="City">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-home"></i></span>
                  <input type="text" class="form-control" placeholder="Zip Code">
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <input type="text" class="form-control" placeholder="Website">
                </div>

                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-social-twitter"></i></span>
                  <input type="password" class="form-control" placeholder="Twitter">
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-12">
                <h5>What Roles does Your Organization Fill?</h5>

              </div>
              <div class="col-md-12">
                <b-form-fieldset
                  :label-cols="1"
                  :horizontal="true">
                  <b-form-checkbox :plain="true" value="1">
                    <b>Review & Approve Participating Organizations:</b>
                    You are willing to take a leadership role, reviewing and approving organizations to participate in CrisisCleanup.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="2">
                    <b>Damage Assessments:</b>
                    Your organization interacts directly with survivors via call-center, door-to-door, in a MARC, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Cleanup:</b>
                    Your organization interacts directly with survivors to do muck-outs, debris removal, tree cutting, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Follow Up:</b>
                    Your organization contacts survivors to ensure all clients have been assisted via phone or in-person visits.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Minor Repairs:</b>
                    Your organization visits survivors to replace drywall, flooring, or other repairs.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Rebuilding:</b>
                    Long Term Recovery Groups, Unmet Needs Committees, or organizations that do long-term or major rebuilding.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Coordination:</b>
                    Your organization does NOT interact directly with survivors, but oversees or coordinates organizations that do.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Government:</b>
                    You represent a governmental entity, such as municipal, state, tribal or federal government, emergency management, agency, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Other Activity:</b>
                    Your organization does other disaster-related activity, such as donations management, case management, logistics, for-profit contracting, etc.
                  </b-form-checkbox>
                  <br>
                  <b-form-checkbox :plain="true" value="3">
                    <b>Not An Organization:</b>
                    Individuals, unaffiliated volunteers, meetup groups, clubs, etc.
                  </b-form-checkbox>
                </b-form-fieldset>
              </div>

            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="input-group mb-4">
                  <input type="text" class="form-control" placeholder="Where are you working?">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-form-checkbox :plain="true" value="3">
                  <b>Publicly publish organization profile?</b>
                </b-form-checkbox>
                <br>
                <b-form-checkbox :plain="true" value="3">
                  <b>I agree to the Terms of Service and Privacy Policy</b>
                </b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-block btn-success btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegisterOrganization'
  }
</script>
