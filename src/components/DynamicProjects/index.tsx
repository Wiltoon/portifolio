import { useState, useEffect } from 'preact/hooks';
import ReactMarkdown from 'react-markdown';
import { githubService, GitHubRepo } from '../../services/github';
import {
  ProjectsContainer,
  Tag,
  HeaderPortifolio,
  TitleWorks,
  SelectWorks,
  ButtonWork,
  Cards,
  ProjectCard,
  CardTitle,
  CardDescription,
  CardTags,
  TagSelected,
  CardImage,
  CardStats,
  StatItem,
  CardLinks,
  CardLink,
  LoadingCard,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  CloseButton,
  ReadmeContent,
  FilteredMessage
} from './styles';

export function DynamicProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [readme, setReadme] = useState<string>('');
  const [loadingReadme, setLoadingReadme] = useState(false);

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadRepositories = async () => {
    try {
      setLoading(true);
      const repositories = await githubService.getRepositories();
      setRepos(repositories);
    } catch (error) {
      console.error('Erro ao carregar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  const getUniqueLanguages = () => {
    const languages = new Set(repos.map(repo => repo.language).filter(Boolean));
    return Array.from(languages);
  };

  const getFilteredRepos = () => {
    if (selectedFilter === 'all') return repos;
    return repos.filter(repo => repo.language === selectedFilter);
  };

  const handleRepoClick = async (repo: GitHubRepo) => {
    setSelectedRepo(repo);
    setLoadingReadme(true);
    
    try {
      const readmeContent = await githubService.getRepositoryReadme(repo.name);
      setReadme(readmeContent);
    } catch (error) {
      setReadme('README não disponível para este repositório.');
    } finally {
      setLoadingReadme(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
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
      Vue: '#4fc08d'
    };
    return colors[language || ''] || '#888';
  };

  if (loading) {
    return (
      <ProjectsContainer id="portfolio">
        <Tag>🔗 Portfolio</Tag>
        <HeaderPortifolio>
          <TitleWorks>Projetos Dinâmicos do GitHub</TitleWorks>
        </HeaderPortifolio>
        <Cards>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <LoadingCard key={i}>
              <div className="loading-content">
                <div className="loading-title"></div>
                <div className="loading-description"></div>
                <div className="loading-tags"></div>
              </div>
            </LoadingCard>
          ))}
        </Cards>
      </ProjectsContainer>
    );
  }

  const filteredRepos = getFilteredRepos();
  const languages = getUniqueLanguages();

  return (
    <>
      <ProjectsContainer id="portfolio">
        <Tag>🔗 Portfolio</Tag>
        <HeaderPortifolio>
          <TitleWorks>Meus Projetos do GitHub</TitleWorks>
          <SelectWorks>
            <ButtonWork 
              active={selectedFilter === 'all'}
              onClick={() => setSelectedFilter('all')}
            >
              Todos ({repos.length})
            </ButtonWork>
            {languages.slice(0, 5).map(language => {
              const count = repos.filter(repo => repo.language === language).length;
              return (
                <ButtonWork
                  key={language}
                  active={selectedFilter === language}
                  onClick={() => setSelectedFilter(language || '')}
                >
                  {language} ({count})
                </ButtonWork>
              );
            })}
          </SelectWorks>
        </HeaderPortifolio>

        <Cards>
          {filteredRepos.length === 0 ? (
            <FilteredMessage>
              Nenhum projeto encontrado para o filtro selecionado.
            </FilteredMessage>
          ) : (
            filteredRepos.slice(0, 8).map(repo => (
              <ProjectCard 
                key={repo.id}
                onClick={() => handleRepoClick(repo)}
              >
                <CardTitle>{repo.name}</CardTitle>
                
                <CardDescription>
                  {repo.description || 'Sem descrição disponível'}
                </CardDescription>
                
                <CardStats>
                  <StatItem>
                    ⭐ {repo.stargazers_count}
                  </StatItem>
                  <StatItem>
                    🔀 {repo.forks_count}
                  </StatItem>
                  <StatItem>
                    📅 {formatDate(repo.updated_at)}
                  </StatItem>
                </CardStats>
                
                <CardTags>
                  {repo.language && (
                    <TagSelected color={getLanguageColor(repo.language)}>
                      {repo.language}
                    </TagSelected>
                  )}
                  {repo.topics.slice(0, 3).map(topic => (
                    <TagSelected key={topic}>
                      {topic}
                    </TagSelected>
                  ))}
                </CardTags>
                
                <CardLinks>
                  <CardLink 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e: any) => e.stopPropagation()}
                  >
                    📂 Código
                  </CardLink>
                  {repo.homepage && (
                    <CardLink 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e: any) => e.stopPropagation()}
                    >
                      🌐 Demo
                    </CardLink>
                  )}
                </CardLinks>
                
                <CardImage />
              </ProjectCard>
            ))
          )}
        </Cards>
      </ProjectsContainer>

      {selectedRepo && (
        <Modal onClick={() => setSelectedRepo(null)}>
          <ModalContent onClick={(e: any) => e.stopPropagation()}>
            <ModalHeader>
              <h2>{selectedRepo.name}</h2>
              <CloseButton onClick={() => setSelectedRepo(null)}>
                ✕
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              {loadingReadme ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  🔄 Carregando README...
                </div>
              ) : (
                <ReadmeContent>
                  <ReactMarkdown>{readme}</ReactMarkdown>
                </ReadmeContent>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
