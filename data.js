/**
 * Medical Research Resources Map – Data Layer
 * All dashboard content is driven from this single data source.
 */
const APP_DATA = Object.freeze({
  projectTitle: "Medical Research Resources Map",

  legend: [
    { label: "Free access",                        color: "#0cff27" },
    { label: "University access",                   color: "#ffda00" },
    { label: "Hospital access",                     color: "#ff0000" },
    { label: "VPN access via non-European server",  color: "#0D47FF" },
  ],

  categories: [
    {
      name: "UNIVERSITÄTSBIBLIOTHEK",
      description: "Zentrale Einstiegspunkte der JKU.",
      cards: [
        {
          title: "JKU - Databases",
          color: "#ffda00",
          tooltip: "Einstiegsseite der JKU-UB. Hier findet man alle wissenschaftlichen Datenbanken, die von der Universität lizensiert wurden.",
          link: "https://dbis.ur.de/ubli",
        },
        {
          title: "JKU - Journals",
          color: "#ffda00",
          tooltip: "Einstiegsseite der JKU-UB. Hier findet man alle wissenschaftlichen Journals, die von der Universität lizensiert wurden.",
          link: "https://ezb.uni-regensburg.de/ezeit/fl.phtml?frames=&selected_colors%5B%5D=1&selected_colors%5B%5D=2&bibid=UBLI&selected_colors%5B%5D=4",
        },
      ],
    },
    {
      name: "LITERATURDATENBANKEN",
      description: "Globale Quellen für Fachartikel.",
      cards: [
        {
          title: "PubMed",
          color: "#0cff27",
          tooltip: "PubMed ist die weltweit bekannteste bibliographische Datenbank für biomedizinische Literatur...",
          link: "https://pubmed.ncbi.nlm.nih.gov/",
        },
        {
          title: "Google Scholar",
          color: "#0cff27",
          tooltip: "GOOGLE's Literaturdatenbank wissenschaftlicher Publikationen.",
          link: "https://scholar.google.de/",
        },
        {
          title: "BASE",
          color: "#0cff27",
          tooltip: "BASE umfasst knapp 500 Millionen Publikationen...",
          link: "https://www.base-search.net/",
        },
        {
          title: "SCI / WebOfScience",
          color: "#ffda00",
          tooltip: "Goldstandard in der Darstellung globaler Forschungszusammenhänge...",
          link: "https://dbis.uni-regensburg.de/UBLI/resources/471?lang=de",
        },
        {
          title: "OpenAlex",
          color: "#0cff27",
          tooltip: "Kostenlose Open Source Alternative zum WebOfScience.",
          link: "https://openalex.org/",
        },
        {
          title: "Semantic Scholar",
          color: "#0cff27",
          tooltip: "KI-basierte Datenbank zur Lokalisierung von 'High Influencial Citations'.",
          link: "https://www.semanticscholar.org/",
        },
      ],
    },
    {
      name: "POINT-OF-CARE & TRIALS",
      description: "Klinisches Wissen & Studien.",
      cards: [
        {
          title: "UpToDate",
          color: "#ff0000",
          tooltip: "Medizinisches Wissen, aufbereitet durch weltweit anerkannte Experten.",
          link: "https://www.uptodate.com/",
        },
        {
          title: "AWMF",
          color: "#0cff27",
          tooltip: "Sammlung hunderter Leitlinien der medizinischen Fachgesellschaften.",
          link: "https://www.awmf.org/",
        },
        {
          title: "ClinicalTrials.gov",
          color: "#0cff27",
          tooltip: "Weltweit bedeutendste Studiendatenbank für klinische Studien.",
          link: "https://clinicaltrials.gov/",
        },
        {
          title: "OpenEvidence",
          color: "#0D47FF",
          tooltip: "Medizinisch-wissenschaftliches LLM. In Europa nur via VPN erreichbar.",
          link: "https://www.openevidence.com/",
        },
      ],
    },
    {
      name: "ARTIFICIAL INTELLIGENCE",
      description: "LLMs & Diagnosesysteme.",
      cards: [
        {
          title: "GEMINI",
          color: "#0cff27",
          tooltip: "GOOGLE's multimodales LLM-Modell.",
          link: "https://gemini.google.com/",
        },
        {
          title: "NotebookLM",
          color: "#0cff27",
          tooltip: "KI-Analyse eigener Wissensquellen (RAG).",
          link: "https://notebooklm.google/",
        },
        {
          title: "DeepSeek",
          color: "#0cff27",
          tooltip: "Chinesisches Modell mit Fokus auf Reasoning.",
          link: "https://www.deepseek.com/en/",
        },
        {
          title: "Claude",
          color: "#0cff27",
          tooltip: "Leistungsstarkes LLM von Anthropic.",
          link: "https://claude.ai/",
        },
        {
          title: "Perplexity",
          color: "#0cff27",
          tooltip: "KI-Suchmaschine mit Fokus auf Quellenangaben.",
          link: "https://www.perplexity.ai/",
        },
        {
          title: "DeepRare",
          color: "#0cff27",
          tooltip: "KI-System zur Diagnose seltener Krankheiten.",
          link: "https://deeprare.cn/",
        },
      ],
    },
    {
      name: "AI KNOWLEDGE GRAPH TOOLS",
      description: "Visualisierung von Forschung.",
      cards: [
        {
          title: "Open Knowledge Maps",
          color: "#0cff27",
          tooltip: "Visualisiert Forschungszusammenhänge.",
          link: "https://openknowledgemaps.org/",
        },
        {
          title: "Connected Papers",
          color: "#0cff27",
          tooltip: "Graphische Darstellung von Forschungs-Zusammenhängen.",
          link: "https://www.connectedpapers.com/",
        },
        {
          title: "Carrot2",
          color: "#0cff27",
          tooltip: "Clustering-Engine zur thematischen Organisation.",
          link: "https://search.carrot2.org/",
        },
        {
          title: "VOSviewer",
          color: "#0cff27",
          tooltip: "Bibliometrische Analyse und Visualisierung.",
          link: "https://www.vosviewer.com/",
        },
      ],
    },
    {
      name: "LITERATURVERWALTUNG",
      description: "Organisation & Zitate.",
      cards: [
        {
          title: "Zotero",
          color: "#0cff27",
          tooltip: "Open-Source Programm zum Sammeln und Verwalten.",
          link: "https://www.zotero.org/",
        },
        {
          title: "Mendeley",
          color: "#0cff27",
          tooltip: "Literaturverwaltung mit Fokus auf Zusammenarbeit.",
          link: "https://www.mendeley.com/",
        },
        {
          title: "Citavi / Lumivero",
          color: "#ffda00",
          tooltip: "Umfassende Wissensorganisation (JKU Campuslizenz).",
          link: "https://www.jku.at/bibliothek/recherche/weiteres/citavi/",
        },
      ],
    },
    {
      name: "MASTERARBEIT",
      description: "Leitfäden & Richtlinien.",
      cards: [
        {
          title: "Allgemeine Prinzipien",
          color: "#0cff27",
          tooltip: "Grundlagen zum Verfassen einer Masterarbeit.",
          link: "https://www.scribbr.at/category/masterarbeit-at/",
        },
        {
          title: "Wissenschaftlicher Schreibstil",
          color: "#0cff27",
          tooltip: "Tipps für guten akademischen Schreibstil.",
          link: "https://ghostwriter-berlin.com/2024/01/10/wissenschaftlicher-schreibstil/",
        },
        {
          title: "Research Question (RQ)",
          color: "#0cff27",
          tooltip: "Die Forschungsfrage als Ausgangspunkt.",
          link: "https://www.scribbr.at/anfang-abschlussarbeit-at/forschungsfrage-formulieren/",
        },
        {
          title: "Methodology",
          color: "#0cff27",
          tooltip: "Abfassung des Methodenteils.",
          link: "https://www.kolabtree.com/blog/de/how-to-write-the-methods-section-of-your-research-paper/",
        },
        {
          title: "JKU-Richtlinie",
          color: "#0cff27",
          tooltip: "Offizielle Richtlinie der JKU (ZML).",
          link: "https://www.jku.at/fileadmin/gruppen/381/PAS/Abschlussarbeiten/Masterarbeit/20250925_Richtlinie_Masterarbeiten_WS2025_end.pdf",
        },
      ],
    },
  ],
});
