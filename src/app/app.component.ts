import { Component } from '@angular/core';
import { interfaceProductos } from './interfaceProductos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title : string = 'Angular Scss Estructura-Control';
  public version : number = 102254;

  //buttons
  public btnActivoValue : boolean = false;

  //Arrays
  public txtArrayAlumnoValue : string = "";
  public arrayAlumnos : string[] = [ 'Laura' , 'July', 'Micaela','Luz', 'Roxana'];

  objRegistro = {
    name: "",
    password: "",
    email: "",
  };

  public arrayProductos : interfaceProductos[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  public objPersona = {
    name : "Alexander Jair Rojas Paria",
    age : 18,
    email : 'alexjair@gmail.com',
    imagen : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx4Lmsi9LN4W6233LRVltWVXSohGGYUtmGvNioSMIBNMJ8waFmPt4NqgtM8QhLtOI3i5w8rav8CMGxBj6P-CjdVes4pLlS4SWvCDchE2uDIgQfoD11LV8zBcLHC7l7dGCy1lbY9nsprEIS089LqSy2ziJdJ56iH0d8HaHNv5reKXf_2x4wuur9ZYWI/s1600/kisspng-cartoon-sadness-illustration-say-hello-5a7e7cc65862a5.2401317315182389183621.png'
  }

  public funFrmRegistrar(){
    //#name = "ngForm"
    console.log(this.objRegistro)
  }

  public funAgregarAlumnoArray(){
    const vValue = this.txtArrayAlumnoValue;
    this.arrayAlumnos.push(vValue);
  }
  public funEliminarAlumnoArray(vIndex : number){
    this.arrayAlumnos.splice(vIndex,1);
  }

  public funActivarBtnSubirEdad(vAccion : string){
    this.btnActivoValue = false;
    console.log(this.btnActivoValue);
  }

  public funDesactivarBtnSubirEdad(vAccion : string){
    this.btnActivoValue = true;
    console.log(this.btnActivoValue);
  }

  public funCambiarNombrePersona(t:Event){
     const elemento = t.target as HTMLInputElement;
     this.objPersona.name = elemento.value;
  }

  public funBajarEdadPersona(){
    this.objPersona.age -=1;
  }

  public funSubirEdadPersona(){
    this.objPersona.age +=1;
  }

}

