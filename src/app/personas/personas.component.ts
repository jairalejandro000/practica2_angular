import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'clases/persona'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  p1 = new  Persona(19, "Masculino", "Jair Alejandro","Martínez Carrillo")
  edad : number
  sexo : string
  nombre : string
  apellido : string
  personas : Array<Persona> = []
  ngOnInit(): void {
    this.personas = [{
        'edad' :19,
        'sexo': 'Masculino',
        'nombre': 'Jair Alejandro',
        'apellido': 'Martínez Carrillo'
      },
      {
        'edad': 18,
        'sexo': 'Masculino',
        'nombre': 'Alex Fernando',
        'apellido': 'Lozano Mendes'
      },
      {
        'edad' :19,
        'sexo': 'Femenino',
        'nombre': 'Ariana Yamileth',
        'apellido': 'Esquivel Ruiz'
      },
      {
        'edad': 19,
        'sexo': 'Masculino',
        'nombre': 'Humberto (Sasuke)',
        'apellido': 'Canales Martínez'
      },
      {
        'edad' :18,
        'sexo': 'Femenino',
        'nombre': 'Gustavo Adolfo',
        'apellido': 'Díaz Ordaz'
      }
      
    ]
  }

}
