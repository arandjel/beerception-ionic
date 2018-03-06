import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { ConfigProvider } from '../config/config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UploadFileProvider {

  constructor(
    private config: ConfigProvider,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  addBeerception(file: File) {
    let formdata: FormData = new FormData();

    formdata.append('beerFile', file);

    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'X-XSRF-TOKEN': this.getXsrfToken()
    });

    const req = new HttpRequest('POST', this.config.beerception_url, formdata, {
      headers: headers,
      withCredentials: true,
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req)
      .catch(error => {
        if (error && error.status === 401) {
          // this.redirectIfUnauth(error);
        } else {
          // this.displayError(error);
        }
        throw error;
      });
  }

  getBeerception() : Observable<any>{
    let headers = new HttpHeaders({
      'Accept': 'image/jpeg',
      'Content-Type': 'image/jpeg'
    });
    
    const req = new HttpRequest('GET', this.config.beerception_url, {}, {
      headers: headers,
      withCredentials: true,
      responseType: 'text'
    });

    return this.http.request(req)
      .filter(response => response instanceof HttpResponse)
      .map((response: HttpResponse<any>) => response.body)
      .catch(error => {
          if (error && error.status === 401) {
            // this.redirectIfUnauth(error);
          } else {
            // this.displayError(error);
          }
          throw error;
        });
  }

  private getXsrfToken() {
    return this.cookieService.get("XSRF-TOKEN");
  }

}
