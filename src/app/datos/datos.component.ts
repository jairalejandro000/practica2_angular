import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'clases/persona'

@Component({
  selector: 'datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input() persona : Persona
  ngOnInit(): void {
  }

}
