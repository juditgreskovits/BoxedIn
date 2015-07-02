Template.adminPosts.rendered = function() {
  $grid = $('#posts-grid');

  $grid.imagesLoaded( function() {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: '.post',
      masonry: {
        columnWidth: 320,
        gutter: 20,
        isFitWidth: true
      }
    });
  });
};

function refreshGrid(config) {
  $('#posts-grid').isotope(config);
}

Template.adminPosts.events({
  'change, #state-filter': function(event) {
    console.debug('state', event.target.selectedIndex);
    var moderatedState = event.target.selectedIndex;
    if(moderatedState === undefined) return;
    var config = {};

    if(moderatedState === 3) {
      config.filter = '*';
    } else {
      config.filter = function() {
        return $(this).data('moderatedState') === moderatedState;
      };
    }

    refreshGrid(config);

  },
  'change, #promoted-filter': function(event) {
    console.debug('promoted', event.target.selectedIndex);
    var promotedState = event.target.selectedIndex;
    if(promotedState === undefined) return;
    var config = {};

    if(promotedState === 2) {
      config.filter = '*';
    } else {
      config.filter = function() {
        var passesPromtedFilter = promotedState ?
          !$(this).data('promotedState') :
          $(this).data('promotedState') ;
        var approved = $(this).data('moderatedState') === 1;
        return approved && passesPromtedFilter 
      };
    }

    refreshGrid(config);
  }
})

Template.adminPostsPost.helpers({

	isApproved: function(moderated) {
		return moderated === 1 ? 'checked' : '';
	},

	isRejected: function(moderated) {
		return moderated === 2 ? 'checked' : '';
	},

	isPromotionDisabled: function(moderated) {
		return moderated === 1 ? '' : 'disabled';
	},

	isPromoted: function(promoted) {
		return promoted === 1 ? 'checked' : '';
	}

});

Template.adminPostsPost.events({

	'change input[name=moderation]': function(e){
		var postId = this._id;
		var moderated = Number(e.currentTarget.value);
		Meteor.call('moderatePost', postId, moderated, function(error, result){
			if(error) {
				console.log('moderatePost error = ' + error);
			}
			console.log('moderatePost success');
		});
	},

	'change input[name=promotion]': function(e){
		var postId = this._id;
		var promoted = e.currentTarget.checked === true ? 1 : 0;
		Meteor.call('promotePost', postId, promoted, function(error, result){
			if(error) {
				console.log('promotePost error = ' + error);
			}
			console.log('promotePost success');
		});
	}

});