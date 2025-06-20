// contact.js - Comprehensive AI Assistant for Baffy's Computer Solutions

// Large Q&A Dataset
const knowledgeBase = {
    // General Questions
    "greeting": [
        "Hello! Welcome to Baffy's Computer Solutions. How can I assist you today?",
        "Hi there! I'm Baffy's AI assistant. What can I help you with?",
        "Greetings! Ready to discuss your IT needs?",
        "Welcome! Looking for web development, IT support, or something else?",
        "Good day! How can I help with your technology needs today?",
        "Hello! Excited to help with your IT projects. What's on your mind?",
        "Hi! I specialize in IT solutions. Ask me anything!",
        "Hey there! Let's talk tech - what do you need help with?",
        "Welcome to BCS! How can we assist with your digital transformation?",
        "Hi! I'm here 24/7 to answer your IT questions. What do you need?",
        "Hello! Whether it's websites, apps, or networks, I can help!",
        "Greetings! Let's make technology work for your business.",
        "Hi! IT solutions are my specialty. What's your challenge?",
        "Welcome! Need a website, app, or IT infrastructure? I can help!",
        "Hello! I can advise on web, mobile, and network solutions.",
        "Hi there! Let's discuss how technology can grow your business.",
        "Greetings! Need help with digital solutions? I'm here to assist.",
        "Hello! I provide expert IT advice. What's your question?",
        "Hi! From coding to networking, I've got IT covered. Ask away!",
        "Welcome! How can we help you achieve your tech goals today?"
    ],

    "services": [
        "We offer: 1) Custom Web Development 2) Mobile Apps (iOS/Android) 3) Network Setup & Security 4) IT Consulting 5) Computer Repairs 6) Database Solutions 7) Cloud Services 8) Cybersecurity.",
        "Our services include responsive website design, e-commerce solutions, business applications, network infrastructure, IT support, and technology consulting for businesses of all sizes.",
        "We specialize in full-stack web development, cross-platform mobile apps, enterprise network solutions, IT infrastructure management, and ongoing technical support.",
        "Key services: WordPress/Drupal development, React/Vue.js applications, Node.js backend systems, AWS/Google Cloud deployment, network security audits, and 24/7 IT monitoring.",
        "We provide complete digital solutions: UI/UX design, web applications, mobile development, API integration, database architecture, and IT strategy consulting.",
        "Our expertise covers: PHP/Laravel, Python/Django, JavaScript frameworks, Progressive Web Apps, network configuration, hardware troubleshooting, and data migration services.",
        "We deliver: Custom CMS development, e-commerce platforms (Shopify/Magento), business automation tools, VPN setup, wireless networking, and IT staff augmentation.",
        "Service portfolio: Website redesigns, mobile optimization, cloud hosting solutions, Microsoft 365 deployment, cybersecurity protection, and disaster recovery planning.",
        "We build: Scalable web platforms, interactive mobile experiences, secure corporate networks, business intelligence systems, and digital transformation roadmaps.",
        "Our offerings: Front-end development, back-end programming, DevOps services, network administration, IT helpdesk support, and technology training programs.",
        "We create: Dynamic websites, native/hybrid mobile apps, intranet solutions, VoIP systems, hardware/software integration, and IT process optimization.",
        "Specialized services: AI/ML integration, blockchain development, IoT solutions, AR/VR experiences, big data analytics, and legacy system modernization.",
        "We implement: Single-page applications, microservices architecture, containerization (Docker), CI/CD pipelines, network virtualization, and IT compliance solutions.",
        "Our solutions: Headless CMS implementations, API gateway development, identity management systems, SD-WAN configuration, and digital workplace strategies.",
        "We provide: Technology audits, digital strategy workshops, MVP development, IT outsourcing, managed services, and innovation consulting.",
        "Service highlights: Web performance optimization, accessibility compliance, internationalization, payment gateway integration, and multi-cloud deployments.",
        "We offer: Technical documentation, code reviews, architecture design, load testing, penetration testing, and IT governance frameworks.",
        "Our capabilities: AI chatbots, recommendation engines, computer vision apps, predictive analytics, network automation, and edge computing solutions.",
        "We deliver: Digital twin implementations, smart contract development, quantum computing research, 5G network testing, and sustainable IT solutions.",
        "Comprehensive services: From initial concept to deployment and maintenance, we handle all aspects of your IT projects with expert care."
    ],

    "pricing": [
        "Our pricing varies by project complexity. Basic websites start at $1,500, custom web apps from $5,000, mobile apps from $8,000. Network solutions begin at $2,500. Contact us for a detailed quote.",
        "We offer flexible pricing models: Fixed-price projects, hourly rates ($75-$150/hr), or monthly retainers. Small business packages start at $499/month for basic IT support.",
        "Cost depends on requirements. Example ballpark figures: Small business website $2k-5k, e-commerce site $5k-15k, custom web application $10k-50k+, mobile app $15k-100k+.",
        "We provide transparent pricing: Discovery phase ($1,500), UI/UX design ($3k-10k), development ($50-150/hr), maintenance (15-20% of project cost annually).",
        "Pricing factors: Project scope, technologies used, integrations needed, and ongoing support requirements. We offer free initial consultations to estimate costs accurately.",
        "Our pricing structure: 30% upfront, 40% at milestone, 30% on completion. Maintenance plans available at 20% of project cost per year with priority support.",
        "We have tiered pricing: Starter ($1k-5k), Business ($5k-20k), Enterprise ($20k+). Each package includes different levels of features, support, and scalability.",
        "Cost examples: WordPress site $1.5k-5k, custom PHP app $5k-25k, React SPA $8k-30k, mobile app $10k-50k, network setup $2k-10k depending on size.",
        "We offer competitive rates compared to agencies while providing personal service. Web development: $75-125/hr, Mobile: $100-150/hr, IT consulting: $95-175/hr.",
        "Pricing is project-based or retainer. Small websites: $1k-3k, Medium business sites: $3k-8k, Large applications: $8k-25k+, Complex systems: $25k-100k+.",
        "Our value pricing includes: Requirements analysis, project management, quality assurance, and 3 months post-launch support. Typical ROI is 3-6 months for most clients.",
        "We provide detailed quotes after understanding your needs. Budget ranges: MVP $5k-15k, Market-ready product $15k-50k, Enterprise solution $50k-250k+.",
        "Cost-effective options: We can work with your budget, suggesting phased approaches or MVP first versions to control initial investment while planning for growth.",
        "Transparent pricing model: We break down costs by development phases (planning, design, development, testing, deployment) so you know exactly what you're paying for.",
        "We offer discounted rates for non-profits (15% off), startups (10% off first project), and long-term clients (5-15% loyalty discounts on ongoing work).",
        "Our pricing is tailored to your specific needs. We'll discuss budget upfront and suggest the most cost-effective approach without compromising quality.",
        "Competitive pricing with clear deliverables at each stage. We provide fixed-price quotes for defined scope or time-and-materials for evolving requirements.",
        "We have affordable entry-level packages and premium enterprise solutions. All projects include free 30-day support and optional maintenance contracts.",
        "Pricing is based on value delivered rather than just hours worked. We focus on ROI and can often suggest cost-saving approaches without sacrificing quality.",
        "We're happy to discuss budget and find solutions that work for you, whether it's a small website or large-scale digital transformation project."
    ],

    "timeline": [
        "Project timelines vary: Basic website 2-4 weeks, Custom web app 4-12 weeks, Mobile app 8-16 weeks, Network setup 1-4 weeks. Complex projects may take 3-6 months.",
        "Typical timeframes: Discovery phase (1-2 weeks), Design (2-4 weeks), Development (4-16 weeks), Testing (1-3 weeks), Deployment (1 week). We provide Gantt charts.",
        "Our agile approach delivers working components every 2 weeks. MVP in 4-8 weeks, full product in 12-24 weeks depending on complexity and team size.",
        "Average durations: Small website 3-6 weeks, Medium business site 6-12 weeks, Web application 12-20 weeks, Mobile app 16-24 weeks, IT infrastructure 4-8 weeks.",
        "We work in sprints (2-week cycles) with regular demos. Most projects have: Planning (1 sprint), Design (1-2 sprints), Build (4-10 sprints), Polish (1-2 sprints).",
        "Timeline depends on scope, but generally: Requirements (1 week), Wireframes (1-2 weeks), Design (2 weeks), Development (6-12 weeks), QA (2 weeks), Launch (1 week).",
        "Our process: Week 1-2 discovery, Week 3-4 design, Week 5-12 development, Week 13 testing, Week 14 launch. Additional time for complex features or revisions.",
        "Standard project flow: 1-2 weeks planning, 2-3 weeks design approval, 6-10 weeks development, 2 weeks testing/training, 1 week go-live. Can be adjusted as needed.",
        "We provide realistic timelines upfront and weekly progress reports. Rush projects available with 15-25% expedite fee for prioritized scheduling.",
        "Development phases: Discovery (5-10 days), UX/UI (10-20 days), Development (30-90 days), Testing (10-20 days), Deployment (5 days). Maintenance ongoing.",
        "Our iterative approach means you see progress every 2 weeks. Initial prototype in 4 weeks, feature-complete version in 8-12 weeks, final polish in 14-16 weeks.",
        "Project duration factors: Team size (we assign 2-5 specialists), complexity, client feedback speed, third-party dependencies. We optimize all variables.",
        "We commit to timelines in writing after discovery. Typical deliverables: Week 2-3 mockups, Week 4-5 prototype, Week 6-10 alpha, Week 11-14 beta, Week 15 launch.",
        "Our development cycles: Sprint 0 (planning), Sprints 1-3 (core features), Sprints 4-6 (additional features), Sprint 7 (testing), Sprint 8 (launch prep).",
        "We provide timeline estimates after requirements gathering. Recent projects: E-commerce site (9 weeks), Business portal (14 weeks), Mobile app (18 weeks).",
        "Time investment: Small projects 100-300 hours, Medium 300-800 hours, Large 800-2000+ hours. We can adjust team size to meet deadlines when needed.",
        "Our velocity: 30-50 story points per sprint (2 weeks). Typical project is 100-400 points. We forecast completion dates after initial sprint.",
        "We build timelines around your priorities. Options: Standard pace (balanced), Accelerated (25% faster for 15% premium), Extended (more time for budget control).",
        "Phase durations: Planning (5-10%), Design (10-20%), Development (50-70%), Testing (10-15%), Deployment (5%). We track against baseline weekly.",
        "We're transparent about timelines and dependencies. Critical path is identified early, with buffer for revisions. 90% of projects deliver within 10% of estimate."
    ],

    "technologies": [
        "Our tech stack: Frontend - HTML5, CSS3, JavaScript (React, Vue, Angular), Backend - Node.js, Python, PHP, Java, Databases - MySQL, MongoDB, PostgreSQL, DevOps - Docker, AWS, Azure.",
        "We work with: Web (React, Next.js, Vue, Svelte), Mobile (React Native, Flutter, Swift, Kotlin), Backend (Express, Django, Laravel, Spring), CMS (WordPress, Drupal, Shopify).",
        "Technologies we use: JavaScript/TypeScript, Python, PHP, Ruby; Frameworks: React, Angular, Vue, Django, Laravel, Rails; Cloud: AWS, Google Cloud, Azure, DigitalOcean.",
        "Our expertise includes: Modern JavaScript (ES6+), TypeScript, React Native, GraphQL, REST APIs, Microservices, Serverless, CI/CD pipelines, Kubernetes, Terraform.",
        "We specialize in: Jamstack (Gatsby, Next.js), Headless CMS (Contentful, Strapi), E-commerce (Shopify, Magento), PWA, Web Components, WebAssembly, Three.js.",
        "Technology partners: AWS Certified, Google Cloud Partner, Microsoft Gold Partner, Shopify Expert, WordPress VIP, MongoDB Certified, Docker Certified.",
        "Our toolbox: Design (Figma, Adobe XD), Development (VS Code, WebStorm), Version Control (Git/GitHub), Project Management (Jira, Trello), Testing (Jest, Cypress).",
        "Emerging tech we implement: AI/ML (TensorFlow, PyTorch), Blockchain (Ethereum, Solidity), IoT (Raspberry Pi, Arduino), AR/VR (Unity, WebXR), Voice Apps (Alexa, Google).",
        "Database expertise: Relational (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase), Search (Elasticsearch), Graph (Neo4j), Time-series (InfluxDB), Cache (Redis).",
        "DevOps capabilities: Infrastructure as Code (Terraform), Configuration Management (Ansible), Monitoring (Prometheus, Grafana), Logging (ELK), Security (OWASP tools).",
        "Mobile technologies: Native (Swift, Kotlin), Cross-platform (Flutter, React Native), Hybrid (Ionic, Cordova), Testing (Appium, Detox), Distribution (TestFlight, Play Console).",
        "Cloud services: Compute (EC2, App Engine), Storage (S3, Cloud Storage), Databases (RDS, Firestore), Serverless (Lambda, Cloud Functions), AI (Rekognition, Vision AI).",
        "We implement: Design Systems, Component Libraries, Microfrontends, Monorepos, Static Site Generators, ISR/SSR, Edge Functions, WebSockets, WebRTC.",
        "Security focus: OAuth/OIDC, JWT, SSL/TLS, WAF, DDoS protection, Pen Testing, SAST/DAST, Secrets Management, Compliance (GDPR, HIPAA, PCI DSS).",
        "Data tools: ETL (Airflow, dbt), Analytics (BigQuery, Redshift), BI (Tableau, Power BI), ML (SageMaker, Vertex AI), Visualization (D3.js, Chart.js).",
        "CMS expertise: WordPress (ACF, WP Engine), Drupal (Acquia), Headless (Contentful, Sanity), E-commerce (Shopify, WooCommerce), Enterprise (Sitecore, Adobe).",
        "Blockchain development: Smart Contracts (Solidity, Rust), DApps (Web3.js, Ethers.js), NFTs (ERC-721), DeFi (Uniswap, Aave), DAOs (Aragon, DAOstack).",
        "QA technologies: Unit Testing (Jest, pytest), Integration (Postman), E2E (Cypress, Selenium), Load (k6, JMeter), Accessibility (axe, Wave), Security (ZAP, Burp).",
        "CI/CD pipelines: GitHub Actions, GitLab CI, CircleCI, Jenkins, ArgoCD, Spinnaker with testing, linting, security scanning, and deployment automation.",
        "Modern architectures: Microservices, Event-Driven, CQRS, Hexagonal, Clean Architecture, DDD with appropriate tech choices for each project's needs."
    ],

    // Specific Service Questions
    "web development": [
        "Our web development process: 1) Discovery 2) UX/UI Design 3) Development 4) Testing 5) Launch. We build responsive, accessible, SEO-optimized sites using modern frameworks.",
        "Web development options: Static sites ($1k-3k), CMS websites ($3k-8k), Custom web apps ($8k-25k+). All include mobile responsiveness, basic SEO, and 3 months support.",
        "We specialize in: Progressive Web Apps, Single Page Applications, Server-Side Rendering, Static Site Generation, Microfrontends, and Jamstack architectures.",
        "Our web stack: React/Next.js for frontend, Node.js/Python for backend, headless CMS options, Vercel/Netlify/AWS for hosting, CI/CD pipelines for smooth deployments.",
        "Web development timeline: 2-4 weeks for basic sites, 4-8 weeks for CMS sites, 8-16 weeks for custom web applications. We provide weekly progress updates.",
        "We build websites that: Load fast (<2s), score 90+ on Lighthouse, work perfectly on all devices, follow WCAG accessibility standards, and are easy to update.",
        "Our approach: Mobile-first design, component-based architecture, performance optimization, security hardening, and future-proof technology choices.",
        "E-commerce solutions: Shopify, WooCommerce, Magento, custom carts. Features: Product variants, payments, taxes, shipping, discounts, subscriptions, memberships.",
        "Web app capabilities: User auth, payment processing, real-time features, admin dashboards, API integrations, data visualization, workflow automation, and more.",
        "We implement: Dark mode, internationalization, accessibility, animations, progressive enhancement, offline capability, and installable PWA features.",
        "CMS options: WordPress for blogs/brochures, Craft for custom content, Shopify for e-commerce, Strapi for headless, Drupal for large organizations.",
        "Web performance focus: Image optimization, lazy loading, code splitting, caching strategies, CDN implementation, and minimal third-party scripts.",
        "Our websites include: SEO basics (metadata, sitemaps, schema), social sharing setup, analytics integration, and conversion tracking configuration.",
        "Security measures: HTTPS, CSP headers, CSRF protection, XSS prevention, rate limiting, regular updates, backups, and security monitoring.",
        "We follow: Semantic HTML, CSS methodologies (BEM), JavaScript best practices, framework guidelines, and web standards for maintainable code.",
        "Integration expertise: Payment gateways, CRMs (Salesforce, HubSpot), ERPs, marketing tools, social media, APIs, and legacy system connections.",
        "Admin features: Content management, user roles, workflow approvals, versioning, audit logs, reporting, and export capabilities for business needs.",
        "Hosting options: Shared, VPS, dedicated, cloud, serverless. We recommend based on traffic, budget, and technical requirements.",
        "Ongoing maintenance: Security patches, feature updates, performance tuning, content changes, and 24/7 monitoring available.",
        "We deliver: Clean, documented code; deployment instructions; training materials; and support handoff for your team."
    ],

    "mobile development": [
        "Our mobile app process: 1) Strategy 2) UX/UI Design 3) Development 4) Testing 5) App Store Submission. We build for iOS, Android, or cross-platform.",
        "Mobile app options: Native (Swift/Kotlin) for performance, React Native/Flutter for cross-platform. Typical cost $15k-100k+, timeline 12-24 weeks.",
        "We develop: Consumer apps, business tools, e-commerce, social networks, on-demand services, IoT controllers, and enterprise mobility solutions.",
        "App features we implement: User auth, push notifications, in-app purchases, subscriptions, AR features, offline mode, biometric login, and device hardware access.",
        "Our mobile tech stack: SwiftUI/Jetpack Compose for native, React Native/Flutter for cross-platform, Firebase for backend, Fastlane for deployment.",
        "App store requirements: We handle Apple Review Guidelines and Google Play policies, including privacy, content, and technical requirements.",
        "Mobile UX principles: Thumb-friendly design, minimal typing, clear CTAs, intuitive navigation, feedback for actions, and consistent patterns.",
        "Performance focus: Fast launch time, smooth animations, efficient data fetching, battery optimization, and memory management.",
        "Security measures: Certificate pinning, encrypted storage, secure API calls, jailbreak detection, and regular dependency updates.",
        "Testing approach: Unit tests, integration tests, device cloud testing, beta programs, and real-user monitoring post-launch.",
        "App marketing support: ASO optimization, screenshot design, promo video, landing page, and launch strategy advice.",
        "Analytics integration: User flows, retention, crashes, performance, and custom events to measure business goals.",
        "Cross-platform benefits: 80% code sharing, faster development, consistent UI, with native modules where needed for performance.",
        "Hybrid app options: Ionic/Capacitor for web-based apps needing app store distribution with web tech (HTML/CSS/JS).",
        "Backend options: Firebase for simple apps, custom Node.js/Python for complex needs, or existing API integration.",
        "Offline capabilities: Data synchronization, local storage, queueing actions, and conflict resolution strategies.",
        "Accessibility features: Dynamic text, voiceover support, high contrast, and screen reader compatibility.",
        "App monetization: Ads (AdMob), subscriptions, in-app purchases, paid apps, sponsorships, and hybrid models.",
        "Maintenance plans: OS updates, bug fixes, feature additions, and analytics review starting at $500/month.",
        "We provide: Technical documentation, admin panels, API specs, and developer handoff for your team."
    ],

    "network solutions": [
        "Our network services: 1) Assessment 2) Design 3) Implementation 4) Security 5) Monitoring. We work with small office to enterprise networks.",
        "Network solutions include: Structured cabling, WiFi deployment, switching/routing, firewalls, VPNs, VoIP, and cloud networking.",
        "We design: Secure, scalable networks with redundancy, QoS, segmentation, and centralized management for optimal performance.",
        "Network security: Next-gen firewalls, IDS/IPS, endpoint protection, email security, web filtering, and zero-trust architecture.",
        "Remote work solutions: VPN setup, VDI implementation, secure access controls, and collaboration tools integration.",
        "WiFi services: Site surveys, heat mapping, access point placement, channel optimization, and performance tuning.",
        "Cloud networking: AWS/Azure/GCP virtual networks, direct connects, SD-WAN, and hybrid cloud configurations.",
        "Monitoring tools: Network performance baselining, alerting, traffic analysis, and capacity planning.",
        "Disaster recovery: Backup internet, failover systems, documented procedures, and regular testing.",
        "Compliance: Network configurations meeting HIPAA, PCI, GDPR, and other regulatory requirements.",
        "Unified communications: VoIP phone systems, video conferencing, instant messaging, and presence integration.",
        "IoT networking: Secure segmentation, device management, traffic policies, and anomaly detection.",
        "Wireless solutions: Enterprise WiFi, guest access controls, captive portals, and BYOD policies.",
        "Network hardware: Vendor-neutral recommendations for switches, routers, firewalls based on needs.",
        "Cabling infrastructure: Cat6/Cat6a, fiber optics, patch panels, and cable management.",
        "Network documentation: Diagrams, IP schemes, device inventories, and password management.",
        "Performance optimization: QoS policies, bandwidth management, and traffic shaping.",
        "Vendor management: ISP coordination, circuit provisioning, and SLA monitoring.",
        "Ongoing support: Managed network services starting at $500/month for small businesses.",
        "We provide: Network assessments, technology roadmaps, and upgrade planning."
    ],

    // Technical Questions
    "hosting": [
        "We recommend hosting based on needs: Shared ($5-50/mo), VPS ($20-200/mo), Dedicated ($100-500/mo), Cloud (pay-as-you-go), or Serverless (per-usage).",
        "Hosting options we manage: WordPress (WP Engine, Kinsta), Static (Netlify, Vercel), Apps (AWS, Heroku), Enterprise (Azure, Google Cloud).",
        "Our hosting checklist: 99.9% uptime, daily backups, SSL certificates, CDN, staging environment, SSH access, and scalability.",
        "Managed hosting includes: Server updates, security patches, performance tuning, monitoring, and technical support.",
        "Cloud hosting benefits: Scalability, reliability, global distribution, and pay-for-what-you-use pricing models.",
        "We optimize hosting for: Fast page loads (<2s), high traffic capacity, security compliance, and cost efficiency.",
        "Server configurations: LAMP/LEMP stacks, Node.js environments, Docker containers, and serverless architectures.",
        "Hosting migrations: We handle seamless transfers with zero downtime and complete testing.",
        "Security features: Firewalls, DDoS protection, malware scanning, and intrusion detection.",
        "Disaster recovery: Automated backups, one-click restore, and offsite storage options.",
        "Email hosting: Google Workspace, Microsoft 365, or self-managed solutions with spam filtering.",
        "Database hosting: Managed MySQL, PostgreSQL, MongoDB, or cloud database services.",
        "Monitoring tools: Uptime checks, performance metrics, and alert notifications.",
        "Compliance hosting: HIPAA, PCI, GDPR compliant solutions with proper auditing.",
        "Server locations: Global options to reduce latency for your target audience.",
        "Green hosting: Eco-friendly data centers with renewable energy commitments.",
        "Cost optimization: Right-sizing resources, reserved instances, and auto-scaling.",
        "Our management: 24/7 monitoring, monthly reports, and proactive maintenance.",
        "Hybrid hosting: Combining cloud with on-premise for specific requirements.",
        "We provide: Hosting recommendations, migration plans, and ongoing management."
    ],

    "security": [
        "Our security approach: Assessment, protection, detection, response, recovery following NIST CSF framework.",
        "Security services: Vulnerability scans, penetration testing, security hardening, and compliance audits.",
        "Web security: OWASP Top 10 protection, WAF implementation, and secure coding practices.",
        "Network security: Firewalls, segmentation, VPNs, NAC, and continuous monitoring.",
        "Endpoint protection: EDR solutions, device encryption, and patch management.",
        "Email security: Spam filtering, phishing protection, and DMARC/DKIM/SPF.",
        "Cloud security: IAM policies, encryption, logging, and configuration audits.",
        "Data protection: Encryption at rest/transit, access controls, and DLP solutions.",
        "Incident response: Preparation, identification, containment, eradication, recovery.",
        "Compliance: Assistance with GDPR, HIPAA, PCI DSS, SOC 2 requirements.",
        "Security awareness: Employee training programs and phishing simulations.",
        "Backup solutions: Automated, encrypted, offsite with regular testing.",
        "Mobile security: MDM, app vetting, and secure development practices.",
        "IoT security: Device authentication, network segmentation, and monitoring.",
        "Zero trust: Identity verification, least privilege, and microsegmentation.",
        "Threat intelligence: Monitoring emerging threats and proactive defenses.",
        "Security operations: SIEM implementation and 24/7 monitoring options.",
        "Risk management: Assessments, mitigation planning, and insurance coordination.",
        "Vendor security: Third-party risk assessments and contract reviews.",
        "We provide: Security roadmaps, gap analysis, and implementation support."
    ],

    // Business Questions
    "process": [
        "Our 5-phase process: 1) Discover (requirements) 2) Design (wireframes) 3) Develop (sprints) 4) Deploy (testing) 5) Delight (support).",
        "Agile methodology: 2-week sprints with planning, development, review, and retrospective cycles.",
        "Collaboration tools: Slack for communication, Trello/Jira for tasks, Figma for design, GitHub for code.",
        "Client involvement: Weekly syncs, sprint demos, and always-available support channels.",
        "Quality assurance: Unit testing, integration testing, user acceptance testing, and performance testing.",
        "Documentation: Technical specs, user manuals, admin guides, and API references.",
        "Change management: Formal process for scope changes with impact analysis.",
        "Risk management: Early identification and mitigation planning for potential issues.",
        "Communication plan: Regular updates, escalation paths, and stakeholder reporting.",
        "Delivery milestones: Alpha, beta, RC, and production releases with sign-offs.",
        "Design process: User flows, wireframes, prototypes, and design system creation.",
        "Development standards: Code reviews, style guides, and architecture diagrams.",
        "Testing strategy: Automated where possible, manual for UX, and security scans.",
        "Deployment plan: Staging environment, rollout strategy, and rollback procedure.",
        "Training: Admin training, user training, and documentation handoff.",
        "Post-launch: 30-day warranty period and ongoing support options.",
        "Continuous improvement: Retrospectives and process refinements.",
        "Transparency: Time tracking, budget updates, and open communication.",
        "Flexibility: Adapting to changing needs while protecting timeline/budget.",
        "Our guarantee: Quality results, on-time delivery, and client satisfaction."
    ],

    "industries": [
        "We serve: Healthcare, Finance, Education, Retail, Manufacturing, Non-profits, Government, and more.",
        "Healthcare expertise: HIPAA compliance, patient portals, and telehealth solutions.",
        "Financial services: Secure banking apps, fintech platforms, and compliance systems.",
        "Education technology: LMS integration, student portals, and virtual classroom tools.",
        "E-commerce solutions: Product configurators, AR previews, and AI recommendations.",
        "Manufacturing: IIoT, supply chain tracking, and equipment monitoring.",
        "Real estate: Virtual tours, CRM integration, and property management systems.",
        "Hospitality: Booking engines, concierge apps, and loyalty programs.",
        "Non-profits: Donation systems, volunteer management, and grant tracking.",
        "Professional services: Client portals, time tracking, and billing systems.",
        "Media & entertainment: Content platforms, streaming solutions, and paywalls.",
        "Startups: MVP development, investor dashboards, and scaling strategies.",
        "Associations: Member directories, event management, and certification tracking.",
        "Government: Secure portals, public services, and transparency initiatives.",
        "Legal tech: Case management, document automation, and e-filing systems.",
        "Marketing agencies: Campaign tools, analytics dashboards, and client reporting.",
        "Fitness: Wearable integration, workout planners, and nutrition tracking.",
        "Food service: Online ordering, inventory management, and delivery tracking.",
        "Transportation: Fleet management, routing optimization, and logistics tools.",
        "We adapt our expertise to your specific industry needs and challenges."
    ],

    // Support Questions
    "support": [
        "Support options: Email (response within 24h), Phone (business hours), Emergency (24/7 for critical issues).",
        "Support tiers: Basic (email), Standard (email/phone), Premium (dedicated engineer).",
        "Response times: Critical (1h), High (4h), Medium (24h), Low (72h) based on SLA.",
        "Maintenance plans: Bronze (5h/mo), Silver (10h/mo), Gold (20h/mo), Platinum (40h/mo).",
        "Support scope: Bug fixes, minor updates, security patches, and guidance.",
        "Out-of-scope: Major new features require separate project quotes.",
        "Support process: Ticket system with tracking, prioritization, and resolution.",
        "Remote assistance: Screen sharing, troubleshooting, and configuration help.",
        "Onsite support: Available for local clients with travel fees.",
        "Training: Additional sessions available for new staff or features.",
        "Documentation: Knowledge base with guides, FAQs, and tutorials.",
        "Monitoring: Uptime checks, performance alerts, and security scans.",
        "Backup management: Regular verification and recovery testing.",
        "Software updates: Applying patches and version upgrades.",
        "Security updates: Critical vulnerability remediation.",
        "Performance tuning: Database optimization and caching.",
        "Third-party coordination: Vendor management for integrations.",
        "Reporting: Monthly summaries of activities and metrics.",
        "Account management: Quarterly reviews and planning.",
        "We tailor support to your specific needs and budget."
    ],

    // Company Info
    "about": [
        "Baffy's Computer Solutions was founded in 2020 by Bafokeng Khoali, an IT professional with a Diploma in ICT and BSc in IT.",
        "Our mission: To deliver innovative, reliable technology solutions that help businesses thrive in the digital age.",
        "Company values: Integrity, excellence, innovation, collaboration, and customer focus.",
        "Our team: Skilled developers, designers, and IT specialists with diverse industry experience.",
        "Certifications: Microsoft Certified, AWS Accredited, Google Cloud Partner, and more.",
        "Location: Based in Lesotho serving clients locally and internationally.",
        "Approach: We combine technical expertise with business understanding for optimal results.",
        "Differentiators: Personal service, transparent processes, and measurable outcomes.",
        "Community: We contribute to tech education and support local businesses.",
        "Growth: Continuously expanding our skills and service offerings.",
        "Partnerships: Technology alliances with leading platform providers.",
        "Recognition: Award-winning projects and high client satisfaction.",
        "Culture: Collaborative, learning-focused, and results-driven.",
        "Infrastructure: Secure systems and professional tools for all work.",
        "Methodology: Agile, user-centered, and quality-focused development.",
        "Sustainability: Eco-conscious practices in our operations.",
        "Diversity: Inclusive workplace welcoming all backgrounds.",
        "Innovation: Regular R&D to stay ahead of technology trends.",
        "Client focus: Long-term relationships over short-term projects.",
        "Vision: To be the most trusted IT partner for small and medium businesses."
    ],

    // Default Fallback
    "default": [
        "I'm not sure I understand. Could you rephrase your question?",
        "I'd be happy to help with that. Could you provide more details?",
        "Let me connect you with more specific information. What exactly are you looking for?",
        "I want to make sure I give you the right answer. Can you clarify your question?",
        "That's an interesting question. Let me find the best information for you.",
        "I'm still learning. Could you ask that in a different way?",
        "I'd like to help with that. What specific aspect are you interested in?",
        "Let me point you to some resources that might help. What's your main concern?",
        "I can discuss several aspects of that topic. What's most important to you?",
        "To better assist you, could you provide more context about your needs?",
        "I have information on related topics. What exactly do you need to know?",
        "Let's focus on what matters most to you. Can you specify your question?",
        "I want to provide the most useful response. What's your primary goal?",
        "There are several ways I could answer that. What's most relevant for you?",
        "Help me understand your question better so I can give a good answer.",
        "I'm happy to explore that topic with you. What specifically should I address?",
        "Let me check my resources. Could you tell me more about your situation?",
        "I can offer general information or specific details. What would you prefer?",
        "That depends on several factors. What's your specific scenario?",
        "I'd be glad to assist. What outcome are you hoping to achieve?"
    ]
};

// Real-time API Integration (for static site)
const fetchRealTimeData = async (query) => {
    try {
        // Free API options for a static site
        if (query.includes("weather")) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maseru&appid=9748180fa70611e44b29cdf29ce6fb09&units=metric`);
            const data = await response.json();
            return `Current weather in Maseru: ${data.weather[0].description}, ${data.main.temp}°C.`;
        }

        if (query.includes("news") || query.includes("update")) {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ls&apiKey=88194f71736a4e6bbcaf9719d80e926d`);
            const data = await response.json();
            return `Latest news: ${data.articles[0].title}. Read more: ${data.articles[0].url}`;
        }

        if (query.includes("time")) {
            return `Current time in Lesotho: ${new Date().toLocaleTimeString('en-LS')}`;
        }

        if (query.includes("currency") || query.includes("exchange rate")) {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/LSL`);
            const data = await response.json();
            return `Exchange rates: 1 LSL = ${data.rates.USD} USD, 1 LSL = ${data.rates.ZAR} ZAR.`;
        }

        return null; // No real-time data available for this query
    } catch (error) {
        console.error("API error:", error);
        return null;
    }
};

// AI Response Generator
const getAIResponse = async (userMessage) => {
    // Check for real-time data first
    const realTimeResponse = await fetchRealTimeData(userMessage.toLowerCase());
    if (realTimeResponse) return realTimeResponse;

    const lowerMsg = userMessage.toLowerCase();

    // Check knowledge base categories
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        return getRandomResponse('greeting');
    }
    if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do you')) {
        return getRandomResponse('services');
    }
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
        return getRandomResponse('pricing');
    }
    if (lowerMsg.includes('time') || lowerMsg.includes('long') || lowerMsg.includes('duration') || lowerMsg.includes('when')) {
        return getRandomResponse('timeline');
    }
    if (lowerMsg.includes('tech') || lowerMsg.includes('framework') || lowerMsg.includes('language') || lowerMsg.includes('stack')) {
        return getRandomResponse('technologies');
    }
    if (lowerMsg.includes('web') || lowerMsg.includes('site') || lowerMsg.includes('website')) {
        return getRandomResponse('web development');
    }
    if (lowerMsg.includes('mobile') || lowerMsg.includes('app') || lowerMsg.includes('ios') || lowerMsg.includes('android')) {
        return getRandomResponse('mobile development');
    }
    if (lowerMsg.includes('network') || lowerMsg.includes('wifi') || lowerMsg.includes('lan') || lowerMsg.includes('internet')) {
        return getRandomResponse('network solutions');
    }
    if (lowerMsg.includes('host') || lowerMsg.includes('server') || lowerMsg.includes('where is it')) {
        return getRandomResponse('hosting');
    }
    if (lowerMsg.includes('secure') || lowerMsg.includes('hack') || lowerMsg.includes('protect')) {
        return getRandomResponse('security');
    }
    if (lowerMsg.includes('process') || lowerMsg.includes('work') || lowerMsg.includes('method')) {
        return getRandomResponse('process');
    }
    if (lowerMsg.includes('industry') || lowerMsg.includes('sector') || lowerMsg.includes('vertical')) {
        return getRandomResponse('industries');
    }
    if (lowerMsg.includes('support') || lowerMsg.includes('help') || lowerMsg.includes('maintain')) {
        return getRandomResponse('support');
    }
    if (lowerMsg.includes('about') || lowerMsg.includes('who are you') || lowerMsg.includes('company')) {
        return getRandomResponse('about');
    }

    // Default response if no specific category matched
    return getRandomResponse('default');
};

// Helper function to get random response from a category
const getRandomResponse = (category) => {
    const responses = knowledgeBase[category] || knowledgeBase['default'];
    return responses[Math.floor(Math.random() * responses.length)];
};

// Chat UI Functions
const addChatMessage = (message, isBot = false, chatContainer) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = isBot ? 'bot-message' : 'user-message';

    // Add typing indicator for bot messages
    if (isBot) {
        messageDiv.innerHTML = `<p style="margin:0;">${message}</p>`;
    } else {
        const messageP = document.createElement('p');
        messageP.style = 'margin:0;';
        messageP.textContent = message;
        messageDiv.appendChild(messageP);
    }

    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
};

const showTypingIndicator = (chatContainer) => {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.innerHTML = '<p style="margin:0;"><i class="fas fa-ellipsis-h"></i> Typing...</p>';
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return typingDiv;
};

const removeTypingIndicator = (typingElement) => {
    if (typingElement && typingElement.parentNode) {
        typingElement.parentNode.removeChild(typingElement);
    }
};

// Initialize Chat Functionality
const initChat = () => {
    // Main AI Chat
    const aiChat = document.getElementById('aiChat');
    const aiInput = document.getElementById('aiInput');
    const aiSendBtn = document.getElementById('aiSendBtn');

    const handleAISendMessage = async () => {
        const message = aiInput.value.trim();
        if (message) {
            addChatMessage(message, false, aiChat);
            aiInput.value = '';

            const typingElement = showTypingIndicator(aiChat);

            setTimeout(async () => {
                removeTypingIndicator(typingElement);
                const response = await getAIResponse(message);
                addChatMessage(response, true, aiChat);
            }, 800);
        }
    };

    aiSendBtn.addEventListener('click', handleAISendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAISendMessage();
        }
    });

    // Quick Question Buttons
    window.askAI = (question) => {
        aiInput.value = question;
        handleAISendMessage();
    };

    // Live Chat Widget
    const chatToggle = document.getElementById('chatToggle');
    const liveChat = document.getElementById('liveChat');
    const closeChat = document.getElementById('closeChat');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');

    chatToggle.addEventListener('click', () => {
        liveChat.classList.toggle('chat-open');
        chatToggle.style.animation = liveChat.classList.contains('chat-open') ? 'none' : 'pulse 2s infinite';
    });

    closeChat.addEventListener('click', () => {
        liveChat.classList.remove('chat-open');
        chatToggle.style.animation = 'pulse 2s infinite';
    });

    document.addEventListener('click', (e) => {
        if (!liveChat.contains(e.target) && e.target !== chatToggle) {
            liveChat.classList.remove('chat-open');
            chatToggle.style.animation = 'pulse 2s infinite';
        }
    });

    const handleSendChatMessage = async () => {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message, false, chatMessages);
            chatInput.value = '';

            const typingElement = showTypingIndicator(chatMessages);

            setTimeout(async () => {
                removeTypingIndicator(typingElement);
                const response = await getAIResponse(message);
                addChatMessage(response, true, chatMessages);
            }, 1500);
        }
    };

    sendChatBtn.addEventListener('click', handleSendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendChatMessage();
        }
    });

    // Mobile Responsiveness
    const adjustChatForMobile = () => {
        if (window.innerWidth <= 767) {
            chatToggle.style.bottom = '20px';
            chatToggle.style.right = '20px';
            liveChat.style.bottom = '80px';
            liveChat.style.right = '5%';
            liveChat.style.width = '90%';
        } else {
            chatToggle.style.bottom = '30px';
            chatToggle.style.right = '30px';
            liveChat.style.bottom = '100px';
            liveChat.style.right = '30px';
            liveChat.style.width = '380px';
        }
    };

    // Initial adjustments
    adjustChatForMobile();
    window.addEventListener('resize', adjustChatForMobile);

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // FormSubmit will handle the submission
            // You can add additional client-side validation here if needed
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Remove preloader
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 500);

    // Initialize chat functionality
    initChat();
});

        // Live Chat Toggle
        const chatToggle = document.getElementById('chatToggle');
        const liveChat = document.getElementById('liveChat');
        const closeChat = document.getElementById('closeChat');

        chatToggle.addEventListener('click', () => {
            liveChat.classList.toggle('show-chat');
        });

        closeChat.addEventListener('click', () => {
            liveChat.classList.remove('show-chat');
        });

        // Chat Functionality
        const chatInput = document.getElementById('chatInput');
        const sendChatBtn = document.getElementById('sendChatBtn');
        const chatMessages = document.getElementById('chatMessages');

        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                const userMsg = document.createElement('div');
                userMsg.className = 'user-message';
                userMsg.innerHTML = `<p style="margin: 0;">${message}</p>`;
                chatMessages.appendChild(userMsg);

                // Clear input
                chatInput.value = '';

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Simulate bot response after delay
                setTimeout(() => {
                    const botMsg = document.createElement('div');
                    botMsg.className = 'bot-message';
                    botMsg.innerHTML = `<p style="margin: 0;">Thanks for your message! For immediate assistance, please use WhatsApp or Messenger above.</p>`;
                    chatMessages.appendChild(botMsg);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }

        sendChatBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // AI Chat Functionality
        const aiInput = document.getElementById('aiInput');
        const aiSendBtn = document.getElementById('aiSendBtn');
        const aiChat = document.getElementById('aiChat');

        function askAI(question) {
            if (question) {
                // Add user message
                const userMsg = document.createElement('div');
                userMsg.className = 'user-message';
                userMsg.innerHTML = `<p style="margin: 0;">${question}</p>`;
                aiChat.appendChild(userMsg);

                // Scroll to bottom
                aiChat.scrollTop = aiChat.scrollHeight;

                // Simulate AI response after delay
                setTimeout(() => {
                    const aiMsg = document.createElement('div');
                    aiMsg.className = 'ai-message';
                    
                    let response = "I'm sorry, I couldn't understand your question.";
                    
                    if (question.toLowerCase().includes('service')) {
                        response = "We offer web development, mobile apps, network solutions, IT consulting, and more. Check our Services page for details!";
                    } else if (question.toLowerCase().includes('pric')) {
                        response = "Our pricing varies based on project requirements. We offer competitive rates - visit our Pricing page or contact us for a quote.";
                    } else if (question.toLowerCase().includes('time') || question.toLowerCase().includes('long')) {
                        response = "Project timelines depend on complexity. Simple websites take 2-4 weeks, complex systems 8-12 weeks. We'll provide a detailed timeline after discussing your needs.";
                    } else if (question.toLowerCase().includes('technolog')) {
                        response = "We work with modern technologies including HTML5, CSS3, JavaScript, React, Node.js, Python, PHP, MySQL, MongoDB, AWS, and more.";
                    }
                    
                    aiMsg.innerHTML = `<p style="margin: 0;">${response}</p>`;
                    aiChat.appendChild(aiMsg);
                    aiChat.scrollTop = aiChat.scrollHeight;
                }, 800);
            }
        }

        aiSendBtn.addEventListener('click', () => {
            const question = aiInput.value.trim();
            if (question) {
                askAI(question);
                aiInput.value = '';
            }
        });

        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const question = aiInput.value.trim();
                if (question) {
                    askAI(question);
                    aiInput.value = '';
                }
            }
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            // You can add form validation here if needed
            // e.preventDefault(); // Uncomment to prevent default submission for AJAX handling
        });
 