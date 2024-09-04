import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionWelcomeComponent } from "./components/section-welcome/section-welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionWelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invensys.web';
}
