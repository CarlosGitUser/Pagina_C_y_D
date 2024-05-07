import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { TableComponent } from './components/table/table.component';
import { VistaComponent } from './components/vista/vista.component';
import { PadreComponent } from './components/padre/padre.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CardsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'feed-back', component: FeedBackComponent},
  {path: 'crear-cita', component: CrearCitaComponent},
  {path: 'reportes', component : TableComponent},
  {path: 'vista/:valor', component: VistaComponent},
  {path: 'foro', component:PadreComponent}
];
