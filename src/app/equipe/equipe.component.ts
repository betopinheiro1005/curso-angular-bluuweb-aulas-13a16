import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EquipeService } from './../equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  equipe:any[] = [];

  constructor(private rota:ActivatedRoute, private _servico:EquipeService) {
    this.rota.params.subscribe(params=>{
      console.log(params['id']);
      this.equipe = this._servico.obterUm(params['id']);
    })
   }

  ngOnInit() {
  }

}
