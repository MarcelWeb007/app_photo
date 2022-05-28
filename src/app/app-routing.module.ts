import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'nos-services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
