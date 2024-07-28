import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`;
