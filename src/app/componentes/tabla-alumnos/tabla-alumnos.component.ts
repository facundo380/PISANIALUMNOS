import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent  {

  alumnosc : AlumnosC[]  = [
    {
    Id: '10',
    Nombre: 'Pedro',    
    Apellido: 'Perez',    
    Curso: 'Angular’'
    },
    {
    Id: '20',
    Nombre: 'Pablo',    
    Apellido: 'Bogiero',    
    Curso: 'Angular 2’'
      }
      
        
    ];


 

}

export default class AlumnosC {

  Id: String | undefined;
  
  Nombre: String | undefined;
  
  Apellido: String | undefined;
  
  Curso: String | undefined;
  
  }
