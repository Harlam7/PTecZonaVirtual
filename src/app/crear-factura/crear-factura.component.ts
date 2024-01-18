import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-crear-factura',
  //standalone: true,
  //imports: [],
  templateUrl: './crear-factura.component.html',
  styleUrl: './crear-factura.component.css'
})
export class CrearFacturaComponent {

  constructor(private localStorageService: LocalStorageService) {}

  crearFactura(nuevaFactura: any) {
    // Implementa lógica para crear una nueva factura
    // Puedes llamar al servicio FacturacionService para agregarla a la API
    // ...

    // Almacena los datos localmente
    this.localStorageService.setItem('datosFacturacion', nuevaFactura);
  }

}
