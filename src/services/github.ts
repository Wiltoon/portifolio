import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  clone_url: string;
  private: boolean;
  fork: boolean;
}

export interface GitHubLanguages {
  [key: string]: number;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

class GitHubService {
  private readonly baseURL = 'https://api.github.com';
  private readonly username = 'wiltoon'; // Substitua pelo seu username

  async getUser(): Promise<GitHubUser> {
    try {
      const response = await axios.get(`${this.baseURL}/users/${this.username}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      throw error;
    }
  }

  async getRepositories(): Promise<GitHubRepo[]> {
    try {
      const response = await axios.get(
        `${this.baseURL}/users/${this.username}/repos?type=owner&sort=updated&per_page=50`
      );
      
      // Filtra repositórios relevantes (não forks, com descrição)
      return response.data.filter((repo: GitHubRepo) => 
        !repo.fork && 
        repo.description && 
        repo.stargazers_count >= 0
      );
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      throw error;
    }
  }

  async getRepositoryLanguages(repoName: string): Promise<GitHubLanguages> {
    try {
      const response = await axios.get(
        `${this.baseURL}/repos/${this.username}/${repoName}/languages`
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar linguagens do repositório ${repoName}:`, error);
      return {};
    }
  }

  async getRepositoryReadme(repoName: string): Promise<string> {
    try {
      const response = await axios.get(
        `${this.baseURL}/repos/${this.username}/${repoName}/readme`,
        {
          headers: {
            Accept: 'application/vnd.github.v3.raw'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar README do repositório ${repoName}:`, error);
      return '';
    }
  }

  async getAllLanguagesStats(): Promise<{ [key: string]: number }> {
    try {
      const repos = await this.getRepositories();
      const allLanguages: { [key: string]: number } = {};

      // Para cada repositório, busca as linguagens e soma os bytes
      for (const repo of repos.slice(0, 20)) { // Limita para os 20 mais recentes
        const languages = await this.getRepositoryLanguages(repo.name);
        
        Object.entries(languages).forEach(([language, bytes]) => {
          allLanguages[language] = (allLanguages[language] || 0) + bytes;
        });

        // Pequeno delay para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      return allLanguages;
    } catch (error) {
      console.error('Erro ao calcular estatísticas de linguagens:', error);
      throw error;
    }
  }
}

export const githubService = new GitHubService();
