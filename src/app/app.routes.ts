import { Routes } from '@angular/router';
import { AdvertisePageComponent } from './advertise-page/advertise-page.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'home', component: AdvertisePageComponent
    },
    {
        path: 'about', component: AboutComponent
    },
];
