import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(public producstService: ProductsService){}

  datos:any = [];
  ruta  = "../../../assets/img/";


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
  citas : Array<any> = [];
  today = new Date();
  getCitas():void{
    const citasLocalStorage = localStorage.getItem("citas");
    if(citasLocalStorage){
      this.citas = JSON.parse(citasLocalStorage);
    }
  }

  ngOnInit():void{
    console.log("Cargando ngOnInit...");
    this.obtenerDatos();
    this.getCitas();
  }

  transformarDate(fechaString:string):Date{
      let auxDate = fechaString.split("-");
      let fecha = new Date(parseInt(auxDate[0]), parseInt(auxDate[1])-1, parseInt(auxDate[2]));
      return fecha;
  }

  getLugar(id:string):string{
    let lugar ="";
    switch(id){
      case ("1"): lugar = "TestLugar"; break;
      case ("2"): lugar = ""; break;
      case ("3"): lugar = ""; break;
      case ("4"): lugar = ""; break;
      case ("5"): lugar = ""; break;
      case ("6"): lugar = ""; break;
      case ("7"): lugar = ""; break;
      case ("8"): lugar = ""; break;
      case ("9"): lugar = ""; break;
      case ("10"): lugar = ""; break;
      case ("11"): lugar = ""; break;
      case ("12"): lugar = ""; break;
      default: lugar = "Lugar no encontrado";

    }
    return lugar;
  }

}
