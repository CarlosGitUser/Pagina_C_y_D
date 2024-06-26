import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../footer/footer.component';
import { CrearCitaComponent } from '../crear-cita/crear-cita.component';
import { FeedBackComponent } from '../feed-back/feed-back.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardsComponent, FooterComponent,
    RouterModule, CrearCitaComponent, FeedBackComponent, AboutUsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router) { }

  buscarElemento(valor:string){
    this.router.navigate(['/vista', valor]);
  }
}

