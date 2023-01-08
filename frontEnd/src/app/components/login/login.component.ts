import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserInfo } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm')
  loginForm!: NgForm;

  constructor(private rest: RestApiService,
    private data: DataService,
    private router: Router) { }
  user: UserInfo;
  userInfo = {
    userName: 'hunganh',
    password: 'ha130502',
    rememberMe: true
  }
  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  ngOnInit() {

  }
  onSubmit(form: NgForm): void { //=> NgSubmit
    console.log(form);
    throw new Error('Something went wrong')
  }


  // onSubmit() {
  //   if (!this.loginForm.value) {
  //     console.log('invalid value');
  //     return;
  //   }
  //   console.log(this.loginForm.value);
  // }

  validate() {
    return true;
  }

  async login() {
    if (this.validate()) {
      this.rest.post('/api/login', this.user)
        .then(data => {
          let value = data as { user: string, token: string };
          console.log(value);
          localStorage.setItem('token', value.token);
          this.router.navigate([''])
        })
        .catch(error => {
          this.data.error(error['message']);
          console.log(error);
        })
    }
  }
}
