import { RESTDataSource } from "apollo-datasource-rest";

export default class GithubAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.github.com/";
  }

  async getFacebookReactCommits(page = 1, per_page = 30) {
    return this.get(
      `repos/facebook/react/commits?page=${page}&per_page=${per_page}`
    );
  }
}
