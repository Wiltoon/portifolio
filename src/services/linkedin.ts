// Serviço para integração com LinkedIn
// Nota: LinkedIn não possui API pública gratuita para dados de perfil
// Este serviço implementa fallbacks e integrações alternativas

export interface LinkedInProfile {
  name: string;
  headline: string;
  summary: string;
  profileUrl: string;
  experience: LinkedInExperience[];
  education: LinkedInEducation[];
}

export interface LinkedInExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export interface LinkedInEducation {
  school: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate?: string;
}

export class LinkedInService {
  private static readonly LINKEDIN_PROFILE_URL = 'https://linkedin.com/in/wilton-software-engineer';
  
  // Mock data - já que LinkedIn API não é pública
  private static readonly mockProfile: LinkedInProfile = {
    name: 'Wilton Costa',
    headline: 'Full Stack Developer | React | Node.js | TypeScript',
    summary: 'Passionate full-stack developer with expertise in modern web technologies...',
    profileUrl: this.LINKEDIN_PROFILE_URL,
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Company',
        duration: '2023 - Present',
        description: 'Leading development of scalable web applications...',
        startDate: '2023-01-01'
      }
    ],
    education: [
      {
        school: 'University Name',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        duration: '2020 - 2023',
        startDate: '2020-01-01',
        endDate: '2023-12-01'
      }
    ]
  };

  /**
   * Simula busca de dados do LinkedIn
   * Em produção, seria necessário implementar OAuth2 e usar LinkedIn API
   */
  static async fetchProfile(): Promise<LinkedInProfile> {
    try {
      // Simula uma chamada de API com delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em um cenário real, faria uma chamada para a LinkedIn API aqui
      // const response = await fetch('https://api.linkedin.com/v2/people/...');
      
      return this.mockProfile;
    } catch (error) {
      console.error('Error fetching LinkedIn profile:', error);
      return this.mockProfile;
    }
  }

  /**
   * Gera URL para compartilhar o portfólio no LinkedIn
   */
  static getShareUrl(portfolioUrl: string, title: string): string {
    const encodedUrl = encodeURIComponent(portfolioUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedSummary = encodeURIComponent('Check out my portfolio!');
    
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`;
  }

  /**
   * Retorna o URL direto do perfil do LinkedIn
   */
  static getProfileUrl(): string {
    return this.LINKEDIN_PROFILE_URL;
  }

  /**
   * Cria um botão de "Connect on LinkedIn"
   */
  static generateConnectButton(): {
    url: string;
    text: { en: string; pt: string };
  } {
    return {
      url: this.LINKEDIN_PROFILE_URL,
      text: {
        en: 'Connect on LinkedIn',
        pt: 'Conectar no LinkedIn'
      }
    };
  }

  /**
   * Integração com dados do Career Service
   * Enriquece os dados de carreira com informações do LinkedIn
   */
  static enrichCareerData(careerData: any[], linkedInData: LinkedInProfile) {
    return careerData.map(item => {
      // Tenta encontrar uma correspondência no LinkedIn
      const linkedInMatch = linkedInData.experience.find(exp => 
        exp.title.toLowerCase().includes(item.title.toLowerCase()) ||
        item.title.toLowerCase().includes(exp.title.toLowerCase())
      );

      return {
        ...item,
        linkedInUrl: linkedInMatch ? this.LINKEDIN_PROFILE_URL : undefined,
        linkedInData: linkedInMatch
      };
    });
  }
}

// Componente helper para botão do LinkedIn
export const LinkedInButton = {
  /**
   * Gera propriedades para um botão estilizado do LinkedIn
   */
  getButtonProps: (language: 'EN' | 'BR' = 'EN') => ({
    href: LinkedInService.getProfileUrl(),
    target: '_blank',
    rel: 'noopener noreferrer',
    style: {
      background: '#0077b5',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'all 0.3s ease'
    },
    children: language === 'EN' ? 'View on LinkedIn' : 'Ver no LinkedIn'
  }),

  /**
   * SVG icon do LinkedIn
   */
  icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`
};
