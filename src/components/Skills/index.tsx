import { SimpleGitHubStats } from '../SimpleGitHubStats';
import { Reveal } from '../Reveal';
import { useT } from '../../styles/languages/LanguageProvider';
import { colors } from '../../styles/theme';
import {
    SkillsExpContainer, Tag, TitleSkills, SubTitleSkills, Groups, Group, Chips, Chip, LegendNote,
} from './styles';

interface SkillGroup {
    icon: string;
    title: { EN: string; BR: string; ES: string };
    accent: string;
    /** Highlighted = used daily / proficient (from the CV). */
    strong: string[];
    other: string[];
}

const GROUPS: SkillGroup[] = [
    {
        icon: '⚙️',
        title: { EN: 'Back-end', BR: 'Back-end', ES: 'Back-end' },
        accent: colors.primary,
        strong: ['Java', 'Kotlin', 'Python', 'Spring Boot'],
        other: ['Django', 'GraphQL', 'WebSocket', 'C++', 'Rust'],
    },
    {
        icon: '☁️',
        title: { EN: 'Cloud & DevOps', BR: 'Cloud & DevOps', ES: 'Cloud & DevOps' },
        accent: colors.secondary,
        strong: ['AWS', 'Terraform', 'GitHub Actions'],
        other: ['Lambda', 'ECS', 'Step Functions', 'SQS', 'Docker', 'Azure', 'GCP'],
    },
    {
        icon: '🔀',
        title: { EN: 'Data & Messaging', BR: 'Dados & Mensageria', ES: 'Datos & Mensajería' },
        accent: colors.accent,
        strong: ['Kafka', 'Redis', 'PostgreSQL'],
        other: ['RabbitMQ', 'DynamoDB', 'Aurora', 'OpenSearch', 'Athena', 'PySpark'],
    },
    {
        icon: '🤖',
        title: { EN: 'AI Engineering', BR: 'Engenharia de IA', ES: 'Ingeniería de IA' },
        accent: '#ec4899',
        strong: ['LLMs', 'Agents', 'RAG'],
        other: ['LangChain', 'Multi-agent', 'Ollama'],
    },
    {
        icon: '🏛️',
        title: { EN: 'Architecture & Practices', BR: 'Arquitetura & Práticas', ES: 'Arquitectura & Prácticas' },
        accent: colors.success,
        strong: ['Microservices', 'Event-driven', 'System design', 'TDD'],
        other: ['DDD', 'Mutation testing', 'Observability'],
    },
    {
        icon: '🖥️',
        title: { EN: 'Front-end', BR: 'Front-end', ES: 'Front-end' },
        accent: '#38bdf8',
        strong: ['TypeScript', 'React'],
        other: ['React Native', 'Angular'],
    },
];

export function Skills() {
    const t = useT();

    return (
        <SkillsExpContainer id="skills-content">
            <Reveal>
                <Tag>🧑‍💻 {t({ EN: 'Skills', BR: 'Habilidades', ES: 'Habilidades' })}</Tag>
                <TitleSkills>{t({ EN: 'Technologies and Stacks', BR: 'Tecnologias e Stacks', ES: 'Tecnologías y Stacks' })}</TitleSkills>
                <SubTitleSkills>
                    {t({
                        EN: 'What I use to build resilient, scalable systems end to end.',
                        BR: 'O que uso para construir sistemas resilientes e escaláveis de ponta a ponta.',
                        ES: 'Lo que uso para construir sistemas resilientes y escalables de punta a punta.',
                    })}
                </SubTitleSkills>
                <LegendNote>
                    {t({ EN: 'Highlighted = what I use most', BR: 'Em destaque = o que mais uso', ES: 'Destacado = lo que más uso' })}
                </LegendNote>
            </Reveal>

            <Groups>
                {GROUPS.map((group, i) => (
                    <Reveal key={group.icon} delay={i * 80}>
                        <Group $accent={group.accent}>
                            <h3><span aria-hidden="true">{group.icon}</span>{t(group.title)}</h3>
                            <Chips>
                                {group.strong.map((s) => <Chip key={s} $accent={group.accent} $strong>{s}</Chip>)}
                                {group.other.map((s) => <Chip key={s} $accent={group.accent}>{s}</Chip>)}
                            </Chips>
                        </Group>
                    </Reveal>
                ))}
            </Groups>

            <Reveal direction="zoom">
                <SimpleGitHubStats />
            </Reveal>
        </SkillsExpContainer>
    );
}
