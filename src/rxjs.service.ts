import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { User } from './models/user.model';
import { Post } from './models/post.model';
import { FormResetEvent } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private _http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this._http.get("https://dummyjson.com/users").pipe(
      map((users: any)=> users.users.slice(0,3))
    );
  }

  getPosts(): Observable<Post[]>{
    return this._http.get("https://dummyjson.com/posts").pipe(
      map((res: any)=>res.posts.filter((post:any)=>post.id<=2))
    )
  }

  setUsers(): Observable<User[]>{
    return this.getUsers().pipe(
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
