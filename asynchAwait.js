const posts = [
  { title: 'Post one', body: 'this is post one' },
  { title: 'Post two', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    let outPut = '';
    posts.forEach((post, index) => {
      outPut += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = outPut;
  }, 1000);
}
getPosts();

// Async / await

function init() {
  await createPost({ title: 'Post three', body: 'this is post three' });
  getPosts()
}

init();
