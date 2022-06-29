import GithubAPI from "../../services/github-rest-api";

export interface Context {
  isAuthorized?: boolean;
  dataSources?: RestDataSource;
}

interface RestDataSource {
  githubAPI: GithubAPI;
}
