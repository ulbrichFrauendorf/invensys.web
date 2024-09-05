import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionWelcomeComponent } from './components/section-welcome/section-welcome.component';
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { SectionPricingComponent } from './components/section-pricing/section-pricing.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SectionWelcomeComponent,
    SectionServicesComponent,
    SectionPricingComponent,
    SectionContactComponent,
    ScrollTopModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invensys.web';
}
