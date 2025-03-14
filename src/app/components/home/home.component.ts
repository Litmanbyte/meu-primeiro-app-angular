import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  meuBool : boolean = false;
  nome : string = "jorge";
  mostrarTitulo : boolean = false;

  attBool (valor : boolean) : void {
    this.meuBool = valor;
  }

  submit () : void {
    console.log("ola!");
    this.mostrarTitulo = true;
  }

  entrance () : void {
    console.log("oloco!");
  }

  jao : Person = new Person("joao",19,Gen.MALE);
  ze : Person = new Person("jose",14,Gen.MALE);
  marcola : Person = new Person("marcos",25,Gen.MALE);
  
  items=[this.jao, this.ze,this.marcola]
}
export class Person{
    nome : string;
    idade : number;
    genero : Gen;

    constructor (nome : string, idade : number, genero : Gen){
      this.nome = nome;
      this.idade = idade;
      this.genero = genero;
    }
}

enum Gen{
  MALE,
  FEMALE
}
