import { useState, useEffect } from 'preact/hooks';
import { useLanguage } from '../../styles/languages/LanguageProvider';
import {
    ProjectsContainer,
    HeaderPortifolio,
    TitleWorks,
    Cards,
    ProjectCard,
    CardTitle,
    CardDescription,
    CardTags,
    TagSelected,
    CardLinks,
    CardLink,
    ProjectsInfo,
    LoadMoreButton
} from './styles';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export function SimpleProjects() {
    const [allRepos, setAllRepos] = useState<GitHubRepo[]>([]);
    const [displayedRepos, setDisplayedRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [language] = useLanguage();
    
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/wiltoon/repos?type=owner&sort=updated&per_page=100');
                const data = await response.json();
                
                const filteredRepos = data.filter((repo: GitHubRepo) => 
                    !repo.name.includes('wiltoon') && 
                    !repo.name.toLowerCase().includes('.github.io') && 
                    repo.name !== 'wiltoon'
                );
                
                setAllRepos(filteredRepos);
                setDisplayedRepos(filteredRepos.slice(0, itemsPerPage));
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const loadMore = () => {
        const nextPage = currentPage + 1;
        const startIndex = (nextPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newRepos = allRepos.slice(startIndex, endIndex);
        
        setDisplayedRepos([...displayedRepos, ...newRepos]);
        setCurrentPage(nextPage);
    };

    const hasMore = displayedRepos.length < allRepos.length;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(language === 'EN' ? 'en-US' : 'pt-BR');
    };

    const getLanguageColor = (language: string | null) => {
        const languageColors: { [key: string]: string } = {
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
            Vue: '#4fc08d',
            React: '#61dafb'
        };
        return languageColors[language || ''] || '#8b5cf6';
    };

    const labels = language === 'EN' ? {
        title: 'My GitHub Projects',
        loading: '🔄 Loading GitHub projects...',
        noDescription: 'No description available',
        viewCode: 'View Code',
        viewDemo: 'View Demo',
        loadMore: 'Load More Projects',
        showing: 'Showing'
    } : {
        title: 'Meus Projetos do GitHub',
        loading: '🔄 Carregando projetos do GitHub...',
        noDescription: 'Sem descrição disponível',
        viewCode: 'Ver Código',
        viewDemo: 'Ver Demo',
        loadMore: 'Carregar Mais Projetos',
        showing: 'Mostrando'
    };

    if (loading) {
        return (
            <ProjectsContainer id="portfolio">
                <HeaderPortifolio>
                    <TitleWorks>{labels.title}</TitleWorks>
                </HeaderPortifolio>
                <div style={{ textAlign: 'center', color: '#8b5cf6', padding: '2rem' }}>
                    {labels.loading}
                </div>
            </ProjectsContainer>
        );
    }

    return (
        <ProjectsContainer id="portfolio">
            <HeaderPortifolio>
                <TitleWorks>{labels.title}</TitleWorks>
            </HeaderPortifolio>

            <ProjectsInfo>
                {labels.showing} {displayedRepos.length} {language === 'EN' ? 'of' : 'de'} {allRepos.length} projetos
            </ProjectsInfo>

            <Cards>
                {displayedRepos.map(repo => (
                    <ProjectCard key={repo.id}>
                        <CardTitle>{repo.name}</CardTitle>
                        
                        <CardDescription>
                            {repo.description || labels.noDescription}
                        </CardDescription>
                        
                        <div style={{ 
                            display: 'flex', 
                            gap: '1rem', 
                            marginBottom: '1rem',
                            fontSize: '0.8rem',
                            color: '#8b5cf6'
                        }}>
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>📅 {formatDate(repo.updated_at)}</span>
                        </div>
                        
                        <CardTags>
                            {repo.language && (
                                <TagSelected style={{ 
                                    backgroundColor: getLanguageColor(repo.language) + '20',
                                    color: getLanguageColor(repo.language),
                                    border: `1px solid ${getLanguageColor(repo.language)}50`
                                }}>
                                    {repo.language}
                                </TagSelected>
                            )}
                        </CardTags>
                        
                        <CardLinks>
                            <CardLink 
                                href={repo.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                📂 {labels.viewCode}
                            </CardLink>
                            {repo.homepage && (
                                <CardLink 
                                    href={repo.homepage} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    🌐 {labels.viewDemo}
                                </CardLink>
                            )}
                        </CardLinks>
                    </ProjectCard>
                ))}
            </Cards>

            {hasMore && (
                <LoadMoreButton onClick={loadMore}>
                    {labels.loadMore} ({allRepos.length - displayedRepos.length} {language === 'EN' ? 'remaining' : 'restantes'})
                </LoadMoreButton>
            )}
        </ProjectsContainer>
    );
}
