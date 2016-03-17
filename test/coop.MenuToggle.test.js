describe('Coop Menu Toggle module', function() {
  it('should be an object added to the Coop Modules', function() {
    expect(Coop.Modules.MenuToggle).to.be.an('object');
  });

  it('should cache the default settings', function() {
    var defaults = {
      toggleSelector: '.mobile-menu-toggle',
      navSelector: '#navigation',
      menuTextSelector: '.mobile-menu-text',
      closeText: 'Close',
      openClass: 'open'
    };
    expect(Coop.Modules.MenuToggle.settings).to.deep.equal(defaults);
  });

  describe('when interacting', function() {
    var $fixture =  $('<div class="fixture">' +
                        '<a href="#" class="mobile-menu-toggle">' +
                          '<span class="icon icon-menu"></span><span class="mobile-menu-text">Menu</span>' +
                        '</a>' +
                        '<span class="mobile-menu-text">Some other text</span>' +
                        '<nav id="navigation">Navigation</nav>' +
                      '</div>');

    before(function() {
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should cache the original text of the first matched element only', function() {
      expect(Coop.Modules.MenuToggle.originalText).to.equal('Menu');
    });

    it('should add the class `open` to the .mobile-menu-toggle and #navigation elements when clicked', function() {
      $('.mobile-menu-toggle').trigger('click');

      expect($('.mobile-menu-toggle').hasClass('open')).to.equal(true);
      expect($('#navigation').hasClass('open')).to.equal(true);
    });

    it('should remove the class `open` from the .mobile-menu-toggle and #navigation elements when clicked again', function() {
      $('.mobile-menu-toggle').trigger('click');

      expect($('.mobile-menu-toggle').hasClass('open')).to.equal(false);
      expect($('#navigation').hasClass('open')).to.equal(false);
    });

    it('should change the menu icon text to `Close` when clicked', function() {
      $('.mobile-menu-toggle').trigger('click');

      expect($('.mobile-menu-toggle').text()).to.equal('Close');
    });

    it('should change the menu icon text to `Menu` when clicked again', function() {
      $('.mobile-menu-toggle').trigger('click');

      expect($('.mobile-menu-toggle').text()).to.equal('Menu');
    });
  });

  describe('with different settings', function() {
    var options = {
      toggleSelector: '.other-toggle',
      navSelector: '.other-nav',
      menuTextSelector: '.other-menu-text',
      closeText: 'Other close text',
      openClass: 'someclass'
    };

    var $fixture =  $('<div class="fixture">' +
                        '<a href="#" class="other-toggle">' +
                          '<span class="icon icon-menu"></span><span class="other-menu-text">Menu</span>' +
                        '</a>' +
                        '<nav class="other-nav">Navigation</nav>' +
                      '</div>');

    before(function() {
      $fixture.appendTo('body');

      Coop.Modules.MenuToggle.init(options);
    });

    it('should cache the provided settings', function() {
      expect(Coop.Modules.MenuToggle.settings).to.deep.equal(options);
    });

    it('should use the provided options', function() {
      $('.other-toggle').trigger('click');

      expect($('.other-toggle').hasClass('someclass')).to.equal(true);
      expect($('.other-nav').hasClass('someclass')).to.equal(true);
      expect($('.other-menu-text').text()).to.equal('Other close text');
    });
  });
});
