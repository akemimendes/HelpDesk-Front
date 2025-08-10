import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { TecnicoList } from './components/tecnico/tecnico-list/tecnico-list';
import { TecnicoCreate } from './components/tecnico/tecnico-create/tecnico-create';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [

    {
        path: '', component: Nav, canActivate: [AuthGuard], children: [

            { path: 'tecnicos', component: TecnicoList },
            { path: 'tecnicos/create', component: TecnicoCreate },

            { path: 'home', component: Home },
        ]

    },
    { path: 'login', component: Login }
];
