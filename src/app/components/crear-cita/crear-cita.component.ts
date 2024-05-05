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


    if(hora != null && (typeof hora)=='string'){

      let myHora = hora.split(":");
      if(parseInt(myHora[0]) >= 8 && parseInt(myHora[0])<=20){
        //console.log(myHora);
        return true;
      }
    }
    return false;
  }

  validarHuespedes(cantidad:number):boolean{
    if(typeof cantidad == 'number' && cantidad > 0 && cantidad<=16){
      console.log(typeof cantidad + " dato " + cantidad);
      return false;
    }
    return true;
  }

  validarCorreo(correo:string):boolean{
    //console.log(typeof correo);
    if(typeof correo == 'string'){
      if(correo.includes("@") && (correo.includes(".com") || correo.includes(".mx"))){
        return false;
      }
    }
    return true;
  }

  validarTelefono(telefono: any): boolean {
    if (typeof telefono === 'number' || typeof telefono === 'string') {
      // Eliminar todos los caracteres no numéricos de la cadena del teléfono
      let numeroTelefono = telefono.toString().replace(/\D/g, '');

      // Verificar si la longitud del número de teléfono es 10
      if (numeroTelefono.length === 10) {
        console.log("Es número y es válido");
        return true;
      }
    }
    return false;
  }

}
