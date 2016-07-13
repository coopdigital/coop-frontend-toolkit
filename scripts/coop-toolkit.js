// Adapted from https://github.com/Heisenbergjs/heisenberg/blob/master/app/app.js
(function() {
  var Coop = {

    Modules: {},

    Events: $({}),

    init: function () {
      // Loop through all the modules added to the coop.Modules object. We check that the init function of each Module can be called.
      for(var x in Coop.Modules) {
        if (typeof Coop.Modules[x].init === 'function') {
          Coop.Modules[x].init();
        }
      }

      Coop.Events.trigger('render');
    }
  };

  // expose the Coop object globally
  window.Coop = Coop;
})();

$(function() {
  // Initialise all modules
  Coop.init();
});
