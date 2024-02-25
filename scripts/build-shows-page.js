const allShows = [
  {
    date: `Mon Sept 09 2024`,
    venue: `Ronald Lane`,
    location: `San Francisco, CA`,
  },
  {
    date: `Tue Sept 17 2024`,
    venue: `Pier 3 East`,
    location: `San Francisco, CA`,
  },
  {
    date: `Sat Oct 12 2024`,
    venue: `View Lounge`,
    location: `San Francisco, CA`,
  },
  {
    date: `Sat Nov 16 2024`,
    venue: `Hyatt Agency`,
    location: `San Francisco, CA`,
  },
  {
    date: `Fri Nov 29 2024`,
    venue: `Moscow Center`,
    location: `San Francisco, CA`,
  },
  {
    date: `Wed Dec 18 2024`,
    venue: `Press Club`,
    location: `San Francisco, CA`,
  },
];

const showList = document.querySelector(`.shows__container`);

//create show contents
const displayShow = (show) => {
  const card = document.createElement(`article`);
  card.classList.add(`card`);
  showList.appendChild(card);

  const dateTitle = document.createElement(`p`);
  dateTitle.classList.add(`card__title`);
  dateTitle.innerText = `DATE`;
  card.appendChild(dateTitle);

  const dateText = document.createElement(`p`);
  dateText.classList.add(`card__text`);
  dateText.classList.add(`card__text--date`);
  dateText.innerText = show.date;
  card.appendChild(dateText);

  const venueTitle = document.createElement(`p`);
  venueTitle.classList.add(`card__title`);
  venueTitle.innerText = `VENUE`;
  card.appendChild(venueTitle);

  const venueText = document.createElement(`p`);
  venueText.classList.add(`card__text`);
  venueText.innerText = show.venue;
  card.appendChild(venueText);

  const locationTitle = document.createElement(`p`);
  locationTitle.classList.add(`card__title`);
  locationTitle.innerText = `LOCATION`;
  card.appendChild(locationTitle);

  const locationText = document.createElement(`p`);
  locationText.classList.add(`card__text`);
  locationText.innerText = show.location;
  card.appendChild(locationText);

  const btn = document.createElement(`button`);
  btn.classList.add(`card__btn`);
  btn.innerText = `BUY TICKETS`;
  card.appendChild(btn);
};

//create table titles seperate function
const displayShowTitles = () => {
  const tableTitles = document.createElement(`section`);
  tableTitles.classList.add(`table`);
  showList.appendChild(tableTitles);

  const date = document.createElement(`p`);
  date.classList.add(`table__title`);
  date.innerText = `DATE`;
  tableTitles.appendChild(date);

  const venue = document.createElement(`p`);
  venue.classList.add(`table__title`);
  venue.innerText = `VENUE`;
  tableTitles.appendChild(venue);

  const location = document.createElement(`p`);
  location.classList.add(`table__title`);
  location.innerText = `LOCATION`;
  tableTitles.appendChild(location);

  const spacer = document.createElement(`div`);
  spacer.classList.add(`table__title`);
  tableTitles.appendChild(spacer);
};

// Render the list of show cards and table
const renderShows = () => {
  displayShowTitles();
  allShows.forEach((show) => displayShow(show));
};

renderShows();
