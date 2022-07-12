import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  //Recuperons les infos du user connecté
  //currentUser: any;
  constructor(
    private classToggler: ClassToggleService,
    private router: Router,
    private token: TokenStorageService
  ) {
    super();
  }
  //  private TypeUtilisateur:string[] = [];
  //  isLoggedIn = false;
  // console.log(TypeUtilisateur)

  //Function de déconnexion
  Logout() {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

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
    // this.currentUser = this.token.getUser();
  }
}
