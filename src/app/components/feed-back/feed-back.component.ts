import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-feed-back',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.css'
})
export class FeedBackComponent {
  enviarSugerencia(){
    Swal.fire({
      title: "!!!Gracias por tu comentario!!!",
      text: "Tomaremos en cuenta tu opinion para mejorar nuestra pagina",
      icon: "success"
    });
  }

  enviarQueja(){
    Swal.fire({
      title: "Lamentamos la molestia",
      text: "Tus comentarios nos ayudan a mejorar nuestra pagina y hacer la experiencia mas llevadera",
      icon: "info"
    });
  }
}
