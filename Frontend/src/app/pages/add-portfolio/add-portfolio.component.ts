import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio, TechnicalSkill, Project, WorkExperience, Education, Certification } from 'src/app/interfaces/portfolio';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent {
  portfolioData: Portfolio = {
    skills: {
      technical_skills: [],
      soft_skills: []
    },
    projects: [],
    work_experience: [],
    education: [],
    certifications_and_awards: []
  };

  constructor(private portfolioService: PortfolioService) { }

  addPortfolio() {
    this.portfolioService.addPortfolio(this.portfolioData).subscribe(response => {
      console.log('Portfolio added:', response);
    });
  }
}
