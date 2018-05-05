var commands = {
  setEventContext: function(eventId) {
    return this.waitForElementVisible('@contextSelector', 1000)
      .click(`#ccu-event-context-selector > option:nth-child(${eventId - 1})`)
  },
};

module.exports = {
  commands: [commands],
  elements: {
    contextSelector: {
      selector: '#ccu-event-context-selector'
    },
  }
};
