import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          id
          fullName
          ratingAverage
          stargazersCount
          reviewCount
          forksCount
          url
          ownerAvatarUrl
          description
          language
        }
        cursor
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      url
      ownerAvatarUrl
      description
      language
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            rating
            text
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query Me($includeReviews: Boolean = false, $first: Int, $after: String) {
    me {
      username
      id
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            id
            rating
            text
            createdAt
            user {
              id
              username
            }
            repository {
              fullName
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
