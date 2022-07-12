import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';

import { navItems, navItem_agents } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public navItem = navItem_agents;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private token: TokenStorageService) {}

  //Nos variables
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showAgentBoard = false;
  name?: string;

  currentUser: any;
  //On recuprer ces informations via le data.name qui se trouve dans le local storage
  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.data.IdTypeUtilisateur;
      this.showAdminBoard = this.roles.includes('admin');
      this.showAgentBoard = this.roles.includes('agent');
      this.name = user.data.name;

      //this.currentUser = this.token.getUser();
    }
  }
}
