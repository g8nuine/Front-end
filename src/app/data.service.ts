import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/';
  user = 'user/12/'
  addlist = 'list'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(this.apiUrl + this.user);
  }

  PostList(response: any) {
    this.http.post(this.apiUrl + this.user + this.addlist,{
      name:response
    }).toPromise().then((data : any) => {
    console.log(data)
    });
  }
  PostStatus(response: any) {
    //TODO
  }
}
