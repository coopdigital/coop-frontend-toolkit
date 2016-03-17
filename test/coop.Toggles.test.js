describe('Coop Toggles module', function() {
  var $fixture =  $('<div class="fixture">' +
                      '<a href="#toggle-1" class="toggle-trigger">Toggle 1</a>' +
                      '<div id="toggle-1" class="toggle-content">Toggle content</div>' +
                    '</div>');

  before(function() {
    $fixture.appendTo('body');

    Coop.init();
  });

  it('should be an object added to the Coop Modules', function() {
    expect(Coop.Modules.Toggles).to.be.an('object');
  });

  it('should add an `init` class to the `.toggle-trigger` element', function() {
    expect($('.toggle-trigger', $fixture).hasClass('init')).to.equal(true);
  });

  describe('when interacting', function() {
    it('should add a class `open` to the toggle trigger when clicked', function() {
      $('.toggle-trigger', $fixture).trigger('click');

      expect($('.toggle-trigger', $fixture).hasClass('open')).to.equal(true);
    });

    it('should remove the class `open` from the toggle trigger when clicked again', function() {
      $('.toggle-trigger', $fixture).trigger('click');

      expect($('.toggle-trigger', $fixture).hasClass('open')).to.equal(false);
    });
  });

  describe('when used as an accordion', function() {
    before(function() {
      $('.fixture').remove();

      $fixture =  $('<div class="fixture accordion">' +
                      '<a href="#toggle-1" class="toggle-trigger">Toggle 1</a>' +
                      '<div id="toggle-1" class="toggle-content">Toggle content</div>' +
                      '<a href="#toggle-2" class="toggle-trigger">Toggle 2</a>' +
                      '<div id="toggle-2" class="toggle-content">Toggle content</div>' +
                      '<a href="#toggle-3" class="toggle-trigger">Toggle 3</a>' +
                      '<div id="toggle-3" class="toggle-content">Toggle content</div>' +
                    '</div>');

      $fixture.appendTo('body');

      Coop.init();
    });

    it('should remove the class `open` from other triggers than the one clicked', function() {
      $('[href="#toggle-2"]').trigger('click');

      expect($('[href="#toggle-1"]').hasClass('open')).to.equal(false);
      expect($('[href="#toggle-2"]').hasClass('open')).to.equal(true);
      expect($('[href="#toggle-3"]').hasClass('open')).to.equal(false);
    });
  });
});
