import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'gs-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authenticationService.logout();
  }

}
