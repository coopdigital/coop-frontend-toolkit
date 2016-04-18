/**
 * Video Wrapper
 *
 * This module loads an embedded video when the link to the video is clicked.
 *
 * Usage:
  <div data-video>
    <a href="https://www.youtube.com/watch?v=LiLpISO4CgM" data-video-play>Play</a>
  </div>
 */

(function() {
  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var VideoWrapper = function($el) {
    this.init($el);
    return this;
  };

  VideoWrapper.prototype = {
    init: function($el) {
      this.$wrapper = $el;

      this.bindEvents();
      $el.addClass('init');
    },
    bindEvents: function() {
      var self = this;

      $('[data-video-play]', this.$wrapper)
        .off('click.videoWrapper')
        .on('click.videoWrapper', function(e) {
          e.preventDefault();

          self.loadVideo($(this).attr('href'));
        });
    },
    getVideoDetails: function(url) {
      var idMatch;
      if (/(youtube\.com|youtu\.be)/.test(url)) {
        idMatch = url.match(/(?:\?|\&)v=([a-zA-Z0-9-_]{11})/);

        return {
          provider: 'youtube',
          videoId: idMatch[1]
        };
      }
      else if (url.indexOf('vimeo.com') !== -1) {
        idMatch = url.match(/vimeo\.com\/([0-9]*)/);

        return {
          provider: 'vimeo',
          videoId: idMatch[1]
        };
      }
      else {
        return false;
      }
    },
    getVideoEmbedCode: function(video) {
      if (video.provider == 'youtube') {
        return '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="100%" src="https://www.youtube.com/embed/' + video.videoId + '?autoplay=1"></iframe>';
      }
      else if (video.provider == 'vimeo') {
        return '<iframe src="https://player.vimeo.com/video/' + video.videoId + '?autoplay=1&color=99cc01&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }
      else {
        return false;
      }
    },
    loadVideo: function(url) {
      var videoDetails, embedCode;

      videoDetails = this.getVideoDetails(url);

      if (videoDetails === false) {
        return;
      }

      embedCode = this.getVideoEmbedCode(videoDetails);

      if (embedCode === false) {
        return;
      }

      this.$wrapper.html('<div class="video-wrap">' + embedCode + '</div>');
    }
  };

  Coop.Modules._VideoWrapper = VideoWrapper;

  Coop.Modules.VideoWrapper = {
    init: function() {
      return $('[data-video]').each(function() {
        new VideoWrapper($(this));
      });
    }
  };

}());
