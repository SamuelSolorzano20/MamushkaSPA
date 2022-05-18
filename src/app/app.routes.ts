import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/home/landing/landing.component';

const APP_ROUTES: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'landing' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
