import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Serviços
import { EquipeService } from './equipe.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'equipe/:id', component: EquipeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContatoComponent,
    AboutComponent,
    HomeComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
