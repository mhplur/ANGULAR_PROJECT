import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Milton', apellido: 'Paredes', email: 'mhplur@hotmail.com', createAt: '11-08-2012' },
    { id: 2, nombre: 'Juan', apellido: 'Andrade', email: 'juan@hotmail.com', createAt: '11-08-2013' },
    { id: 3, nombre: 'Carla', apellido: 'Solis', email: 'solis@hotmail.com', createAt: '11-08-2014' },
    { id: 4, nombre: 'Pedro', apellido: 'Cardona', email: 'cardona@hotmail.com', createAt: '11-08-2011' },
    { id: 5, nombre: 'Juan', apellido: 'Dominguez', email: 'domin@hotmail.com', createAt: '11-08-2002' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
