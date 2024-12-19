import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-view-portfolio',
  templateUrl: './view-portfolio.component.html',
  styleUrls: ['./view-portfolio.component.css']
})
export class ViewPortfolioComponent implements OnInit {
  portfolio: any;
  totalWorkExperience: number;


  constructor(private portfolioService: PortfolioService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.totalWorkExperience = 0
   }

  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => {
      this.portfolio = data;
      console.log(this.portfolio);
      console.log(this.portfolio.introduction.profile_picture);

      // Calculate the total work experience
      this.totalWorkExperience = this.calculateTotalWorkExperience(this.portfolio.work_experience);
      console.log(`Total work experience: ${this.totalWorkExperience} years`);
    });
    AOS.init();
  }

  calculateTotalWorkExperience(workExperience: any[]): number {
    let totalExperience = 0;
    workExperience.forEach(job => {
      const duration = job.duration.split('-');
      const startYear = parseInt(duration[0]);
      const endYear = parseInt(duration[1]);
      totalExperience += endYear - startYear;
    });
    return totalExperience;
  }

  colors = [
    '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'
  ];

  getColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
  viewProjectDetails(id: string): void {
    this.router.navigate(['/project', id]);
  }
  

}
