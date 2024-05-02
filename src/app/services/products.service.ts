import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlAPI = "https://apicyd.free.beeceptor.com";
  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get(this.urlAPI).pipe(take(1));
  }
}
