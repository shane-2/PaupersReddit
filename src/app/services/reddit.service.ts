import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aww, AwwData } from '../models/reddit-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) {}

  url: string =
    ' https://www.reddit.com/r/';

  //api call method
  getAll(sub: string): Observable<Aww> {
    return this.http.get<Aww>(`${this.url}${sub}/.json`);
  }

}
