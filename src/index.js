const posts = [
  {
    title: "Post 1",
    body: "My 1st post"
  },
  {
    title: "Post 2",
    body: "My 2nd post"
  }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => (output += `<li>${post.title}</li>`));
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post 3", body: "My 3rd post" }, getPost);
