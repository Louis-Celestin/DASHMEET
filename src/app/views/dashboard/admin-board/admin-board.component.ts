import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin-profil';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { UserService } from 'src/app/services/_user-services/user.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss'],
})
export class AdminBoardComponent implements OnInit {
  public content!: string;
  userRoles!: Admin[];
  constructor(
    private userService: UserService,
    private token: TokenStorageService
  ) {}
  currentUser: any;
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      },
    });
  }

  //this.currentUser = this.token.getUser();
}
