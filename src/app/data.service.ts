import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/';
  user = 'user/12/'
  list = 'list/'
  addTask = '/task'
  editTask = 'task/'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(this.apiUrl + this.user);
  }

  PostList(response: any) {
    this.http.post(this.apiUrl + this.user + this.list,{
      name:response
    }).toPromise().then((data : any) => {
    console.log(data);
    });
  }

  PostTask(title: any, content: any, listId: any) {
    this.http.post(this.apiUrl + this.list + listId + this.addTask, {
      title: title,
      content: content
    }).toPromise().then((data : any) =>{
      console.log(data);
    });
  }

  PostStatus(taskid: any, tasktitle: any, taskcontent: any,  response: any) {
    this.http.put(this.apiUrl + this.editTask + taskid, {
      title: tasktitle,
      content: taskcontent,
      status: response
    }).toPromise().then((data: any) =>{
      console.log(taskid);
    });
  }

  DeleteList(listId: number) {
    this.http.delete( this.apiUrl + this.user +  this.list + listId,{
    }).toPromise().then((data : any) => {
      console.log(data);
    });
  }

  DeleteTask(listId: number, taskId: number) {
    this.http.delete( "http://localhost:8080/list/" + listId + "/" + "task/" + taskId,{
    }).toPromise().then((data : any) => {
      console.log(data);
    });
  }
}
