import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionWelcomeComponent } from "./components/section-welcome/section-welcome.component";
import { SectionServicesComponent } from "./components/section-services/section-services.component";
import { SectionPricingComponent } from "./components/section-pricing/section-pricing.component";
import { SectionContactComponent } from "./components/section-contact/section-contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionWelcomeComponent, SectionServicesComponent, SectionPricingComponent, SectionContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invensys.web';
}
