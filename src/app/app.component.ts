import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './SEV/components/navBar/navBar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbar],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sev';
}
