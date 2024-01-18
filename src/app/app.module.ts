// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { FacturacionService } from './facturacion.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarFacturasComponent,
    // ... otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ... otros módulos
  ],
  providers: [FacturacionService], // Asegúrate de añadir el servicio aquí
  bootstrap: [AppComponent],
})
export class AppModule {}
