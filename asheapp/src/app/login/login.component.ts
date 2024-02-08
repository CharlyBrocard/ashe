import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Apollo, Query, gql } from 'apollo-angular';

const AUTH = gql`
  query ($login: String!
         $password: String:
         ) { auth (dto: {login: $login,password: $password})
      {
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
`;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private apollo: Apollo) {}

  name = new FormControl('');
  password = new FormControl('');

  ngOnInit(): void {
    console.log('tape à gauche');
  }

  async testData() {
    console.log(this.name.value);
    console.log(this.password.value);
    try {
      const response = await this.apollo.query<Query>({
        query: AUTH,
        variables: {
          login: this.name.value,
          password: this.password.value,
        },
      });

      // Create session
      sessionStorage.setItem('code', response.data.auth.code);
      sessionStorage.setItem('jwt', response.data.auth.accessToken);
      sessionStorage.setItem('id', response.data.auth.id);

    } catch (error) {
      console.error(error);
    }
 
  }
}
