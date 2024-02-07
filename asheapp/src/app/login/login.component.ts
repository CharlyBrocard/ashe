import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Apollo, Query, gql } from 'apollo-angular';
import { AUTH } from '../graphlql.auth';

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

  testData() {
    console.log(this.name.value);
    console.log(this.password.value);
    this.apollo.watchQuery<Query>({
      query: gql`
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
    });  
  }
}
