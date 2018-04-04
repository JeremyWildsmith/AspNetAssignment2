import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";
  public error: string = "";
  public queryLogin = false;

  constructor(private accountService : AccountService, private router : Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.queryLogin = true;
    this.accountService.Authenticate(this.username, this.password)
      .then(() => {
        this.queryLogin = false;
        this.router.navigate(["/home"]);
      }).catch(r => {
        this.error = "Unable to login, " + r;
        this.queryLogin = false;
    });
  }
}
