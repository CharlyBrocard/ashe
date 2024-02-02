import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    console.log('tape à gauche');
  }

  testi() {
    console.log('tititi');
    
  }
}
