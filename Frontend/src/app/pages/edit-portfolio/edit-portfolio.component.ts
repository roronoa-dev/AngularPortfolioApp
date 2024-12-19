import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {
  portfolio: any;
  portfolioForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.portfolioService.getPortfolio().subscribe(data => {
      this.portfolio = data;
      this.portfolioForm = this.fb.group({
        introduction: this.fb.group({
          name: ['', [Validators.required, Validators.pattern('[A-Za-z\s]+'), Validators.minLength(2), Validators.maxLength(50)]],
          title: ['', Validators.required],
          bio: ['', Validators.required],
          profile_picture: ['', [Validators.required, Validators.pattern('https?://.+')]],
          resumeUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', [Validators.required, Validators.pattern('\d{10}')]]
        }),
        contact_information: this.fb.group({
          social_links: this.fb.group({
            github: ['', Validators.required],
            linkedin: ['', Validators.required],
            twitter: ['', Validators.required]
          })
        }),
        skills: this.fb.group({
          technical_skills: this.fb.array([]),
          soft_skills: this.fb.array([])
        }),
        education: this.fb.array([]),
        certifications_and_awards: this.fb.array([]),
        projects: this.fb.array([]),
        work_experience: this.fb.array([])
      });
    });
  }

  get f() { return this.portfolioForm.controls; }

  

  editPortfolio() {
    this.portfolioService.updatePortfolio(this.portfolio._id, this.portfolio).subscribe(response => {
      console.log('Portfolio updated:', response);
      alert("items edited successfully")
    });
  }
  removeCertification(index: number) {
    if (index >= 0 && index < this.portfolio.certifications_and_awards.length) {
      this.portfolio.certifications_and_awards.splice(index, 1);
    }
  }
  removeProject(index: number) {
    if (index >= 0 && index < this.portfolio.projects.length) {
      this.portfolio.projects.splice(index, 1);
    }
  }
  removeExperience(index: number) {
    if (index >= 0 && index < this.portfolio.work_experience.length) {
      this.portfolio.work_experience.splice(index, 1);
    }
  }
  addMediaUrl(projectIndex: number): void {
    this.portfolio.projects[projectIndex].media.push('');
  }

  addResp(projectIndex: number): void {
    this.portfolio.work_experience[projectIndex].responsibilities.push('');
  }

  removeMediaUrl(projectIndex: number, mediaIndex: number): void {
    this.portfolio.projects[projectIndex].media.splice(mediaIndex, 1);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index; // Use item.id if available, otherwise use index
  }

  trackByIndex(index: number, item: any): any {
    return index; // Track by index for media URLs
  }
  removeresponsiblity(jobindex: number, responsiblityIndex: number): void {
    this.portfolio.work_experience[jobindex].responsibilities.splice(responsiblityIndex, 1);
  }
  addTech(projectIndex: number): void {
    this.portfolio.work_experience[projectIndex].technologies_used.push('');
  }
  removetech(jobindex: number, techIndex: number): void {
    this.portfolio.work_experience[jobindex].technologies_used.splice(techIndex, 1);
  }
  addrelevant_coursework(educationIndex: number): void {
    this.portfolio.education[educationIndex].relevant_coursework.push('');
  }
  removerelevant_coursework(jobindex: number, educationIndex: number): void {
    this.portfolio.education[jobindex].relevant_coursework.splice(educationIndex, 1);
  }
}
