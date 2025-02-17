import { Component } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { JsonPipe, NgFor } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-rxjs',
  imports: [NgFor, JsonPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  users: Array<User> = [];
  posts: Array<Post> = [];

  constructor(private rxJsService: RxjsService){}

  ngOnInit(){
    this.rxJsService.setUsers().subscribe((res)=>{
      this.users = res;
    });

    this.rxJsService.getPosts().subscribe((res)=>{
      this.posts = res;
    })
  }
}
