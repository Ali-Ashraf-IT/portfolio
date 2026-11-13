/**
 * ALL WEBSITE CONTENT LIVES IN THIS ONE FILE.
 *
 * To add a project: copy one object inside `projects` and change the values.
 * To hide something: delete it or leave the field empty ('' or []). Empty
 * fields are not shown on the site.
 *
 * Rule: only write facts you can back up. Every item below comes from your
 * CV, your n8n exports or your GitHub code.
 */

// ---------------------------------------------------------------- types
export type Link = { label: string; href: string };

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  category: 'Automation' | 'Security' | 'AI' | 'Monitoring';
  featured: boolean; // featured projects get a large tile on the home page
  summary: string; // one or two sentences for the card
  role: string; // your part, stated honestly
  problem: string;
  built: string;
  flow: { label: string; detail?: string }[]; // stages of the diagram
  safeguards: string[];
  results: string[]; // leave [] until you have real numbers
  stack: string[];
  links: Link[];
  video?: string; // YouTube video id, e.g. 'dQw4w9WgXcQ'
  image?: string; // file in /public/projects/, e.g. 'wol.png'
  date: string; // shown on the card
};

// ---------------------------------------------------------------- profile
export const profile = {
  name: 'Ali Ashraf',
  role: 'System Engineer (IT Operations)',
  company: 'Oxiliry',
  location: 'Pakistan',
  // One-line value proposition shown in the hero.
  tagline:
    'I keep enterprise networks and servers running, then automate the IT work around them: monitoring, compliance checks and security operations.',
  about: [
    'I am a System Engineer in IT Operations at Oxiliry, where I look after Windows Server and Active Directory, virtualisation and backups, switching, firewalls, wireless and VoIP.',
    'Before that I spent a year as a Network Engineer in the K-Electric NOC, configuring Cisco routing and switching, FortiGate firewalls and MPLS WAN failover.',
    'Most of my recent work is automation. I build n8n workflows with AI agents that take requests from chat, act through our RMM and ticketing systems, and check their own results. I also build Python security tools around Wazuh, MITRE ATT&CK and threat intelligence.',
  ],
  email: 'eng.ashraf867@gmail.com',
  phone: '', // left empty on purpose: add only if you want it public
  linkedin: 'https://www.linkedin.com/in/ali-ashraf-053b03bb',
  github: 'https://github.com/ali-ashraf-it',
  photo: '', // add a file to /public/ (e.g. 'ali.jpg') and write its name here
  cv: 'Ashraf_CV.pdf', // file in /public/
  openTo: 'Open to infrastructure, automation and security operations roles, on-site or remote.',
};

// Stats row under the hero. Only numbers you have stated or that the code shows.
export const stats = [
  { value: '3+', label: 'years in enterprise IT' },
  { value: '250+', label: 'Zabbix agents deployed' },
  { value: '4', label: 'n8n automations built' },
  { value: '6', label: 'public GitHub repositories' },
];

// ---------------------------------------------------------------- skills
export const skills: { group: string; note: string; items: string[] }[] = [
  {
    group: 'Infrastructure',
    note: 'Servers, identity, storage and backup',
    items: ['Windows Server 2012/2016', 'Active Directory', 'Group Policy', 'DNS / DHCP', 'VMware', 'Hyper-V', 'Veeam Backup & Replication', 'Synology NAS (RAID, iSCSI, NFS)', 'Linux', 'FreePBX VoIP', 'PostgreSQL', 'MongoDB'],
  },
  {
    group: 'Networking',
    note: 'Routing, switching and wireless',
    items: ['Cisco ISR', 'Catalyst', 'Nexus 9000/9300', 'VLAN / VTP / SVI', 'OSPF', 'EIGRP', 'HSRP / VRRP', 'STP / RSTP', 'Port-Channel', 'MPLS WAN failover', 'Cisco WLC 5508 / 9800', 'Ubiquiti UniFi'],
  },
  {
    group: 'Automation',
    note: 'Workflows, agents and integrations',
    items: ['n8n', 'AI agents (Gemini, OpenAI, Groq)', 'Python', 'JavaScript', 'REST APIs', 'Webhooks', 'Zoho Desk API', 'Google Sheets & Gmail API', 'Wake-on-LAN'],
  },
  {
    group: 'Security & Compliance',
    note: 'Perimeter, detection and audit',
    items: ['FortiGate HA & VPN', 'SonicWall', 'pfSense & Squid', 'ACL / NAT', 'Wazuh', 'MITRE ATT&CK mapping', 'VirusTotal & WHOIS', 'Software license audit', 'Approval-gated changes'],
  },
  {
    group: 'Cloud & DevOps',
    note: 'Hosting and delivery for my tools',
    items: ['Git & GitHub', 'Streamlit Community Cloud', 'Cloudflare Tunnel', 'ngrok'],
  },
  {
    group: 'Tools',
    note: 'Monitoring, support and ticketing',
    items: ['Zabbix', 'SNMP', 'SolarWinds', 'Cacti', 'Tactical RMM', 'Zoho Desk', 'RDP', 'Avaya SMGR', 'Streamlit', 'Plotly'],
  },
];

// ---------------------------------------------------------------- experience
export const experience = [
  {
    role: 'System Engineer (IT Operations)',
    company: 'Oxiliry',
    place: '',
    start: 'Jan 2024',
    end: 'Present',
    points: [
      'Administer Windows Server 2012/2016: Active Directory, Group Policy, DNS, DHCP and user accounts.',
      'Run VMware and Hyper-V; configure Veeam Backup & Replication jobs and VM migrations; maintain Synology NAS storage.',
      'Maintain Cisco Catalyst and Nexus switching (VLANs, VTP, SVI, Port-Channel, STP).',
      'Support FortiGate 200F/101F/40F HA and VPN tunnels, pfSense rules with Squid proxy, and SonicWall policies.',
      'Deploy UniFi wireless with department SSIDs, and FreePBX VoIP with Grandstream and Cisco handsets.',
      'Deployed Zabbix with 250+ agents over SNMP and Zabbix Agent; monitor with Cacti; support users through Zoho Desk, RDP and Tactical RMM.',
      'Designed and built n8n automations for Wake-on-LAN requests, software license audits and hardware upgrade tracking.',
    ],
  },
  {
    role: 'Network Engineer, NOC',
    company: 'K-Electric',
    place: 'Karachi',
    start: 'Jan 2023',
    end: 'Dec 2023',
    points: [
      'Configured and maintained core and branch Cisco ISR routers, Catalyst and Nexus switches.',
      'Configured VLANs, VTP, SVI, OSPF, HSRP, VRRP and L2/L3 Port-Channels across sites.',
      'Monitored network health in SolarWinds and tracked MPLS WAN links with primary and secondary failover.',
      'Managed Cisco WLC 5508 and 9800 controllers, FortiGate HA and VPN, and branch ACLs.',
    ],
  },
];

export const education = [
  { title: 'Bachelor of Computer & Information Technology (B.C.I.T)', place: 'University of Sindh, Jamshoro', detail: 'CGPA 3.08' },
];

// Leave `year` empty if you do not want it shown.
export const certifications: { title: string; issuer: string; year: string; link?: string }[] = [
  { title: 'Certificate in Network Administration', issuer: 'Hidaya Institute of Science & Technology, Jamshoro', year: '' },
];

export const languages = ['English', 'Urdu', 'Sindhi'];

// ---------------------------------------------------------------- projects
export const projects: Project[] = [
  {
    slug: 'ai-wake-on-lan-assistant',
    title: 'AI Wake-on-LAN assistant',
    category: 'Automation',
    featured: true,
    date: 'Oct 2025',
    summary: 'Staff ask a Google Chat bot, in English or Roman Urdu, to power on a PC. An AI agent checks the request, wakes the machine through the RMM, confirms it with a ping and logs a ticket.',
    role: 'Designed, built and deployed on my own.',
    problem: 'Powering on remote machines depended on someone from IT doing it by hand.',
    built: 'A 36-node n8n workflow behind a Google Chat webhook. An AI agent with short memory decides whether the message is a wake request, validates the address, then the workflow finds the machine in the RMM, sends the action, verifies with ping and records the outcome in Zoho Desk.',
    flow: [
      { label: 'Google Chat', detail: 'message to webhook' },
      { label: 'AI agent', detail: 'Gemini or OpenAI, with memory' },
      { label: 'Validate IP', detail: 'internal pool only' },
      { label: 'Tactical RMM', detail: 'find agent, send action' },
      { label: 'Ping check', detail: 'success or fail' },
      { label: 'Zoho Desk', detail: 'ticket and comment' },
    ],
    safeguards: [
      'The agent only performs wake actions. Reboot and shutdown requests get a polite refusal.',
      'Only addresses inside the internal pool are accepted; a two-octet shorthand is expanded internally.',
      'Success is decided by a ping, not by trusting the API response.',
      'Failed wakes open a ticket and can ask the user to confirm in chat.',
    ],
    results: [],
    stack: ['n8n', 'AI agent', 'Gemini', 'OpenAI', 'Google Chat', 'Tactical RMM API', 'Zoho Desk API'],
    links: [],
  },
  {
    slug: 'license-audit',
    title: 'License discovery & audit portal',
    category: 'Automation',
    featured: true,
    date: '2026',
    summary: 'Enter an employee email and get a report of the commercial software licenses they requested, found across all their Zoho Desk tickets, including requests made on their behalf.',
    role: 'Designed, built and deployed on my own.',
    problem: 'License requests were spread across many tickets, sometimes raised by someone else, so auditing one employee (for example when they leave) meant reading tickets by hand.',
    built: 'A 21-node n8n workflow plus a small web portal. The portal is a 19 KB HTML form served directly from an n8n webhook. The workflow searches Zoho Desk three ways, merges and de-duplicates the results, reads every thread and returns an audit report.',
    flow: [
      { label: 'Portal form', detail: 'name and email' },
      { label: 'Validate email', detail: 'before any API call' },
      { label: 'Zoho Desk search', detail: 'by contact, email, name' },
      { label: 'Merge & dedupe' },
      { label: 'Read threads' },
      { label: 'License auditor', detail: 'rule-based NLP' },
      { label: 'Audit report' },
    ],
    safeguards: [
      'Input is validated before any call to Zoho Desk.',
      'Three searches catch requests raised on behalf of the employee.',
      'Results are de-duplicated so one ticket is counted once.',
    ],
    results: [],
    stack: ['n8n', 'Zoho Desk API', 'OAuth2', 'JavaScript', 'HTML/CSS', 'Webhooks'],
    links: [],
  },
  {
    slug: 'it-hardware-upgrade-automation',
    title: 'IT hardware upgrade automation',
    category: 'Automation',
    featured: true,
    date: '2026',
    summary: 'Every month the workflow reads the desktop and laptop upgrade sheets, picks approved requests that have not been handled, emails IT an HTML dashboard and marks them done.',
    role: 'Designed, built and deployed on my own.',
    problem: 'Upgrade requests lived in spreadsheets and had to be chased by hand, with a risk of the same person being followed up twice.',
    built: 'A 14-node scheduled n8n workflow connected to Google Sheets and Gmail, with one config node for sheet names and the recipient.',
    flow: [
      { label: 'Schedule', detail: '1st of month, 09:00' },
      { label: 'Read sheets', detail: 'desktops and laptops' },
      { label: 'Smart filter', detail: 'approved, not done' },
      { label: 'Pick up to 10' },
      { label: 'HTML dashboard', detail: 'sent with Gmail' },
      { label: 'Write back', detail: 'Done, emailed' },
    ],
    safeguards: [
      'Nothing is sent unless Management Approval is "Approved".',
      'Rows already Done or emailed are skipped, so reruns are safe.',
      'Column names are matched loosely, so small header edits do not break it.',
    ],
    results: [],
    stack: ['n8n', 'Google Sheets API', 'Gmail API', 'JavaScript', 'Cron'],
    links: [],
  },
  {
    slug: 'sentineliq',
    title: 'SentinelIQ SOC platform',
    category: 'Security',
    featured: true,
    date: 'Oct 2026',
    summary: 'A Streamlit SOC console with eleven views, from incidents and MITRE ATT&CK to threat hunting, fed by a Wazuh-connected API, with an AI analyst for triage.',
    role: 'Sole author (28 commits).',
    problem: 'Raw Wazuh alerts are hard to triage quickly without grouping and context.',
    built: 'The public repository contains the Streamlit front end. It reads alerts, incidents and source status from a FastAPI backend over a Cloudflare Tunnel, and uses Groq for the AI analyst view. The backend code is not published.',
    flow: [
      { label: 'Wazuh', detail: 'alerts' },
      { label: 'Backend API', detail: 'alerts, incidents, status' },
      { label: 'Cloudflare Tunnel' },
      { label: 'Streamlit console', detail: '11 views' },
      { label: 'AI analyst', detail: 'Groq' },
    ],
    safeguards: [
      'API calls carry a bearer token and have timeouts.',
      'Clear error messages when the backend is unreachable.',
    ],
    results: [],
    stack: ['Python', 'Streamlit', 'Plotly', 'pandas', 'Groq', 'Wazuh', 'Cloudflare Tunnel'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/ali-ashraf-it/SentinelIQ-SOC-AP' }],
  },
  {
    slug: 'ai-soc-analyst',
    title: 'AI SOC Analyst',
    category: 'AI',
    featured: true,
    date: 'Sep 2026',
    summary: 'Paste raw logs and get an investigated incident: extracted IOCs, a timeline, MITRE ATT&CK techniques, a 0 to 100 risk score and a response playbook.',
    role: 'Hackathon team project with 2 contributors (Pak Angels Generative & Agentic AI Training, Cohort 11 mid-term hackathon).',
    problem: 'Manual triage of raw logs is slow and inconsistent.',
    built: 'A Python pipeline in a Streamlit app: normaliser, rule-based IOC extractor, LLM investigator, MITRE mapper, risk engine and response engine.',
    flow: [
      { label: 'Raw logs' },
      { label: 'Normalise', detail: 'detect log source' },
      { label: 'IOC extractor', detail: 'regex, no AI' },
      { label: 'LLM investigator' },
      { label: 'MITRE + risk' },
      { label: 'IR playbook' },
    ],
    safeguards: [
      'IOCs come from fixed rules, so evidence is never AI-guessed.',
      'Instructions hidden inside log text are ignored (prompt-injection guard).',
      'Every state-changing response step is marked as needing analyst approval.',
    ],
    results: [],
    stack: ['Python', 'Streamlit', 'Groq (OpenAI-compatible)', 'pydantic', 'Plotly'],
    links: [
      { label: 'Code on GitHub', href: 'https://github.com/ali-ashraf-it/ai-soc-analyst' },
      { label: 'Refactored version', href: 'https://github.com/ali-ashraf-it/Agentic-CyberShield' },
    ],
  },
  {
    slug: 'threatlens',
    title: 'ThreatLens',
    category: 'Security',
    featured: false,
    date: 'Sep 2026',
    summary: 'Checks an IP, domain or URL against VirusTotal and WHOIS, then explains the result at beginner, intermediate or expert level with Gemini.',
    role: 'Sole author.',
    problem: 'Reputation results are useful only if the person reading them understands them.',
    built: 'A Streamlit app with one module per intelligence source, each returning the same result shape so new sources are easy to add.',
    flow: [
      { label: 'IOC input', detail: 'validated' },
      { label: 'VirusTotal + WHOIS' },
      { label: 'Verdict', detail: 'from vendor counts' },
      { label: 'Gemini explanation' },
    ],
    safeguards: [
      'The verdict comes from VirusTotal counts, so the AI cannot turn a malicious result into a safe one.',
      'If one source fails, results from the other are still shown.',
      'API keys are typed into the session and never stored.',
    ],
    results: [],
    stack: ['Python', 'Streamlit', 'VirusTotal API', 'WHOIS', 'Gemini'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/ali-ashraf-it/MyThreaLens2' }],
  },
];
