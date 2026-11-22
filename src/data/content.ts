export type Lang = "fr" | "en";

/** Illustrative English headlines for the sentiment demo (fictional, not from the dataset). */
export const demoHeadlines = [
  "SOL rallies 12% as spot ETF inflows hit record",
  "Solana network suffers 5-hour outage as validators race to restart",
  "Solana Foundation publishes quarterly validator report",
  "Solana upgrade not delayed, core developers confirm",
  "$SOL dumps after major DEX exploit drains liquidity pool",
] as const;

export const content = {
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      themeLight: "Passer en mode clair",
      themeDark: "Passer en mode sombre",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    intro: "Portfolio — Édition 2026",
    hero: {
      edition: "Portfolio — Édition 2026",
      location: "Sousse, Tunisie",
      status: "Ouvert aux opportunités",
      role: "Ingénieur informatique · Data Science & IA",
      tagline:
        "Je conçois des plateformes web et des systèmes d’intelligence artificielle — de l’ERP métier aux pipelines de prédiction.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir les projets",
      scroll: "Défiler",
      now: "En préparation",
      nowProject: "CryptoNews Intelligence — Solana",
    },
    about: {
      title: "À propos",
      heading: { pre: "Du code métier aux ", em: "modèles qui prédisent." },
      lead: "Étudiant ingénieur en informatique à Polytechnique Sousse, je construis des produits full-stack ancrés dans la data et l’IA.",
      body: "Après un cycle préparatoire à l’IPEIM, je développe des applications web, mobiles et des modules de machine learning en conditions réelles — ERP, analyse crypto, détection de fraude. Autonomie, livraison rapide et exigence technique guident mon approche.",
      stats: [
        { value: "3", label: "stages tech" },
        { value: "20", label: "modules livrés en 8 semaines" },
        { value: "14,1", label: "moyenne 2ᵉ année" },
      ],
      educationTitle: "Formation",
      education: [
        {
          school: "Polytechnique Sousse",
          degree: "Diplôme d’ingénieur en informatique",
          period: "Sep. 2024 – Juin 2027",
          detail: "Moyennes : 13,5/20 (1ʳᵉ) · 14,1/20 (2ᵉ)",
        },
        {
          school: "IPEIM — Monastir",
          degree: "Cycle préparatoire",
          period: "Sep. 2021 – Juin 2024",
          detail: "Formation scientifique intensive",
        },
      ],
    },
    experience: {
      title: "Expérience",
      heading: { pre: "Livré en ", em: "conditions réelles." },
      subtitle: "Stages et missions en conditions réelles.",
      items: [
        {
          role: "Stagiaire — Data Science & IA (CryptoQuant Pilot)",
          company: "Whitecape Technologies",
          place: "Sousse, TN",
          period: "Juil. 2026 – Août 2026",
          points: [
            "Plateforme d’analyse et de prédiction crypto : 20 modules en 8 semaines (Angular 22, FastAPI, MongoDB, Redis, Docker).",
            "Module IA (Random Forest, XGBoost, ensemble) et finance quantitative (Markowitz, Monte Carlo, VaR/CVaR/Sharpe/Sortino).",
            "Dashboard temps réel (WebSocket), backtesting, CI/CD GitHub Actions et déploiement Docker Compose.",
          ],
        },
        {
          role: "Stagiaire — Développement Full-Stack (ERP de facturation)",
          company: "Creative Media",
          place: "Sousse, TN",
          period: "Sep. 2025 – Oct. 2025",
          points: [
            "ERP web (React, FastAPI, MySQL) pour automatiser clients, produits, factures et paiements.",
            "Génération de factures, suivi des stocks et édition de rapports PDF.",
          ],
        },
        {
          role: "Stagiaire — Conception 3D & structures photovoltaïques",
          company: "Cap Sud",
          place: "Sousse, TN",
          period: "Juin 2023 – Sep. 2023",
          points: [
            "Modélisation 3D de composants structurels métalliques pour systèmes de support photovoltaïques.",
          ],
        },
      ],
      volunteer: {
        title: "Bénévolat",
        role: "Sporti Kids — Polytech Sousse · Association Arij · SOS Akouda",
        period: "Mai 2025",
        detail:
          "Co-création d’une initiative mini-gym pour le bien-être des enfants ; lancement le 17 mai 2025 à l’Hôtel Marhaba Palace.",
      },
    },
    projects: {
      title: "Projets",
      heading: { pre: "Travaux ", em: "sélectionnés." },
      subtitle: "Sélection de réalisations full-stack et machine learning.",
      featuredLabel: "Projet phare",
      featured: {
        status: "En préparation",
        term: "Projet semestriel NLP · 2026–2027",
        tag: "NLP · Analyse de sentiment · Étude événementielle",
        name: "CryptoNews Intelligence",
        nameEm: "Solana",
        description:
          "Classer le sentiment de marché des titres d’actualité Solana — haussier, neutre ou baissier — avec un score de confiance, puis étudier la réaction historique de SOL à +1 h, +4 h et +24 h, sans aucune lecture causale.",
        objectivesTitle: "Objectifs mesurables",
        objectives: [
          {
            code: "O1",
            value: "1 500+",
            label: "articles Solana horodatés, ~900 titres annotés à la main (κ ≥ 0,6)",
          },
          {
            code: "O2",
            value: "4",
            label: "systèmes comparés en macro-F1 · 5 graines · IC bootstrap 95 %",
          },
          {
            code: "O3",
            value: "100+",
            label: "erreurs catégorisées · transfert crypto général → Solana",
          },
          {
            code: "O4",
            value: "3",
            label: "horizons de rendement anormal de SOL · correction de Holm",
          },
        ],
        pipelineTitle: "Pipeline",
        pipeline: [
          "Collecte",
          "Dédoublonnage",
          "Annotation",
          "Prétraitement",
          "Modèles",
          "Évaluation",
          "Analyse d’erreurs",
          "Étude événementielle",
        ],
        specs: [
          {
            label: "Données",
            value: "DLT-Sentiment-News (~23 300 titres) + corpus Solana annoté",
          },
          {
            label: "Modèles",
            value: "Majoritaire · VADER · TF-IDF + LR · DistilBERT / FinBERT",
          },
          {
            label: "Évaluation",
            value: "Découpage chronologique · macro-F1 · test apparié",
          },
          {
            label: "Marché",
            value: "OHLCV horaires SOL & BTC · rendement anormal (β sur 30 j)",
          },
        ],
        stack: ["Python", "Transformers", "PyTorch", "scikit-learn", "VADER", "pandas"],
        disclaimer: "Projet académique — ni conseil financier, ni prédiction de prix.",
        link: "https://github.com/MedJegham",
        cta: "Suivre le projet",
        demo: {
          title: "sentiment.classify()",
          inputLabel: "Titre d’actualité (anglais)",
          placeholder: "Saisissez un titre en anglais…",
          examples: "Exemples",
          auto: "auto",
          manual: "manuel",
          tokens: "Signaux détectés",
          noSignal: "Aucun signal lexical — classe neutre par défaut.",
          classes: { bullish: "Haussier", neutral: "Neutre", bearish: "Baissier" },
          confidence: "Confiance",
          legend: { pos: "haussier", neg: "baissier", negation: "négation", ticker: "ticker" },
          note: "Démo d’interface : lexique jouet exécuté dans votre navigateur, pas le modèle du projet. Titres fictifs.",
        },
      },
      othersLabel: "Autres réalisations",
      items: [
        {
          name: "CryptoOracle",
          tag: "Mobile · IA",
          description:
            "Application Flutter d’intelligence de marché crypto : données CoinGecko en temps réel et modèles IA pour prédire les tendances court terme (h+1, h+4).",
          stack: ["Flutter", "Dart", "Riverpod", "REST API", "ML"],
          link: "https://github.com/MedJegham",
        },
        {
          name: "Détection de fraude bancaire",
          tag: "Machine Learning",
          description:
            "Modèle ML pour détecter la fraude sur des jeux de données déséquilibrés : prétraitement, SMOTE, Random Forest et XGBoost, interface Streamlit.",
          stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
          link: "https://github.com/MedJegham",
        },
        {
          name: "CryptoQuant Pilot",
          tag: "Full-Stack · Quant",
          description:
            "Plateforme d’analyse crypto livrée en autonomie : prédiction ML, portefeuille virtuel, backtesting et dashboard temps réel.",
          stack: ["Angular", "FastAPI", "MongoDB", "Redis", "Docker"],
          link: "https://github.com/MedJegham",
        },
      ],
    },
    skills: {
      title: "Compétences",
      heading: { pre: "Une stack ", em: "de bout en bout." },
      subtitle: "Stack technique utilisée en projet et en stage.",
      groups: [
        {
          name: "Langages",
          items: ["Python", "Java", "C++", "JavaScript", "SQL", "PHP", "HTML/CSS"],
        },
        {
          name: "ML & Data",
          items: [
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Clustering",
            "ACP",
            "SMOTE",
            "Feature Engineering",
          ],
        },
        {
          name: "Deep Learning",
          items: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "LSTM", "OpenCV"],
        },
        {
          name: "Frameworks",
          items: ["FastAPI", "Django", "React.js", "Node.js", ".NET/Blazor", "Flutter"],
        },
        {
          name: "Bases de données",
          items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
        },
        {
          name: "Outils & DevOps",
          items: ["Git", "Docker", "GitHub Actions", "Linux", "Jupyter"],
        },
      ],
      certifications: {
        title: "Certifications",
        items: [
          "Certiport — IT Specialist Python",
          "Cisco — Python Essentials 2",
          "DataCamp — Supervised & Unsupervised Learning, Pandas, Image Processing",
          "Binance Academy — Trading, DeFi, On-Chain, AI Agents",
          "Anthropic — Claude 101 · Claude Code 101",
        ],
      },
    },
    contact: {
      title: "Contact",
      heading: { pre: "Construisons quelque chose ", em: "d’utile." },
      subtitle: "Ouvert aux stages, missions et collaborations tech.",
      email: "mje.etudes@gmail.com",
      phone: "+216 99 598 368",
      linkedin: "linkedin.com/in/mohamed-jegham",
      github: "github.com/MedJegham",
      cta: "Écrire un e-mail",
      labels: { email: "E-mail", phone: "Téléphone", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: "Mohamed Jegham — Portfolio",
    footerCredit: "Conçu & développé par Mohamed Jegham",
    backToTop: "Haut de page",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    intro: "Portfolio — 2026 Edition",
    hero: {
      edition: "Portfolio — 2026 Edition",
      location: "Sousse, Tunisia",
      status: "Open to opportunities",
      role: "Computer Engineering · Data Science & AI",
      tagline:
        "I design web platforms and intelligent systems — from business ERPs to prediction pipelines.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
      scroll: "Scroll",
      now: "In preparation",
      nowProject: "CryptoNews Intelligence — Solana",
    },
    about: {
      title: "About",
      heading: { pre: "From business code to ", em: "models that predict." },
      lead: "Computer engineering student at Polytechnique Sousse, building full-stack products grounded in data and AI.",
      body: "After a preparatory cycle at IPEIM, I ship web, mobile, and machine-learning solutions in real environments — ERPs, crypto analytics, fraud detection. Autonomy, fast delivery, and technical rigor shape how I work.",
      stats: [
        { value: "3", label: "tech internships" },
        { value: "20", label: "modules shipped in 8 weeks" },
        { value: "14.1", label: "2nd-year GPA /20" },
      ],
      educationTitle: "Education",
      education: [
        {
          school: "Polytechnique Sousse",
          degree: "Computer Engineering Degree",
          period: "Sep. 2024 – Jun. 2027",
          detail: "GPA: 13.5/20 (1st) · 14.1/20 (2nd)",
        },
        {
          school: "IPEIM — Monastir",
          degree: "Preparatory Cycle",
          period: "Sep. 2021 – Jun. 2024",
          detail: "Intensive scientific foundation",
        },
      ],
    },
    experience: {
      title: "Experience",
      heading: { pre: "Shipped in ", em: "real conditions." },
      subtitle: "Internships delivered in production conditions.",
      items: [
        {
          role: "Intern — Data Science & AI (CryptoQuant Pilot)",
          company: "Whitecape Technologies",
          place: "Sousse, TN",
          period: "Jul. 2026 – Aug. 2026",
          points: [
            "End-to-end crypto analysis & prediction platform: 20 modules in 8 weeks (Angular 22, FastAPI, MongoDB, Redis, Docker).",
            "ML prediction (Random Forest, XGBoost, hybrid ensemble) and quantitative finance (Markowitz, Monte Carlo, VaR/CVaR/Sharpe/Sortino).",
            "Real-time dashboard (WebSocket), backtesting, CI/CD with GitHub Actions, Docker Compose deployment.",
          ],
        },
        {
          role: "Intern — Full-Stack Development (Invoicing ERP)",
          company: "Creative Media",
          place: "Sousse, TN",
          period: "Sep. 2025 – Oct. 2025",
          points: [
            "Web ERP (React, FastAPI, MySQL) to automate clients, products, invoices, and payments.",
            "Invoice generation, stock tracking, and PDF report editing.",
          ],
        },
        {
          role: "Intern — 3D Design & Photovoltaic Structures",
          company: "Cap Sud",
          place: "Sousse, TN",
          period: "Jun. 2023 – Sep. 2023",
          points: [
            "3D modeling of metal structural components for photovoltaic support systems.",
          ],
        },
      ],
      volunteer: {
        title: "Volunteer",
        role: "Sporti Kids — Polytech Sousse · Association Arij · SOS Akouda",
        period: "May 2025",
        detail:
          "Co-created a mini-gym initiative for children’s well-being; launch event on May 17, 2025 at Hôtel Marhaba Palace.",
      },
    },
    projects: {
      title: "Projects",
      heading: { pre: "Selected ", em: "work." },
      subtitle: "Selected full-stack and machine-learning work.",
      featuredLabel: "Featured project",
      featured: {
        status: "In preparation",
        term: "Semester NLP project · 2026–2027",
        tag: "NLP · Sentiment analysis · Event study",
        name: "CryptoNews Intelligence",
        nameEm: "Solana",
        description:
          "Classify the market sentiment of Solana news headlines — bullish, neutral or bearish — with a confidence score, then study SOL’s historical reaction at +1h, +4h and +24h, with no causal claims.",
        objectivesTitle: "Measurable objectives",
        objectives: [
          {
            code: "O1",
            value: "1,500+",
            label: "timestamped Solana articles, ~900 headlines hand-labelled (κ ≥ 0.6)",
          },
          {
            code: "O2",
            value: "4",
            label: "systems compared on macro-F1 · 5 seeds · 95% bootstrap CI",
          },
          {
            code: "O3",
            value: "100+",
            label: "categorised errors · transfer from general crypto → Solana",
          },
          {
            code: "O4",
            value: "3",
            label: "SOL abnormal-return horizons · Holm correction",
          },
        ],
        pipelineTitle: "Pipeline",
        pipeline: [
          "Collection",
          "Deduplication",
          "Annotation",
          "Preprocessing",
          "Models",
          "Evaluation",
          "Error analysis",
          "Event study",
        ],
        specs: [
          {
            label: "Data",
            value: "DLT-Sentiment-News (~23,300 headlines) + annotated Solana corpus",
          },
          {
            label: "Models",
            value: "Majority · VADER · TF-IDF + LR · DistilBERT / FinBERT",
          },
          {
            label: "Evaluation",
            value: "Chronological split · macro-F1 · paired test",
          },
          {
            label: "Market",
            value: "Hourly SOL & BTC OHLCV · abnormal return (30-day β)",
          },
        ],
        stack: ["Python", "Transformers", "PyTorch", "scikit-learn", "VADER", "pandas"],
        disclaimer: "Academic project — no financial advice, no price prediction.",
        link: "https://github.com/MedJegham",
        cta: "Follow the project",
        demo: {
          title: "sentiment.classify()",
          inputLabel: "News headline (English)",
          placeholder: "Type an English headline…",
          examples: "Examples",
          auto: "auto",
          manual: "manual",
          tokens: "Detected signals",
          noSignal: "No lexical signal — defaults to neutral.",
          classes: { bullish: "Bullish", neutral: "Neutral", bearish: "Bearish" },
          confidence: "Confidence",
          legend: { pos: "bullish", neg: "bearish", negation: "negation", ticker: "ticker" },
          note: "Interface demo: a toy lexicon running in your browser, not the project’s model. Headlines are fictional.",
        },
      },
      othersLabel: "More work",
      items: [
        {
          name: "CryptoOracle",
          tag: "Mobile · AI",
          description:
            "Flutter crypto market intelligence app: real-time CoinGecko data and AI models for short-term trend prediction (h+1, h+4).",
          stack: ["Flutter", "Dart", "Riverpod", "REST API", "ML"],
          link: "https://github.com/MedJegham",
        },
        {
          name: "Bank Fraud Detection",
          tag: "Machine Learning",
          description:
            "ML model to detect fraud in highly imbalanced datasets: preprocessing, SMOTE, Random Forest, XGBoost, Streamlit UI.",
          stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
          link: "https://github.com/MedJegham",
        },
        {
          name: "CryptoQuant Pilot",
          tag: "Full-Stack · Quant",
          description:
            "Crypto analysis platform built end-to-end: ML prediction, virtual portfolio, backtesting, and real-time dashboard.",
          stack: ["Angular", "FastAPI", "MongoDB", "Redis", "Docker"],
          link: "https://github.com/MedJegham",
        },
      ],
    },
    skills: {
      title: "Skills",
      heading: { pre: "An ", em: "end-to-end stack." },
      subtitle: "Technical stack used in projects and internships.",
      groups: [
        {
          name: "Languages",
          items: ["Python", "Java", "C++", "JavaScript", "SQL", "PHP", "HTML/CSS"],
        },
        {
          name: "ML & Data",
          items: [
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Clustering",
            "PCA",
            "SMOTE",
            "Feature Engineering",
          ],
        },
        {
          name: "Deep Learning",
          items: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "LSTM", "OpenCV"],
        },
        {
          name: "Frameworks",
          items: ["FastAPI", "Django", "React.js", "Node.js", ".NET/Blazor", "Flutter"],
        },
        {
          name: "Databases",
          items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
        },
        {
          name: "Tools & DevOps",
          items: ["Git", "Docker", "GitHub Actions", "Linux", "Jupyter"],
        },
      ],
      certifications: {
        title: "Certifications",
        items: [
          "Certiport — IT Specialist Python",
          "Cisco — Python Essentials 2",
          "DataCamp — Supervised & Unsupervised Learning, Pandas, Image Processing",
          "Binance Academy — Trading, DeFi, On-Chain, AI Agents",
          "Anthropic — Claude 101 · Claude Code 101",
        ],
      },
    },
    contact: {
      title: "Contact",
      heading: { pre: "Let’s build something ", em: "useful." },
      subtitle: "Open to internships, missions, and tech collaborations.",
      email: "mje.etudes@gmail.com",
      phone: "+216 99 598 368",
      linkedin: "linkedin.com/in/mohamed-jegham",
      github: "github.com/MedJegham",
      cta: "Send an email",
      labels: { email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: "Mohamed Jegham — Portfolio",
    footerCredit: "Designed & built by Mohamed Jegham",
    backToTop: "Back to top",
  },
} as const;
