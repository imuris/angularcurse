import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando:boolean=true;
  constructor() { }

  ngOnInit(){
    setTimeout(() =>{
      this.cargando=false;
    },5000)
  }

}
