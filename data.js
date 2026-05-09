/**
 * Medical Research Resources Map – Data Layer
 * All dashboard content is driven from this single data source.
 */
const APP_DATA = Object.freeze({
  projectTitle: "Medical Research Resources Map",

  legend: [
    { label: "Free access", color: "#0cff27" },
    { label: "University access", color: "#ffda00" },
    { label: "Hospital access", color: "#ff0000" },
    { label: "VPN access via non-European server", color: "#0D47FF" },
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
          link: "https://dbis.ur.de/ubli"
        },
        {
          title: "JKU - Journals",
          color: "#ffda00",
          tooltip: "Einstiegsseite der JKU-UB. Hier findet man alle wissenschaftlichen Journals, die von der Universität lizensiert wurden.",
          link: "https://ezb.uni-regensburg.de/ezeit/fl.phtml?frames=&selected_colors%5B%5D=1&selected_colors%5B%5D=2&bibid=UBLI&selected_colors%5B%5D=4"
        }
      ]
    },
    {
      name: "LITERATURDATENBANKEN",
      description: "Globale Quellen für Fachartikel.",
      cards: [
        {
          title: "PubMed",
          color: "#0cff27",
          tooltip: "PubMed ist die weltweit bekannteste bibliographische Datenbank für biomedizinische Literatur, die durch ihre exzellente Indexierung mittels MeSH-Terms (Medical Subject Headings) eine hochpräzise, evidenzbasierte Recherche in über 40 Millionen Zitaten ermöglicht.",
          link: "https://pubmed.ncbi.nlm.nih.gov/"
        },
        {
          title: "Google Scholar",
          color: "#0cff27",
          tooltip: "GOOGLE's Literaturdatenbank wissenschaftlicher Publikationen.",
          link: "https://scholar.google.de/"
        },
        {
          title: "BASE",
          color: "#0cff27",
          tooltip: "BASE umfasst knapp 500 Millionen Publikationen, darunter auch Bachelor- und Masterarbeiten, Dissertationen und Habilitationen; diese können zumeist im Volltext eingesehen werden.",
          link: "https://www.base-search.net/"
        },
        {
          title: "SCI / WebOfScience",
          color: "#ffda00",
          tooltip: "SCI / WebofScience stellt den Goldstandard in der Darstellung globaler Forschungszusammenhänge dar. Zitations-Mapping: Man kann sowohl die intellektuellen Vorläufer eines Artikels (References) als auch dessen nachfolgende Wirkung (Citations) lückenlos verfolgen. Strenge Selektionskriterien an die erfassten Zeitschriften (= Schutz vor Predatory Journals). Rasche Darstellung der Forschungsaktivitäten eines Landes, einer Institution oder eines bestimmten Forschers (= äußerst wertvoll zur Erkundung potentieller Famulatur-/ Arbeits-/ Forschungs-/ Ausbildungsmöglichkeiten).",
          link: "https://dbis.uni-regensburg.de/UBLI/resources/471?lang=de"
        },
        {
          title: "OpenAlex",
          color: "#0cff27",
          tooltip: "Literaturdatenbank einer kanadischen Non-ProfitOrganisation (OurResearch) – benannt nach der Bibliothek von Alexandria. Versuch einer kostenlosen Alternative zum WebOfScience. Die gesamte Datenbank ist Open Source. Die Quellen werden automatisiert erfasst – die inhaltliche Kuratierung ist weniger streng als beim WebOfScience. Sehr umfangreich, aktuell: 474 Mill. Einträge.",
          link: "https://openalex.org/"
        },
        {
          title: "Semantic Scholar",
          color: "#0cff27",
          tooltip: "Literaturdatenbank, die es ermöglicht, high Influencial Citations rasch zu lokalisieren. Author Influence Map: Zeigt an, welche Forscher besonders häufig zitiert wurden und von wem eigene Arbeiten zitiert wurden. Too Long – Didn't Read (TDLR): 1-Satz Zusammenfassungen eines ganzen Artikels.",
          link: "https://www.semanticscholar.org/"
        }
      ]
    },
    {
      name: "POINT-OF-CARE-SYSTEME & GUIDELINES",
      description: "Klinisches Wissen & Studien.",
      cards: [
        {
          title: "UpToDate",
          color: "#ff0000",
          tooltip: "Medizinisches Wissen, aufbereitet durch die weltbesten Experten. Alle Autoren müssen selbst Arzt sein und sie müssen zu den weltweit anerkanntesten Experten ihres Fachgebietes zählen. Unübertroffen in der Qualität! Nahezu jede Klinik bietet einen UpToDate-Zugang an.",
          link: "https://www.uptodate.com/"
        },
        {
          title: "AWMF",
          color: "#0cff27",
          tooltip: "Sammlung hunderter Leitlinien. Evidenzgrade S1 (hoch) bis S3 (niedrig). Zugriff auf evidenzbasiertes Wissen, zusammengestellt durch medizinische Fachgesellschaften.",
          link: "https://www.awmf.org/"
        },
        {
          title: "ClinicalTrials.gov",
          color: "#0cff27",
          tooltip: "Zusammenstellung US-amerikanischer und internationaler klinischer Studien. Weltweit bedeutendste Studiendatenbank. Kostenlos zugängliches Repository nahezu aller relevanten Studien. Die NCT-Number [Formatbeispiel: NCT07204782] wird zumeist auch in den Publikationen angeführt, die eine bestimmte Studie besprechen.",
          link: "https://clinicaltrials.gov/"
        },
        {
          title: "OpenEvidence",
          color: "#0D47FF",
          tooltip: "Hochqualitatives LLM unter Verwendung von RAG (Retrieval-Augmented Generation). Kostenloses, exzellentes und bisher medizinisch-wissenschaftlich unübertroffenes LLM. Entwickelt von Forschern aus Harvard, Stanford, MIT, … Zugriff auf erstklassige Wissensquellen wie NEJM, JAMA, NCCN, Cochrane. In Europa nur mittels eines VPN-Zuganges erreichbar, der einen nicht-europäischen Server verwendet.",
          link: "https://www.openevidence.com/"
        }
      ]
    },
    {
      name: "ARTIFICIAL INTELLIGENCE",
      description: "LLMs & Diagnosesysteme.",
      cards: [
        {
          title: "GEMINI",
          color: "#0cff27",
          tooltip: "GOOGLE's multimodales LLM-Modell, das Texte, Bilder, Videos und Code verarbeiten kann.",
          link: "https://gemini.google.com/"
        },
        {
          title: "NotebookLM",
          color: "#0cff27",
          tooltip: "GEMINI mit der Möglichkeit der Analyse selbst definierter Wissensquellen (RAG-Technologie [Retrieval-Augmented-Generation]). Es analysiert die angebotenen Quellen und erstellt auf Wunsch Zusammenfassungen auch in Form von Podcasts, Mindmaps, Videos, Tabellen, Lern-Karteikarten, usw. Revolutioniert den Umgang mit Wissen.",
          link: "https://notebooklm.google/"
        },
        {
          title: "DeepSeek",
          color: "#0cff27",
          tooltip: "Chinesisches LLM-Modell mit ausgeprägten Fähigkeiten im logischen Denken (Reasoning) sowie bei Programmieraufgaben.",
          link: "https://www.deepseek.com/en/"
        },
        {
          title: "Claude",
          color: "#0cff27",
          tooltip: "Leistungsstarkes LLM von Anthropic mit Schwerpunkt auf KI-Sicherheit und Interpretierbarkeit.",
          link: "https://claude.ai/"
        },
        {
          title: "Perplexity",
          color: "#0cff27",
          tooltip: "Amerikanisches LLM, mit Schwerpunkt auf Transparenz und Faktenorientierung.",
          link: "https://www.perplexity.ai/"
        },
        {
          title: "DeepRare",
          color: "#0cff27",
          tooltip: "DeepRare ist ein KI-gestütztes Multi-Agenten-System zur Diagnose von Rare Diseases. Es nutzt LLMs und hat in Tests menschliche Experten in seiner Diagnosegenauigkeit übertroffen.",
          link: "https://deeprare.cn/"
        }
      ]
    },
    {
      name: "AI KNOWLEDGE GRAPH TOOLS",
      description: "Visualisierung von Forschung.",
      cards: [
        {
          title: "Open Knowledge Maps",
          color: "#0cff27",
          tooltip: "Open Knowledge Maps strukturiert wissenschaftliche Inhalte aus PubMed und BASE zu Knowledge Maps. Zusammenhänge zwischen Forschungsarbeiten werden auf diese Weise visualisiert.",
          link: "https://openknowledgemaps.org/"
        },
        {
          title: "Connected Papers",
          color: "#0cff27",
          tooltip: "Connected Papers ist ein Literatur-Mapping-Tool, das auf der Basis eines Startartikels graphisch Zusammenhänge zu ähnlichen wissenschaftlichen Publikationen aufzeigt.",
          link: "https://www.connectedpapers.com/"
        },
        {
          title: "Carrot2",
          color: "#0cff27",
          tooltip: "Carrot2 ist eine Open-Source-Suchergebnis-Clustering-Engine, die Suchergebnisse oder Dokumente automatisch in thematische Kategorien organisiert, um so einen schnellen Überblick zu verschaffen.",
          link: "https://search.carrot2.org/"
        },
        {
          title: "VOSviewer",
          color: "#0cff27",
          tooltip: "VOSviewer ist ein kostenloses Softwaretool zur bibliometrischen Analyse und interaktiven Visualisierung von wissenschaftlichen Netzwerken (wie Publikationen, Autoren oder Schlagworten).",
          link: "https://www.vosviewer.com/"
        }
      ]
    },
    {
      name: "LITERATURVERWALTUNG",
      description: "Organisation & Zitate.",
      cards: [
        {
          title: "Zotero",
          color: "#0cff27",
          tooltip: "Zotero ist ein kostenloses Open-Source - Programm zum Sammeln, Zitieren und Verwalten wissenschaftlicher Literatur.",
          link: "https://www.zotero.org/"
        },
        {
          title: "Mendeley",
          color: "#0cff27",
          tooltip: "Kostenloses Literaturverwaltungsprogramm mit stark ausgeprägtem Community-Charakter. Zusammenarbeit innerhalb einer Arbeitsgruppe möglich.",
          link: "https://www.mendeley.com/"
        },
        {
          title: "Citavi / Lumivero",
          color: "#ffda00",
          tooltip: "Umfassende Software zur Literaturverwaltung und Wissensorganisation (JKU Campuslizenz).",
          link: "https://www.jku.at/bibliothek/recherche/weiteres/citavi/"
        }
      ]
    },
    {
      name: "MASTERARBEIT",
      description: "Leitfäden & Richtlinien.",
      cards: [
        {
          title: "Allgemeine Prinzipien",
          color: "#0cff27",
          tooltip: "Allgemeines zum Verfassen einer medizinischen Masterarbeit.",
          link: "https://www.scribbr.at/category/masterarbeit-at/"
        },
        {
          title: "Wissenschaftlicher Schreibstil",
          color: "#0cff27",
          tooltip: "Kennzeichen eines guten wissenschaftlichen Schreibstiles.",
          link: "https://ghostwriter-berlin.com/2024/01/10/wissenschaftlicher-schreibstil/"
        },
        {
          title: "Research Question (RQ)",
          color: "#0cff27",
          tooltip: "Die Research Question (RQ) als zentraler Ausgangspunkt der Masterarbeit.",
          link: "https://www.scribbr.at/anfang-abschlussarbeit-at/forschungsfrage-formulieren/"
        },
        {
          title: "Methdology",
          color: "#0cff27",
          tooltip: "Informationen über die Abfassung des Methodenteils der Arbeit und Ziele des Methodenteils.",
          link: "https://www.kolabtree.com/blog/de/how-to-write-the-methods-section-of-your-research-paper/"
        },
        {
          title: "JKU-Richtlinie",
          color: "#0cff27",
          tooltip: "Offizielle Richtlinie der JKU über die Abfassung einer Masterarbeit, Zentrum für Medizinische Lehre (ZML).",
          link: "https://www.jku.at/fileadmin/gruppen/381/PAS/Abschlussarbeiten/Masterarbeit/20250925_Richtlinie_Masterarbeiten_WS2025_end.pdf"
        }
      ]
    }
  ]
});
