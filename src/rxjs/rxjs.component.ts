import { Component } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { JsonPipe, NgFor } from '@angular/common';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Component({
  selector: 'app-rxjs',
  imports: [NgFor, JsonPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  users: Array<User> = [];

  constructor(private rxJsService: RxjsService){}

  ngOnInit(){
    this.rxJsService.setUsers().subscribe((res)=>{
      this.users = res;
    })
  }
}
