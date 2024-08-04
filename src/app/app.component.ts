import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdvertisePageComponent } from './advertise-page/advertise-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdvertisePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alearning';
}
