import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDetails } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserDetailsService {
  
  constructor(private http: HttpClient) {}

  getUserDetails():Observable<userDetails[]> {
    return this.http.get<userDetails[]>(
      environment.baseURL
    );
  }
}
