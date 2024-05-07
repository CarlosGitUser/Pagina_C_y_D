import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

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
    lugar : '',
    canthuespedes : 0,
    dias : 0
  }

  // Apartado para obtener datos del servicio
  constructor(public producstService: ProductsService){}

  datos:any = [];
  ruta  = "assets/img/";
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

  validacion():boolean{
    let name = this.validarNombre(this.cita.nombre);
    let tel = this.validarTelefono(this.cita.telefono);
    let correo = this.validarCorreo(this.cita.email);
    let fecha = this.validarFecha(this.cita.fecha);
    let hora = this.validarHora(this.cita.hora);
    let huespedes = this.validarHuespedes(this.cita.canthuespedes);
    let dias = this.validarDias(this.cita.dias);

    //let existe = this.citaExist(this.cita.fecha, this.cita.hora);

    if(!name&& !fecha  && hora && !huespedes && !correo && tel && dias){
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
      let existeCita = this.citaNotExist(fechaString, this.cita.hora);
      //console.log("Fecha recibida: " + fecha);
      let fechaHoy = new Date();
      if(fecha >= fechaHoy && existeCita){
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
        let citaExiste = this.citaNotExist(this.cita.hora, hora);
        if(citaExiste)
          return true;
        else return false;
      }
    }
    return false;
  }

  validarSelect(valor:number):boolean{
    if(valor >= 1){
      return true
    } else return false;
  }

  validarDias(valor:number):boolean{
    if(valor >= 1 && valor<=14){
      return true;
    } else return false;
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
      canthuespedes: this.cita.canthuespedes,
      dias: this.cita.dias,
      lugar : this.cita.lugar
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
    console.log("Nueva cita generada" + nuevaCita);
    localStorage.setItem("citas", JSON.stringify(citas));
    Swal.fire('Registro exitoso...', this.tituloAlerta, 'success')
    .then(()=>{
      // Recargar la pagina despues de crear la cita
      //window.scrollTo(0, 0);
      window.location.reload();
    });

  }

  citaNotExist(fecha: string, hora: string): boolean {
    let citas: Array<any> = [];
    let citasLocalStorage = localStorage.getItem("citas");

    if (citasLocalStorage) {
      try {
        citas = JSON.parse(citasLocalStorage);

        // Itera sobre cada cita en el array
        for (let cita of citas) {
          console.log("Fecha de la cita: " + cita.fecha);
          console.log("Hora de la cita" + cita.hora);
          // Verifica si la fecha y hora coinciden con los parámetros
          if (cita.fecha === fecha) {
            if((cita.hora[0]+cita.hora[1]) == (hora[0]+hora[1])){
              console.log("Se las fechas son iguales");
              return false;
            }
            return true; // Es la misma fecha pero diferente hora
          }
        }
      } catch (err) {
        console.log("Error en funcion citaExist : " + err);
      }
    }

    return true; // La fecha ingresada esta disponible
  }

}
