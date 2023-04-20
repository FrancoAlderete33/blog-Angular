import { Component } from '@angular/core';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.css']
})
export class PostOneComponent {

  secciones = [
    {name : '¿Qué es SQL y para qué se utiliza?', id: 'seccion-1'},
    {name : '¿Qué son las bases de datos?', id: 'seccion-2'},
    {name : 'Estructura de una base de datos', id: 'seccion-3'},
    {name : 'Tipos de datos en SQL', id: 'seccion-4'},
    {name : 'Consultas básicas en SQL', id: 'seccion-5'},
    {name : 'Funciones y operadores en SQL', id: 'seccion-6'},
    {name : 'Ordenamiento y agrupamiento de datos en SQL', id: 'seccion-7'},
    {name : 'Modificación de datos en SQL', id: 'seccion-8'},
    {name : 'Unión de tablas en SQL', id: 'seccion-9'},
  ];

  constructor(){}



}
