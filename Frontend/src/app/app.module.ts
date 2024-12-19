import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPortfolioComponent } from './pages/view-portfolio/view-portfolio.component';
import { AddPortfolioComponent } from './pages/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './pages/edit-portfolio/edit-portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { NgForm } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewPortfolioComponent,
    AddPortfolioComponent,
    EditPortfolioComponent,
    ProjectDetailsComponent,
    LoginComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
