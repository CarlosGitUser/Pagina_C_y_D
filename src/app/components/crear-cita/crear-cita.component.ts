import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, FormsModule, CommonModule],
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent{
  tituloAlerta:string = "Cita hecha de manera exitosa";
  cita = {
    nombre : '',
    telefono : 0,
    email : '',
    fecha : '',
    hora : '',
    //lugar : '',
    canthuespedes : 0
  }

  validacion():boolean{
    let name = this.validarNombre(this.cita.nombre);
    let tel = this.validarTelefono(this.cita.telefono);
    let correo = this.validarCorreo(this.cita.email);
    let fecha = this.validarFecha(this.cita.fecha);
    let hora = this.validarHora(this.cita.hora);
    let huespedes = this.validarHuespedes(this.cita.canthuespedes);

    if(!name && !fecha && hora && !huespedes && !correo && tel){
      // console.log("Todos los campos son validos");
      return false
    }
    return true;
  }

  validarFecha(fechaString:string):boolean{
    if(fechaString != null ){
      let auxDate = fechaString.split('-');
      //console.log(auxDate);
      let fecha = new Date(parseInt(auxDate[0]), parseInt(auxDate[1])-1, parseInt(auxDate[2]));
      //console.log("Fecha recibida: " + fecha);
      let fechaHoy = new Date();
      if(fecha >= fechaHoy){
        //console.log("La fecha recibida es menor a la actual");
        return false
      } else return true;
    }

  return false;
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
      //console.log(typeof cantidad + " dato " + cantidad);
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
        //console.log("Es número y es válido");
        return true;
      }
    }
    return false;
  }

  crearCita(): void {
    let citas: Array<any> = [];
    let nuevaCita = {
      nombre: this.cita.nombre,
      telefono: this.cita.telefono,
      email: this.cita.email,
      fecha: this.cita.fecha,
      hora: this.cita.hora,
      canthuespedes: this.cita.canthuespedes
    };
    const citasFromStorage = localStorage.getItem("citas");
    // Si hay citas en el localStorage, intentar analizarlas
    if (citasFromStorage) {
      try {
        citas = JSON.parse(citasFromStorage);
      } catch (error) {
        console.error("Error al analizar datos de citas en localStorage: ", error);
      }
    }
    citas.push(nuevaCita);

    localStorage.setItem("citas", JSON.stringify(citas));
    Swal.fire('Registro exitoso...', this.tituloAlerta, 'success')
    .then(()=>{
      // Recargar la pagina despues de crear la cita
      window.scrollTo(0, 0);
      window.location.reload();
    });

  }
}
