import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {//se definen las rutas por la cuales vamos a acceder al component
    path: 'dashboard', component: DashboardComponent, children: [ //definir como hijas las rutas hijas del padre
      { path: 'pacientes', component: PacientesComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
