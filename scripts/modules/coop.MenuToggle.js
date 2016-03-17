(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  Coop.Modules.MenuToggle = {
    defaults: {
      toggleSelector: '.mobile-menu-toggle',
      navSelector: '#navigation',
      menuTextSelector: '.mobile-menu-text',
      closeText: 'Close',
      openClass: 'open'
    },
    init: function(options) {
      this.settings = $.extend({}, this.defaults, options);

      this.$toggle = $(this.settings.toggleSelector);
      this.$nav = $(this.settings.navSelector);
      this.$menuText = $(this.settings.menuTextSelector);

      this.originalText = this.$menuText.eq(0).text();

      this.bindEvents();
    },
    bindEvents: function() {
      var self = this;

      this.$toggle
        .off('click.MenuToggle')
        .on('click.MenuToggle', function(e) {
          e.preventDefault();
          self.toggle();
        });
    },
    toggle: function() {
      if (this.$toggle.hasClass(this.settings.openClass)) {
        this.close();
      }
      else {
        this.open();
      }
    },
    open: function() {
      this.$toggle.add(this.$nav).addClass(this.settings.openClass);
      $(this.settings.menuTextSelector, this.$toggle).text(this.settings.closeText);
    },
    close: function() {
      this.$toggle.add(this.$nav).removeClass(this.settings.openClass);
      $(this.settings.menuTextSelector, this.$toggle).text(this.originalText);
    }
  };
}());
