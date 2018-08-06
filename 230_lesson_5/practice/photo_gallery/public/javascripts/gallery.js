$(function() {
  var templates = {};
  var photoData;

  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    var tempName = $template.attr('id');

    if ($template.attr('data-type') === 'partial') {
      Handlebars.registerPartial(tempName, $template.html());
    }

    templates[tempName] = Handlebars.compile($template.html());
  });

  $.ajax({
    url: "/photos",
    dataType: "json",
    success: function(json) {
      console.log("SUCCESS: photo data");
      photoData = json;
      renderPhotos();
      slideshow.init();
      renderPhotoInfoFor(photoData[0].id);
      buttons.init();
      renderCommentsFor(photoData[0].id);
      form.init();
    },
    error: function(xhr, status, error) {
      console.log('ERROR: ' + error);
    }
  });







  var slideshow = {
    duration: 500,
    getNewPhoto: function($target, $currentPhoto) {
      var newPhoto;
  
      if ($target.attr('class') === 'next' && 
          Number($currentPhoto.attr('data-id')) === photoData.length) {
        $newPhoto = $('#slideshow figure').first();
      } else if ($target.attr('class') === 'next') {
        $newPhoto = $currentPhoto.next();
      } else if ($target.attr('class') === 'prev' &&
                Number($currentPhoto.attr('data-id')) === 1) {
        $newPhoto = $('#slideshow figure').last();
      } else if ($target.attr('class') === 'prev') {
        $newPhoto = $currentPhoto.prev();
      }
  
      return $newPhoto;
    },
    renderNewPhoto: function($currentPhoto, $newPhoto) {
      $currentPhoto.fadeOut(this.duration);
      $newPhoto.fadeIn(this.duration);
    },
    renderNewPhotoContent: function(photoId) {
      $('[name=photo_id]').val(photoId);
      renderPhotoInfoFor(photoId);
      renderCommentsFor(photoId);
    },
    bindEvents: function() {
      $('#slideshow ul').on('click', 'a', function(e) {
        e.preventDefault();

        var $target = $(e.target);
        var $currentPhoto = $('#slideshow figure').filter(function() {
          return $(this).css('display') === 'block';
        });
        var $newPhoto = this.getNewPhoto($target, $currentPhoto);
        var newPhotoId = Number($newPhoto.attr('data-id'));
    
        this.renderNewPhoto($currentPhoto, $newPhoto);
        this.renderNewPhotoContent(newPhotoId);
      }.bind(this));
    },
    init: function() {
      this.bindEvents();
    }
  };








  var buttons = {
    getAction: function($target) {
      return $target.hasClass('like') ? 'like' : 'favorite';
    },
    updateCount: function($target) {
      var $currentPhoto = $('#slideshow figure').filter(function() {
        return $(this).css('display') === 'block';
      });
      var action = this.getAction($target); 
      var photoId = Number($currentPhoto.attr('data-id'));

      $.ajax({
        url: '/photos/' + action,
        data: {
          photo_id: photoId,
        },
        type: 'POST',
        dataType: 'json',
        success: function(json) {
          var photo = photoData.filter(function(photo) {
              return photo.id === photoId;
            })[0];

          if (action === 'like') {
            console.log('SUCCESS: like button');
            photo['likes'] = json.total;
          } else if (action === 'favorite') {
            console.log('SUCCESS: favorite button');
            photo['favorites'] = json.total;
          }

          renderPhotoInfoFor(photoId);
        },
        error: function(xhr, status, error) {
          console.log('ERROR: ' + error);
        }
      });
    },
    bindEvents: function() {
      $('section > header').on('click', '.actions a', function(e) {
        e.preventDefault();
        var $target = $(e.target);
        this.updateCount($target);
      }.bind(this));
    },
    init: function() {
      this.bindEvents();
    }
  };








  var form = {
    getName: function(fieldName) {
      return fieldName === 'name';
    },
    getBody: function(fieldName) {
      return fieldName === 'body';
    },
    addComment: function(newComment) {
      var $currentPhoto = $('#slideshow figure').filter(function() {
        return $(this).css('display') === 'block';
      });

      $.ajax({
        url: '/comments/new',
        data: newComment,
        type: 'POST',
        dataType: 'json',
        success: function(json) {
          console.log('SUCCESS: form submit');
          renderCommentsFor(Number($currentPhoto.attr('data-id')));
        },
        error: function(xhr, status, error) {
          console.log('ERROR: ' + error);
        }
      });
    },
    bindEvents: function() {
      $('form').submit(function(e) {
        e.preventDefault();
        var newComment = $(e.currentTarget).serialize();
        this.addComment(newComment);
        $(e.currentTarget).get(0).reset();
      }.bind(this));
    },
    init: function() {
      this.bindEvents();
    }
  };








  function renderPhotos() {
    $('#slides').append(templates['photos']({photos: photoData}));
  }

  function renderPhotoInfoFor(photoId) {
    var photo = photoData.filter(function(currentPhoto) {
      return currentPhoto.id === photoId;
    })[0];
    $('section > header').empty().append(templates['photo_information'](photo));
  }

  function renderCommentsFor(photoId) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + photoId,
      dataType: "json",
      success: function(json) {
        console.log("SUCCESS: comment data");
        $('#comments ul').empty().append(templates['comments']({comments: json}))
      },
      error: function(xhr, status, error) {
        console.log('ERROR: ' + error);
      }
    });
  }
});
