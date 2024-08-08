import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdvertisePageComponent } from './advertise-page/advertise-page.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alearning';
}
