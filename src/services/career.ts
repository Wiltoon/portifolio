// Serviço para buscar experiências e educação do GitHub
import { LinkedInService } from './linkedin';

interface GitHubExperience {
  title: string;
  company?: string;
  description: string;
  startDate: string;
  endDate: string;
  languages: string[];
  databases: string[];
  projects: string[];
  learnings: string[];
  achievements?: string[];
  linkedInUrl?: string;
  type: 'job' | 'education';
}

interface GitHubCareerData {
  jobs: GitHubExperience[];
  education: GitHubExperience[];
}

export class CareerService {
  private static readonly GITHUB_API = 'https://api.github.com';
  private static readonly USERNAME = 'wiltoon';
  private static readonly CAREER_REPO = 'career-data'; // Repositório dedicado aos dados
  
  static async fetchCareerData(): Promise<GitHubCareerData> {
    try {
      // Tenta buscar do repositório específico primeiro
      const repoData = await this.fetchFromRepository();
      if (repoData) {
        // Enriquece os dados com informações do LinkedIn
        const linkedInProfile = await LinkedInService.fetchProfile();
        repoData.jobs = LinkedInService.enrichCareerData(repoData.jobs, linkedInProfile);
        
        return repoData;
      }
      
      // Fallback para dados locais se não encontrar o repo
      console.warn('Career repository not found, using local data');
      return await this.fetchLocalData();
      
    } catch (error) {
      console.error('Error fetching career data:', error);
      return await this.fetchLocalData();
    }
  }

  private static async fetchFromRepository(): Promise<GitHubCareerData | null> {
    try {
      // Verifica se o repositório existe
      const repoResponse = await fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}`);
      if (!repoResponse.ok) {
        throw new Error('Career repository not found');
      }

      // Busca os arquivos de dados
      const [jobsResponse, educationResponse] = await Promise.all([
        fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}/contents/jobs.json`),
        fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}/contents/education.json`)
      ]);

      if (!jobsResponse.ok || !educationResponse.ok) {
        throw new Error('Career data files not found');
      }

      const [jobsData, educationData] = await Promise.all([
        jobsResponse.json(),
        educationResponse.json()
      ]);

      // Decodifica o conteúdo base64
      const jobs = JSON.parse(atob(jobsData.content.replace(/\n/g, '')));
      const education = JSON.parse(atob(educationData.content.replace(/\n/g, '')));

      return {
        jobs: jobs.map((job: any) => ({ ...job, type: 'job' })),
        education: education.map((edu: any) => ({ ...edu, type: 'education' }))
      };

    } catch (error) {
      return null;
    }
  }

  private static async fetchLocalData(): Promise<GitHubCareerData> {
    // Importa os dados locais como fallback
    const jobsData = await import('../components/Career/jobs.json');
    const educationData = await import('../components/Career/academics.json');

    return {
      jobs: jobsData.default.map((job: any) => ({ ...job, type: 'job' })),
      education: educationData.default.map((edu: any) => ({ ...edu, type: 'education' }))
    };
  }

  // Método para criar o repositório de dados (para uso futuro)
  static generateRepositoryStructure() {
    return {
      repositoryName: this.CAREER_REPO,
      description: 'Career and Education data for portfolio',
      files: {
        'README.md': `# Career Data Repository

This repository contains career and education data for the portfolio website.

## Structure

- \`jobs.json\` - Professional experiences
- \`education.json\` - Academic background
- \`schema.json\` - Data structure schema

## Usage

Data is automatically fetched by the portfolio website. Update the JSON files to reflect new experiences.
`,
        'jobs.json': `[
  {
    "title": "Senior Full Stack Developer",
    "company": "Tech Company",
    "description": "Detailed description of role and responsibilities...",
    "startDate": "2023-01-01",
    "endDate": "At the moment",
    "languages": ["TypeScript", "React", "Node.js"],
    "databases": ["PostgreSQL", "MongoDB"],
    "projects": ["Project 1", "Project 2"],
    "learnings": ["Learning 1", "Learning 2"],
    "achievements": ["Achievement 1", "Achievement 2"],
    "linkedInUrl": "https://linkedin.com/in/yourprofile"
  }
]`,
        'education.json': `[
  {
    "title": "Computer Science Degree",
    "company": "University Name",
    "description": "Detailed description of studies...",
    "startDate": "2020-01-01",
    "endDate": "2023-12-01",
    "languages": ["Java", "Python"],
    "databases": ["MySQL"],
    "projects": ["Academic Project 1"],
    "learnings": ["Computer Science fundamentals"],
    "achievements": ["Honor Roll"]
  }
]`,
        'schema.json': `{
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "company": { "type": "string" },
    "description": { "type": "string" },
    "startDate": { "type": "string", "format": "date" },
    "endDate": { "type": "string" },
    "languages": { "type": "array", "items": { "type": "string" } },
    "databases": { "type": "array", "items": { "type": "string" } },
    "projects": { "type": "array", "items": { "type": "string" } },
    "learnings": { "type": "array", "items": { "type": "string" } },
    "achievements": { "type": "array", "items": { "type": "string" } },
    "linkedInUrl": { "type": "string", "format": "uri" }
  },
  "required": ["title", "description", "startDate", "endDate"]
}`
      }
    };
  }
}
