import { useState, useEffect } from 'preact/hooks';
import { useT } from '../../styles/languages/LanguageProvider';
import { 
  StatsContainer,
  StatsTitle,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  LoadingCard
} from './styles';

export function SimpleGitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    following: 0
  });
  const [loading, setLoading] = useState(true);
    const t = useT();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/wiltoon');
        const data = await response.json();
        
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0
        });
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const labels = t({
        EN: {
    title: '📊 GitHub Stats',
    loading: '🔄 Loading GitHub data...',
    repos: 'Repositories',
    followers: 'Followers',
    following: 'Following'
  },
        BR: {
    title: '📊 Estatísticas GitHub',
    loading: '🔄 Carregando dados do GitHub...',
    repos: 'Repositórios',
    followers: 'Seguidores',
    following: 'Seguindo'
  },
        ES: {
    title: '📊 Estadísticas de GitHub',
    loading: '🔄 Cargando datos de GitHub...',
    repos: 'Repositorios',
    followers: 'Seguidores',
    following: 'Siguiendo'
  }
    });

  if (loading) {
    return <LoadingCard>{labels.loading}</LoadingCard>;
  }

  return (
    <StatsContainer>
      <StatsTitle>{labels.title}</StatsTitle>
      
      <StatsGrid>
        <StatCard>
          <StatNumber>{stats.repos}</StatNumber>
          <StatLabel>{labels.repos}</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>{stats.followers}</StatNumber>
          <StatLabel>{labels.followers}</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>{stats.following}</StatNumber>
          <StatLabel>{labels.following}</StatLabel>
        </StatCard>
      </StatsGrid>
    </StatsContainer>
  );
}
