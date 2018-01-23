<template>

  <div class="animated fadeIn" id="worker-dashboard">

    <div class="row">
      <div class="col-md-6">
        <!--<b-card header="Worksites">-->
          <worksites></worksites>
        <!--</b-card>-->
      </div>
      <div class="col-md-6">
        <b-card v-bind:header = "$t('dashboard.invite_teammates')">
          <invite-teammates></invite-teammates>
        </b-card>

        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.invited_teammates_stat')"
                           :stat-quantity="getWorksiteStats.worksitesCompleted"
                           card-color-class="bg-primary"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.active_teammates_stat')"
                           :stat-quantity="getWorksiteStats.worksitesOpenUnassigned"
                           card-color-class="bg-info"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.inactive_teammates_stat')"
                           :stat-quantity="getWorksiteStats.worksitesAssigned"
                           card-color-class="bg-warning"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.claimed_worksites_stat')"
                           stat-quantity="$8.3 million"
                           :stat-quantity="'$' + getWorksiteStats.worksitesValueOfServices.toLocaleString()"
                           card-color-class="bg-danger"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div><!--/.row-->
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.completed_worksites_stat')"
                           :stat-quantity="getWorksiteStats.worksitesCompleted"
                           card-color-class="bg-primary"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.incomplete_worksites_stat')"
                           :stat-quantity="getWorksiteStats.worksitesOpenUnassigned"
                           card-color-class="bg-info"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.est_commercial_value')"
                           :stat-quantity="getWorksiteStats.worksitesAssigned"
                           card-color-class="bg-warning"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.volunteer_hours_stat')"
                           stat-quantity="$8.3 million"
                           :stat-quantity="'$' + getWorksiteStats.worksitesValueOfServices.toLocaleString()"
                           card-color-class="bg-danger"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div><!--/.row-->
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.average_wait_stat')"
                           :stat-quantity="getWorksiteStats.worksitesCompleted"
                           card-color-class="bg-primary"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.longest_wait_stat')"
                           :stat-quantity="getWorksiteStats.worksitesOpenUnassigned"
                           card-color-class="bg-info"
                           chart-component="CardLine1ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.shortest_wait_stat')"
                           :stat-quantity="getWorksiteStats.worksitesAssigned"
                           card-color-class="bg-warning"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-6">
            <QuickStatCard v-bind:stat-name = "$t('dashboard.num_old_open_unassigned_stat')"
                           stat-quantity="$8.3 million"
                           :stat-quantity="'$' + getWorksiteStats.worksitesValueOfServices.toLocaleString()"
                           card-color-class="bg-danger"
                           chart-component="CardLine3ChartExample"
            ></QuickStatCard>
          </div><!--/.col-->
        </div><!--/.row-->

      </div>
    </div>

    <b-card>
      <div class="row">
        <div class="col-sm-5">
          <h4 class="card-title mb-0">{{ $t('dashboard.worksite_completion') }}</h4>
          <div class="small text-muted">[Start Time] to [End Time], [My Org|Affiliated Orgs|All Orgs], [Current Disaster|All Disasters], [Cumulative|Weekly|Daily]</div>
        </div><!--/.col-->
        <div class="col-sm-7 hidden-sm-down">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" v-bind:aria-label = "$t('dashboard.button_group_label')">
            <b-button-group class="mr-3" v-bind:aria-label = "$t('dashboard.timeframe_label')">
              <b-button variant="outline-secondary">{{ $t('dashboard.day') }}</b-button>
              <b-button variant="outline-secondary" :active="true">{{ $t('dashboard.week') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.two_weeks') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.month') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.year') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.all') }}</b-button>
            </b-button-group>
            <b-button-group class="mr-4" v-bind:aria-label = "$t('dashboard.time_group_label')">
              <b-button variant="outline-secondary" :active="true">{{ $t('dashboard.cumulative') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.weekly') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.daily') }}</b-button>
            </b-button-group>
            <b-button-group class="mr-4" v-bind:aria-label = "$t('dashboard.org_label')">
              <b-button variant="outline-secondary" :active="true">[My Organization]</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.affiliated_orgs') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.all_orgs') }}</b-button>
            </b-button-group>
            <b-button-group class="mr-4" aria-label="Disasters">
              <b-button variant="outline-secondary" :active="true">{{ $t('dashboard.current_disaster') }}</b-button>
              <b-button variant="outline-secondary">{{ $t('dashboard.all_disasters') }}</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div><!--/.col-->
      </div><!--/.row-->
      <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
      <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">{{ $t('dashboard.total_reported') }}</div>
            <strong>741 {{ $t('dashboard.sites') }}</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="success" :value="741"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">{{ $t('dashboard.total_claimed') }}</div>
            <strong>323 {{ $t('dashboard.sites') }} (100%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="info" :value="323"></b-progress>
          </li>
          <li>
            <div class="text-muted">{{ $t('dashboard.unassigned') }}</div>
            <strong>39 {{ $t('dashboard.sites') }} (12.6%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">{{ $t('dashboard.in_progress') }}</div>
            <strong>12 {{ $t('dashboard.sites') }} (3.2%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">{{ $t('dashboard.closed') }}</div>
            <strong>272 {{ $t('dashboard.sites') }} (84.2%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="danger" :value="272"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">{{ $t('dashboard.est_commercial_value') }}</div>
            <strong>$4,896,000</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="danger" :value="272"></b-progress>
          </li>
        </ul>
      </div>
    </b-card>

    <!--
    <div class="row">
      <div class="col-md-12">
        <b-card header="Traffic &amp; Sales">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout variant="info">
                    <small class="text-muted">New Clients</small>
                    <br>
                    <strong class="h4">9,123</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80"
                                             height="30"/>
                    </div>
                  </Callout>
                </div>
                <div class="col-sm-6">
                  <Callout variant="danger">
                    <small class="text-muted">Recurring Clients</small>
                    <br>
                    <strong class="h4">22,643</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" variant="#f86c6b" width="80"
                                             height="30"/>
                    </div>
                  </Callout>
                </div>
              </div>
              <hr class="mt-0">
              <ul class="horizontal-bars">
                <li>
                  <div class="title">
                    Monday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="34" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="78" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Tuesday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="56" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="94" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Wednesday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="12" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="67" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Thursday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="43" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="91" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Friday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="22" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="73" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Saturday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="53" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="82" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Sunday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="9" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="69" variant="danger"></b-progress>
                  </div>
                </li>
                <li class="legend">
                  <span class="badge badge-pill badge-info"></span>
                  <small>New clients</small> &nbsp; <span class="badge badge-pill badge-danger"></span>
                  <small>Recurring clients</small>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout variant="warning">
                    <small class="text-muted">Pageviews</small>
                    <br>
                    <strong class="h4">78,623</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80"
                                             height="30"/>
                    </div>
                  </Callout>
                </div>
                <div class="col-sm-6">
                  <Callout variant="success">
                    <small class="text-muted">Organic</small>
                    <br>
                    <strong class="h4">49,123</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80px"
                                             height="30"/>
                    </div>
                  </Callout>
                </div>
              </div>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <li>
                  <i class="icon-user"></i>
                  <span class="title">Male</span>
                  <span class="value">43%</span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="43" variant="warning"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-user-female"></i>
                  <span class="title">Female</span>
                  <span class="value">37%</span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="37" variant="warning"></b-progress>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <i class="icon-globe"></i>
                  <span class="title">Organic Search</span>
                  <span class="value">191,235 <span class="text-muted small">(56%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="56" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-facebook"></i>
                  <span class="title">Facebook</span>
                  <span class="value">51,223 <span class="text-muted small">(15%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="15" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-twitter"></i>
                  <span class="title">Twitter</span>
                  <span class="value">37,564 <span class="text-muted small">(11%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="11" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-linkedin"></i>
                  <span class="title">LinkedIn</span>
                  <span class="value">27,319 <span class="text-muted small">(8%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="8" variant="success"></b-progress>
                  </div>
                </li>
                <li class="divider text-center">
                  <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout>
                    <small class="text-muted">CTR</small>
                    <br>
                    <strong class="h4">23%</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" width="80px" height="30"/>
                    </div>
                  </Callout>
                </div>
                <div class="col-sm-6">
                  <Callout variant="primary">
                    <small class="text-muted">Bounce Rate</small>
                    <br>
                    <strong class="h4">5%</strong>
                    <div class="chart-wrapper">
                      <callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80px"
                                             height="30"/>
                    </div>
                  </Callout>
                </div>
              </div>
              <hr class="mt-0">
              <ul class="icons-list">
                <li>
                  <i class="icon-screen-desktop bg-primary"></i>
                  <div class="desc">
                    <div class="title">iMac 4k</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.924</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-info"></i>
                  <div class="desc">
                    <div class="title">Samsung Galaxy Edge</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.224</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-warning"></i>
                  <div class="desc">
                    <div class="title">iPhone 6S</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.163</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-user bg-danger"></i>
                  <div class="desc">
                    <div class="title">Premium accounts</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>928</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-social-spotify bg-success"></i>
                  <div class="desc">
                    <div class="title">Spotify Subscriptions</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>893</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-cloud-download bg-danger"></i>
                  <div class="desc">
                    <div class="title">Ebook</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Downloads</div>
                    <strong>121.924</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-camera bg-warning"></i>
                  <div class="desc">
                    <div class="title">Photos</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Uploaded</div>
                    <strong>12.125</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li class="divider text-center">
                  <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
                </li>
              </ul>
            </div>
          </div>
          <br/>
          <b-table class="table-outline mb-0" hover responsive outline
                   :items="tableItems"
                   :fields="tableFields"
                   head-variant="default"
          >
            <template slot="avatar" scope="item">
              <div class="avatar">
                <img :src="item.value.url" class="img-avatar" alt="">
                <span class="avatar-status"
                      v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
              </div>
            </template>
            <template slot="user" scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.value.registered}}
              </div>
            </template>
            <template slot="country" scope="item">
              <img :src="item.value.flag" :alt="item.value.name" style="height:24px;">
            </template>
            <template slot="usage" scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress class="progress-xs" v-model="item.value.value"
                          :variant="variant(item.value.value)"></b-progress>
            </template>
            <template slot="payment" scope="item">
              <i :class="item.value.icon" style="font-size:24px"></i>
            </template>
            <template slot="activity" scope="item">
              <div class="small text-muted">Last login</div>
              <strong>{{item.value}}</strong>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
    -->
  </div>
</template>

<script>
  import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
  import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
  import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
  import CardBarChartExample from '../dashboard/CardBarChartExample'
  import MainChartExample from '../dashboard/MainChartExample'
  import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
  import CalloutChartExample from '../dashboard/CalloutChartExample'
  import {Callout, InviteTeammates, Worksites, QuickStatCard} from '@/components/'
  import { mapGetters } from 'vuex';

  export default {
    name: 'dashboard',
    components: {
      InviteTeammates,
      Callout,
      Worksites,
      QuickStatCard,
      CardLine1ChartExample,
      CardLine2ChartExample,
      CardLine3ChartExample,
      CardBarChartExample,
      MainChartExample,
      SocialBoxChartExample,
      CalloutChartExample
    },
    data: function () {
      return {
        tableItems: [
          {
            avatar: {url: '/static/img/avatars/1.jpg', status: 'success'},
            user: {name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015'},
            country: {name: 'USA', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 50, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'Mastercard', icon: 'fa fa-cc-mastercard'},
            activity: '10 sec ago'
          },
          {
            avatar: {url: '/static/img/avatars/2.jpg', status: 'danger'},
            user: {name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015'},
            country: {name: 'Brazil', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'Visa', icon: 'fa fa-cc-visa'},
            activity: '5 minutes ago'
          },
          {
            avatar: {url: '/static/img/avatars/3.jpg', status: 'warning'},
            user: {name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015'},
            country: {name: 'India', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 74, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'Stripe', icon: 'fa fa-cc-stripe'},
            activity: '1 hour ago'
          },
          {
            avatar: {url: '/static/img/avatars/4.jpg', status: ''},
            user: {name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015'},
            country: {name: 'France', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 98, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'PayPal', icon: 'fa fa-paypal'},
            activity: 'Last month'
          },
          {
            avatar: {url: '/static/img/avatars/5.jpg', status: 'success'},
            user: {name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015'},
            country: {name: 'Spain', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'Google Wallet', icon: 'fa fa-google-wallet'},
            activity: 'Last week'
          },
          {
            avatar: {url: '/static/img/avatars/6.jpg', status: 'danger'},
            user: {name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015'},
            country: {name: 'Poland', flag: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='},
            usage: {value: 43, period: 'Jun 11, 2015 - Jul 10, 2015'},
            payment: {name: 'Amex', icon: 'fa fa-cc-amex'},
            activity: 'Last week'
          }
        ],
        tableFields: {
          avatar: {
            label: '<i class="icon-people"></i>',
            class: 'text-center'
          },
          user: {
            label: 'User'
          },
          country: {
            label: 'Country',
            class: 'text-center'
          },
          usage: {
            label: 'Usage'
          },
          payment: {
            label: 'Payment method',
            class: 'text-center'
          },
          activity: {
            label: 'Activity'
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'getWorksiteStats'
      ])
    },
    mounted() {
      this.$store.dispatch('getWorksiteStats');
    },
    methods: {
      variant(value) {
        let $variant
        if (value <= 25) {
          $variant = 'info'
        } else if (value > 25 && value <= 50) {
          $variant = 'success'
        } else if (value > 50 && value <= 75) {
          $variant = 'warning'
        } else if (value > 75 && value <= 100) {
          $variant = 'danger'
        }
        return $variant
      }
    }
  }
</script>
