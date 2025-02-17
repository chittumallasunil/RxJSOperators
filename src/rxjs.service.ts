import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private _http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this._http.get("https://dummyjson.com/users").pipe(
      map((users: any)=> users.users.slice(0,3)),
      map((usersList: User[])=>{
        return usersList.map((user: User)=>{
          return {
            id: user.id,
            lastName: user.lastName
          } as User
        })
      })
    );
  }
}
