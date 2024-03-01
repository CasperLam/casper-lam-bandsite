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

async function renderPosts() {
  postList.innerHTML = "";

  const posts = await siteApi.getComments();

  // new comments on top
  posts.data.forEach((post) => displayPost(post));
}

renderPosts();

async function handleSubmit(event) {
  event.preventDefault();

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  await siteApi.postComment(newComment);

  renderPosts();

  form.reset();
}

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, handleSubmit);
