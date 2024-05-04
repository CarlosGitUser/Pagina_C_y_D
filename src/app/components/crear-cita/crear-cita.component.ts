import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, FormsModule],
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent{

  cita = {
    nombre : '',
    telefono : 0,
    email : '',
    fecha : null,
    hora : '',
    lugar : '',
    canthuespedes : 0
  }

  validacion():void{
    console.log(this.cita);
  }

  validarFecha(fecha:Date):boolean{
    
  return true;
  }
}
