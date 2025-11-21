import { Routes } from '@angular/router';
import { PageAccueil } from './pages/page-accueil/page-accueil';
import { PageError } from './pages/page-error/page-error';
import { PageListeLicornes } from './pages/page-liste-licornes/page-liste-licornes';
import { PageDetailsLicorne } from './pages/page-details-licorne/page-details-licorne';
import { PageEnregistrement } from './pages/page-enregistrement/page-enregistrement';

export const routes: Routes = [
  {
    path: '',
    component: PageAccueil
  },
  {
    path: 'enregistrer',
    component: PageEnregistrement
  },
  {
    path: 'licornes',
    component: PageListeLicornes
  },
  {
    path: 'licornes/:id',
    component: PageDetailsLicorne
  },
  {
    path: '**',
    component: PageError
  }
];
