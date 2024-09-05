import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-section-welcome',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './section-welcome.component.html',
  styleUrl: './section-welcome.component.scss',
})
export class SectionWelcomeComponent {
  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
