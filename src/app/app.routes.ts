import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/home/contact/contact.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { VestidosComponent } from './components/products/vestidos/vestidos.component';

const APP_ROUTES: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'vestidos', component: VestidosComponent },
    {path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'landing' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
