import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { TecnicoList } from './components/tecnico/tecnico-list/tecnico-list';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
    {path: 'login', component: Login},
    {
        path: '', component: Nav, canActivate:[AuthGuard] ,children: [
            {path: 'home', component: Home},
            {path: 'tecnicos', component: TecnicoList},
        ]

    }
];
