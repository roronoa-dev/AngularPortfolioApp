import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPortfolioComponent } from './pages/view-portfolio/view-portfolio.component';
import { AddPortfolioComponent } from './pages/add-portfolio/add-portfolio.component';
import { EditPortfolioComponent } from './pages/edit-portfolio/edit-portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ViewPortfolioComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
