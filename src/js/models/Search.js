import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    //this is to access for data in any website
    //   const proxy = "https://crossorigin.me/";
    //   const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "c4b58f30fb4ae126cc3cce19cdeaa931";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      console.log(this.results);
    } catch (error) {
      alert(error);
    }
  }
}
