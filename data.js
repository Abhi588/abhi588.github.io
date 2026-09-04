/**
 * Portfolio content.
 * Edit this file to add/remove/update anything on the site.
 * Nothing here is styling or logic — just your data.
 */
const PORTFOLIO = {
  // --- Basic info shown in the hero + document head ---
  profile: {
    name: "Abhishek Kumar",
    role: "Senior Data Scientist & Machine Learning Engineer",
    tagline:
      "6+ years building production-grade AI across retail, energy & finance — from GenAI & LLM systems and computer vision to big data pipelines and MLOps at scale.",
    photo: "profile.png",
    // Small pill badges under the tagline. icon = Font Awesome class.
    badges: [
      { icon: "fas fa-robot", label: "GenAI & LLMs" },
      { icon: "fas fa-eye", label: "Computer Vision" },
      { icon: "fas fa-cloud", label: "GCP & MLOps" },
      { icon: "fas fa-database", label: "Big Data" },
    ],
    // Social / contact icons in the hero.
    socials: [
      { icon: "fas fa-envelope", url: "mailto:abhithakur588@gmail.com", label: "Email" },
      { icon: "fas fa-phone", url: "tel:+918090413591", label: "Phone" },
      { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/abhishek-kumar-bb2009133/", label: "LinkedIn" },
      { icon: "fab fa-github", url: "https://github.com/Abhi588", label: "GitHub" },
    ],
  },

  // --- Nav links map to section ids below. Order here = order in nav ---
  // The renderer builds these automatically from the sections' `id`, `nav` and `icon`.

  // --- About: array of paragraphs ---
  about: {
    id: "about",
    nav: "About",
    icon: "fas fa-user-circle",
    heading: "About Me",
    paragraphs: [
      "Experienced Data Science Specialist with 6+ years building scalable AI/ML systems across retail & e-commerce, financial services and energy. I design and deploy enterprise-grade Generative AI, Machine Learning, NLP and Computer Vision solutions that deliver measurable business impact.",
      "At Walmart, I build scalable, LLM-powered content-generation pipelines for catalog enrichment using both enterprise and open-weight LLMs — engineering fine-tuned in-house serving architectures with Ray, vLLM and Kafka streaming, alongside API-based distributed systems for high-throughput AI applications.",
      "At NPCI, I developed advanced ML-based fraud-detection systems that reduced UPI fraud by 60%, powered by big data technologies and real-time analytics.",
      "At Schlumberger (SLB), I built and deployed multiple real-time computer-vision solutions — object detection, tracking and segmentation — for industrial productivity and HSE (Health, Safety & Environment) monitoring, reducing HSE incidents by 80%, and contributed to patent-filing initiatives in the AI/Computer Vision space.",
      "I'm skilled across Python, SQL, Java, LLMs/SLMs, NLP, ML, Deep Learning, Computer Vision, RAG, vector databases, Ray, vLLM, GCP and big-data ecosystems (Hadoop, Hive, PySpark), with hands-on MLOps and scalable deployment using Docker, Kubernetes, MLflow, TorchServe and TensorFlow Serving. I hold an M.Tech in Computer Science from the Indian Institute of Technology (Indian School of Mines), Dhanbad.",
    ],
  },

  // --- Experience: timeline. Add a new object to the top to add a role ---
  experience: {
    id: "experience",
    nav: "Experience",
    icon: "fas fa-briefcase",
    heading: "Experience",
    items: [
      {
        date: "Apr 2025 - Present",
        current: true, // highlights the date pill
        title: "Senior Data Scientist (MLE)",
        company: "Walmart",
        location: "Bangalore, India",
        points: [
          "Engineered a real-time item-setup pipeline for product title, description and attribute recommendations using LLMs and agents, serving 500K+ items/day — integrated as APIs/microservices for sync and Kafka for async processing.",
          "Fine-tuned Gemini, Gemma and Mistral multimodal models with PEFT for attribute extraction and content generation; designed a high-throughput inferencing pipeline using vLLM and Triton serving 10M requests/day, lifting content quality coverage to 60% and recall to 80%.",
          "Built a cleanup + product attribute extraction model using NLP, regex, fuzzy matching and embeddings integrated with a FAISS vector DB for semantic search over 1M+ vectors, deployed as FastAPI on a Kubernetes cluster.",
          'Developed an "LLM-as-a-judge" framework for automated attribute-extraction validation with reasoning, and grounding-search-based content extraction for 1P and 3P suppliers.',
        ],
      },
      {
        date: "July 2022 - Apr 2025",
        title: "Machine Learning Engineer II",
        company: "SLB (Schlumberger)",
        location: "Pune, India",
        points: [
          "Developed vision-based algorithms for productivity (workstation and tools utilization) and health & safety non-compliance (mechanical lifting, PPE kit, zone intrusion) in industrial floor settings, achieving 85% compliance accuracy.",
          "Trained and fine-tuned DL models on custom image datasets of persons, hats, gloves and tools for object detection, segmentation and classification.",
          "Engineered a model-serving architecture using TorchServe, increasing throughput from 2 to 4 fps.",
          "Streamlined multi-location deployment via a custom CI/CD module (Docker, Azure Pipelines, Podman, GCR, model registry, GCP), reducing use-case deployment time by 75%.",
          "Revamped architecture with scheduling, logging, Pub/Sub, modularization, testing, monitoring, dashboards and MLOps integration.",
        ],
      },
      {
        date: "Nov 2020 - July 2022",
        title: "Associate Data Scientist",
        company: "NPCI",
        location: "Hyderabad, India",
        points: [
          "Owned fraud model building, feature engineering, EDA, model training/testing, data-pipeline scripting, scheduling, service validation, user profiling and segmentation.",
          "Built ML models for P2P and P2M fraud detection serving ~25 crore UPI transactions/day, plus a VPA text-clustering model using NLP — reducing fraud by 60% in the ecosystem.",
          "Generated 200+ features per UPI customer and automated training/testing of ML models with EDA and visualization.",
        ],
      },
      {
        date: "Sep 2020 - Nov 2020",
        title: "Software Engineer",
        company: "Capgemini",
        location: "Mumbai, India · Remote",
        detail: "Java, JavaScript and related web technologies.",
      },
      {
        date: "Jul 2019 - Dec 2019",
        title: "Software Developer Intern (R&D)",
        company: "Ericsson India",
        location: "Chennai, India",
        detail: "Java, HTML and related technologies.",
      },
      {
        date: "Jun 2017 - Aug 2017",
        title: "Intern",
        company: "Tata Consultancy Services",
        location: "Lucknow, India",
        detail: "Java and SQL.",
      },
    ],
  },

  // --- Education: timeline ---
  education: {
    id: "education",
    nav: "Education",
    icon: "fas fa-graduation-cap",
    heading: "Education",
    items: [
      { date: "2018 - 2020", title: "M.Tech, Computer Science", company: "IIT (ISM) Dhanbad", detail: "CGPA: 8.87 / 10.0" },
      { date: "2014 - 2018", title: "B.Tech, Computer Science", company: "University of Allahabad", detail: "74.1%" },
      { date: "2011 - 2013", title: "Intermediate (CBSE)", company: "JNV Saharsa", detail: "90%" },
    ],
  },

  // --- Skills: grouped pills. Add a group or an item to any group ---
  skills: {
    id: "skills",
    nav: "Skills",
    icon: "fas fa-code",
    heading: "Skills",
    groups: [
      { title: "Programming", icon: "fas fa-laptop-code", items: ["Python", "Java", "SQL", "C++"] },
      {
        title: "AI / Data Science",
        icon: "fas fa-brain",
        items: ["Machine Learning", "Deep Learning", "GenAI", "LLMs", "NLP", "Prompt Engineering", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "NLTK", "NumPy", "Pandas"],
      },
      {
        title: "MLOps & Infrastructure",
        icon: "fas fa-server",
        items: ["GCP", "Docker", "Kubernetes", "Podman", "vLLM", "Ray", "Triton", "TorchServe", "MLflow", "Feast", "Airflow", "LangChain", "LangGraph", "FAISS"],
      },
      { title: "Big Data", icon: "fas fa-database", items: ["PySpark", "Hadoop", "Hive", "Kafka", "BigQuery", "BashScript"] },
      {
        title: "Productive Tools",
        icon: "fas fa-tools",
        items: ["Copilot", "Cursor", "Claude", "Git", "VS Code", "Anaconda", "Jupyter", "Tableau", "Jira", "Azure DevOps", "Linux"],
      },
      {
        title: "Coding Profiles",
        icon: "fas fa-code-branch",
        items: [
          { label: "HackerEarth", url: "https://www.hackerearth.com/@abhi588/" },
          { label: "LeetCode", url: "https://leetcode.com/u/abhi_588/" },
          { label: "CodeChef", url: "https://www.codechef.com/users/abhi588" },
          { label: "Kaggle", url: "https://www.kaggle.com/abhi588" },
        ],
      },
    ],
  },

  // --- Projects & publications (newest first) ---
  projects: {
    id: "projects",
    nav: "Projects",
    icon: "fas fa-project-diagram",
    heading: "Projects & Publications",
    items: [
      {
        title: "Catalog Attribute Extraction",
        date: "Apr 2025 - Present",
        org: "Walmart Global Tech India",
        paragraphs: [
          "An end-to-end GenAI and NLP solution that extracts and generates catalog product attributes for both inline (real-time) and batch item flows — delivering richer, higher-quality product content at scale.",
        ],
        tags: ["LLM", "GenAI", "NLP"],
      },
      {
        title: "Digital Factory",
        date: "Aug 2022 - Mar 2025",
        org: "SLB (Schlumberger)",
        paragraphs: [
          "A suite of advanced video-analytics use cases for health, safety and productivity across factories and workshops, powered by state-of-the-art computer-vision models. It combines object detection, classification, segmentation, tracking and rich image-processing on real-time camera feeds to generate live non-compliance alerts — improving workshop safety, productivity and efficiency.",
        ],
        tags: ["Computer Vision", "Deep Learning"],
      },
      {
        title: "Patent: Video Analytics for Industrial Floor Setting",
        date: "2024",
        org: "SLB (Schlumberger)",
        paragraphs: [
          "Safety non-compliance and productivity metrics computed and tracked in real time. Objects of interest (technicians, tools, cranes, slings, gloves, assets) are detected and tracked from live camera streams through multiple filtration stages (boundary, aspect-ratio, IoU, dice-coefficient and custom bounding-box techniques), then projected onto a 2D homographic map to localize position.",
          "Localized positions are filtered with custom time-series and frequency-based filters and aggregated over defined time ranges to produce productivity and safety KPIs. Non-compliance events are flagged, recorded and anonymized to preserve data privacy.",
        ],
        link: { label: "View Patent", url: "https://patents.justia.com/patent/20240281954", icon: "fas fa-scroll" },
      },
      {
        title: "UPI Fraud Detection Model",
        date: "Feb 2021 - Jul 2022",
        org: "National Payments Corporation of India (NPCI)",
        paragraphs: [
          "One of the largest real-time AI fraud-detection models on UPI — the world's uniquely scaled payment-system architecture. It classifies each transaction as fraudulent or genuine in real time, handling 20cr+ transactions per day across the UPI platform.",
        ],
        tags: ["ML", "Python", "Docker"],
      },
      {
        title: "Customer Complaint Analysis",
        date: "Dec 2020",
        org: "National Payments Corporation of India (NPCI)",
        paragraphs: [
          "Predicted disputed customer complaints using an ensemble of ML models, reaching 84% accuracy. Applied pipelining, feature engineering, visualization, class-imbalance handling and hyperparameter tuning while experimenting across Logistic Regression, Decision Tree, Random Forest, XGBoost and Neural Networks.",
        ],
        tags: ["Machine Learning", "XGBoost", "Neural Networks"],
      },
      {
        title: "Crop Disease Detection using CNN",
        date: "Oct 2019 - Jun 2020",
        org: "M.Tech, IIT (ISM) Dhanbad",
        paragraphs: [
          "A CNN trained on the PlantVillage dataset to classify diseases across different crops from leaf images — achieving 96.1% accuracy.",
        ],
        tags: ["Machine Learning", "Python", "Keras"],
        link: { label: "View Repository", url: "https://github.com/Abhi588/Crop-Disease-Detection-using-Convolutional-Neural-Network", icon: "fab fa-github" },
      },
      {
        title: "5G Charging JSON Downloader",
        date: "Sep 2019 - Nov 2019",
        org: "Ericsson India",
        paragraphs: [
          "A tool for fetching 5G charging-service context data in JSON and XML formats.",
        ],
        tags: ["Java", "JSON", "Cassandra", "XML"],
      },
      {
        title: "Dependency Tree Maven Plugin",
        date: "Jul 2019 - Aug 2019",
        org: "Ericsson India",
        paragraphs: [
          "A Maven plugin that visualizes 5G charging feature and function dependencies as PlantUML diagrams, mapping the dependency graph between features and functionalities.",
        ],
        tags: ["Java", "Maven", "JSON", "XML"],
      },
      {
        title: "School Management System",
        date: "Jul 2017 - Aug 2017",
        org: "Tata Consultancy Services",
        paragraphs: [
          "A desktop application for students and teachers to store and retrieve records for students, marks, courses and schedules.",
        ],
        tags: ["Java", "SQL"],
      },
      {
        title: "Puzzle Solver Robot",
        date: "Jan 2016 - Mar 2017",
        org: "J.K Institute of Applied Physics & Technology, University of Allahabad",
        paragraphs: [
          "A Firebird V robot (ATmega2560 microcontroller) that solves arena puzzles using image processing.",
        ],
        tags: ["Embedded C", "Python", "OpenCV"],
      },
      {
        title: "Newsreader",
        date: "Nov 2016 - Jan 2017",
        org: "J.K Institute of Applied Physics & Technology, University of Allahabad",
        paragraphs: [
          "An Android app delivering science and technology news.",
        ],
        tags: ["Java", "XML", "JSON"],
      },
    ],
  },

  // --- Awards, achievements & certifications ---
  awards: {
    id: "awards",
    nav: "Awards",
    icon: "fas fa-trophy",
    heading: "Awards & Achievements",
    items: [
      { icon: "fas fa-award", title: "Bravo & Excellence Award", issuer: "Walmart" },
      { icon: "fas fa-medal", title: "PBS CEO & Bronze Award — Digital Factory", issuer: "SLB (Schlumberger)" },
      { icon: "fas fa-star", title: "Circle of Excellence Award", issuer: "NPCI" },
      { icon: "fas fa-scroll", title: "Patent: Video Analytics for Industrial Floor Setting", issuer: "PCT/US2024/63/485,939" },
    ],
    certifications: [
      "Data Scientist with Python",
      "GCP Big Data & ML Fundamentals",
      "Core Java (J2SE)",
    ],
  },

  // --- Hobbies: each item has an icon + label ---
  hobbies: {
    id: "hobbies",
    nav: "Hobbies",
    icon: "fas fa-heart",
    heading: "Hobbies & Interests",
    items: [
      { icon: "fas fa-baseball-ball", label: "Playing outdoor sports (cricket, basketball, etc.)" },
      { icon: "fas fa-tv", label: "Watching TV series" },
      { icon: "fas fa-newspaper", label: "Following current affairs" },
    ],
  },

  // --- Resume ---
  resume: {
    id: "resume",
    nav: "Resume",
    icon: "fas fa-file-alt",
    heading: "Resume",
    text: "Download my full resume for detailed information about my experience, skills and qualifications.",
    file: "Resume_Abhishek.pdf",
  },
};

window.PORTFOLIO = PORTFOLIO;
