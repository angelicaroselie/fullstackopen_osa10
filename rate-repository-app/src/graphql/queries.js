import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
    repositories {
      edges {
        node {
            fullName
            reviewCount
            ratingAverage
            forksCount
            stargazersCount
            description
            language
            ownerAvatarUrl
        }
      }
    }
  }
`;


// 10.16
export const ME = gql`
query {
    me {
        id
        username
    }
}
`;
