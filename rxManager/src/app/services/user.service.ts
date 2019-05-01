import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/user`);
  }

  getbyId(id: number) {
    return this.http.get(`/user/` + id);
  }

  register(user: User){
    return this.http.post(`/user/register`, user)
  }

  upDate(user: User){
    return this.http.put(`/user/` + user.id, user)
  }

  deletUser(id: number){
    return this.http.delete(`/user/` + id);
  }
}
