import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      name: 'Marcos Pull',
      age: 23
    },
    {
      name: 'Maria Casti',
      age: 53
    },
    {
      name: 'Andrea Pio',
      age: 33
    },
    {
      name: 'Cristian Castro',
      age: 26
    },
    {
      name: 'Marta Plop',
      age: 21
    },
    {
      name: 'Tania Cruxh',
      age: 29
    },
  ];

  private _users$ = new BehaviorSubject<User[]>([]);
  private users$ = this._users$.asObservable();

  constructor() { 
   
  }

  loadUsers(): void {
    this._users$.next(this.users);
  }
  getUsers(): Observable<User[]> {
    return this.users$;
  }
}
