import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipe:any[] = [
    {
      nome: 'Ignacio',
      especialidade: 'HTML',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum consequatur, necessitatibus blanditiis voluptates, totam accusamus cumque ratione placeat nobis dicta. Deserunt tempore beatae ab minus, at earum cupiditate asperiores!'
    },
    {
      nome: 'Maria',
      especialidade: 'CSS',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum consequatur, necessitatibus blanditiis voluptates, totam accusamus cumque ratione placeat nobis dicta. Deserunt tempore beatae ab minus, at earum cupiditate asperiores!'
    },
  ]

  constructor() {
    console.log('Funcionando serviço');
   }

   obterEquipe(){
     return this.equipe;
   }

   obterUm(i){
      return this.equipe[i];
   }

}
