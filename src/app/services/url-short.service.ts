import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlShortService {
  // token: string = '50607c69c563930ddfa7a9592f8e7e369df742ec';
  url: string = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) {}

  public getUrlShort(url: string): Observable<any> {
    // const headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

    const body = {
      long_url: url,
    };

    return this.http.post(this.url, body);
  }
}
