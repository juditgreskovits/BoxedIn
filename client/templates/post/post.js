Template.post.helpers({

 	imageThumb: function() {
 		var image = this.image;
    	if(image.indexOf('imgur') != -1) {
      		return Imgur.toThumbnail(image, Imgur.LARGE_THUMBNAIL);
    	}
    	return image;
  	}

});