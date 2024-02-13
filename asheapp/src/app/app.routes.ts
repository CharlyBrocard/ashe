import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { HomeComponent } from './presentation/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        title: 'Connexion'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Accueil',
        canActivate: [authGuard],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/login',
    }
];
