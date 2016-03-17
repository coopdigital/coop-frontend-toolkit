describe('Coop Tabs module', function() {
  var $fixture =  $('<div class="fixture">' +
                      '<div class="tabs">' +
                        '<ul class="tabs-nav" role="tablist">' +
                            '<li><a href="#tab1">Tab 1</a></li>' +
                            '<li><a href="#tab2">Tab 2</a></li>' +
                            '<li><a href="#tab3" aria-controls="some-other-id">Tab 3</a></li>' +
                        '</ul>' +
                        '<div class="tabs-content">' +
                            '<div class="tab-panel" id="tab1" role="tabpanel">First tab</div>' +
                            '<div class="tab-panel" id="tab2" role="tabpanel">Second tab</div>' +
                            '<div class="tab-panel" id="tab3" role="tabpanel">Third tab</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>');

  before(function() {
    $fixture.appendTo('body');

    Coop.init();
  });

  it('should be an object added to the Coop Modules', function() {
    expect(Coop.Modules.Tabs).to.be.an('object');
  });

  it('should add an `init` class to the `.tabs` element', function() {
    expect($('.tabs').hasClass('init')).to.equal(true);
  });

  it('should add an aria-controls attribute to the nav items', function() {
    expect($('[href="#tab1"]').attr('aria-controls')).to.equal('tab1');
    expect($('[href="#tab2"]').attr('aria-controls')).to.equal('tab2');
    expect($('[href="#tab3"]').attr('aria-controls')).to.equal('some-other-id tab3');
  });

  it('should add an aria-polite attribute to the tab panels', function() {
    expect($('#tab1', $fixture).attr('aria-live')).to.equal('polite');
    expect($('#tab2', $fixture).attr('aria-live')).to.equal('polite');
    expect($('#tab3', $fixture).attr('aria-live')).to.equal('polite');
  });

  it('should set the first nav item as active', function() {
    expect($('.tabs-nav li:first a', $fixture).hasClass('active')).to.equal(true);
  });

  it('should set the first tab as active', function() {
    expect($('.tabs-content .tab-panel:first', $fixture).hasClass('active')).to.equal(true);
  });

  describe('when interacting', function() {
    before(function() {
      $('[href="#tab3"]', $fixture).trigger('click');
    });

    it('should set only the correct nav item as active', function() {
      expect($('[href="#tab1"]', $fixture).hasClass('active')).to.equal(false);
      expect($('[href="#tab2"]', $fixture).hasClass('active')).to.equal(false);
      expect($('[href="#tab3"]', $fixture).hasClass('active')).to.equal(true);
    });

    it('should set only the correct tab as active', function() {
      expect($('#tab1', $fixture).hasClass('active')).to.equal(false);
      expect($('#tab2', $fixture).hasClass('active')).to.equal(false);
      expect($('#tab3', $fixture).hasClass('active')).to.equal(true);
    });

    it('should update the aria attributes of all the tabs', function() {
      expect($('#tab1', $fixture).attr('aria-hidden')).to.equal('true');
      expect($('#tab1', $fixture).attr('hidden')).to.equal('hidden');

      expect($('#tab2', $fixture).attr('aria-hidden')).to.equal('true');
      expect($('#tab2', $fixture).attr('hidden')).to.equal('hidden');

      expect($('#tab3', $fixture).attr('aria-hidden')).to.equal(undefined);
      expect($('#tab3', $fixture).attr('hidden')).to.equal(undefined);

    });
  });
});
