// this is an example of callback function
// we want to post some post on our html page but, if first timeOut ends earlier than 2nd ,
// then 2nd won't print to dom, to avoid this we have used here callback function.

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
  }, 3000);
}
getPosts();

// here we are using timer to mimic the backend server as it takes some time to complete

// function creator with arrow

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
}

createPost({ title: 'Post three', body: 'this is post three' }, getPosts);

// Practice
// So there are some posts which we want to post:
const posts = [
  { title: 'Post One', description: 'This is post one' },
  { title: 'Post Two', description: 'This is post Two' },
];

// Lets create a function which will post this posts on html page

function getPosts() {
  setTimeout(() => {
    let posts = '';
    posts.forEach((post) => {
      output += <li>${post.title}</li>;
    });
    document.body.innerHTML = output;
  },3000);

}
getPosts()

// this function will take an array of post and print in browser

// now let's create another function which will use getPosts() to createPosts

const createPost = (post,callback)=>{
  setTimeout(()=>{
    posts.push(post);
    callback();
  },5000)
}
