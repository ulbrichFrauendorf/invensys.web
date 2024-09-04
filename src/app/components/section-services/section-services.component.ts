import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-services',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './section-services.component.html',
  styleUrl: './section-services.component.scss',
})
export class SectionServicesComponent {}
