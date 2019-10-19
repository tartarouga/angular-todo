import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './todo/auth.guard';

import { SettingsComponent } from './settings/settings.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';
import { TestComponent } from './test/test.component';
import { AffichtodoComponent } from './todo/affichtodo/affichtodo.component';
import { AddtoComponent } from './todo/addto/addto.component';
import { ModiftodoComponent } from './todo/modiftodo/modiftodo.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'addTodo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'ajouter', component: AddtoComponent, canActivate: [AuthGuard] },
  { path: 'affiche', component: AffichtodoComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'meteo', component: MeteoComponent, canActivate: [AuthGuard] },
  { path: 'modif/:index', component: ModiftodoComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'connexion', component: ConnexionComponent },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
