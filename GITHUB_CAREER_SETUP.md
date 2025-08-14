# Repositório de Dados de Carreira

Para manter seus dados de carreira sempre atualizados no seu portfólio, você pode criar um repositório separado no GitHub com seus dados profissionais e acadêmicos.

## Configuração do Repositório

### 1. Criar o Repositório

1. Acesse o GitHub e crie um novo repositório chamado `career-data`
2. Torne-o público (para que a API do GitHub possa acessar)
3. Adicione uma descrição: "Career and Education data for portfolio website"

### 2. Estrutura dos Arquivos

Crie os seguintes arquivos na raiz do repositório:

#### `jobs.json` - Experiências Profissionais
```json
[
  {
    "title": "Senior Full Stack Developer",
    "company": "Nome da Empresa",
    "description": "Descrição detalhada do cargo e responsabilidades...",
    "startDate": "2023-01-01",
    "endDate": "At the moment",
    "languages": ["TypeScript", "React", "Node.js", "Python"],
    "databases": ["PostgreSQL", "MongoDB", "Redis"],
    "projects": ["Sistema de E-commerce", "API de Microserviços", "Dashboard Analítico"],
    "learnings": ["Arquitetura de Microserviços", "DevOps com Docker", "Metodologias Ágeis"],
    "achievements": ["Reduziu tempo de resposta da API em 40%", "Liderou equipe de 5 desenvolvedores"],
    "linkedInUrl": "https://linkedin.com/in/wilton-software-engineer"
  },
  {
    "title": "Full Stack Developer",
    "company": "Empresa Anterior",
    "description": "Desenvolvimento de aplicações web...",
    "startDate": "2021-06-01",
    "endDate": "2022-12-31",
    "languages": ["JavaScript", "React", "Express.js"],
    "databases": ["MySQL", "Firebase"],
    "projects": ["Sistema de Gerenciamento", "App Mobile"],
    "learnings": ["React Native", "Cloud Computing"],
    "achievements": ["Implementou sistema que aumentou produtividade em 25%"]
  }
]
```

#### `education.json` - Formação Acadêmica
```json
[
  {
    "title": "Bacharelado em Ciência da Computação",
    "company": "Universidade Federal",
    "description": "Formação em fundamentos da computação, algoritmos, estruturas de dados...",
    "startDate": "2018-03-01",
    "endDate": "2022-12-01",
    "languages": ["Java", "Python", "C++", "JavaScript"],
    "databases": ["MySQL", "PostgreSQL"],
    "projects": ["Sistema de Biblioteca", "Algoritmo de Machine Learning", "App de Gerenciamento Acadêmico"],
    "learnings": ["Algoritmos e Estruturas de Dados", "Engenharia de Software", "Inteligência Artificial"],
    "achievements": ["Formado com honras", "Projeto de TCC premiado"]
  },
  {
    "title": "Curso Técnico em Informática",
    "company": "ETEC",
    "description": "Curso técnico focado em desenvolvimento web e desktop...",
    "startDate": "2016-02-01",
    "endDate": "2017-12-01",
    "languages": ["PHP", "HTML", "CSS", "JavaScript"],
    "databases": ["MySQL"],
    "projects": ["Site Institucional", "Sistema de Cadastro"],
    "learnings": ["Desenvolvimento Web", "Banco de Dados", "Design"],
    "achievements": ["Melhor aluno da turma", "Projeto integrador destaque"]
  }
]
```

#### `README.md`
```markdown
# Career Data Repository

Este repositório contém os dados de experiência profissional e formação acadêmica para o site de portfólio.

## Estrutura

- `jobs.json` - Experiências profissionais
- `education.json` - Formação acadêmica
- `schema.json` - Esquema de validação dos dados

## Como Atualizar

1. Edite os arquivos JSON diretamente no GitHub
2. As alterações aparecerão automaticamente no portfólio
3. Mantenha o formato dos dados conforme o schema

## Campos Obrigatórios

- `title`: Título do cargo/curso
- `description`: Descrição detalhada
- `startDate`: Data de início (formato YYYY-MM-DD)
- `endDate`: Data de fim (ou "At the moment" para atual)
- `languages`: Array de tecnologias/linguagens
- `databases`: Array de bancos de dados
- `projects`: Array de projetos principais
- `learnings`: Array de aprendizados

## Campos Opcionais

- `company`: Nome da empresa/instituição
- `achievements`: Array de conquistas/realizações
- `linkedInUrl`: URL do LinkedIn relacionado
```

## Como Funciona a Integração

O portfólio automaticamente:

1. **Busca dados do repositório**: Usa a API do GitHub para acessar os arquivos JSON
2. **Fallback local**: Se o repositório não existir, usa dados locais
3. **Cache inteligente**: Carrega dados rapidamente para melhor experiência
4. **Integração LinkedIn**: Enriquece os dados com links para seu perfil
5. **Tradução automática**: Labels são traduzidos baseado no idioma selecionado

## Vantagens

- ✅ **Atualizações rápidas**: Edite diretamente no GitHub
- ✅ **Sem deploy**: Mudanças aparecem imediatamente
- ✅ **Versionamento**: Histórico completo das alterações
- ✅ **Backup**: Dados seguros no GitHub
- ✅ **Colaboração**: Outros podem sugerir mudanças via PR
- ✅ **LinkedIn**: Integração com perfil profissional

## LinkedIn Integration

O sistema também inclui integração com LinkedIn:

- **Botão direto**: Link para seu perfil profissional
- **Enriquecimento**: Adiciona contexto LinkedIn aos dados
- **Modal detalhado**: Informações expandidas sobre experiências
- **Compartilhamento**: Facilita compartilhar seu portfólio

## Próximos Passos

1. Crie o repositório `career-data` no seu GitHub
2. Adicione os arquivos JSON com seus dados
3. Teste o funcionamento no portfólio
4. Mantenha os dados sempre atualizados

O portfólio irá detectar automaticamente o novo repositório e começar a usar os dados de lá!
