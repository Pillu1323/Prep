// Promises Vs async_await
// by traversery media https://www.youtube.com/watch?v=PoRJizFvM7s

// Lets load some posts to the html page
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

// here we are using timer to mimic the backend server as it takes some time to complete

// function creator with arrow

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      }
      reject('Error: something went wrong');
    }, 2000);
  });
}

createPost({ title: 'Post three', body: 'this is post three' })
  .then(getPosts)
  .catch((err) => console.log(err));

// when we deal with fetch API or Axios or anything that uses promises, the mongoose library
// for mongoDB , for node.js uses promises. More and more libraries are using promises so we're
// mostly going to deal with the response rather than creating them yourselves
