import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadosService.obtenerEmpleados()
      .subscribe(data => {
        this.empleados = data;
      });
  }
}
