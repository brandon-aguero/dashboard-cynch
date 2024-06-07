import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getUsersList() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
