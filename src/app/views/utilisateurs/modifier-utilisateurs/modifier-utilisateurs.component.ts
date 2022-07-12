import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataList } from 'src/app/models/dataList';
import { UserUpdate } from 'src/app/models/userUpdate';
import { ServiceUtilisateursService } from 'src/app/services/session-user/service-utilisateurs.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';

@Component({
  selector: 'app-modifier-utilisateurs',
  templateUrl: './modifier-utilisateurs.component.html',
  styleUrls: ['./modifier-utilisateurs.component.scss'],
})
export class ModifierUtilisateursComponent implements OnInit {
  //déclrons nos variable
  id!: number;
  // agent: UserUpdate = new UserUpdate();
  list!: DataList;
  // list!: DataList;
  // currentUser: any;

  //nos variables
  form: any = {
    phone: null,
    password: null,
  };

  //Alert message
  alert: boolean = false;

  val: any;
  update: UserUpdate[] = [];

  constructor(
    private Service: ServiceUtilisateursService,
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //   this.id = this.route.snapshot.params['id'];
    //   this.Service.getUserById(this.id).subscribe(
    //     (data) => {
    //       this.list = data;
    //     },
    //     (error) => console.log(error)
    //   );

    this.id = this.route.snapshot.params['id'];

    this.list = new DataList();
    this.Service.getUserById(this.id).subscribe((data) => {
      this.list = data;
    });
  }

  onSubmit() {
    this.Service.updateUser(this.id, this.list).subscribe((data) => {
      this.goToUserList();
    });
    this.alert = true;
  }

  goToUserList() {
    this.router.navigate(['/utilisateurs/liste-utilisateurs']);
  }

  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
}

// let sub = this.route.params.subscribe((params) => {
//   this.val = params['id'];
// });
// console.log('id:' + this.val);
// this.Service.getUserById(this.val).subscribe((data) => {
//   this.list = data;
// });
// this.currentUser = this.token.getUser();
// this.id = this.route.snapshot.params['id'];
// this.list = new UserUpdate();
// this.Service.getUserById(this.id).subscribe(
//   (data) => {
//     this.list = data;
//   },
//   (error) => console.log(error)
// );
// this.Service.get
// this.Service.updateUser(this.id, this.list).subscribe((data) => {});
// this.router.navigate(['/utilisateurs/liste-utilisateurs']);
