import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'menu', component: MenuPageComponent },
];
