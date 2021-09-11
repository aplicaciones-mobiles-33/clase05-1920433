import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios = ['hola','hola2','hola3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
