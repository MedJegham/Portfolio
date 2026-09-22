export type Lang = "fr" | "en";

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
    },
    hero: {
      role: "Ingénieur informatique · Data Science & IA",
      tagline:
        "Je conçois des plateformes web et des systèmes d’intelligence artificielle — de l’ERP métier aux pipelines de prédiction.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir les projets",
    },
    about: {
      title: "À propos",
      lead: "Étudiant ingénieur en informatique à Polytechnique Sousse, je construis des produits full-stack ancrés dans la data et l’IA.",
      body: "Après un cycle préparatoire à l’IPEIM, je développe des applications web, mobiles et des modules de machine learning en conditions réelles — ERP, analyse crypto, détection de fraude. Autonomie, livraison rapide et exigence technique guident mon approche.",
      stats: [
        { value: "3", label: "stages tech" },
        { value: "20", label: "modules livrés en 8 semaines" },
        { value: "14,1", label: "moyenne 2ᵉ année" },
      ],
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
      subtitle: "Sélection de réalisations full-stack et machine learning.",
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
          items: [
            "TensorFlow",
            "Keras",
            "PyTorch",
            "CNN",
            "RNN",
            "LSTM",
            "OpenCV",
          ],
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
      subtitle: "Ouvert aux stages, missions et collaborations tech.",
      email: "mje.etudes@gmail.com",
      phone: "+216 99 598 368",
      linkedin: "linkedin.com/in/mohamed-jegham",
      github: "github.com/MedJegham",
      cta: "Écrire un e-mail",
    },
    footer: "Mohamed Jegham — Portfolio",
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
    },
    hero: {
      role: "Computer Engineering · Data Science & AI",
      tagline:
        "I design web platforms and intelligent systems — from business ERPs to prediction pipelines.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
    },
    about: {
      title: "About",
      lead: "Computer engineering student at Polytechnique Sousse, building full-stack products grounded in data and AI.",
      body: "After a preparatory cycle at IPEIM, I ship web, mobile, and machine-learning solutions in real environments — ERPs, crypto analytics, fraud detection. Autonomy, fast delivery, and technical rigor shape how I work.",
      stats: [
        { value: "3", label: "tech internships" },
        { value: "20", label: "modules shipped in 8 weeks" },
        { value: "14.1", label: "2nd-year GPA /20" },
      ],
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
      subtitle: "Selected full-stack and machine-learning work.",
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
          items: [
            "TensorFlow",
            "Keras",
            "PyTorch",
            "CNN",
            "RNN",
            "LSTM",
            "OpenCV",
          ],
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
      subtitle: "Open to internships, missions, and tech collaborations.",
      email: "mje.etudes@gmail.com",
      phone: "+216 99 598 368",
      linkedin: "linkedin.com/in/mohamed-jegham",
      github: "github.com/MedJegham",
      cta: "Send an email",
    },
    footer: "Mohamed Jegham — Portfolio",
  },
} as const;
