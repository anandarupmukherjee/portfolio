/* ------------------------------------------------------------------
   Site content. Every section of the site is rendered from this file.
   Edit text here; no build step is needed.
------------------------------------------------------------------- */
window.SITE = {
  name: "Anandarup Mukherjee",
  short: "Anand Mukherjee",
  postnominals: "PhD · CEng · FRSS · SMIEEE · MIET",
  headline: "Researcher in AI for Operational Intelligence",
  position: "Assistant Research Professor",
  affiliation: "Institute for Manufacturing, Department of Engineering, University of Cambridge",
  email: "am2910@cam.ac.uk",
  location: "Cambridge, United Kingdom",
  // Metrics: refresh from Google Scholar before relying on them.
  metricsAsOf: "April 2025",
  metrics: [
    { value: "87", label: "Publications listed", note: "50 journal · 27 conference" },
    { value: "1,400+", label: "Citations", note: "Google Scholar" },
    { value: "22", label: "h-index", note: "i10-index 37" },
    { value: "Top 2%", label: "Elsevier–Stanford", note: "Scientists list, 2024" }
  ],

  links: [
    { label: "Google Scholar", url: "https://scholar.google.co.in/citations?user=M4lwDqYAAAAJ&hl=en" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-3165-1151" },
    { label: "Cambridge profile", url: "https://www.eng.cam.ac.uk/profiles/am2910" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/anandarupmukherjee/" },
    { label: "GitHub", url: "https://github.com/anandarupmukherjee" },
    { label: "DBLP", url: "https://dblp.org/pid/160/3215.html" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Anandarup-Mukherjee" }
  ],

  vision: {
    lead: "Operations break where processes meet. I study those meeting points.",
    body: [
      "My research programme, Organisational Inter-Process Intelligence, asks how the hidden dependencies between processes can be discovered from the data that operations already produce: event logs, sensor streams, documents and trade records. Most organisations see their processes one at a time; disruption travels between them.",
      "I combine data, AI and distributed systems with operations insight to make those dependencies visible, measurable and governable. The same question scales from a single hospital laboratory, to a network of firms, to the global flows of critical minerals and food.",
      "The approach is deliberately simple: low-cost instrumentation, traceable data and assurance before automation. Insight has to be trusted before it can be used."
    ]
  },

  // The signature device of the site: one question, five scales.
  scales: [
    { key: "asset", label: "Assets & edge", q: "How do constrained devices sense, compute and coordinate?", work: "UAV swarms, edge offloading, vibration-based condition monitoring" },
    { key: "process", label: "Processes", q: "What does a process actually do, step by step, under load?", work: "Histopathology simulation, low-cost process monitoring" },
    { key: "org", label: "Organisations", q: "Where do processes depend on each other inside one organisation?", work: "Digital Hospitals, SME digitalisation" },
    { key: "inter", label: "Inter-organisational", q: "How does disruption propagate across firms and networks?", work: "Telecom alarm propagation, ports, logistics" },
    { key: "planet", label: "Planetary", q: "Which dependencies in global supply chains are fragile, and who holds the leverage?", work: "Global Supply Chain Observatory: critical minerals and food" }
  ],

  roles: [
    { title: "Assistant Research Professor", org: "Institute for Manufacturing, University of Cambridge", since: "2023" },
    { title: "Principal AI & Platform Architect", org: "Global Supply Chain Observatory (GSCO), IfM", since: "Current" },
    { title: "Lead, Digital Hospitals", org: "Distributed Information & Automation Lab (DIAL), IfM", since: "2023" },
    { title: "Digitalisation Lead & Architect", org: "Cambridge University Hospitals NHS Foundation Trust (honorary)", since: "2023" }
  ],

  news: [
    { date: "Nov 2026", text: "Faculty development talk on provenance and attestation in AI-mediated cyber-physical systems, IEM (23 November)." },
    { date: "Oct 2026", text: "Invited speaker, IST Lab Alumni Webinar Series: \"Corridors, Swarms and Supply Chains\"." },
    { date: "2026", text: "GSCO's agentic harness, built on Gemma 4, selected by Google for presentation at IMTS Chicago." },
    { date: "2025", text: "Chartered Engineer (CEng), Engineering Council and IET." },
    { date: "2024", text: "Named in the Elsevier–Stanford Top 2% Scientists list." }
  ],

  programmes: [
    {
      id: "gsco", scale: "planet", status: "Active",
      title: "Global Supply Chain Observatory",
      tag: "Critical minerals · Food and agri-trade · Geopolitical risk",
      role: "Principal AI & Platform Architect (platform and AI lead)",
      body: "A research observatory at the IfM that tracks how critical minerals and food move through global supply chains. I lead the platform and its AI: document extraction with traceable evidence, an assured information layer that grades every claim by source triangulation, and analysis tools for trade exposure, stress testing and policy leverage. Current threads include score-based assurance tiers for data-to-information promotion, a unified supply chain ontology, and a geopolitical lens piloted on germanium.",
      partners: ["Industrial Resilience Research Group, IfM"],
      link: { label: "GSCO research site", url: "https://research.cambridge-gsco.co.uk/" }
    },
    {
      id: "oipi", scale: "inter", status: "Programme",
      title: "Organisational Inter-Process Intelligence",
      tag: "Dependency discovery · Event logs · Disruption propagation",
      role: "Programme lead",
      body: "The methodological core of my work. Given operational event logs from many processes, infer which processes depend on which, how strongly, and with what delay. Early results come from radio access network alarm propagation with BT, where graph attention models recover how faults cascade across a network; the same machinery is now being applied to hospital and supply chain operations.",
      partners: ["British Telecom", "UKRI"]
    },
    {
      id: "hospitals", scale: "org", status: "Active",
      title: "Digital Hospitals",
      tag: "Hospital operations · Digital twins · Low-cost digital solutions",
      role: "Project lead and digital solution architect",
      body: "A programme with Cambridge University Hospitals, centred on Addenbrooke's Histopathology. The first phase built a modular digital twin for laboratory operations, including a process simulation model of the histopathology workflow. The current phase pilots low-cost digital solutions in the laboratory, such as reagent inventory management, and studies specimen logistics and porter scheduling. Related work with IIT Indore develops a hospital digital twin in India.",
      partners: ["Cambridge University Hospitals NHS Foundation Trust", "Addenbrooke's Histopathology", "IIT Indore (RAEng)"],
      funder: "CUH NHS Foundation Trust"
    },
    {
      id: "shoestring", scale: "process", status: "Active",
      title: "Digital Manufacturing on a Shoestring",
      tag: "SME digitalisation · Low-cost monitoring · Open solutions",
      role: "Research associate (UK); foundational programme lead (India)",
      body: "Low-cost, off-the-shelf digital solutions for small manufacturers, with methods for testing and assessing their impact. The UK programme was funded by EPSRC and led to open solutions adopted by more than 300 SMEs. I extended it to Western Australia with DPIRD, and lead the India programme with IIT Indore's DRISHTI CPS Foundation and the Mahindra Institute of Quality, where more than 60 companies were engaged in January 2025 and SME pilots followed.",
      partners: ["EPSRC", "Innovate UK (SMDH)", "DPIRD, Western Australia", "IIT Indore DRISHTI CPS", "Mahindra Institute of Quality"],
      link: { label: "Open solutions on GitHub", url: "https://github.com/DigitalShoestringSolutions" }
    },
    {
      id: "industry", scale: "inter", status: "Completed",
      title: "Industrial partnerships",
      tag: "Aerospace · Ports · Telecoms · Logistics",
      role: "Architect and researcher",
      body: "Applied projects that tested the ideas in demanding settings. LoCOST with Boeing designed low-cost monitoring for its Sheffield plant. 5G Ports with the Port of Felixstowe tested predictive maintenance and vibration-based fault detection on crane motors. NG-CDI with BT and UKRI built anomaly detection for broadband faults. Logistics on a Shoestring with the UK Warehousing Association monitored warehouse equipment and electric vehicles.",
      partners: ["Boeing", "Port of Felixstowe", "British Telecom", "UKWA"]
    },
    {
      id: "vocarix", scale: "org", status: "In formation",
      title: "Vocarix",
      tag: "Documents to simulation · Translation",
      role: "Founder",
      body: "A venture in preparation that turns institutional documents, such as policies and procedures, into multi-agent simulation models connected to digital twins, so that decision makers can test a policy before they adopt it.",
      partners: ["Cambridge Enterprise (in preparation)"]
    },
    {
      id: "kgp", scale: "asset", status: "2014–2020",
      title: "Networked systems at IIT Kharagpur",
      tag: "UAV networks · Edge computing · IoT for agriculture, mines and health",
      role: "Senior research fellow and doctoral researcher",
      body: "Doctoral and project work on computation offloading in UAV swarms and constrained IoT networks. Projects included digital mines for underground safety (MeitY), a UK–India programme on safe IoT for healthcare (UGC–UKIERI), a precision robotic planter (ICAR) and sensor networks for water use efficiency in agriculture.",
      partners: ["MeitY", "UGC–UKIERI", "ICAR", "ITRA, Media Lab Asia"]
    }
  ],

  employment: [
    { when: "2023 – present", title: "Assistant Research Professor", org: "Institute for Manufacturing, Department of Engineering, University of Cambridge", text: "Appointed September 2023 (initially titled Senior Research Associate). Leads Digital Hospitals and the platform and AI of the Global Supply Chain Observatory; founded the LoDiSA workshop series; led the Shoestring India programme." },
    { when: "2023 – present", title: "Digitalisation Lead & Architect (honorary)", org: "Cambridge University Hospitals NHS Foundation Trust", text: "Modular digital twin and low-cost digital solutions for hospital operations, tested in Histopathology at Addenbrooke's." },
    { when: "2020 – 2023", title: "Research Associate", org: "Institute for Manufacturing, University of Cambridge", text: "Low-cost digitalisation, automation and analytics for SMEs in the UK and Australia under EPSRC Digital Manufacturing on a Shoestring; ML-based anomaly detection with industry partners." },
    { when: "2018 – 2026", title: "Co-Founder & Director", org: "Sensordrops Networks Pvt. Ltd., incubated at IIT Kharagpur", text: "IoT sensing, monitoring and control systems for healthcare, industry and agriculture." },
    { when: "2014 – 2020", title: "Senior Research Fellow", org: "Indian Institute of Technology Kharagpur", text: "Sensor networks, UAV systems, underwater networks, blockchain-secured healthcare IoT and digital mines; project planning and funder liaison." },
    { when: "2012 – 2014", title: "Assistant Professor", org: "Department of ECE, University of Engineering & Management, Jaipur", text: "Taught six or more undergraduate courses; acting Head of Department for two years; established seven laboratories." }
  ],

  education: [
    { when: "2015 – 2020", title: "PhD, Computer Science & Engineering", org: "Indian Institute of Technology Kharagpur", text: "Thesis: Offloading in UAV Networks (awarded April 2021)." },
    { when: "2010 – 2012", title: "MTech, Electronics & Communication Engineering", org: "West Bengal University of Technology", text: "Thesis: arrhythmia detection using wavelet transforms, PCA and neural networks. GPA 9.38/10." },
    { when: "2006 – 2010", title: "BTech, Electronics & Communication Engineering", org: "West Bengal University of Technology", text: "" }
  ],

  teaching: [
    { title: "Industrial IoT, IfM MET programme", text: "Co-taught with Prof. Duncan McFarlane on the Manufacturing Engineering Tripos, University of Cambridge." },
    { title: "Two national MOOCs", text: "Co-developed and co-delivered national-scale courses on IoT and on Industrial IoT and Industry 4.0." },
    { title: "Textbooks", text: "Introduction to IoT (Cambridge University Press, 2020) and Introduction to Industrial Internet of Things and Industry 4.0 (CRC Press, 2021)." },
    { title: "Supervision and examining", text: "Master's projects at Cambridge and IIT Kharagpur, including NHS student projects on hospital operations; MPhil examiner, Cambridge." },
    { title: "Undergraduate teaching", text: "Six or more courses at UEM Jaipur across electronics, signal processing and data communications; seven teaching laboratories established." },
    { title: "Workshops", text: "Twelve or more industry and academic workshops on IoT, sensor networks, UAVs and underwater systems." }
  ],

  talks: [
    { date: "Nov 2026", title: "Provenance and attestation in AI-mediated cyber-physical systems", venue: "Faculty development programme, IEM, Kolkata", kind: "Invited" },
    { date: "Oct 2026", title: "Corridors, Swarms and Supply Chains", venue: "IST Lab Alumni Webinar Series", kind: "Invited" },
    { date: "Jun 2025", title: "Smarter Isn't Always Better: Designing IoT That Works", venue: "ConvergenTech 2025, Amity University, Kolkata", kind: "Keynote" },
    { date: "Nov 2023", title: "Lean Analytics: Smart, Cost-Effective Industrial Analytics", venue: "MICA 2023, NIT Warangal", kind: "Keynote" },
    { date: "Dec 2022", title: "Intelligent Networked UAVs: Enabling IoT in the Skies", venue: "ICACIE 2022, Bhubaneswar", kind: "Keynote" },
    { date: "Dec 2021", title: "Vibrations, AI & Computers: Breaching the Privacy of Traditional Computing Systems", venue: "ICACIE 2021, Bhubaneswar", kind: "Keynote" },
    { date: "Feb 2020", title: "Phantom Networks: An Intangible Communication Paradigm", venue: "UGC–UKIERI Workshop on IoT and Security, Loughborough University London", kind: "Keynote" }
  ],

  service: [
    { role: "Vice Chair", body: "IEEE P1954 Standards Committee" },
    { role: "Editor", body: "IET Digital Twins and Applications" },
    { role: "Associate Editor", body: "Peer-to-Peer Networking and Applications, Springer Nature" },
    { role: "Area Expert", body: "IEEE ComSoc SIG on IoT for e-Health" },
    { role: "Founder & Organising Chair", body: "LoDiSA workshop series on low-cost digital solutions (2023–2025), researchers from 20+ universities in 8 countries" }
  ],

  awards: [
    { year: "2026", text: "GSCO agentic harness (Gemma 4) selected by Google for presentation at IMTS Chicago" },
    { year: "2025", text: "Chartered Engineer (CEng), Engineering Council and IET" },
    { year: "2025", text: "Postdoctoral Research Associate, St Edmund's College, Cambridge" },
    { year: "2024", text: "Elsevier–Stanford Top 2% Scientists" },
    { year: "2024", text: "Senior Member, IEEE" },
    { year: "2023", text: "Best Conference Paper Award, IEEE ComSoc e-Health Technical Committee (IEEE INFOCOM 2020 paper)" },
    { year: "2023", text: "Finalist, Cambridge Public Health Early Career Researcher Competition" },
    { year: "2023", text: "Semi-finalist, Chris Abel Postdoctoral Business Competition, Cambridge" },
    { year: "2022–23", text: "Postdoctoral Research Associate, Trinity Hall, Cambridge" },
    { year: "2021", text: "Two papers in the Top 50 Most Popular, IEEE Transactions on Parallel and Distributed Systems" },
    { year: "2020", text: "IEEE INFOCOM Student Travel Grant (one of ten worldwide)" },
    { year: "2019", text: "Top Downloaded Article 2017–18, Wiley WIREs Data Mining and Knowledge Discovery" },
    { year: "2019", text: "Young Achiever Award, Institute of Scholars" },
    { year: "2018", text: "Gandhian Young Technological Innovation Award, presented by the President of India" },
    { year: "2018", text: "Dr. Amulya K. N. Reddy Award" },
    { year: "2016", text: "Runner-up awards: IBM Prototype Demo and Johnson Controls Innovation Challenge" }
  ]
};
