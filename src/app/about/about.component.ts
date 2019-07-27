import { Component, OnInit } from '@angular/core';
import { EquipeService } from './../equipe.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipe:any[] = [];

  constructor(private _servico:EquipeService) { 
    this.equipe = _servico.obterEquipe();
  }

  ngOnInit() {
  }

}
