import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() mensaje:string ="";
  @Output() unMensaje = new EventEmitter<string>(); //Retornar un string
  enviarMensaje():void{
    this.unMensaje.emit(this.mensaje); // Emitir el string del mensaje
    
  }

}
