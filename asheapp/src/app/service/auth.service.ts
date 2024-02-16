import { session } from "../../session/session";

export class Auth {
  client:any;

  constructor() {}

  login: (dto:any) => Promise<void> = async (dto:any) => {
    const resp = await fetch('http://localhost:3000/graphql', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST", 
      body: JSON.stringify({
        query: `{
          auth (dto: {
            login: "${dto.login}"
            password: "${dto.password}"
          }) {
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
        }`
      })
    })
    .then((response) => response.json())
    .then((body) => {
      session.token = body.data.auth.accessToken;
    });

    /*this.client
    .query({
      query: gql`
      query (
        $login: String!
        $password: String!
      ) { 
        auth (dto: {
          login: $login
          password: $password
        }) {
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
    `,
    variables: {
      login: 'truc',
      password: 'bidule'
    }
    })
    .then((result:any) => console.log(result));*/
  };
}
const AuthService = new Auth();
export default AuthService;