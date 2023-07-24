import { Component } from '@angular/core';
import { ɵafterNextNavigation } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { User } from 'src/app/core/models';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users: Observable<User[]>;

  constructor(
    private userService: UserService,
    private notifService : NotificationsService
    ){

    this.userService.loadUsers();

    this.users= this.userService.getUsers().pipe( 
      map((user)=> user.filter(x => x.age <=30 ))
     )

     let  usersUpper30 =  this.userService.getUsers().pipe( 
      map((user)=> user.filter(x => x.age >30 )),
      tap(res=> console.log(res))
     ).subscribe() ;
  
     const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    promesa.then( res => {
      this.notifService.showSuccess('Los usuarios se cargaron correctamente');
    });

    
  }
}
