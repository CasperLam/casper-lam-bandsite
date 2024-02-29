const postList = document.querySelector(`.post`);

const displayPost = (post) => {
  const card = document.createElement(`article`);
  card.classList.add(`post__card`);
  postList.appendChild(card);

  const image = document.createElement(`div`);
  image.classList.add(`post__image`);
  card.appendChild(image);

  const body = document.createElement(`div`);
  body.classList.add(`post__body`);
  card.appendChild(body);

  const header = document.createElement(`div`);
  header.classList.add(`post__header`);
  body.appendChild(header);

  const name = document.createElement(`p`);
  name.classList.add(`post__name`);
  name.innerText = post.name;
  header.appendChild(name);

  const date = document.createElement(`p`);
  date.classList.add(`post__date`);
  date.innerText = new Date(post.timestamp).toLocaleDateString();
  header.appendChild(date);

  const content = document.createElement(`p`);
  content.classList.add(`post__content`);
  content.innerText = post.comment;
  body.appendChild(content);
};

siteApi.getComments();
//Render each comment post
// const renderPosts = () => {
//   postList.innerHTML = "";

//   posts.forEach((post) => displayPost(post));
// };

// renderPosts();

// When submit button is clicked add a new comment based on the information in the form fields
const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const today = new Date(Date.now()).toLocaleDateString();
  const post = {
    name: form.name.value,
    timestamp: today,
    comment: form.comment.value,
  };

  // posts.unshift(post);

  renderPosts();

  form.reset();
};

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, handleSubmit);
