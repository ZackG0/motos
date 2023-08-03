import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearMotoComponent } from './pages/crear-moto/crear-moto.component';
import { EditarMotoComponent } from './pages/editar-moto/editar-moto.component';
import { EnlistarMotosComponent } from './pages/enlistar-motos/enlistar-motos.component';

const routes: Routes = [
  /*{path: '',pathMatch: 'full', redirectTo: 'crear-empleado'},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: 'editar-empleado/:id', component: EditarEmpleadoComponent},
  {path: 'listar-empleados', component: EnlistarEmpleadosComponent},*/

  {path: '',pathMatch: 'full', redirectTo: 'crear-moto'},
  {path: 'crear-moto', component: CrearMotoComponent},
  {path: 'editar-moto/:id', component: EditarMotoComponent},
  {path: 'listar-motos', component: EnlistarMotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
