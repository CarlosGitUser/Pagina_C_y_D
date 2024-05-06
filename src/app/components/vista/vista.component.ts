import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {

  misDatos:any[] = [];
  myValor = '';
  

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
    this.myValor = params['valor'];
    if(this.getNombre(this.myValor) != null){
      this.misDatos = this.getNombre(this.myValor);
    }
    });
  }

  getNombre(name: string): any[] {
    let aux = localStorage.getItem("citas");
    let array: any[] = [];
    if (aux) {
      try {
        let citas = JSON.parse(aux);
        for (let cita of citas) {
          if (cita.nombre === name) {
            array.push(cita);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    return array; // Devuelve el array con las citas encontradas
  }

}
