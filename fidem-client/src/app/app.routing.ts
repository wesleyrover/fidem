import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, AjudaComponent, HeardComponent, TopoComponent, MenuComponent } from './views/index';

const appRoutes: Routes = [
    { path: 'ajuda' , component: AjudaComponent },
    { path: 'views/externo/login', component: LoginComponent }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true });

export const RoutingComponents = [ LoginComponent, AjudaComponent, HeardComponent,
                                   TopoComponent, MenuComponent];
