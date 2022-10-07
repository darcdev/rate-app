import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          name
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
          id
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      url
      ownerAvatarUrl
      description
      language
    }
  }
`;

export const GET_USER = gql`
  query Me {
    me {
      username
      id
    }
  }
`;
