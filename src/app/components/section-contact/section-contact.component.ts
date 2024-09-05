import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss',
})
export class SectionContactComponent {
  openEmail() {
    window.location.href =
      'mailto:ublich@invensys.web.za?subject=Integrate my Data';
  }
}
