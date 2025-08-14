import { useState, useEffect } from 'preact/hooks';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { githubService, GitHubUser } from '../../services/github';
import {
  StatsContainer,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  ChartContainer,
  LoadingSpinner,
  ErrorMessage,
  StatsTitle,
  LanguageList,
  LanguageItem,
  LanguageBar,
  LanguagePercent
} from './styles';

// Registrar componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Cores para diferentes linguagens
const LANGUAGE_COLORS: { [key: string]: string } = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Java: '#b07219',
  'C#': '#239120',
  CSS: '#1572b6',
  HTML: '#e34c26',
  PHP: '#4f5d95',
  Go: '#00add8',
  Rust: '#dea584',
  Swift: '#fa7343',
  Kotlin: '#f18e33',
  Dart: '#00b4ab',
  Shell: '#89e051',
  Vue: '#4fc08d',
  React: '#61dafb'
};

export function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGitHubData();
  }, []);

  const loadGitHubData = async () => {
    try {
      setLoading(true);
      
      const [userData, languagesData] = await Promise.all([
        githubService.getUser(),
        githubService.getAllLanguagesStats()
      ]);

      setUser(userData);
      setLanguages(languagesData);
    } catch (err) {
      setError('Erro ao carregar dados do GitHub');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const getLanguagePercentages = () => {
    const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
    return Object.entries(languages)
      .map(([language, bytes]) => ({
        language,
        bytes,
        percentage: (bytes / total) * 100
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 10); // Top 10 linguagens
  };

  const getChartData = () => {
    const languageStats = getLanguagePercentages();
    return {
      labels: languageStats.map(stat => stat.language),
      datasets: [
        {
          data: languageStats.map(stat => stat.percentage),
          backgroundColor: languageStats.map(stat => 
            LANGUAGE_COLORS[stat.language] || '#' + Math.floor(Math.random()*16777215).toString(16)
          ),
          borderWidth: 0,
          hoverOffset: 4
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12
          },
          padding: 20,
          usePointStyle: true
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.parsed.toFixed(1)}%`;
          }
        }
      }
    }
  };

  if (loading) {
    return (
      <StatsContainer>
        <LoadingSpinner>🔄 Carregando dados do GitHub...</LoadingSpinner>
      </StatsContainer>
    );
  }

  if (error) {
    return (
      <StatsContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </StatsContainer>
    );
  }

  if (!user) return null;

  return (
    <StatsContainer>
      <StatsTitle>📊 Estatísticas GitHub</StatsTitle>
      
      <StatsGrid>
        <StatCard>
          <StatNumber>{user.public_repos}</StatNumber>
          <StatLabel>Repositórios</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>{user.followers}</StatNumber>
          <StatLabel>Seguidores</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>{user.following}</StatNumber>
          <StatLabel>Seguindo</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>{getLanguagePercentages().length}</StatNumber>
          <StatLabel>Linguagens</StatLabel>
        </StatCard>
      </StatsGrid>

      <ChartContainer>
        <h3>Distribuição de Linguagens</h3>
        <div style={{ height: '300px', position: 'relative' }}>
          <Doughnut data={getChartData()} options={chartOptions} />
        </div>
      </ChartContainer>

      <LanguageList>
        <h3>Top Linguagens</h3>
        {getLanguagePercentages().slice(0, 6).map((stat) => (
          <LanguageItem key={stat.language}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
              <span>{stat.language}</span>
              <LanguagePercent>{stat.percentage.toFixed(1)}%</LanguagePercent>
            </div>
            <LanguageBar 
              percentage={stat.percentage} 
              color={LANGUAGE_COLORS[stat.language] || '#888'}
            />
          </LanguageItem>
        ))}
      </LanguageList>
    </StatsContainer>
  );
}
