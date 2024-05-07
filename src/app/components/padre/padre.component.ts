import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule,FormsModule, HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  ngOnInit(){

  }
  miMensaje ="";
  myNombre = "";
  mensajes: string[] = [];
  aux:string = "";

  addMensaje(response : string):void{
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // Formatear la hora
    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    this.miMensaje = response + " enviado a las " + horaFormateada;
    this.mensajes.push(this.miMensaje);
    localStorage.setItem("mensajes", JSON.stringify(this.mensajes));
  }

  getMensajes():void{
    const cosas = localStorage.getItem("mensajes");
    if(cosas){
      this.mensajes = JSON.parse(cosas);
    }
  }
}
