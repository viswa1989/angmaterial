import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getuser() {
    // return this.httpClient.get<string[]>('https://reqres.in/api/users');
    return this.httpClient.get<string[]>('https://reqres.in/api/users')
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
