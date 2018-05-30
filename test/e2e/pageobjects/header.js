var commands = {
  setEventContext: function(eventId) {
    return this.waitForElementVisible('@contextSelector', 5000)
      .click(`select[id="ccu-event-context-selector"] option[value="${eventId}"]`)
  },
};

module.exports = {
  commands: [commands],
  elements: {
    contextSelector: {
      selector: '#ccu-event-context-selector'
    },
    logoutBtn: {
      selector: '#logout-btn'
    },
    dropdownRight: {
      selector: '.dropdown-menu-right'
    }
  }
};
//*[@id="ccu-event-context-selector"]/option[51]
