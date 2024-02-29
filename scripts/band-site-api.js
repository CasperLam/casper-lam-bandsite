const apiKey = `?api_key=e5e34cfc-0a39-401d-8a19-160624c9b0dc`;
const url = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;

class BandsiteApi {
  async getComments() {
    try {
      const comment = await axios.get(`${url}comments${apiKey}`);
      comment.data.forEach(displayPost);
    } catch (error) {
      console.log(`error`);
    }
  }
}

const siteApi = new BandsiteApi();
