export interface TechnicalSkill {
    skill: string;
    experience: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    role: string;
    live_demo: string;
    source_code: string;
    media: string[];
  }
  
  export interface WorkExperience {
    job_title: string;
    company_name: string;
    duration: string;
    responsibilities: string[];
    technologies_used: string[];
  }
  
  export interface Education {
    degree: string;
    institution: string;
    dates_attended: string;
    relevant_coursework: string[];
  }
  
  export interface Certification {
    title: string;
    issuing_organization: string;
    date_obtained: string;
    description: string;
  }
  
  export interface Portfolio {
    skills: {
      technical_skills: TechnicalSkill[];
      soft_skills: string[];
    };
    projects: Project[];
    work_experience: WorkExperience[];
    education: Education[];
    certifications_and_awards: Certification[];
  }
  