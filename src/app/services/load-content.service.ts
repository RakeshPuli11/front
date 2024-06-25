import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Load } from './Load';

@Injectable({
  providedIn: 'root'
})
export class LoadContentService {
  private apiUrl = 'http://localhost:3000/api/getallcontent/';

  constructor(private http: HttpClient) { }

  getAllContent(title:string): Observable<any> {
    return this.http.get<Load>(this.apiUrl + title);
  }
}