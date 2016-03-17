(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var Toggles = function($el, options) {
    this.init($el, options);
    return this;
  };

  Toggles.prototype = {
    init: function($el, options) {
      this.$trigger = $el;

      this.bindEvents();

      $el.addClass('init');
    },
    bindEvents: function() {
      var self = this;

      this.$trigger
        .off('click.Toggles')
        .on('click.Toggles', function(e) {
          e.preventDefault();

          $(this).toggleClass('open');
          if($(this).parent().hasClass('accordion')) {
            $(this).siblings('.toggle-trigger').removeClass('open');
          }
        });
    }
  };

  Coop.Modules._Toggles = Toggles;

  Coop.Modules.Toggles = {
    init: function() {
      return $('.toggle-trigger').each(function() {
        $(this).data('Toggles', new Toggles($(this), $(this).data()));
      });
    }
  };
}());
