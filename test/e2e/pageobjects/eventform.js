const commands = {
  createNewWorksite() {
    return this.waitForElementVisible('@newWorksiteBtn', 5000)
      .click('@newWorksiteBtn')
      .expect.element('@outerForm').to.be.visible;
  },
  saveWorksite() {
    return this.waitForElementVisible('@saveWorksiteBtn', 5000)
      .click('@saveWorksiteBtn');
  },
};

module.exports = {
  url() {
    return `${this.api.launch_url}/worker/map`;
  },
  commands: [commands],
  elements: {
    formLink: {
      selector: "a[@role='tab' and @aria-posinset='1'",
    },
    newWorksiteBtn: {
      selector: '#ccu-new-site-button',
    },
    saveWorksiteBtn: {
      selector: '#ccu-save-btn',
    },
    claimWorksiteBtn: {
      selector: '#ccu-claim-btn',
    },
    outerForm: {
      selector: '#ccu-event-form',
    },
  },
  sections: {
    map: {
      selector: '.fullsize-map',
      elements: {
        marker: { selector: '.leaflet-marker-icon' },
      },
    },
    propertyInfo: {
      selector: '#ccu-section-property_info',
      elements: {
        name: { selector: '#nameCCU' },
        request_date: { selector: '#request_dateCCU' },
        address: { selector: '#addressCCU' },
        city: { selector: '#cityCCU' },
        county: { selector: '#countyCCU' },
        state: { selector: '#stateCCU' },
        zip_code: { selector: '#zip_codeCCU' },
        autocomplete_list: { selector: '.v-autocomplete-list' },
        autocomplete_list_item: { selector: '.v-autocomplete-list-item' },
      },

    },
  },
};
