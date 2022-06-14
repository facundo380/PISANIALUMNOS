import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})

//@Input() childMessage: string;
export class TablaAlumnosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  @Input()
  nombre = 'Facundo Pisani';
 
  @Input()
  telefono: string | undefined;

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

    Mostrar (parametro :String) {
        alert(parametro )

    }
    Mostrar2 (parametro :String) {
      alert(parametro )

  }

}

export default class AlumnosC {

  Id: String | undefined;
  
  Nombre: String | undefined;
  
  Apellido: String | undefined;
  
  Curso: String | undefined;
  
  }
