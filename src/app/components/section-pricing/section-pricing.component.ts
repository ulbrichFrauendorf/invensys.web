import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-pricing',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './section-pricing.component.html',
  styleUrl: './section-pricing.component.scss',
})
export class SectionPricingComponent {
  openEmail() {
    window.location.href =
      'mailto:ublich@invensys.web.za?subject=Integrate my Data';
  }
}
