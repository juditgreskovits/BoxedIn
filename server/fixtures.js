if(About.find().count() === 0) {
  About.insert({
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ullamcorper ipsum. Ut placerat, enim et semper lacinia, nisl tortor convallis quam, eu gravida velit justo in arcu. Integer mattis, nisi aliquet facilisis tempor, nunc dui pellentesque justo, sed ullamcorper urna arcu quis leo. Pellentesque scelerisque ut magna in iaculis. Vestibulum fringilla porttitor nisi ut placerat. Sed fermentum nisi a ipsum varius, id viverra dui aliquam. Mauris molestie eros eu nisi pellentesque, ut finibus nisi fermentum. Curabitur eros mauris, bibendum ac varius sed, gravida fermentum ipsum. Pellentesque sit amet leo sit amet ligula imperdiet luctus. Nunc nec scelerisque est, quis imperdiet diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus tempor suscipit nibh, eu blandit quam pulvinar a. Fusce mattis justo a metus imperdiet scelerisque. \n \n Nullam nec lacus id tortor pellentesque varius. Duis volutpat, felis sed rhoncus ultrices, nulla mi ultricies nunc, ac aliquam nunc turpis sit amet nisl. Proin condimentum purus ac turpis ullamcorper, sit amet dapibus magna euismod. Vivamus imperdiet ipsum mattis risus accumsan dapibus. Ut gravida eget tortor quis gravida. Pellentesque mauris libero, pharetra at tortor ac, ultricies rutrum libero. Ut eu facilisis nibh, in condimentum velit. Morbi mollis risus non mattis congue. Quisque sit amet molestie erat.'
  });
}

if(Post.find().count() === 0) {

	var loremIpsum = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ipsum et sapien eleifend viverra. Nullam vitae magna tellus. Mauris facilisis eros felis, nec convallis leo condimentum non. Nunc dolor leo, dictum sit amet ligula ac, faucibus gravida est. Phasellus nibh mi, pretium porttitor urna in, eleifend tempus arcu. Curabitur sit amet ex venenatis, tincidunt dolor rutrum, egestas orci. Phasellus a diam aliquet, iaculis nulla id, tempor odio.', 'Vestibulum interdum, massa vel consectetur consectetur, tellus diam blandit lorem, sit amet maximus lorem massa laoreet eros. Aenean quis aliquam diam. Cras luctus auctor quam, eget fringilla urna malesuada nec.', 'Sed quis venenatis velit, porta dignissim arcu. Pellentesque tempor purus et condimentum porttitor. Suspendisse in mauris dapibus, pretium justo sed, efficitur lectus. In auctor quis tortor sed dignissim. Sed iaculis ut nisi fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nec lectus sit amet pulvinar.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ipsum et sapien eleifend viverra. Nullam vitae magna tellus. Mauris facilisis eros felis, nec convallis leo condimentum non. Nunc dolor leo, dictum sit amet ligula ac, faucibus gravida est. Phasellus nibh mi, pretium porttitor urna in, eleifend tempus arcu. Curabitur sit amet ex venenatis, tincidunt dolor rutrum, egestas orci. Phasellus a diam aliquet, iaculis nulla id, tempor odio. Vestibulum interdum, massa vel consectetur consectetur, tellus diam blandit lorem, sit amet maximus lorem massa laoreet eros. Aenean quis aliquam diam. Cras luctus auctor quam, eget fringilla urna malesuada nec. Sed quis venenatis velit, porta dignissim arcu. Pellentesque tempor purus et condimentum porttitor. Suspendisse in mauris dapibus, pretium justo sed, efficitur lectus. In auctor quis tortor sed dignissim. Sed iaculis ut nisi fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate nec lectus sit amet pulvinar.']

	var authors = ['Evelyn Jordan', 'Geraldine Hope', 'Lilian Charles', 'Ludmilla Immaculate'];

	for (var i = 0; i < 5; i++) {

		var title = 'What influences your gender';
		var experience = loremIpsum[getRandomIndex(loremIpsum.length)];
		var author = authors[getRandomIndex(authors.length)];
		var image = 'http://static1.squarespace.com/static/539f8621e4b033a62776b4e4/t/53d01a53e4b0768eeba485bb/1406147179601/gender.jpg_resized_460_.jpeg?format=1500w';
		var twitterHandle = '@evelynjordan';
		var link = 'http://thump.vice.com/en_uk/article/the-15-weirdest-things-we-overheard-in-glastonburys-dance-tents?utm_source=thumptwitteruk';
    var promoted = getRandomBoolean();
		var moderated = 0;


		Post.insert({
			title: title,
			experience: experience,
			author: author,
			image: image,
      link: link,
			twitterHandle: twitterHandle,
			promoted: promoted,
			moderated: moderated,
			slug: 'experience' + i
		});
	}
}

if(Title.find().count() === 0) {

	var title2_0 = {
    id: 'her',
    title: 'her'
  };
  var title2_1 = {
    id: 'his',
    title: 'his'
  };
  var title2_2 = {
    id: 'my',
    title: 'my'
  };
  var title2_3 = {
    id: 'our',
    title: 'our'
  };
  var title2_4 = {
    id: 'their',
    title: 'their'
  };
  var title2_5 = {
    id: 'your',
    title: 'your'
  };


	// second box
  var title1_0 = {
    id: 'constructed',
    title: 'constructed',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_1 = {
    id: 'constructs',
    title: 'constructs',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
	
  var title1_2 = {
    id: 'create',
    title: 'create',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_3 = {
    id: 'created',
    title: 'created',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_4 = {
    id: 'creates',
    title: 'creates',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };

  var title1_5 = {
    id: 'decide',
    title: 'decide',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_6 = {
    id: 'decided',
    title: 'decided',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_7 = {
    id: 'decides',
    title: 'decides',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };

  var title1_8 = {
    id: 'directed',
    title: 'directed',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_9 = {
    id: 'directs',
    title: 'directs',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };

  var title1_10 = {
    id: 'influenced',
    title: 'influenced',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };
  var title1_11 = {
    id: 'influences',
    title: 'influences',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };

  var title1_12 = {
    id: 'he-taught',
    title: 'he taught',
    after: [title2_1]
  };
  var title1_13 = {
    id: 'she-taught',
    title: 'she taught',
    after: [title2_0]
  };
  var title1_14 = {
    id: 'they-taught',
    title: 'they taught',
    after: [title2_4]
  };
  var title1_15 = {
    id: 'we-taught',
    title: 'we taught',
    after: [title2_3]
  };
  var title1_16 = {
    id: 'you-taught',
    title: 'you taught',
    after: [title2_5]
  };
  var title1_17 = {
    id: 'taught',
    title: 'taught',
    after: [title2_0, title2_1, title2_2, title2_3, title2_5]
  };


  // first box
	var title0_0 = {
    id: 'what',
    title: 'What',
    after: [title1_8, title1_9, title1_10, title1_11, title1_17, title1_6, title1_7, title1_3, title1_0]
  };
  var title0_1 = {
    id: 'when-are',
    title: 'When are',
    after: [title1_14, title1_15, title1_16]
  };
  var title0_2 = {
    id: 'when-is',
    title: 'When is',
    after: [title1_12, title1_13]
  };
  var title0_3 = {
    id: 'when-was',
    title: 'When was',
    after: [title1_12, title1_13]
  };
  var title0_4 = {
    id: 'when-were',
    title: 'When were',
    after: [title1_14, title1_15, title1_16]
  };
	var title0_5 = {
    id: 'when',
    title: 'When',
    after: [title1_7]
  };
  var title0_6 = {
    id: 'where-are',
    title: 'Where are',
    after: [title1_14, title1_15, title1_16]
  };
  var title0_7 = {
    id: 'where-is',
    title: 'Where is',
    after: [title1_12, title1_13]
  };
  var title0_8 = {
    id: 'where-was',
    title: 'Where was',
    after: [title1_12, title1_13]
  };
  var title0_9 = {
    id: 'where-were',
    title: 'Where were',
    after: [title1_14, title1_15, title1_16]
  };
  var title0_10 = {
    id: 'who',
    title: 'Who',
    after: [title1_0, title1_1, title1_3, title1_4, title1_6, title1_7, title1_8, title1_9, title1_10, title1_11, title1_17]
  };
  var title0_11 = {
    id: 'why',
    title: 'Why',
    after: [title1_2, title1_5]
  };

  // insert
	Title.insert(title0_0);
	Title.insert(title0_1);
	Title.insert(title0_2);
	Title.insert(title0_3);
  Title.insert(title0_4);
  Title.insert(title0_5);
  Title.insert(title0_6);
  Title.insert(title0_7);
  Title.insert(title0_8);
  Title.insert(title0_9);
  Title.insert(title0_10);
  Title.insert(title0_11);
}