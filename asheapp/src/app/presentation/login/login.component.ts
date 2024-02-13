import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import AuthService from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loading: boolean | undefined;
  auth: any;
 
  private querySubscription!: any;

  constructor(private router: Router) {}

  name = new FormControl('');
  password = new FormControl('');

  ngOnInit() {
    
  }

  async testData() {
    try {
      /*this.querySubscription = this.apollo
      .watchQuery<any>({
        query: AUTH,
        variables: {
          login: this.name.value,
          password: this.password.value
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.auth = data.auth;
      });*/
      await AuthService.login({
        login: this.name.value,
        password: this.password.value
      });
      this.router.navigateByUrl('/home');
    } catch (error:any) {
      console.log(error);
    }
  }
}
