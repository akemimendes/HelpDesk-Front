import { Routes } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '', component: Nav, children: [
            {path: 'home', component: Home}]

    }
];
