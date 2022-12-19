import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm')
  loginForm!: NgForm;
  constructor(private http: HttpClient) { }
  user?: User;
  // @Input() showMe: boolean = true;
  // toggleLoginModal() {
  //   this.showMe = !this.showMe
  // }


  ngOnInit() {

  }


  async login() {

  }

  onSubmit() {
    if (!this.loginForm.value) {
      console.log('invalid value');
      return;
    }
    console.log(this.loginForm.value);
  }


  // getApi():Observable<coffee>{
  //   return this.http.get<coffee>('/login').pipe(
  //     );
  // }
}
