import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, AjudaComponent } from './views/index';

const appRoutes: Routes = [
    { path: 'views/ajuda' , component: AjudaComponent },
    { path: 'views/externo/login', component: LoginComponent }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true });

export const RoutingComponents = [ LoginComponent, AjudaComponent];
