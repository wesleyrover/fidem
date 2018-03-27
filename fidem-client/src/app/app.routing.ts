import { Routes, RouterModule } from '@angular/router';
import {
    LoginComponent, AjudaComponent, HeardComponent, TopoComponent,
    MenuComponent, GerarComponent, BonificacaoComponent, ServicoComponent,
    SituacaoComponent
} from './views/index';

import { NgSelectModule } from '@ng-select/ng-select';

const appRoutes: Routes = [
    { path: 'ajuda', component: AjudaComponent },
    { path: 'views/externo/login', component: LoginComponent },
    { path: 'gerar', component: GerarComponent },
    { path: 'servico', component: ServicoComponent },
    { path: 'situacao', component: SituacaoComponent },
    { path: 'bonifacacao-ativacao', component: BonificacaoComponent },
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true });

export const RoutingComponents = [LoginComponent, AjudaComponent, HeardComponent,
    TopoComponent, MenuComponent, GerarComponent,
    BonificacaoComponent, ServicoComponent, SituacaoComponent];

export const RoutingComponentTerceiro = [NgSelectModule];
