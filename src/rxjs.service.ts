import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private _http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this._http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map((users: any)=> users.slice(0,3))
    );
  }

  setUsers(): Observable<User[]>{
    return this.getUsers().pipe(
      map((usersList: User[])=>{
        return usersList.map((user: User)=>{
          return {
            id: user.id,
            name: user.name
          } as User
        })
      })
    );
  }
}
