import type { Language } from '../styles/languages/LanguageProvider';

/**
 * Career data, written from the CV (only facts that appear there).
 * Text is per language; dates and tech lists are shared.
 * When adding a number or claim, make sure it is on the CV first.
 */

export type ExperienceKind = 'professional' | 'academic';

export interface ExperienceText {
    title: string;
    description: string;
    achievements: string[];
    projects: string[];
    learnings: string[];
}

export interface ExperienceData {
    kind: ExperienceKind;
    company: string;
    /** Previous name of the same employer (e.g. a division acquired by another company). */
    formerly?: string;
    startDate: string;
    /** "YYYY-MM-DD" or "At the moment" */
    endDate: string;
    languages: string[];
    databases: string[];
    text: Record<Language, ExperienceText>;
}

export const LINKEDIN_URL = 'https://www.linkedin.com/in/wilton-software-engineer';

export const CAREER_DATA: ExperienceData[] = [
    // ------------------------------------------------------------------ professional
    {
        kind: 'professional',
        company: 'Platform Science',
        formerly: 'Trimble',
        startDate: '2024-05-01',
        endDate: 'At the moment',
        languages: ['Java', 'Kotlin', 'Python', 'Kafka', 'GraphQL', 'Terraform', 'TypeScript', 'Angular', 'React', 'React Native', 'Lua'],
        databases: ['Redis', 'PostgreSQL', 'DynamoDB'],
        text: {
            EN: {
                title: 'Senior Software Engineer',
                description: 'Started at Trimble; the Mobility division I work in was acquired by Platform Science — same team and product, new company. Building Vfleets, a fleet management platform: facial recognition and route calculation features with Java, Kotlin and Python on the back end and Angular, React and React Native on the front end. Focus on worker safety, event-driven microservices and well-tested code.',
                achievements: [
                    'Real-time AI detection of PPE / equipment compliance using Redis, a custom Lua script and Kafka across 3 microservices',
                    'Streaming of AI-detected violations to dashboards via WebSocket (Django)',
                    'Self-service driver photo registration with facial recognition and time-limited URLs',
                    'Driving-event category propagation (fatigue, distraction, speeding) with Java/Kotlin, Kafka and Redis',
                    'Snapshot-to-video pipeline on AWS Lambda (Python), provisioned with Terraform (SQS, S3, Lambda) and GitHub Actions',
                    'GraphQL adoption to cut over-fetching',
                ],
                projects: ['Vfleets — facial recognition & route calculation', 'PPE detection', 'Driver photo registration', 'Event category propagation', 'Snapshot-to-video pipeline'],
                learnings: ['Event-driven microservices with Kafka', 'Redis + Lua for performance', 'Infrastructure as Code with Terraform', 'CI/CD with GitHub Actions', 'Integrating AI into real-time products'],
            },
            BR: {
                title: 'Engenheiro de Software Sênior',
                description: 'Comecei na Trimble; a divisão de Mobility em que trabalho foi vendida para a Platform Science — mesmo time e produto, nova empresa. Construindo o Vfleets, uma plataforma de gestão de frotas: funcionalidades de reconhecimento facial e cálculo de rotas com Java, Kotlin e Python no back-end e Angular, React e React Native no front-end. Foco em segurança do trabalhador, microsserviços orientados a eventos e código bem testado.',
                achievements: [
                    'Detecção em tempo real, com IA, de EPIs / conformidade de equipamentos usando Redis, um script Lua próprio e Kafka em 3 microsserviços',
                    'Streaming das violações detectadas pela IA para dashboards via WebSocket (Django)',
                    'Cadastro de foto do motorista em autoatendimento, com reconhecimento facial e URLs com tempo limitado',
                    'Propagação de categorias de eventos de direção (fadiga, distração, excesso de velocidade) com Java/Kotlin, Kafka e Redis',
                    'Pipeline de snapshots para vídeo em AWS Lambda (Python), provisionado com Terraform (SQS, S3, Lambda) e GitHub Actions',
                    'Adoção de GraphQL para reduzir over-fetching',
                ],
                projects: ['Vfleets — reconhecimento facial e cálculo de rotas', 'Detecção de EPIs', 'Cadastro de foto do motorista', 'Propagação de categorias de eventos', 'Pipeline de snapshots para vídeo'],
                learnings: ['Microsserviços orientados a eventos com Kafka', 'Redis + Lua para performance', 'Infraestrutura como código com Terraform', 'CI/CD com GitHub Actions', 'IA integrada a produtos em tempo real'],
            },
            ES: {
                title: 'Ingeniero de Software Sénior',
                description: 'Empecé en Trimble; la división de Mobility en la que trabajo fue adquirida por Platform Science — mismo equipo y producto, nueva empresa. Construyendo Vfleets, una plataforma de gestión de flotas: funcionalidades de reconocimiento facial y cálculo de rutas con Java, Kotlin y Python en el back-end y Angular, React y React Native en el front-end. Enfoque en la seguridad del trabajador, microservicios orientados a eventos y código bien probado.',
                achievements: [
                    'Detección en tiempo real, con IA, de EPP / cumplimiento de equipos usando Redis, un script Lua propio y Kafka en 3 microservicios',
                    'Streaming de las infracciones detectadas por la IA a dashboards vía WebSocket (Django)',
                    'Registro de foto del conductor en autoservicio, con reconocimiento facial y URLs de tiempo limitado',
                    'Propagación de categorías de eventos de conducción (fatiga, distracción, exceso de velocidad) con Java/Kotlin, Kafka y Redis',
                    'Pipeline de snapshots a video en AWS Lambda (Python), aprovisionado con Terraform (SQS, S3, Lambda) y GitHub Actions',
                    'Adopción de GraphQL para reducir el over-fetching',
                ],
                projects: ['Vfleets — reconocimiento facial y cálculo de rutas', 'Detección de EPP', 'Registro de foto del conductor', 'Propagación de categorías de eventos', 'Pipeline de snapshots a video'],
                learnings: ['Microservicios orientados a eventos con Kafka', 'Redis + Lua para rendimiento', 'Infraestructura como código con Terraform', 'CI/CD con GitHub Actions', 'IA integrada a productos en tiempo real'],
            },
        },
    },
    {
        kind: 'professional',
        company: 'IBM',
        startDate: '2022-11-01',
        endDate: '2024-04-30',
        languages: ['Java', 'Python', 'Terraform', 'CloudFormation', 'Step Functions', 'Lambda', 'ECS'],
        databases: ['RDS Aurora', 'PostgreSQL', 'DynamoDB', 'OpenSearch', 'Athena'],
        text: {
            EN: {
                title: 'Software Application Developer',
                description: 'Cloud-native solutions on AWS for Itaú, one of the largest banks in Brazil: process automation, international exchange (SWIFT), account opening and customer segmentation. TDD with mutation testing, and mentoring colleagues on AWS and clean code.',
                achievements: [
                    'Serverless report automation (S3, Lambda, Step Functions, RDS) that replaced the manual work of 10+ people per branch',
                    'Reconciliation of lost SWIFT messages across OpenSearch, PostgreSQL and Aurora, with safe reprocessing via Lambda + SQS',
                    'Java BFFs on ECS behind API Gateway, ALB and CloudFront handling ~150k requests/day, with SLAs monitored in CloudWatch, Splunk and Grafana',
                    'Segment targeting: parallelized lookups made responses 2s faster and raised account-opening completion by 4%',
                    'Rules engine (Step Functions + DynamoDB) evolved into an Athena data mesh with ML',
                    'Mentored colleagues on AWS, Terraform and SOLID',
                ],
                projects: ['Report automation for bank branches', 'SWIFT message reconciliation', 'Account opening BFF', 'Customer segment targeting'],
                learnings: ['TDD and mutation testing', 'Serverless architecture on AWS', 'Banking integrations (SWIFT)', 'Observability and SLAs', 'Mentoring'],
            },
            BR: {
                title: 'Desenvolvedor de Aplicações',
                description: 'Soluções cloud-native na AWS para o Itaú: automação de processos, câmbio internacional (SWIFT), abertura de contas e segmentação de clientes. TDD com testes de mutação e mentoria de colegas em AWS e código limpo.',
                achievements: [
                    'Automação serverless de relatórios (S3, Lambda, Step Functions, RDS) que substituiu o trabalho manual de mais de 10 pessoas por agência',
                    'Reconciliação de mensagens SWIFT perdidas entre OpenSearch, PostgreSQL e Aurora, com reprocessamento seguro via Lambda + SQS',
                    'BFFs em Java no ECS atrás de API Gateway, ALB e CloudFront com ~150 mil requisições/dia e SLAs monitorados em CloudWatch, Splunk e Grafana',
                    'Direcionamento por segmento: consultas paralelizadas deixaram a resposta 2s mais rápida e aumentaram em 4% a conclusão de abertura de contas',
                    'Motor de regras (Step Functions + DynamoDB) evoluído para um data mesh em Athena com ML',
                    'Mentoria de colegas em AWS, Terraform e SOLID',
                ],
                projects: ['Automação de relatórios das agências', 'Reconciliação de mensagens SWIFT', 'BFF de abertura de contas', 'Direcionamento por segmento de clientes'],
                learnings: ['TDD e testes de mutação', 'Arquitetura serverless na AWS', 'Integrações bancárias (SWIFT)', 'Observabilidade e SLAs', 'Mentoria'],
            },
            ES: {
                title: 'Desarrollador de Aplicaciones',
                description: 'Soluciones cloud-native en AWS para Itaú, uno de los mayores bancos de Brasil: automatización de procesos, cambio internacional (SWIFT), apertura de cuentas y segmentación de clientes. TDD con pruebas de mutación y mentoría a colegas en AWS y código limpio.',
                achievements: [
                    'Automatización serverless de informes (S3, Lambda, Step Functions, RDS) que reemplazó el trabajo manual de más de 10 personas por sucursal',
                    'Conciliación de mensajes SWIFT perdidos entre OpenSearch, PostgreSQL y Aurora, con reprocesamiento seguro vía Lambda + SQS',
                    'BFFs en Java sobre ECS detrás de API Gateway, ALB y CloudFront con ~150 mil solicitudes/día y SLAs monitoreados en CloudWatch, Splunk y Grafana',
                    'Segmentación: consultas paralelizadas hicieron la respuesta 2s más rápida y aumentaron en un 4% la finalización de apertura de cuentas',
                    'Motor de reglas (Step Functions + DynamoDB) evolucionado a un data mesh en Athena con ML',
                    'Mentoría a colegas en AWS, Terraform y SOLID',
                ],
                projects: ['Automatización de informes de sucursales', 'Conciliación de mensajes SWIFT', 'BFF de apertura de cuentas', 'Segmentación de clientes'],
                learnings: ['TDD y pruebas de mutación', 'Arquitectura serverless en AWS', 'Integraciones bancarias (SWIFT)', 'Observabilidad y SLAs', 'Mentoría'],
            },
        },
    },
    {
        kind: 'professional',
        company: 'EVOP',
        startDate: '2019-06-01',
        endDate: '2022-07-31',
        languages: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'RabbitMQ', 'SQS', 'JSF'],
        databases: ['PostgreSQL', 'MySQL'],
        text: {
            EN: {
                title: 'Software Engineer',
                description: 'Full-stack developer on an ERP for construction companies, evolving a monolith toward cloud and microservices with Java (Spring) and Angular.',
                achievements: [
                    'Java report engine library to generate and read Excel and PDF files',
                    'Billing microservice integrated with the monolith via Kafka, RabbitMQ, SQS and ASAAS webhooks',
                    'HR dashboard in Java and Angular',
                    'Cost-apportionment feature with Spring Boot, MVC and Security',
                ],
                projects: ['Excel/PDF report engine', 'ASAAS billing microservice', 'HR dashboard', 'Cost apportionment'],
                learnings: ['Spring ecosystem (Boot, MVC, Security)', 'Messaging with Kafka, RabbitMQ and SQS', 'Monolith-to-microservices evolution', 'Payment gateway integration'],
            },
            BR: {
                title: 'Engenheiro de Software',
                description: 'Desenvolvedor full-stack em um ERP para construtoras, evoluindo um monólito para cloud e microsserviços com Java (Spring) e Angular.',
                achievements: [
                    'Biblioteca Java de geração e leitura de relatórios em Excel e PDF',
                    'Microsserviço de cobrança integrado ao monólito via Kafka, RabbitMQ, SQS e webhooks do ASAAS',
                    'Dashboard de RH em Java e Angular',
                    'Funcionalidade de rateio de custos com Spring Boot, MVC e Security',
                ],
                projects: ['Motor de relatórios Excel/PDF', 'Microsserviço de cobrança ASAAS', 'Dashboard de RH', 'Rateio de custos'],
                learnings: ['Ecossistema Spring (Boot, MVC, Security)', 'Mensageria com Kafka, RabbitMQ e SQS', 'Evolução de monólito para microsserviços', 'Integração com gateway de pagamento'],
            },
            ES: {
                title: 'Ingeniero de Software',
                description: 'Desarrollador full-stack en un ERP para constructoras, evolucionando un monolito hacia la nube y microservicios con Java (Spring) y Angular.',
                achievements: [
                    'Biblioteca Java para generar y leer informes en Excel y PDF',
                    'Microservicio de cobros integrado al monolito vía Kafka, RabbitMQ, SQS y webhooks de ASAAS',
                    'Dashboard de RR. HH. en Java y Angular',
                    'Funcionalidad de prorrateo de costos con Spring Boot, MVC y Security',
                ],
                projects: ['Motor de informes Excel/PDF', 'Microservicio de cobros ASAAS', 'Dashboard de RR. HH.', 'Prorrateo de costos'],
                learnings: ['Ecosistema Spring (Boot, MVC, Security)', 'Mensajería con Kafka, RabbitMQ y SQS', 'Evolución de monolito a microservicios', 'Integración con pasarela de pagos'],
            },
        },
    },
    {
        kind: 'professional',
        company: 'EngeFour Jr.',
        startDate: '2016-09-01',
        endDate: '2017-08-31',
        languages: ['Java', 'Kotlin', 'Android', 'C++', 'Drogon', 'PHP'],
        databases: ['MySQL', 'MongoDB'],
        text: {
            EN: {
                title: 'Software Developer',
                description: 'Junior enterprise: native Android apps in Java and Kotlin, microservices in C++ with the Drogon framework and the company website in PHP.',
                achievements: [
                    'Native Android apps in Java and Kotlin',
                    'Microservices in C++ with Drogon',
                    'Company website in PHP',
                ],
                projects: ['Sales management app', 'Room reservation system', 'University restaurant menu app', 'EngeFour Jr. website'],
                learnings: ['Mobile development from scratch', 'Gathering client requirements', 'Microservices in C++'],
            },
            BR: {
                title: 'Desenvolvedor de Software',
                description: 'Empresa júnior: apps Android nativos em Java e Kotlin, microsserviços em C++ com o framework Drogon e o site da empresa em PHP.',
                achievements: [
                    'Apps Android nativos em Java e Kotlin',
                    'Microsserviços em C++ com Drogon',
                    'Site da empresa em PHP',
                ],
                projects: ['App de gestão de vendas', 'Sistema de reserva de salas', 'App do cardápio do restaurante universitário', 'Site da EngeFour Jr.'],
                learnings: ['Desenvolvimento mobile do zero', 'Levantamento de requisitos com clientes', 'Microsserviços em C++'],
            },
            ES: {
                title: 'Desarrollador de Software',
                description: 'Empresa júnior: apps Android nativas en Java y Kotlin, microservicios en C++ con el framework Drogon y el sitio web de la empresa en PHP.',
                achievements: [
                    'Apps Android nativas en Java y Kotlin',
                    'Microservicios en C++ con Drogon',
                    'Sitio web de la empresa en PHP',
                ],
                projects: ['App de gestión de ventas', 'Sistema de reserva de salas', 'App del menú del comedor universitario', 'Sitio web de EngeFour Jr.'],
                learnings: ['Desarrollo móvil desde cero', 'Levantamiento de requisitos con clientes', 'Microservicios en C++'],
            },
        },
    },
    // ------------------------------------------------------------------ academic
    {
        kind: 'academic',
        company: 'Estácio',
        startDate: '2024-02-01',
        endDate: '2025-08-31',
        languages: ['React Native', 'Python', 'PySpark', 'Hadoop', 'Arduino', 'MQTT'],
        databases: ['AWS RDS Aurora', 'S3', 'DynamoDB'],
        text: {
            EN: {
                title: 'Computer Science Professor',
                description: 'Taught practical and theoretical classes on mobile development (React Native), cloud computing (AWS), IoT with MQTT, cybersecurity (OWASP) and big data (PySpark, Hadoop), guiding students through hands-on projects.',
                achievements: [],
                projects: ['React Native: from zero to MVP', 'AWS cloud labs', 'Industry 4.0 IoT with Arduino and MQTT', 'Cybersecurity with OWASP', 'Big data with PySpark and Hadoop'],
                learnings: ['Teaching technical subjects', 'Mentoring students on real projects'],
            },
            BR: {
                title: 'Professor de Ciência da Computação',
                description: 'Aulas práticas e teóricas de desenvolvimento mobile (React Native), computação em nuvem (AWS), IoT com MQTT, cibersegurança (OWASP) e big data (PySpark, Hadoop), guiando os alunos em projetos práticos.',
                achievements: [],
                projects: ['React Native: do zero ao MVP', 'Laboratórios de cloud na AWS', 'IoT para Indústria 4.0 com Arduino e MQTT', 'Cibersegurança com OWASP', 'Big data com PySpark e Hadoop'],
                learnings: ['Ensino de disciplinas técnicas', 'Mentoria de alunos em projetos reais'],
            },
            ES: {
                title: 'Profesor de Ciencias de la Computación',
                description: 'Clases prácticas y teóricas de desarrollo móvil (React Native), computación en la nube (AWS), IoT con MQTT, ciberseguridad (OWASP) y big data (PySpark, Hadoop), guiando a los alumnos en proyectos prácticos.',
                achievements: [],
                projects: ['React Native: de cero a MVP', 'Laboratorios de cloud en AWS', 'IoT para Industria 4.0 con Arduino y MQTT', 'Ciberseguridad con OWASP', 'Big data con PySpark y Hadoop'],
                learnings: ['Enseñanza de materias técnicas', 'Mentoría de alumnos en proyectos reales'],
            },
        },
    },
    {
        kind: 'academic',
        company: 'UFMS',
        startDate: '2020-03-01',
        endDate: '2022-09-30',
        languages: ['Python', 'C++', 'Java'],
        databases: [],
        text: {
            EN: {
                title: "Master's in Computer Science",
                description: 'Research on the Dynamic Vehicle Routing Problem: designed an algorithm to solve it, evaluated with a metric based on fuel cost (km/l) and the number of vehicles used.',
                achievements: [
                    'Thesis: an algorithm for the dynamic vehicle routing problem',
                    'Paper published at CBA 2020 (Brazilian Automation Congress)',
                ],
                projects: ['Dynamic vehicle routing algorithm'],
                learnings: ['Optimization and operations research', 'Scientific research and writing'],
            },
            BR: {
                title: 'Mestrado em Ciência da Computação',
                description: 'Pesquisa sobre o Problema de Roteamento Dinâmico de Veículos: projetei um algoritmo para resolvê-lo, avaliado por uma métrica baseada no custo de combustível (km/l) e no número de veículos utilizados.',
                achievements: [
                    'Dissertação: algoritmo para o problema de roteamento dinâmico de veículos',
                    'Artigo publicado no CBA 2020 (Congresso Brasileiro de Automática)',
                ],
                projects: ['Algoritmo de roteamento dinâmico de veículos'],
                learnings: ['Otimização e pesquisa operacional', 'Pesquisa e escrita científica'],
            },
            ES: {
                title: 'Máster en Ciencias de la Computación',
                description: 'Investigación sobre el Problema de Ruteo Dinámico de Vehículos: diseñé un algoritmo para resolverlo, evaluado con una métrica basada en el costo de combustible (km/l) y el número de vehículos utilizados.',
                achievements: [
                    'Tesis: algoritmo para el problema de ruteo dinámico de vehículos',
                    'Artículo publicado en el CBA 2020 (Congreso Brasileño de Automática)',
                ],
                projects: ['Algoritmo de ruteo dinámico de vehículos'],
                learnings: ['Optimización e investigación operativa', 'Investigación y escritura científica'],
            },
        },
    },
    {
        kind: 'academic',
        company: 'UFMS',
        startDate: '2015-01-01',
        endDate: '2019-12-31',
        languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'MATLAB', 'Assembly'],
        databases: ['MySQL', 'PostgreSQL'],
        text: {
            EN: {
                title: "Bachelor's in Computer Engineering",
                description: 'Computer engineering: software development, hardware, algorithms, data structures and engineering math. Final project on the design of controllers for static power converters.',
                achievements: [],
                projects: ['Final project: controllers for static power converters'],
                learnings: ['Algorithms and data structures', 'Hardware–software integration', 'Engineering math'],
            },
            BR: {
                title: 'Engenharia da Computação',
                description: 'Engenharia da computação: desenvolvimento de software, hardware, algoritmos, estruturas de dados e matemática para engenharia. TCC sobre projeto de controladores para conversores estáticos de potência.',
                achievements: [],
                projects: ['TCC: controladores para conversores estáticos de potência'],
                learnings: ['Algoritmos e estruturas de dados', 'Integração hardware–software', 'Matemática para engenharia'],
            },
            ES: {
                title: 'Ingeniería en Computación',
                description: 'Ingeniería en computación: desarrollo de software, hardware, algoritmos, estructuras de datos y matemáticas para ingeniería. Proyecto final sobre el diseño de controladores para convertidores estáticos de potencia.',
                achievements: [],
                projects: ['Proyecto final: controladores para convertidores estáticos de potencia'],
                learnings: ['Algoritmos y estructuras de datos', 'Integración hardware–software', 'Matemáticas para ingeniería'],
            },
        },
    },
];
