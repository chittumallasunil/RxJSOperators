import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { RxjsService } from '../rxjs.service';
import { JsonPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-rxjs',
  imports: [NgFor, JsonPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  users: User[] = [];

  constructor(private _rxjsService: RxjsService){

  }

  ngOnInit(){
    this._rxjsService.getUsers().subscribe(res=>{
      this.users = res;
    })
  }
}
