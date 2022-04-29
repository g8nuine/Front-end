import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/';
  user = 'user/12/'
  addlist = 'list/'
  addTask = '/task'

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

  PostTask(title: any, content: any, listId: any) {
    this.http.post(this.apiUrl + this.addlist + listId + this.addTask, {
      title: title,
      content: content
    }).toPromise().then((data : any) =>{
      console.log(data)
    });
  }

  PostStatus(taskid: any, response: any) {
    //TODO
  }
}
