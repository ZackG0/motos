import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearMotoComponent } from './pages/crear-moto/crear-moto.component';
import { EditarMotoComponent } from './pages/editar-moto/editar-moto.component';
import { EnlistarMotosComponent } from './pages/enlistar-motos/enlistar-motos.component';
import { MotoService } from './services/moto.service';

@NgModule({
  declarations: [
    AppComponent,
    /*CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EnlistarEmpleadosComponent,*/
    CrearMotoComponent,
    EditarMotoComponent,
    EnlistarMotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    MotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
