const apiKey = `?api_key=e5e34cfc-0a39-401d-8a19-160624c9b0dc`;
const apiUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;

class BandsiteApi {
  constructor(url, key) {
    this.url = url;
    this.key = key;
  }

  async getComments() {
    try {
      const response = await axios.get(`${this.url}comments${this.key}`);
      response.data.sort((b, a) => a.timestamp - b.timestamp);
      return response;
    } catch (error) {
      console.log(`error`);
    }
  }

  async postComment(newComment) {
    try {
      const response = await axios.post(`${this.url}comments${this.key}`, {
        name: newComment.name,
        comment: newComment.comment,
      });
      return response;
    } catch (error) {
      console.log(`error`);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(`${this.url}showdates${this.key}`);
      displayShowTitles();
      response.data.forEach(displayShow);
    } catch (error) {
      console.log(`error`);
    }
  }
}

const siteApi = new BandsiteApi(apiUrl, apiKey);
