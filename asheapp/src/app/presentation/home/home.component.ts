import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import AccountService from '../../service/account.service';
import { session } from '../../../session/session';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router){}
  
  totos:any;

  ngOnInit() {
    this.getAccounts();
  }
  ngOnDestroy(): void {
  }
  logout(){
    session.token = undefined;
    this.router.navigateByUrl('/login');
  }
  async getAccounts() {
    try {
      this.totos = await AccountService.get();
    } catch (error:any) {
      console.log(error);
    }
  }
}
