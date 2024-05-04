import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  constructor(public producstService: ProductsService){}

  datos:any = [];
  ruta  = "../../../assets/img/";
  ngOnInit(){
    console.log("Cargando ngOnInit...");
    this.obtenerDatos();
  }

  obtenerDatos():void{
    console.log("Entrando a funcion obtenerDatos");
    this.producstService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any):void{
    console.log("Datos recibidos del API", data.products);
    this.datos = data.products;
  }

  crearRuta(tipo:string, img:string):string{
    console.log(this.ruta+tipo+"/"+img);
    return this.ruta+tipo+"/"+img;
  }
}
