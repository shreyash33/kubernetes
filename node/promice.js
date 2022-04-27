const posts = [
	{ title: "Post one", body: "Body of post one" },
	{ title: "Post two", body: "body of post two" },
];

function getPost() {
	setTimeout(() => {
		let output = "";
		for (let i = 0; i < posts.length; i++) {
			output += `<li>${posts[i].title}</li>`;
		}
		output += `<br>`;

		posts.forEach((post, index) => {
			output += `<li>${index} - ${post.body}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let l = posts.length;
			posts.push(post);
			if (posts.length > l) {
				resolve();
			} else {
				reject("Could not add new post");
			}
		}, 2000);
	});
}

createPost({ title: "Post Three", body: "Body of post three" })
	.then(getPost)
	.catch((err) => {
		console.log(err);
	});
