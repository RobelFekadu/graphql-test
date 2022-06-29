import { gql } from "apollo-server-express";

const commitType = gql`
  type Commit {
    sha: String!
    html_url: String!
    commit: CommitDetail!
  }

  type Author {
    name: String!
    email: String!
    date: String!
  }

  type CommitDetail {
    author: Author!
    message: String!
  }

  type Query {
    getAllCommits(page: Int, per_page: Int): [Commit!]!
  }
`;

export default commitType;
