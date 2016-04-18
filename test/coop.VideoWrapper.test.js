describe('Coop Video Wrapper Module', function() {
  var $fixture =  $('<div class="fixture">' +
                      '<div data-video>' +
                        '<a href="https://www.youtube.com/watch?v=LiLpISO4CgM" data-video-play>Play</a>' +
                      '</div>' +
                    '</div>');

  before(function() {
    $fixture.appendTo('body');

    Coop.init();
  });

  it('should be an object added to the Coop Modules', function() {
    expect(Coop.Modules.VideoWrapper).to.be.an('object');
  });

  it('should add an `init` class to the `[data-video]` element', function() {
    expect($('[data-video]').hasClass('init')).to.equal(true);
  });

  it('should replace the contents of the `[data-video]` element with the embedded video when clicked', function() {
    $('[data-video-play]').trigger('click');

    expect($('[data-video] > div.video-wrap > iframe').length).to.equal(1);
  });

  describe('other video providers', function() {
    before(function() {
      $('.fixture').remove();
      $fixture =  $('<div class="fixture">' +
                      '<div id="video" data-video>' +
                        '<a href="https://vimeo.com/52385456" data-video-play>Play</a>' +
                      '</div>' +
                    '</div>');
      $fixture.appendTo('body');

      Coop.init();
    });

    it('should load Vimeo videos', function() {
      $('[data-video-play]').trigger('click');

      expect($('[data-video] > div.video-wrap > iframe').attr('src')).to.have.string('https://player.vimeo.com/video/52385456');
    });
  });
});
