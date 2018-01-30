import messages from './translations';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
