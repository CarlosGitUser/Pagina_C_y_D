import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { DomseguroPipe } from '../../domseguro.pipe';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent, DomseguroPipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  video1:string = "euugA_iQD2A";
  video2:string = "Atf_Af1q_5w";
  video3:string = "OjHbS-_nncw";
}
