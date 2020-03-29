import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string="maria";
  apellido:string='emilia'
  alumno: any={
    nombre:"carlos",
    apellido:"piñeda"
  }
  inputNuevo:string="Soy emilia"
  correo:string="";
  password:string="";
  imgn:string= "https://img.archiexpo.es/pdf/repository_ae/59812/746-345861_1mg.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.correo)
    console.log(this.password)
  }

  llamarAlert(){
    alert("Has precionado 2 veces click")
  }

}
