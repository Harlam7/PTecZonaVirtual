import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-editar-factura',
  //standalone: true,
  //imports: [],
  templateUrl: './editar-factura.component.html',
  styleUrl: './editar-factura.component.css'
})
export class EditarFacturaComponent {
  facturaId: string;
  factura: any;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    // Obtiene el ID de la factura desde la ruta
    this.facturaId = this.route.snapshot.paramMap.get('id');

    // Obtiene los datos almacenados localmente
    this.factura = this.localStorageService.getItem('datosFacturacion');

    // Filtra la factura específica que se está editando
    if (this.factura) {
      this.factura = this.factura.find((f: any) => f.id === this.facturaId);
    }
  }

  guardarCambios(facturaEditada: any) {
    // Implementa lógica para guardar los cambios
    // Puedes llamar al servicio FacturacionService para actualizar la API
    // ...

    // Actualiza los datos almacenados localmente
    const nuevosDatos = this.factura.map((f: any) =>
      f.id === this.facturaId ? facturaEditada : f
    );

    this.localStorageService.setItem('datosFacturacion', nuevosDatos);
  }

}
