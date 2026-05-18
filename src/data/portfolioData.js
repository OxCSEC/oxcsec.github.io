export const portfolioData = {
  name: 'Özgür Çetinkaya',
  title: [
    'Pentester',
    'Application Security Engineer',
    'Java Backend Developer',
  ],
  prompt: 'ozgur@hacker',
  location: 'Ankara / Onsite',
  about:
    'Security-focused engineer specialized in offensive validation, secure software delivery, and resilient Java backend systems. Combines hands-on penetration testing with AppSec program thinking to reduce exploitability before release.',
  aboutLines: [
    'Performs offensive validation across web, mobile, and API attack surfaces.',
    'Supports secure delivery with code review, threat modeling, and remediation guidance.',
    'Builds Java backend systems with a security-first mindset and practical engineering focus.',
  ],
  expertise: [
    'Web, Mobile & API penetration testing',
    'Secure code review and developer guidance',
    'Threat modeling for product and platform teams',
    'Vulnerability assessment and remediation validation',
    'Java / Spring backend architecture with security-first design',
  ],
  summaryRows: [
    ['Name', 'Özgür Çetinkaya'],
    ['Title', 'Pentester | AppSec Engineer | Java Developer'],
    ['About', 'Offensive testing, secure SDLC, and hardened backend delivery'],
    ['Focus', 'Pentest | AppSec | Java | Threat Modeling | Secure Coding'],
    ['Status', 'Available for consulting, audits, and engineering'],
    ['Location', 'Ankara / Onsite'],
  ],
  tabs: [
    { id: 'overview', label: 'Overview', command: 'neofetch --operator' },
    { id: 'experience', label: 'Experience', command: './career --timeline --compact' },
    { id: 'projects', label: 'Projects', command: 'ls ./projects --security-focus' },
    { id: 'skills', label: 'Skills', command: './enum --capabilities' },
    { id: 'tools', label: 'Tools', command: './env --toolchain' },
    { id: 'certifications', label: 'Certifications', command: './credcheck --list' },
    { id: 'contact', label: 'Contact', command: './connect --safe-links' },
  ],
  experience: [
    {
      label: '2024 - Present',
      title: 'Cyber Security Specialist',
      detail:
        'Embedded with product teams to run architecture reviews, secure code reviews, threat models, and remediation guidance across cloud-native services.',
    },
    {
      label: '2023 - 2024',
      title: 'Java Backend Developer',
      detail:
        'Developed web applications using Java Spring Boot, Spring Data JPA, PostgreSQL, and H2 Database in security-aware backend workflows.',
    },
    {
      label: '2018 - 2021',
      title: 'Cyber Security Consultant',
      detail:
        'Executed authenticated web, API, and mobile assessments; reproduced exploit chains; delivered pragmatic fixes with engineering teams.',
    },
  ],
  certifications: [
    {
      label: 'OSCP',
      detail: 'In progress',
    },
    {
      label: 'eWPTX',
      detail: 'In progress',
    },
    {
      label: 'OSWP',
      detail: 'In progress',
    },
    {
      label: 'KLCP',
      detail: 'In progress',
    },
  ],
  projects: [
    {
      label: 'AI Supported Virus Scanner',
      detail:
        'Signature-based malware scanning using the VirusTotal API and AI-assisted quarantining with a model trained on PE files from more than 1,000 malware samples.',
      meta: 'malware analysis / detection engineering',
    },
    {
      label: 'CYBERORK',
      detail:
        'An ASPM solution under development that generates SBOM archives and performs SAST, DAST, and SCA scans through GitLab integration.',
      meta: 'aspm / sbom / gitlab integration',
    },
  ],
  skills: [
    {
      label: 'Application Security',
      detail: 'Threat modeling, SDL, SAST/DAST triage, secure design reviews',
    },
    {
      label: 'Offensive Security',
      detail: 'Manual pentesting, API abuse cases, auth bypass, exploit validation',
    },
    {
      label: 'Secure Engineering',
      detail: 'Java, Spring Boot, REST APIs, CI/CD security gates, code review',
    },
  ],
  tools: [
    {
      label: 'Security',
      detail: 'Burp Suite, Nmap, ffuf, nuclei, OWASP ZAP, Semgrep',
    },
    {
      label: 'Development',
      detail: 'Java, Spring Boot, Maven, Gradle, Docker, PostgreSQL',
    },
    {
      label: 'Workflow',
      detail: 'GitHub Actions, Jira, Confluence, Linux, Bash',
    },
  ],
  contact: [
    {
      label: 'Email',
      detail: 'ctnkyozgur@gmail.com',
      href: 'mailto:ctnkyozgur@gmail.com',
      meta: 'Primary contact channel',
    },
    {
      label: 'GitHub',
      detail: 'github.com/OxCSEC',
      href: 'https://github.com/OxCSEC',
      meta: 'Repositories, tooling, and lab work',
    },
    {
      label: 'LinkedIn',
      detail: 'linkedin.com/in/ctnkyozgur',
      href: 'https://linkedin.com/in/ctnkyozgur',
      meta: 'Professional profile',
    },
  ],
  bootLog: [
    '[boot] launching sec-terminal v1.0',
    '[ok] loading operator profile',
    '[ok] validating AppSec modules',
    '[ok] mounting portfolio filesystem',
    '[ok] rendering terminal dashboard',
  ],
  asciiArt: [
    '      .----------------------------.',
    '      |   APPSEC / PENTEST NODE    |',
    '      |----------------------------|',
    '      | target : webapp.internal   |',
    '      | mode   : review + exploit  |',
    '      | risk   : HIGH              |',
    '      | findings: 04               |',
    '      `----------------------------\'',
    '                 \\\\',
    '                  \\\\',
    '               .-"""-.',
    '              /  .-.  \\\\',
    '             |  /   \\\\  |',
    '             |  \\\\_._/  |',
    '             |   /_\\\\   |',
    '             |  appsec  |',
    '             | pentest  |',
    '              \\\\  ___  //',
    '               `-.__.-\'',
    '                / /\\\\ \\\\',
    '               /_/  \\\\_\\\\',
    '',
    '         recon -> exploit -> patch',
  ],
  footerNote:
    'Static portfolio surface only. No forms, no uploads, no unnecessary data collection.',
};
