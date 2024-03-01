const apiKey = `?api_key=e5e34cfc-0a39-401d-8a19-160624c9b0dc`;
const url = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;

class BandsiteApi {
  async getComments() {
    try {
      const response = await axios.get(`${url}comments${apiKey}`);
      return response;
    } catch (error) {
      console.log(`error`);
    }
  }

  async postComment(newComment) {
    try {
      const response = await axios.post(`${url}comments${apiKey}`, {
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
      const response = await axios.get(`${url}showdates${apiKey}`);
      displayShowTitles();
      response.data.forEach(displayShow);
    } catch (error) {
      console.log(`error`);
    }
  }
}

const siteApi = new BandsiteApi();
