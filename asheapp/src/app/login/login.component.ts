import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
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

  testi() {
    console.log(this.name.value);
    console.log(this.password.value);
    this.apollo.query({
      query: AUTH
    })
  }
}
