const posts = [
  {
    name: `Victor Pinto`,
    date: `11/02/2023`,
    text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`,
  },
  {
    name: `Christina Cabrera`,
    date: `10/28/2023`,
    text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`,
  },
  {
    name: `Isaac Tadesse`,
    date: `10/20/2023`,
    text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`,
  },
];

const postList = document.querySelector(`.post`);

//Create each comment post
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
  date.innerText = post.date;
  header.appendChild(date);

  const content = document.createElement(`p`);
  content.classList.add(`post__content`);
  content.innerText = post.text;
  body.appendChild(content);
};

//Render each comment post
const renderPosts = () => {
  postList.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    displayPost(post);
  }
};

renderPosts();

// When submit button is clicked add a new comment based on the information in the form fields
const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  // Validation

  // Create object from form fields and include date
  const today = new Date(Date.now()).toLocaleString().split(",")[0];
  const post = {
    name: form.name.value,
    date: today,
    text: form.comment.value,
  };

  // Add new post to webpage
  posts.unshift(post);

  renderPosts();

  form.reset();
};

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, handleSubmit);
