import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Environment {
  userId?: any,
  userName?: string,
  environment_id?: any,
  environment_name?: string,
  url?: any,
  created_date?: any,
  expiry_date?: Date,
  userDetails?:any;
  environment_details?: any;
  environment_status?: string;
}

@Injectable()
export class EnvironmentService {
  postsUrl: string = 'https://5eb39595974fee0016ecd67c.mockapi.io/demo/all-environments';

  constructor(private http: HttpClient) { }

  getEnvironment() : Observable<Environment[]> {
    return this.http.get<Environment[]>(this.postsUrl);
  }

}