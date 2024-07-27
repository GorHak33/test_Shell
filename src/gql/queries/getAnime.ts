import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  query {
    Page {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        description
        episodes
        coverImage {
          large
        }
      }
    }
  }
`;
