import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(public producstService: ProductsService){}

  ngOnInit(){
    console.log("Cargando ngOnInit...");
    this.obtenerDatos();
  }

  obtenerDatos():void{
    console.log("Entrando a funcion obtenerDatos");
    this.producstService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    })
  }

  successRequest(data:any):void{
    console.log("Datos recibidos del API", JSON.stringify(data))
  }
}
