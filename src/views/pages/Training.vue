<template>
  <div class="app flex-row align-items-center">
    <div class="app-body">
      <div class="container">
        <div class="card mx-4">
          <div class="card-body p-4">
            <div class="col-md-12">
              <div class="row">
                <h1>{{ $t('training.training_video_title') }}</h1>
              </div>
              <div class="row">
                <h4>{{ $t('training.please_complete_training') }}</h4>
              </div>
              <div class="row">
                <iframe class="about-intro" width="800" height="400" src="https://www.youtube.com/embed/3wumEh8wcak" frameborder="0" allowfullscreen></iframe>
              </div>
              <div class="row">
                <h3>{{ $t('training.test_ccu_knowledge') }}</h3>
              </div>
              <div class="row">
                <p>{{ $t('training.take_poll') }}</p>
              </div>
              <hr />
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>1. {{ $t('training.q1_ccu_multiple_uses') }}</h5>
                  <form>
                    <label for="answer_1_1">
                      <input type="radio" name="answer_1" id="answer_1_1" onclick="document.getElementById('no_1').style.display = 'none'; document.getElementById('yes_1').style.display = 'block'; document.getElementById('explanation_1').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_1_2">
                      <input type="radio" name="answer_1" id="answer_1_2" onclick="document.getElementById('no_1').style.display = 'block'; document.getElementById('yes_1').style.display = 'none'; document.getElementById('explanation_1').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />

                  </form>
                  <div id="no_1" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_1" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_1" style="display:none">
                    <p>{{ $t('training.exp1_ccu_work_orders_only') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>2. {{ $t('training.q2_ccu_cost') }}</h5>
                  <form>
                    <label for="answer_2_2">
                      <input type="radio" name="answer_2" id="answer_2_2" onclick="document.getElementById('no_2').style.display = 'block'; document.getElementById('yes_2').style.display = 'none'; document.getElementById('explanation_2').style.display = 'block';"> {{ $t('training.a2_arm_leg') }}</label>
                    </input><br />
                    <label for="answer_2_1">
                      <input type="radio" name="answer_2" id="answer_2_1" onclick="document.getElementById('no_2').style.display = 'none'; document.getElementById('yes_2').style.display = 'block'; document.getElementById('explanation_2').style.display = 'block';"> {{ $t('training.a2_free') }}</label>
                    </input><br />
                    <label for="answer_2_3">
                      <input type="radio" name="answer_2" id="answer_2_3" onclick="document.getElementById('no_2').style.display = 'block'; document.getElementById('yes_2').style.display = 'none'; document.getElementById('explanation_2').style.display = 'block';"> {{ $t('training.a2_firstborn') }}</label>
                    </input><br />
                    <label for="answer_2_4">
                      <input type="radio" name="answer_2" id="answer_2_4" onclick="document.getElementById('no_2').style.display = 'block'; document.getElementById('yes_2').style.display = 'none'; document.getElementById('explanation_2').style.display = 'block';"> {{ $t('training.a2_thousand_dollars') }}</label>
                    </input><br />
                  </form>
                  <div id="no_2" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_2" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_2" style="display:none">
                    <p>{{ $t('training.exp2_ccu_free') }}</p>
                    <p>{{ $t('training.exp2_donations_needed') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>3. {{ $t('training.q3_ccu_field_workers_use') }}</h5>
                  <form>
                    <label for="answer_3_2">
                      <input type="radio" name="answer_3" id="answer_3_2" onclick="document.getElementById('no_3').style.display = 'block'; document.getElementById('yes_3').style.display = 'none'; document.getElementById('explanation_3').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_3_1">
                      <input type="radio" name="answer_3" id="answer_3_1" onclick="document.getElementById('no_3').style.display = 'none'; document.getElementById('yes_3').style.display = 'block'; document.getElementById('explanation_3').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_3" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_3" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_3" style="display:none">
                    <p>{{ $t('training.exp3_field_workers') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>4. {{ $t('training.q4_keep_confidential') }}</h5>
                  <form>
                    <label for="answer_4_1">
                      <input type="radio" name="answer_4" id="answer_4_1" onclick="document.getElementById('no_4').style.display = 'none'; document.getElementById('yes_4').style.display = 'block'; document.getElementById('explanation_4').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />
                    <label for="answer_4_2">
                      <input type="radio" name="answer_4" id="answer_4_2" onclick="document.getElementById('no_4').style.display = 'block'; document.getElementById('yes_4').style.display = 'none'; document.getElementById('explanation_4').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />


                  </form>
                  <div id="no_4" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_4" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_4" style="display:none">
                    <p>{{ $t('training.exp4_keep_confidential') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>5. {{ $t('training.q5_when_claim_work_order') }} <a href="https://www.youtube.com/watch?feature=player_detailpage&v=yCxI5YHyX5k#t=134" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_5_2">
                      <input type="radio" name="answer_5" id="answer_5_2" onclick="document.getElementById('no_5').style.display = 'block'; document.getElementById('yes_5').style.display = 'none'; document.getElementById('explanation_5').style.display = 'block';"> {{ $t('training.a5_every_assessment') }}</label>
                    </input><br />
                    <label for="answer_5_3">
                      <input type="radio" name="answer_5" id="answer_5_3" onclick="document.getElementById('no_5').style.display = 'block'; document.getElementById('yes_5').style.display = 'none'; document.getElementById('explanation_5').style.display = 'block';"> {{ $t('training.a5_when_ordered') }}</label>
                    </input><br />
                    <label for="answer_5_4">
                      <input type="radio" name="answer_5" id="answer_5_4" onclick="document.getElementById('no_5').style.display = 'block'; document.getElementById('yes_5').style.display = 'none'; document.getElementById('explanation_5').style.display = 'block';"> {{ $t('training.a5_tuesdays_high_tide') }}</label>
                    </input><br />
                    <label for="answer_5_1">
                      <input type="radio" name="answer_5" id="answer_5_1" onclick="document.getElementById('no_5').style.display = 'none'; document.getElementById('yes_5').style.display = 'block'; document.getElementById('explanation_5').style.display = 'block';"> {{ $t('training.a5_when_convenient') }}</label>
                    </input><br />
                  </form>
                  <div id="no_5" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_5" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_5" style="display:none">
                    <p>{{ $t('training.exp5_ccu_not_in_charge') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>6. {{ $t('training.q6_store_sensitive_info') }} <a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200819327-Client-Personal-Data-Collection-Policy" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_6_1">
                      <input type="radio" name="answer_6" id="answer_6_1" onclick="document.getElementById('no_6').style.display = 'none'; document.getElementById('yes_6').style.display = 'block'; document.getElementById('explanation_6').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_6_2">
                      <input type="radio" name="answer_6" id="answer_6_2" onclick="document.getElementById('no_6').style.display = 'block'; document.getElementById('yes_6').style.display = 'none'; document.getElementById('explanation_6').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_6" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_6" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_6" style="display:none">
                    <p>{{ $t('training.exp6_no_sensitive_info') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>7. {{ $t('training.q7_kinds_of_orgs_allowed') }} <a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603007-Requirements-for-Participation#requirements" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_7_2">
                      <input type="radio" name="answer_7" id="answer_7_2" onclick="document.getElementById('no_7').style.display = 'block'; document.getElementById('yes_7').style.display = 'none'; document.getElementById('explanation_7').style.display = 'block';"> {{ $t('training.a7_only_govt_approved') }}</label>
                    </input><br />
                    <label for="answer_7_3">
                      <input type="radio" name="answer_7" id="answer_7_3" onclick="document.getElementById('no_7').style.display = 'block'; document.getElementById('yes_7').style.display = 'none'; document.getElementById('explanation_7').style.display = 'block';"> {{ $t('training.a7_only_voad') }}</label>
                    </input><br />
                    <label for="answer_7_4">
                      <input type="radio" name="answer_7" id="answer_7_4" onclick="document.getElementById('no_7').style.display = 'block'; document.getElementById('yes_7').style.display = 'none'; document.getElementById('explanation_7').style.display = 'block';"> {{ $t('training.a7_unaffiliated_volunteers') }}</label>
                    </input><br />
                    <label for="answer_7_1">
                      <input type="radio" name="answer_7" id="answer_7_1" onclick="document.getElementById('no_7').style.display = 'none'; document.getElementById('yes_7').style.display = 'block'; document.getElementById('explanation_7').style.display = 'block';"> {{ $t('training.a7_reputable_relief_org') }}</label>
                    </input><br />
                  </form>
                  <div id="no_7" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_7" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_7" style="display:none">
                    <p>{{ $t('training.exp7_bias_inclusion') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>8. {{ $t('training.q8_you_must_update') }} <a href="http://youtu.be/tpMOgDr_KGI?t=3m23s" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_8_2">
                      <input type="radio" name="answer_8" id="answer_8_2" onclick="document.getElementById('no_8').style.display = 'block'; document.getElementById('yes_8').style.display = 'none'; document.getElementById('explanation_8').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_8_1">
                      <input type="radio" name="answer_8" id="answer_8_1" onclick="document.getElementById('no_8').style.display = 'none'; document.getElementById('yes_8').style.display = 'block'; document.getElementById('explanation_8').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_8" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_8" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_8" style="display:none">
                    <p>{{ $t('training.exp8_you_must_update') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>9. {{ $t('training.q9_who_is_in_charge') }}</h5>
                  <form>
                    <label for="answer_9_2">
                      <input type="radio" name="answer_9" id="answer_9_2" onclick="document.getElementById('no_9').style.display = 'block'; document.getElementById('yes_9').style.display = 'none'; document.getElementById('explanation_9').style.display = 'block';"> {{ $t('training.a9_government') }}</label>
                    </input><br />
                    <label for="answer_9_3">
                      <input type="radio" name="answer_9" id="answer_9_3" onclick="document.getElementById('no_9').style.display = 'block'; document.getElementById('yes_9').style.display = 'none'; document.getElementById('explanation_9').style.display = 'block';"> {{ $t('training.a9_voad') }}</label>
                    </input><br />
                    <label for="answer_9_1">
                      <input type="radio" name="answer_9" id="answer_9_1" onclick="document.getElementById('no_9').style.display = 'none'; document.getElementById('yes_9').style.display = 'block'; document.getElementById('explanation_9').style.display = 'block';"> {{ $t('training.a9_you') }}</label>
                    </input><br />
                    <label for="answer_9_4">
                      <input type="radio" name="answer_9" id="answer_9_4" onclick="document.getElementById('no_9').style.display = 'block'; document.getElementById('yes_9').style.display = 'none'; document.getElementById('explanation_9').style.display = 'block';"> <a href="https://www.youtube.com/watch?feature=player_detailpage&v=KAWoP1kncRE#t=45" target=_blank>{{ $t('training.a9_this_guy') }}</a>. ({{ $t('training.hint') }}: {{ $t('training.a9_wrong_answer') }} :-)</label>
                    </input><br />
                  </form>
                  <div id="no_9" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_9" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_9" style="display:none">
                    <p>{{ $t('training.exp9_community_in_charge') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>10. {{ $t('training.q10_unclaim_if_cannot_do') }} <a href="https://www.youtube.com/watch?v=tpMOgDr_KGI&feature=player_embedded#t=432" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_10_2">
                      <input type="radio" name="answer_10" id="answer_10_2" onclick="document.getElementById('no_10').style.display = 'block'; document.getElementById('yes_10').style.display = 'none'; document.getElementById('explanation_10').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_10_1">
                      <input type="radio" name="answer_10" id="answer_10_1" onclick="document.getElementById('no_10').style.display = 'none'; document.getElementById('yes_10').style.display = 'block'; document.getElementById('explanation_10').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_10" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_10" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_10" style="display:none">
                    <p>{{ $t('training.exp10_unclaim_if_cannot_do') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>11. {{ $t('training.q11_orgs_see_others') }}</h5>
                  <form>
                    <label for="answer_11_1">
                      <input type="radio" name="answer_11" id="answer_11_1" onclick="document.getElementById('no_11').style.display = 'none'; document.getElementById('yes_11').style.display = 'block'; document.getElementById('explanation_11').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />
                    <label for="answer_11_2">
                      <input type="radio" name="answer_11" id="answer_11_2" onclick="document.getElementById('no_11').style.display = 'block'; document.getElementById('yes_11').style.display = 'none'; document.getElementById('explanation_11').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />


                  </form>
                  <div id="no_11" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_11" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_11" style="display:none">
                    <p>{{ $t('training.exp11_coordination_easy_required') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>12. {{ $t('training.q12_who_enters') }}</h5>
                  <form>
                    <label for="answer_12_2">
                      <input type="radio" name="answer_12" id="answer_12_2" onclick="document.getElementById('no_12').style.display = 'block'; document.getElementById('yes_12').style.display = 'none'; document.getElementById('explanation_12').style.display = 'block';"> {{ $t('training.a12_public') }}</label>
                    </input><br />
                    <label for="answer_12_1">
                      <input type="radio" name="answer_12" id="answer_12_1" onclick="document.getElementById('no_12').style.display = 'none'; document.getElementById('yes_12').style.display = 'block'; document.getElementById('explanation_12').style.display = 'block';"> {{ $t('training.a12_participating_orgs') }}</label>
                    </input><br />
                    <label for="answer_12_3">
                      <input type="radio" name="answer_12" id="answer_12_3" onclick="document.getElementById('no_12').style.display = 'block'; document.getElementById('yes_12').style.display = 'none'; document.getElementById('explanation_12').style.display = 'block';"> {{ $t('training.a12_only_211') }}</label>
                    </input><br />
                    <label for="answer_12_4">
                      <input type="radio" name="answer_12" id="answer_12_4" onclick="document.getElementById('no_12').style.display = 'block'; document.getElementById('yes_12').style.display = 'none'; document.getElementById('explanation_12').style.display = 'block';"> {{ $t('training.a12_only_voad_sysadmin') }}</label>
                    </input><br />
                  </form>
                  <div id="no_12" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_12" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_12" style="display:none">
                    <p>{{ $t('training.exp12_any_participating_org') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>13. {{ $t('training.q13_what_if_others_fail') }}</h5>
                  <form>
                    <label for="answer_13_2">
                      <input type="radio" name="answer_13" id="answer_13_2" onclick="document.getElementById('no_13').style.display = 'block'; document.getElementById('yes_13').style.display = 'none'; document.getElementById('explanation_13').style.display = 'block';"> {{ $t('training.a13_trouble_ticket') }}</label>
                    </input><br />
                    <label for="answer_13_3">
                      <input type="radio" name="answer_13" id="answer_13_3" onclick="document.getElementById('no_13').style.display = 'block'; document.getElementById('yes_13').style.display = 'none'; document.getElementById('explanation_13').style.display = 'block';"> {{ $t('training.a13_nothing') }}</label>
                    </input><br />
                    <label for="answer_13_4">
                      <input type="radio" name="answer_13" id="answer_13_4" onclick="document.getElementById('no_13').style.display = 'block'; document.getElementById('yes_13').style.display = 'none'; document.getElementById('explanation_13').style.display = 'block';"> {{ $t('training.a13_break_kneecaps') }}</label>
                    </input><br />
                    <label for="answer_13_1">
                      <input type="radio" name="answer_13" id="answer_13_1" onclick="document.getElementById('no_13').style.display = 'none'; document.getElementById('yes_13').style.display = 'block'; document.getElementById('explanation_13').style.display = 'block';"> {{ $t('training.a13_contact_org') }}</label>
                    </input><br />
                  </form>
                  <div id="no_13" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_13" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_13" style="display:none">
                    <p>{{ $t('training.exp13_coordinate') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>14. {{ $t('training.q14_download_list_possible') }} <a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603027-How-do-I-download-an-Excel-or-CSV-copy-of-the-data-" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_14_1">
                      <input type="radio" name="answer_14" id="answer_14_1" onclick="document.getElementById('no_14').style.display = 'none'; document.getElementById('yes_14').style.display = 'block'; document.getElementById('explanation_14').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />
                    <label for="answer_14_2">
                      <input type="radio" name="answer_14" id="answer_14_2" onclick="document.getElementById('no_14').style.display = 'block'; document.getElementById('yes_14').style.display = 'none'; document.getElementById('explanation_14').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />


                  </form>
                  <div id="no_14" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_14" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_14" style="display:none">
                    <p>{{ $t('training.exp14_download_csv') }}</p>
                    <p>{{ $t('training.exp14_csv_hides_data') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>15. {{ $t('training.q15_safeguard_passwords') }}</h5>
                  <form>
                    <label for="answer_15_1">
                      <input type="radio" name="answer_15" id="answer_15_1" onclick="document.getElementById('no_15').style.display = 'none'; document.getElementById('yes_15').style.display = 'block'; document.getElementById('explanation_15').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />
                    <label for="answer_15_2">
                      <input type="radio" name="answer_15" id="answer_15_2" onclick="document.getElementById('no_15').style.display = 'block'; document.getElementById('yes_15').style.display = 'none'; document.getElementById('explanation_15').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />


                  </form>
                  <div id="no_15" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_15" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_15" style="display:none">
                    <p>{{ $t('training.exp15_reset_compromised_pw') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>16. {{ $t('training.q16_case_mgmt_ok') }}</h5>
                  <form>
                    <label for="answer_16_1">
                      <input type="radio" name="answer_16" id="answer_16_1" onclick="document.getElementById('no_16').style.display = 'none'; document.getElementById('yes_16').style.display = 'block'; document.getElementById('explanation_16').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_16_2">
                      <input type="radio" name="answer_16" id="answer_16_2" onclick="document.getElementById('no_16').style.display = 'block'; document.getElementById('yes_16').style.display = 'none'; document.getElementById('explanation_16').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_16" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_16" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_16" style="display:none">
                    <p>{{ $t('training.exp16_no_case_mgmt') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>17. {{ $t('training.q17_one_user_per_org') }}</h5>
                  <form>
                    <label for="answer_17_1">
                      <input type="radio" name="answer_17" id="answer_17_1" onclick="document.getElementById('no_17').style.display = 'none'; document.getElementById('yes_17').style.display = 'block'; document.getElementById('explanation_17').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                    <label for="answer_17_2">
                      <input type="radio" name="answer_17" id="answer_17_2" onclick="document.getElementById('no_17').style.display = 'block'; document.getElementById('yes_17').style.display = 'none'; document.getElementById('explanation_17').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />


                  </form>
                  <div id="no_17" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_17" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_17" style="display:none">
                    <p>{{ $t('training.exp17_invite_teammates') }}</p>
                    <p>{{ $t('training.exp17_invite_teammates') }}</p>
                    <p>{{ $t('training.exp17_invite_teammates_believe_us') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>18. {{ $t('training.q18_easiest_way_reports') }} <a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/200603027-How-do-I-download-an-Excel-or-CSV-copy-of-the-data-" target=_blank><small>{{ $t('training.hint') }}</small></a></h5>
                  <form>
                    <label for="answer_18_2">
                      <input type="radio" name="answer_18" id="answer_18_2" onclick="document.getElementById('no_18').style.display = 'block'; document.getElementById('yes_18').style.display = 'none'; document.getElementById('explanation_18').style.display = 'block';"> {{ $t('training.a18_email_request_report') }}</label>
                    </input><br />
                    <label for="answer_18_1">
                      <input type="radio" name="answer_18" id="answer_18_1" onclick="document.getElementById('no_18').style.display = 'none'; document.getElementById('yes_18').style.display = 'block'; document.getElementById('explanation_18').style.display = 'block';"> {{ $t('training.a18_download_csv') }}</label>
                    </input><br />
                    <label for="answer_18_3">
                      <input type="radio" name="answer_18" id="answer_18_3" onclick="document.getElementById('no_18').style.display = 'block'; document.getElementById('yes_18').style.display = 'none'; document.getElementById('explanation_18').style.display = 'block';"> {{ $t('training.a18_pen_paper') }}</label>
                    </input><br />
                    <label for="answer_18_4">
                      <input type="radio" name="answer_18" id="answer_18_4" onclick="document.getElementById('no_18').style.display = 'block'; document.getElementById('yes_18').style.display = 'none'; document.getElementById('explanation_18').style.display = 'block';"> {{ $t('training.a18_orangutanes') }}</label>
                    </input><br />
                  </form>
                  <div id="no_18" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_18" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_18" style="display:none">
                    <p>{{ $t('training.exp18_run_own_reports') }}</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <hr />
                  <h3>{{ $t('training.advanced_questions') }}</h3>
                  <p>{{ $t('training.feeling_good_try_more') }}</p>
                </div>
              </div>

              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>19. {{ $t('training.q19_claim_how_many') }} <small><a href="https://crisiscleanup.zendesk.com/hc/en-us/articles/227036588-Work-Order-Case-Claiming-Policy" target="_blank">{{ $t('training.hint') }}</a></small></h5>
                  <form>
                    <label for="answer_19_2">
                      <input type="radio" name="answer_19" id="answer_19_2" onclick="document.getElementById('no_19').style.display = 'block'; document.getElementById('yes_19').style.display = 'none'; document.getElementById('explanation_19').style.display = 'block';"> {{ $t('training.a19_as_many_as_possible') }}</label>
                    </input><br />
                    <label for="answer_19_3">
                      <input type="radio" name="answer_19" id="answer_19_3" onclick="document.getElementById('no_19').style.display = 'block'; document.getElementById('yes_19').style.display = 'none'; document.getElementById('explanation_19').style.display = 'block';"> {{ $t('training.a19_can_i_claim') }}</label>
                    </input><br />
                    <label for="answer_19_1">
                      <input type="radio" name="answer_19" id="answer_19_1" onclick="document.getElementById('no_19').style.display = 'none'; document.getElementById('yes_19').style.display = 'block'; document.getElementById('explanation_19').style.display = 'block';"> {{ $t('training.a19_finish_six_days') }}</label>
                    </input><br />
                    <label for="answer_19_4">
                      <input type="radio" name="answer_19" id="answer_19_4" onclick="document.getElementById('no_19').style.display = 'block'; document.getElementById('yes_19').style.display = 'none'; document.getElementById('explanation_19').style.display = 'block';"> {{ $t('training.a19_all_assign_other_orgs') }}</label>
                    </input><br />
                  </form>
                  <div id="no_19" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_19" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_19" style="display:none">
                    <p>{{ $t('training.exp19_six_days_play_nice') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>20. {{ $t('training.q20_do_before_arrival') }}</h5>
                  <form>
                    <label for="answer_20_2">
                      <input type="radio" name="answer_20" id="answer_20_2" onclick="document.getElementById('no_20').style.display = 'block'; document.getElementById('yes_20').style.display = 'none'; document.getElementById('explanation_20').style.display = 'block';"> {{ $t('training.a20_call_before') }}</label>
                    </input><br />
                    <label for="answer_20_3">
                      <input type="radio" name="answer_20" id="answer_20_3" onclick="document.getElementById('no_20').style.display = 'block'; document.getElementById('yes_20').style.display = 'none'; document.getElementById('explanation_20').style.display = 'block';"> {{ $t('training.a20_proper_equipment') }}</label>
                    </input><br />
                    <label for="answer_20_4">
                      <input type="radio" name="answer_20" id="answer_20_4" onclick="document.getElementById('no_20').style.display = 'block'; document.getElementById('yes_20').style.display = 'none'; document.getElementById('explanation_20').style.display = 'block';"> {{ $t('training.a20_claim_in_ccu') }}</label>
                    </input><br />
                    <label for="answer_20_1">
                      <input type="radio" name="answer_20" id="answer_20_1" onclick="document.getElementById('no_20').style.display = 'none'; document.getElementById('yes_20').style.display = 'block'; document.getElementById('explanation_20').style.display = 'block';"> {{ $t('training.all_of_the_above') }}</label>
                    </input><br />
                  </form>
                  <div id="no_20" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_20" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_20" style="display:none">
                    <p>{{ $t('training.exp20_all_of_above') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>21. {{ $t('training.q21_invite_how_many') }} <small><a href="https://youtu.be/3wumEh8wcak?t=72" target="_blank">{{ $t('training.hint') }}</a></small></h5>
                  <form>
                    <label for="answer_21_2">
                      <input type="radio" name="answer_21" id="answer_21_2" onclick="document.getElementById('no_21').style.display = 'block'; document.getElementById('yes_21').style.display = 'none'; document.getElementById('explanation_21').style.display = 'block';"> {{ $t('training.a21_only_one_two') }}</label>
                    </input><br />
                    <label for="answer_21_1">
                      <input type="radio" name="answer_21" id="answer_21_1" onclick="document.getElementById('no_21').style.display = 'none'; document.getElementById('yes_21').style.display = 'block'; document.getElementById('explanation_21').style.display = 'block';"> {{ $t('training.a21_all_trusted') }}</label>
                    </input><br />
                    <label for="answer_21_3">
                      <input type="radio" name="answer_21" id="answer_21_3" onclick="document.getElementById('no_21').style.display = 'block'; document.getElementById('yes_21').style.display = 'none'; document.getElementById('explanation_21').style.display = 'block';"> {{ $t('training.a21_public') }}</label>
                    </input><br />
                    <label for="answer_21_4">
                      <input type="radio" name="answer_21" id="answer_21_4" onclick="document.getElementById('no_21').style.display = 'block'; document.getElementById('yes_21').style.display = 'none'; document.getElementById('explanation_21').style.display = 'block';"> {{ $t('training.a21_dog') }}</label>
                    </input><br />
                  </form>
                  <div id="no_21" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_21" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_21" style="display:none">
                    <p>{{ $t('training.exp21_as_many_as_possible') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>22. {{ $t('training.q22_what_do_debris') }}</h5>
                  <form>
                    <label for="answer_22_2">
                      <input type="radio" name="answer_22" id="answer_22_2" onclick="document.getElementById('no_22').style.display = 'block'; document.getElementById('yes_22').style.display = 'none'; document.getElementById('explanation_22').style.display = 'block';"> {{ $t('training.a22_pile_neatly') }}</label>
                    </input><br />
                    <label for="answer_22_3">
                      <input type="radio" name="answer_22" id="answer_22_3" onclick="document.getElementById('no_22').style.display = 'block'; document.getElementById('yes_22').style.display = 'none'; document.getElementById('explanation_22').style.display = 'block';"> {{ $t('training.a22_follow_local_rules') }}</label>
                    </input><br />
                    <label for="answer_22_4">
                      <input type="radio" name="answer_22" id="answer_22_4" onclick="document.getElementById('no_22').style.display = 'block'; document.getElementById('yes_22').style.display = 'none'; document.getElementById('explanation_22').style.display = 'block';"> {{ $t('training.a22_bag_messy_debris') }}</label>
                    </input><br />
                    <label for="answer_22_1">
                      <input type="radio" name="answer_22" id="answer_22_1" onclick="document.getElementById('no_22').style.display = 'none'; document.getElementById('yes_22').style.display = 'block'; document.getElementById('explanation_22').style.display = 'block';"> {{ $t('training.all_of_the_above') }}</label>
                    </input><br />
                  </form>
                  <div id="no_22" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_22" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_22" style="display:none">
                    <p>{{ $t('training.exp22_garbage_rules') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>23. {{ $t('training.q23_add_previous_work_orders') }}</h5>
                  <form>
                    <label for="answer_23_1">
                      <input type="radio" name="answer_23" id="answer_23_1" onclick="document.getElementById('no_23').style.display = 'none'; document.getElementById('yes_23').style.display = 'block'; document.getElementById('explanation_23').style.display = 'block';"> True.</label>
                    </input><br />
                    <label for="answer_23_2">
                      <input type="radio" name="answer_23" id="answer_23_2" onclick="document.getElementById('no_23').style.display = 'block'; document.getElementById('yes_23').style.display = 'none'; document.getElementById('explanation_23').style.display = 'block';"> False.</label>
                    </input><br />
                  </form>
                  <div id="no_23" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_23" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_23" style="display:none">
                    <p>{{ $t('training.exp23_add_previous_work_orders') }}
                      <ol>
                        <li>{{ $t('training.exp23_decrease_duplication') }}</li>
                        <li>{{ $t('training.exp23_ltrg') }}</li>
                        <li>{{ $t('training.exp23_feels_good') }}</li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>24. {{ $t('training.q24_if_asks_for_direction') }}</h5>
                  <form>
                    <label for="answer_24_1">
                      <input type="radio" name="answer_24" id="answer_24_1" onclick="document.getElementById('no_24').style.display = 'none'; document.getElementById('yes_24').style.display = 'block'; document.getElementById('explanation_24').style.display = 'block';"> {{ $t('training.a24_they_register_ccu') }}</label>
                    </input><br />
                    <label for="answer_24_2">
                      <input type="radio" name="answer_24" id="answer_24_2" onclick="document.getElementById('no_24').style.display = 'block'; document.getElementById('yes_24').style.display = 'none'; document.getElementById('explanation_24').style.display = 'block';"> {{ $t('training.a24_they_report_to_you') }}</label>
                    </input><br />
                    <label for="answer_24_3">
                      <input type="radio" name="answer_24" id="answer_24_3" onclick="document.getElementById('no_24').style.display = 'block'; document.getElementById('yes_24').style.display = 'none'; document.getElementById('explanation_24').style.display = 'block';"> {{ $t('training.a24_take_their_volunteers') }}</label>
                    </input><br />
                    <label for="answer_24_4">
                      <input type="radio" name="answer_24" id="answer_24_4" onclick="document.getElementById('no_24').style.display = 'block'; document.getElementById('yes_24').style.display = 'none'; document.getElementById('explanation_24').style.display = 'block';"> {{ $t('training.a24_say_go_home') }}</label>
                    </input><br />
                  </form>
                  <div id="no_24" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_24" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_24" style="display:none">
                    <p>{{ $t('training.exp24_be_collaborative') }}</p>
                    <p>{{ $t('training.exo24_seriously_be_collaborative') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>25. {{ $t('training.q25_removing_drywall') }}</h5>
                  <form>
                    <label for="answer_25_1">
                      <input type="radio" name="answer_25" id="answer_25_1" onclick="document.getElementById('no_25').style.display = 'none'; document.getElementById('yes_25').style.display = 'block'; document.getElementById('explanation_25').style.display = 'block';"> {{ $t('training.a25_cut_4_8_feet_straight') }}</label>
                    </input><br />
                    <label for="answer_25_2">
                      <input type="radio" name="answer_25" id="answer_25_2" onclick="document.getElementById('no_25').style.display = 'block'; document.getElementById('yes_25').style.display = 'none'; document.getElementById('explanation_25').style.display = 'block';"> {{ $t('training.a25_remove_just_wet_part') }}</label>
                    </input><br />
                    <label for="answer_25_3">
                      <input type="radio" name="answer_25" id="answer_25_3" onclick="document.getElementById('no_25').style.display = 'block'; document.getElementById('yes_25').style.display = 'none'; document.getElementById('explanation_25').style.display = 'block';"> {{ $t('training.a25_saw_with_power_on') }}</label>
                    </input><br />
                    <label for="answer_25_4">
                      <input type="radio" name="answer_25" id="answer_25_4" onclick="document.getElementById('no_25').style.display = 'block'; document.getElementById('yes_25').style.display = 'none'; document.getElementById('explanation_25').style.display = 'block';"> {{ $t('training.a25_just_use_hammer') }}</label>
                    </input><br />
                  </form>
                  <div id="no_25" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_25" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_25" style="display:none">
                    <p>{{ $t('training.exp25_drywall_process') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>26. {{ $t('training.q26_stressed_org') }}</h5>
                  <form>
                    <label for="answer_26_2">
                      <input type="radio" name="answer_26" id="answer_26_2" onclick="document.getElementById('no_26').style.display = 'block'; document.getElementById('yes_26').style.display = 'none'; document.getElementById('explanation_26').style.display = 'block';"> {{ $t('training.a26_listen_reflect') }}</label>
                    </input><br />
                    <label for="answer_26_3">
                      <input type="radio" name="answer_26" id="answer_26_3" onclick="document.getElementById('no_26').style.display = 'block'; document.getElementById('yes_26').style.display = 'none'; document.getElementById('explanation_26').style.display = 'block';"> {{ $t('training.a26_patient_hug_cookies') }}</label>
                    </input><br />
                    <label for="answer_26_4">
                      <input type="radio" name="answer_26" id="answer_26_4" onclick="document.getElementById('no_26').style.display = 'block'; document.getElementById('yes_26').style.display = 'none'; document.getElementById('explanation_26').style.display = 'block';"> {{ $t('training.a26_disasters_are_overwhelming') }}</label>
                    </input><br />
                    <label for="answer_26_1">
                      <input type="radio" name="answer_26" id="answer_26_1" onclick="document.getElementById('no_26').style.display = 'none'; document.getElementById('yes_26').style.display = 'block'; document.getElementById('explanation_26').style.display = 'block';"> {{ $t('training.all_of_the_above') }}</label>
                    </input><br />
                  </form>
                  <div id="no_26" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_26" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_26" style="display:none">
                    <p>{{ $t('training.exp26_be_patient') }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="small-12 medium-12 large-12 columns">
                  <h5>27. {{ $t('training.q27_move_misplaced_icons') }}</h5>
                  <form>
                    <label for="answer_27_1">
                      <input type="radio" name="answer_27" id="answer_27_1" onclick="document.getElementById('no_27').style.display = 'none'; document.getElementById('yes_27').style.display = 'block'; document.getElementById('explanation_27').style.display = 'block';"> {{ $t('training.true') }}</label>
                    </input><br />
                    <label for="answer_27_2">
                      <input type="radio" name="answer_27" id="answer_27_2" onclick="document.getElementById('no_27').style.display = 'block'; document.getElementById('yes_27').style.display = 'none'; document.getElementById('explanation_27').style.display = 'block';"> {{ $t('training.false') }}</label>
                    </input><br />
                  </form>
                  <div id="no_27" style="display:none">
                    <p style="color:red; font-weight: bold;">{{ $t('training.incorrect') }}</p>
                  </div>
                  <div id="yes_27" style="display:none">
                    <p style="color:green; font-weight: bold;">{{ $t('training.correct') }}</p>
                  </div>
                  <div id="explanation_27" style="display:none">
                    <p>{{ $t('training.exp27_move_misplaced_icons') }}</p>
                  </div>
                </div>
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
  name: 'Training'
}
</script>
