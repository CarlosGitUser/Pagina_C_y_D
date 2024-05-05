import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, FormsModule, CommonModule],
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

  validacion():boolean{
    // if(this.cita.nombre != '' && this.cita.telefono != 0 && this.cita.fecha != null){
    //   console.log(this.cita.fecha);
    //   return false;
    // }
    // return true;
    return true;
  }

  validarFecha(fechaString:string):boolean{
    if(fechaString != null ){
      let auxDate = fechaString.split('-');
      console.log(auxDate);
      let fecha = new Date(parseInt(auxDate[0]), parseInt(auxDate[1])-1, parseInt(auxDate[2]));
      console.log("Fecha recibida: " + fecha);
      let fechaHoy = new Date();
      if(fecha >= fechaHoy){
        console.log("La fecha recibida es menor a la actual");
        return false
      } else return true;
    }

  return false;
  }

  crearCita():void{
    //console.log("Cita: "+this.cita);
  }

  validarNombre(nombre:string):boolean{
    if(nombre != null && nombre.length >=6 )
      return false;
    return true;
  }

  validarHora(hora:string):boolean{
    if(hora != null){
      console.log("a");
    }
    return false;
  }

}
