import VueLoading from 'vuex-loading';
import Vue from 'vue';

Vue.use(VueLoading);

const loading = new VueLoading({
  registerComponents: true,
  useVuex: true
});

export default loading;
