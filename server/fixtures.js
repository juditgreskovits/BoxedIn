if (Post.find().count() === 0) {

	var loremIpsum = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ipsum et sapien eleifend viverra. Nullam vitae magna tellus. Mauris facilisis eros felis, nec convallis leo condimentum non. Nunc dolor leo, dictum sit amet ligula ac, faucibus gravida est. Phasellus nibh mi, pretium porttitor urna in, eleifend tempus arcu. Curabitur sit amet ex venenatis, tincidunt dolor rutrum, egestas orci. Phasellus a diam aliquet, iaculis nulla id, tempor odio.', 'Vestibulum interdum, massa vel consectetur consectetur, tellus diam blandit lorem, sit amet maximus lorem massa laoreet eros. Aenean quis aliquam diam. Cras luctus auctor quam, eget fringilla urna malesuada nec.', 'Sed quis venenatis velit, porta dignissim arcu. Pellentesque tempor purus et condimentum porttitor. Suspendisse in mauris dapibus, pretium justo sed, efficitur lectus. In auctor quis tortor sed dignissim. Sed iaculis ut nisi fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nec lectus sit amet pulvinar.']

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

if(Title.find().count() === 0) {

	var title2_0 = [{title: 'your'}, {title: 'his'}, {title: 'her'}, {title: 'my'}, {title: 'our'}];
	var title2_1 = [{title: 'taught your'}];
	var title2_2 = [{title: 'taught his'}];
	var title2_3 = [{title: 'taught her'}];
	var title2_4 = [{title: 'taught their'}];
	var title2_5 = [{title: 'taught our'}];

	var title1_0 = {title: 'influences', after: title2_0};
	var title1_1 = {title: 'influenced', after: title2_0};
	var title1_2 = {title: 'directs', after: title2_0};
	var title1_3 = {title: 'directed', after: title2_0};
	var title1_4 = {title: 'taught', after: title2_0};
	var title1_5 = {title: 'influences', after: title2_0};

	var title1_6 = {title: 'are you', after: title2_1};
	var title1_7 = {title: 'were you', after: title2_1};
	var title1_8 = {title: 'is he', after: title2_2};
	var title1_9 = {title: 'was he', after: title2_2};
	var title1_10 = {title: 'is she', after: title2_3};
	var title1_11 = {title: 'was she', after: title2_3};
	var title1_12 = {title: 'are they', after: title2_4};
	var title1_13 = {title: 'were they', after: title2_4};
	var title1_14 = {title: 'are we', after: title2_5};
	var title1_15 = {title: 'were we', after: title2_5};

	var title1_16 = {title: 'decides', after: title2_0};
	var title1_17 = {title: 'decided', after: title2_0};
	var title1_18 = {title: 'create', after: title2_0};
	var title1_19 = {title: 'creates', after: title2_0};
	var title1_20 = {title: 'created', after: title2_0};
	var title1_21 = {title: 'constructs', after: title2_0};
	var title1_22 = {title: 'constructed', after: title2_0};

	var title0_0 = {title: 'What', after: [title1_0, title1_1, title1_2, title1_3, title1_4, title1_16, title1_17, title1_19, title1_20, title1_22]};
	var title0_1 = {title: 'Who', after: [title1_0, title1_1, title1_2, title1_3, title1_4, title1_16, title1_17, title1_19, title1_20, title1_21, title1_22]};
	var title0_2 = {title: 'Where', after: [title1_6, title1_7, title1_8, title1_9, title1_10, title1_11, title1_12, title1_13, title1_14, title1_15]};
	var title0_3 = {title: 'When', after: [title1_6, title1_7, title1_8, title1_9, title1_10, title1_11, title1_12, title1_13, title1_14, title1_15]};

	Title.insert(title0_0);
	Title.insert(title0_1);
	Title.insert(title0_2);
	Title.insert(title0_3);
}