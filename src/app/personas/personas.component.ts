import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'clases/persona'

@Component({
  selector: 'personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input() persona : Persona
  ngOnInit(): void {
  }
}