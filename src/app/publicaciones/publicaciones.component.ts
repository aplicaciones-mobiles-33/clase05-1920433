import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  
  datos = 'https://reqres.in/api/users?page=2'//../datos.json';
  publicaciones = '';
  error ='';
  imagenesPublicaciones = [
    '../assets/images/alvan-nee-T-0EW-SEbsE-unsplash 1.png',
    '../assets/images/bambi-corro-fTPUpUhiBSc-unsplash 2.png',
    '../assets/images/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash 2.png',
    '../assets/images/eric-weber-nQOQVJW7EY8-unsplash 1.png',
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.datos)
      .subscribe(data =>{
        this.publicaciones =data;
        console.log(this.publicaciones);
      }, error => this.error = error);
  }

}
