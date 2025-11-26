import { Routes } from '@angular/router';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Accueil } from './accueil/accueil';
export const routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'connexion', component: Connexion },
  { path: 'inscription', component: Inscription },
  { path: 'accueil', component: Accueil },
  { path: '**', redirectTo: 'accueil' },
];
