import { Component, OnInit } from '@angular/core';
import { FacturacionService  } from '../facturacion.service';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-listar-facturas',
  //standalone: false,
  //imports: [],
  templateUrl: './listar-facturas.component.html',
  styleUrl: './listar-facturas.component.css'
})
export class ListarFacturasComponent implements OnInit {
  datos: any;

  // Inyecta el servicio en el constructor
  constructor(
    private facturacionService: FacturacionService,
    private localStorageService: LocalStorageService
    ) { }

  // Implementa el método OnInit
  ngOnInit() {
    // Intenta obtener los datos almacenados localmente
    this.datos = this.localStorageService.getItem('datosFacturacion');

    if (!this.datos) {
      const datosPost = {
        // Ajusta estos datos según los requisitos de la API
        comercio_codigo: 123,
        usuario_identificacion: 'usuario123',
        // ... otros datos requeridos por la API
      };

      this.facturacionService.getDatosFacturacion(datosPost).subscribe(
        (datos) => {
          // Almacena los datos localmente
          this.localStorageService.setItem('datosFacturacion', datos);
          this.datos = datos;
          console.log(datos);
        },
        (error) => {
          console.error(error);
        }
      );

    }
  }

  editarFactura(nuevaInfo: any) {
    // Implementa lógica para editar la factura
    // Puedes llamar al servicio FacturacionService para actualizar la API
    // ...

    // Actualiza los datos almacenados localmente
    this.localStorageService.updateItem('datosFacturacion', nuevaInfo);
    this.datos = nuevaInfo;
  }

  eliminarFactura() {
    // Implementa lógica para eliminar la factura
    // Puedes llamar al servicio FacturacionService para eliminarla de la API
    // ...

    // Elimina los datos almacenados localmente
    this.localStorageService.removeItem('datosFacturacion');
    this.datos = null;
  }

}
