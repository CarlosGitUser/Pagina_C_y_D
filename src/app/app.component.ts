import { Component, OnInit } from '@angular/core';
declare var M: any;
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [ RouterOutlet, HeaderComponent,CardsComponent, FooterComponent, RouterModule,
    CrearCitaComponent, FeedBackComponent, AboutUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoCasas';
  ngOnInit() {
      M.AutoInit();
  }

}
