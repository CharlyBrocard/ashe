import { session } from "../../session/session";

export class Account {
    client:any;
  
    constructor() {}
  
    get: () => Promise<void> = async () => {
      const resp = await fetch('http://localhost:3000/graphql', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ session.token,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
          query {
            accounts {
              id
              type_id
              parent_account_id
              label
              description
              balance_reconcilied
              balance_not_reconcilied
              creator_id
              creation_date
              modificator_id
              modification_date
            }
          }`
        })
      })
      .then((response) => response.json())
      .then((body) => {
        console.log(body.data.accounts);
      });
    };
  }
  const AccountService = new Account();
  export default AccountService;