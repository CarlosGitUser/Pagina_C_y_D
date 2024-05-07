import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 //urlAPI:string = "https://apicyd.free.beeceptor.com";
 // urlAPI:string = "https://testapicarlos.free.beeceptor.com";
 // urlAPI: string = "https://bestapi.free.beeceptor.com";
 // urlAPI: string = "https://beasap.free.beeceptor.com";
 //urlAPI : string = "https://apiproyecto.free.beeceptor.com";
   urlAPI : string = "https://locapi.free.beeceptor.com";
  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get<any[]>(this.urlAPI).pipe(
      take(1)
    );
  }

    buscarPorTipo(tipo: string) {
    return this.retornar().pipe(
      map(products => products.filter(product => product.tipo === tipo))
    );
  }
}
