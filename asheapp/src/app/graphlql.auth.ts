import { gql } from "apollo-angular";

export const AUTH = gql`
query {
    auth (
      dto: {
        login: "ropo"
        password: "password"
      }
    ) {
      accessToken
      id
      code
      name_first
      name_last
      description
      mail
      creation
      modification
      language
    }
  }
`