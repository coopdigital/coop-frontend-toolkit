describe('Coop Video Wrapper Module', function() {
  var $fixture;

  before(function() {
    $fixture =  $('<div class="fixture">' +
                    '<div data-video>' +
                      '<a href="https://www.youtube.com/watch?v=LiLpISO4CgM" data-video-play>Play</a>' +
                    '</div>' +
                  '</div>');

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

  describe('when using other video providers', function() {
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

  describe('when using multiple instances', function() {
    before(function() {
      $('.fixture').remove();
      $fixture =  $('<div class="fixture">' +
                      '<div id="video-1" data-video>' +
                        '<a href="https://www.youtube.com/watch?v=LiLpISO4CgM" data-video-play>Play</a>' +
                      '</div>' +
                      '<div id="video-2" data-video>' +
                        '<a href="https://vimeo.com/52385456" data-video-play>Play</a>' +
                      '</div>' +
                    '</div>');

      $fixture.appendTo('body');

      Coop.init();
    });

    it('should only load the video for its own container', function() {
      $('#video-1 [data-video-play]').trigger('click');

      expect($('#video-1 iframe').length).to.equal(1);
      expect($('#video-1 iframe').attr('src')).to.have.string('youtube.com');
      expect($('#video-2 iframe').length).to.equal(0);

      $('#video-2 [data-video-play]').trigger('click');

      expect($('#video-1 iframe').attr('src')).to.have.string('youtube.com');
      expect($('#video-2 iframe').length).to.equal(1);
      expect($('#video-2 iframe').attr('src')).to.have.string('vimeo.com');
    });
  });
});
