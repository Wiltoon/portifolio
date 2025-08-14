// Sistema para processar dados do LinkedIn de forma inteligente
export interface ProcessedLinkedInData {
  profile: {
    name: string;
    title: string;
    about: string;
    profileUrl: string;
    email?: string;
    github?: string;
  };
  experiences: Array<{
    id: string;
    position: string;
    company: string;
    period: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
    achievements: string[];
    duration: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    period: string;
    startDate: string;
    endDate: string;
    description?: string;
  }>;
  recommendations: Array<{
    id: string;
    author: string;
    authorPosition: string;
    authorCompany: string;
    text: string;
    relationship: 'colleague' | 'manager' | 'client' | 'other';
    date: string;
  }>;
  skills: string[];
}

export class LinkedInDataProcessor {
  /**
   * Processa dados brutos do formulário e retorna estrutura otimizada
   */
  static processRawData(rawData: any): ProcessedLinkedInData {
    return {
      profile: {
        name: rawData.name || 'Wilton Costa',
        title: rawData.title || 'Full Stack Developer',
        about: this.generateAbout(rawData),
        profileUrl: 'https://www.linkedin.com/in/wilton-software-engineer',
        email: rawData.email,
        github: rawData.github
      },
      experiences: this.processExperiences(rawData.experiences || []),
      education: this.processEducation(rawData.education || []),
      recommendations: this.processRecommendations(rawData.recommendations || []),
      skills: this.processSkills(rawData.skills || [])
    };
  }

  private static generateAbout(rawData: any): string {
    if (rawData.about) return rawData.about;
    
    // Gera resumo inteligente baseado nas experiências
    const mainSkills = rawData.skills?.slice(0, 4)?.join(', ') || 'tecnologias modernas';
    const yearsExp = this.calculateTotalExperience(rawData.experiences);
    
    return `Desenvolvedor ${rawData.title?.includes('Senior') ? 'Senior' : ''} com ${yearsExp}+ anos de experiência em ${mainSkills}. Apaixonado por criar soluções inovadoras e entregar código de qualidade. Experiência em liderar projetos e trabalhar com metodologias ágeis.`;
  }

  private static processExperiences(experiences: any[]): ProcessedLinkedInData['experiences'] {
    return experiences.map((exp, index) => {
      const { startDate, endDate, duration } = this.parsePeriod(exp.period);
      
      return {
        id: `exp_${index}`,
        position: exp.position || exp.cargo,
        company: exp.company || exp.empresa,
        period: exp.period || exp.periodo,
        startDate,
        endDate,
        description: exp.description || exp.descricao,
        technologies: this.parseArray(exp.technologies || exp.tecnologias),
        achievements: this.parseArray(exp.achievements || exp.conquistas),
        duration
      };
    });
  }

  private static processEducation(education: any[]): ProcessedLinkedInData['education'] {
    return education.map((edu, index) => {
      const { startDate, endDate } = this.parsePeriod(edu.period);
      
      return {
        id: `edu_${index}`,
        degree: edu.degree || edu.curso,
        institution: edu.institution || edu.instituicao,
        period: edu.period || edu.periodo,
        startDate,
        endDate,
        description: edu.description || edu.descricao
      };
    });
  }

  private static processRecommendations(recommendations: any[]): ProcessedLinkedInData['recommendations'] {
    return recommendations.map((rec, index) => ({
      id: `rec_${index}`,
      author: rec.author || rec.nome,
      authorPosition: rec.authorPosition || rec.cargo,
      authorCompany: rec.authorCompany || rec.empresa,
      text: rec.text || rec.depoimento,
      relationship: this.determineRelationship(rec.authorPosition),
      date: new Date().getFullYear().toString()
    }));
  }

  private static processSkills(skills: any): string[] {
    if (Array.isArray(skills)) return skills;
    if (typeof skills === 'string') {
      return skills.split(',').map(skill => skill.trim());
    }
    return [];
  }

  private static parsePeriod(period: string): { startDate: string; endDate: string; duration: string } {
    if (!period) return { startDate: '', endDate: '', duration: '' };
    
    // Exemplos: "Jan 2023 - Atual", "2021 - 2023", "Mar 2022 - Dez 2022"
    const parts = period.split(' - ');
    const start = parts[0]?.trim();
    const end = parts[1]?.trim();
    
    const startDate = this.parseDate(start);
    const endDate = end === 'Atual' || end === 'Present' || end === 'Atualmente' 
      ? 'At the moment' 
      : this.parseDate(end);
    
    const duration = this.calculateDuration(startDate, endDate);
    
    return { startDate, endDate, duration };
  }

  private static parseDate(dateStr: string): string {
    if (!dateStr) return '';
    
    // Converte formatos como "Jan 2023", "2023", "Mar/2022" para "2023-01-01"
    const monthMap: Record<string, string> = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
      janeiro: '01', fevereiro: '02', março: '03', abril: '04', maio: '05', junho: '06',
      julho: '07', agosto: '08', setembro: '09', outubro: '10', novembro: '11', dezembro: '12'
    };
    
    // Apenas ano (ex: "2023")
    if (/^\d{4}$/.test(dateStr)) {
      return `${dateStr}-01-01`;
    }
    
    // Mês e ano (ex: "Jan 2023", "janeiro 2023")
    const monthYearMatch = dateStr.match(/(\w+)\s+(\d{4})/i);
    if (monthYearMatch) {
      const month = monthYearMatch[1].toLowerCase().substring(0, 3);
      const year = monthYearMatch[2];
      const monthNum = monthMap[month] || '01';
      return `${year}-${monthNum}-01`;
    }
    
    return dateStr;
  }

  private static calculateDuration(startDate: string, endDate: string): string {
    if (!startDate) return '';
    
    const start = new Date(startDate);
    const end = endDate === 'At the moment' ? new Date() : new Date(endDate);
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (years > 0 && months > 0) return `${years}y ${months}m`;
    if (years > 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${months} month${months > 1 ? 's' : ''}`;
  }

  private static calculateTotalExperience(experiences: any[]): number {
    if (!experiences?.length) return 3; // Default
    
    let totalMonths = 0;
    experiences.forEach(exp => {
      const { startDate, endDate } = this.parsePeriod(exp.period);
      const start = new Date(startDate);
      const end = endDate === 'At the moment' ? new Date() : new Date(endDate);
      const months = Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30);
      totalMonths += months;
    });
    
    return Math.floor(totalMonths / 12);
  }

  private static determineRelationship(position: string): 'colleague' | 'manager' | 'client' | 'other' {
    if (!position) return 'other';
    
    const pos = position.toLowerCase();
    if (pos.includes('manager') || pos.includes('lead') || pos.includes('director')) {
      return 'manager';
    }
    if (pos.includes('client') || pos.includes('customer')) {
      return 'client';
    }
    return 'colleague';
  }

  private static parseArray(input: any): string[] {
    if (Array.isArray(input)) return input;
    if (typeof input === 'string') {
      return input.split(',').map(item => item.trim()).filter(Boolean);
    }
    return [];
  }

  /**
   * Converte dados processados para formato JSON limpo
   */
  static exportToJSON(data: ProcessedLinkedInData): string {
    return JSON.stringify(data, null, 2);
  }

  /**
   * Gera arquivo README para repositório de dados
   */
  static generateDataRepositoryReadme(data: ProcessedLinkedInData): string {
    return `# LinkedIn Professional Data

## Profile
- **Name**: ${data.profile.name}
- **Title**: ${data.profile.title}
- **LinkedIn**: ${data.profile.profileUrl}

## Experience
${data.experiences.map(exp => 
  `- **${exp.position}** at ${exp.company} (${exp.period})`
).join('\n')}

## Skills
${data.skills.join(', ')}

## Last Updated
${new Date().toLocaleDateString()}

---
*This data is automatically processed and used in the portfolio website.*
`;
  }
}

// Exemplo de uso:
const exampleData = {
  name: "Wilton Costa",
  title: "Senior Full Stack Developer",
  about: "Desenvolvedor apaixonado por tecnologia...",
  experiences: [
    {
      position: "Senior Developer",
      company: "Tech Company",
      period: "Jan 2023 - Atual",
      description: "Desenvolvimento de aplicações web modernas",
      technologies: "React, Node.js, TypeScript, PostgreSQL",
      achievements: "Reduziu tempo de resposta em 40%"
    }
  ],
  recommendations: [
    {
      author: "João Silva",
      authorPosition: "Tech Lead",
      authorCompany: "Tech Company",
      text: "Excelente desenvolvedor com ótima capacidade técnica"
    }
  ],
  skills: "React, Node.js, TypeScript, PostgreSQL, AWS, Docker"
};

export { exampleData };
