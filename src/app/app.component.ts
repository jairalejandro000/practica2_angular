import { Component } from '@angular/core';
import { Persona } from '../../clases/persona'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pratica2';
  jair = new Persona(19, "Masculino", "Jair Alejandro","Martínez Carrillo")
  alex = new Persona(18, "Masculino", "Alex Fernando","Lozano Mendez")
  ariana = new Persona(19, "Femenino", "Ariana Yamileth","Esquivel Ruiz")
  humberto = new Persona(19, "Masculino", "Humberto","Canales Martínez")
  gus =  new Persona(18, "Masculino", "Gustavo Adolfo", "Díaz Ordaz")
  persona1: Persona
  edad : number
  sexo : string
  nombre : string
  apellido : string
  mostrar : Boolean = false
  personas : Array<Persona> = []
  ngOnInit(): void {
    this.personas = [this.jair, this.alex, this.ariana, this.humberto, this.gus]
  }
  mostrar_lista() : void{
    this.mostrar = this.mostrar == false ? true : false
  }
  mostrar_persona(persona: Persona) : void{
    this.persona1 = persona
  }
}