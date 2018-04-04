import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  private hideNav: boolean = true;

  constructor(private accountService: AccountService) {
    this.hideNav = !accountService.isAuthenticate();

    accountService.registerCallback(() => {
      this.hideNav = false;
    })
  }

  ngOnInit() {
  }

}
