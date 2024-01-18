import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';


@Component({
  selector: 'app-root',
  //standalone: false,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PTecZonaVirtual';
}
