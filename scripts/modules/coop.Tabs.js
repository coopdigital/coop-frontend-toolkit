(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var Tabs = function($el, options) {
    this.init($el, options);
    return this;
  };

  Tabs.prototype = {
    init: function($el, options) {
      this.$tabs = $el;
      this.$navItems = $('.tabs-nav a', $el);
      this.$tabPanels = $('.tabs-content .tab-panel', $el);

      this.addAria();
      this.bindEvents();

      // Activate first tab
      this.activateTab(this.$navItems.eq(0).attr('href'));

      $el.addClass('init');
    },
    bindEvents: function() {
      var self = this;

      this.$navItems
        .off('click.Tabs')
        .on('click.Tabs', function(e) {
          e.preventDefault();
          self.activateTab($(this).attr('href'));
        });
    },
    addAria: function() {
      this.$navItems.each(function() {
        var controlId = $(this).attr('href').replace('#', '');
        $(this).attr('aria-controls', function(i, currentAttribute) {
          return currentAttribute ? currentAttribute + ' ' + controlId : controlId;
        });
      });
      this.$tabPanels.attr('aria-live', 'polite');
    },
    activateTab: function(tabId) {
      this.$navItems
        .removeClass('active')
        .filter('[href="' + tabId + '"]')
          .addClass('active');

      this.$tabPanels
        .removeClass('active')
        .attr({
          'aria-hidden': true,
          'hidden': true
        })
        .filter(tabId)
          .addClass('active')
          .removeAttr('aria-hidden hidden');
    }
  };

  Coop.Modules._Tabs = Tabs;

  Coop.Modules.Tabs = {
    init: function() {
      return $('.tabs').each(function() {
        $(this).data('Tabs', new Tabs($(this), $(this).data()));
      });
    }
  };
}());

// Tabs
// $('.tabs').on('click', '.tabs-nav a', function(e) {
//   e.preventDefault();
//   $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
//   $($(this).attr('href')).addClass('active').siblings().removeClass('active');
// }).addClass('init').find('.tabs-nav li:first a').trigger('click');
