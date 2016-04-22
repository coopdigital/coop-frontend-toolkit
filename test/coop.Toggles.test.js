describe('Coop Toggles module', function() {
  var $fixture =  $('<div class="fixture">' +
                      '<a href="#toggle" data-toggle>Trigger</a>' +
                      '<div id="toggle">Toggled content</div>' +
                    '</div>');

  before(function() {
    $('.fixture').remove();
    $fixture.appendTo('body');

    Coop.init();
  });

  after(function() {
    $('.fixture').remove();
  });

  it('should be an object added to the Coop Modules', function() {
    expect(Coop.Modules.Toggles).to.be.an('object');
  });

  it('should add an `init` class to the trigger and target elements', function() {
    expect($('[data-toggle]').hasClass('init')).to.equal(true);
    expect($('#toggle').hasClass('init')).to.equal(true);
  });

  it('should add the correct ARIA attributes to the trigger and target', function() {
    expect($('[data-toggle]').attr('role')).to.equal('button');
    expect($('[data-toggle]').attr('aria-controls')).to.equal('toggle');
    expect($('[data-toggle]').attr('aria-expanded')).to.equal('false');
    expect($('#toggle').attr('aria-hidden')).to.equal('true');
  });

  describe('with default options', function() {
    it('should add a class `open` to the trigger and target elements when clicked', function() {
      $('[data-toggle]').trigger('click');

      expect($('[data-toggle]').hasClass('open')).to.equal(true);
      expect($('#toggle').hasClass('open')).to.equal(true);
    });

    it('should update the ARIA attributes to the trigger and target', function() {
      expect($('[data-toggle]').attr('aria-expanded')).to.equal('true');
      expect($('#toggle').attr('aria-hidden')).to.equal('false');
    });

    it('should add focus to the target element', function() {
      expect($('#toggle').get(0) === document.activeElement).to.equal(true);
    });

    it('should remove the class `open` from the toggle trigger when clicked again', function() {
      $('[data-toggle]').trigger('click');

      expect($('[data-toggle]').hasClass('open')).to.equal(false);
      expect($('#toggle').hasClass('open')).to.equal(false);
    });
  });

  describe('when toggle is already open', function() {
    var $fixture =  $('<div class="fixture">' +
                        '<a href="#toggle" class="open" data-toggle>Trigger</a>' +
                        '<div id="toggle" class="open">Toggled content</div>' +
                      '</div>');

    before(function() {
      $('.fixture').remove();
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should remove the class `open` from the trigger and target when first clicked', function() {
      $('[data-toggle]').trigger('click');

      expect($('[data-toggle]').hasClass('open')).to.equal(false);
      expect($('#toggle').hasClass('open')).to.equal(false);
    });
  });

  describe('when providing alternative text', function() {
    var $fixture =  $('<div class="fixture">' +
                        '<a href="#toggle" data-toggle data-toggle-text-open="Close toggle">Open toggle</a>' +
                        '<div id="toggle">Toggled content</div>' +
                      '</div>');

    before(function() {
      $('.fixture').remove();
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should cache the original text for reuse', function() {
      expect($('[data-toggle]').data('toggle-text-closed')).to.equal('Open toggle');
    });

    it('should replace the original text with the provided when opening', function() {
      $('[data-toggle]').trigger('click');

      expect($('[data-toggle]').text()).to.equal('Close toggle');
    });

    it('should reinstate the original text when closing', function() {
      $('[data-toggle]').trigger('click');

      expect($('[data-toggle]').text()).to.equal('Open toggle');
    });
  });

  describe('when providing an alternative text selector', function() {
    var $fixture =  $('<div class="fixture">' +
                        '<a href="#toggle" data-toggle data-toggle-text-open="Close toggle" data-toggle-text-selector=".text">Trigger</a>' +
                        '<div id="toggle">Toggled content</div>' +
                        '<span class="text">Original text</span>' +
                      '</div>');

    before(function() {
      $('.fixture').remove();
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should cache the original text of the provided selector for reuse', function() {
      expect($('[data-toggle]').data('toggle-text-closed')).to.equal('Original text');
    });

    it('should change the text of the selector element when opening', function() {
      $('[data-toggle]').trigger('click');

      expect($('.text').text()).to.equal('Close toggle');
    });

    it('should reinstate the original text of the selector element when closing', function() {
      $('[data-toggle]').trigger('click');

      expect($('.text').text()).to.equal('Original text');
    });
  });

  describe('when used as an accordion', function() {
    var $fixture =  $('<div class="fixture accordion">' +
                      '<a href="#toggle-1" class="open" data-toggle>Trigger 1</a>' +
                      '<div id="toggle-1" class="open">Toggled content 1</div>' +
                      '<a href="#toggle-2" data-toggle>Trigger 2</a>' +
                      '<div id="toggle-2">Toggled content 2</div>' +
                      '<a href="#toggle-3" data-toggle>Trigger 3</a>' +
                      '<div id="toggle-3">Toggled content 3</div>' +
                    '</div>');

    before(function() {
      $('.fixture').remove();
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should remove the class `open` from other triggers and targets than the one clicked', function() {
      $('[href="#toggle-2"]').trigger('click');

      expect($('[href="#toggle-1"]').hasClass('open')).to.equal(false);
      expect($('#toggle-1').hasClass('open')).to.equal(false);
      expect($('[href="#toggle-2"]').hasClass('open')).to.equal(true);
      expect($('#toggle-2').hasClass('open')).to.equal(true);
      expect($('[href="#toggle-3"]').hasClass('open')).to.equal(false);
      expect($('#toggle-3').hasClass('open')).to.equal(false);
    });
  });
});
