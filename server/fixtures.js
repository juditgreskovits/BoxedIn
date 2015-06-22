if (Post.find().count() === 0) {

	var loremIpsum = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ipsum et sapien eleifend viverra. Nullam vitae magna tellus. Mauris facilisis eros felis, nec convallis leo condimentum non. Nunc dolor leo, dictum sit amet ligula ac, faucibus gravida est. Phasellus nibh mi, pretium porttitor urna in, eleifend tempus arcu. Curabitur sit amet ex venenatis, tincidunt dolor rutrum, egestas orci. Phasellus a diam aliquet, iaculis nulla id, tempor odio.', 'Vestibulum interdum, massa vel consectetur consectetur, tellus diam blandit lorem, sit amet maximus lorem massa laoreet eros. Aenean quis aliquam diam. Cras luctus auctor quam, eget fringilla urna malesuada nec.', 'Sed quis venenatis velit, porta dignissim arcu. Pellentesque tempor purus et condimentum porttitor. Suspendisse in mauris dapibus, pretium justo sed, efficitur lectus. In auctor quis tortor sed dignissim. Sed iaculis ut nisi fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nec lectus sit amet pulvinar.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ipsum et sapien eleifend viverra. Nullam vitae magna tellus. Mauris facilisis eros felis, nec convallis leo condimentum non. Nunc dolor leo, dictum sit amet ligula ac, faucibus gravida est. Phasellus nibh mi, pretium porttitor urna in, eleifend tempus arcu. Curabitur sit amet ex venenatis, tincidunt dolor rutrum, egestas orci. Phasellus a diam aliquet, iaculis nulla id, tempor odio. Vestibulum interdum, massa vel consectetur consectetur, tellus diam blandit lorem, sit amet maximus lorem massa laoreet eros. Aenean quis aliquam diam. Cras luctus auctor quam, eget fringilla urna malesuada nec. Sed quis venenatis velit, porta dignissim arcu. Pellentesque tempor purus et condimentum porttitor. Suspendisse in mauris dapibus, pretium justo sed, efficitur lectus. In auctor quis tortor sed dignissim. Sed iaculis ut nisi fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nec lectus sit amet pulvinar.']

	var authors = ['Evelyn Jordan', 'Geraldine Hope', 'Lilian Charles', 'Ludmilla Immaculate'];

	for (var i = 0; i < 100; i++) {

		var title = 'What influences your gender';
		var experience = loremIpsum[getRandomIndex(loremIpsum.length)];
		var author = authors[getRandomIndex(authors.length)];
		var image = 'http://static1.squarespace.com/static/539f8621e4b033a62776b4e4/t/53d01a53e4b0768eeba485bb/1406147179601/gender.jpg_resized_460_.jpeg?format=1500w';
		var twitterHandle = '@evelynjordan';
		var promoted = getRandomBoolean();
		var moderated = true; //getRandomBoolean();


		Post.insert({
			title: title,
			experience: experience,
			author: author,
			image: image,
			twitterHandle: twitterHandle,
			promoted: promoted,
			moderated: moderated,
			slug: 'experience' + i
		});
	}
}