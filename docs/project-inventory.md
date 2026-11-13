# Project inventory (Step 1 analysis)

Sources checked on 2026-11-12: n8n JSON exports and videos in this folder, the six public GitHub repos (cloned read-only, with full commit history), the old CV and the live portfolio.

| # | Project | Source | What it does | Tech stack | Your contribution (from evidence) | Featured? |
|---|---|---|---|---|---|---|
| 1 | AI Wake-on-LAN assistant | `WOL Request version 3 copy.json`, demo video | Google Chat bot; AI agent accepts only wake requests in English or Roman Urdu, validates the IP against the internal pool, triggers the RMM, verifies with ping, logs a Zoho Desk ticket | n8n (36 nodes), Gemini and OpenAI chat models, LangChain agent with memory, Tactical RMM API, Zoho Desk API, Google Chat | Sole author (you confirmed). 17 iterations in n8n, Oct 2025 | Yes, flagship |
| 2 | License discovery and audit | `License Discovery - Enterprise Audit copy.json`, "Employee Exit License audit" video | Given an employee email: 3-way Zoho Desk search, dedupe, read threads, rule-based NLP audit, report | n8n (21 nodes), Zoho Desk API with OAuth2, JavaScript | Sole author (you confirmed) | Yes, merged with #3 |
| 3 | License Audit Portal | `License Portal Website.json` | 19 KB HTML/CSS/JS form served from an n8n webhook; calls #2 | n8n webhook, HTML/CSS/JS, ngrok tunnel | Sole author | Part of #2 |
| 4 | IT hardware upgrade automation | `IT Upgrade Recommendations - Enterprise v2.json`, video | Monthly: reads desktop and laptop Google Sheets, keeps approved and unprocessed rows, picks up to 10 at random, emails an HTML dashboard, writes status back | n8n (14 nodes), Google Sheets, Gmail, JavaScript | Sole author | Yes |
| 5 | SentinelIQ | GitHub, 28 commits, 3-9 Oct 2026, only author | Streamlit SOC dashboard: overview, events, incidents, agents, threat intel, MITRE, AI analyst, rules, assets, reports, threat hunter pages | Python, Streamlit, Plotly, pandas, Groq | Sole author. **The README describes a FastAPI backend folder that is not in the repo.** | Yes, after README is fixed |
| 6 | AI SOC Analyst | GitHub, 16 commits, Sep 2026 | Log parsing, regex IOC extraction, LLM investigation, MITRE mapping, risk score, IR playbook; Wazuh client module | Python, Streamlit, OpenAI-compatible client (Groq), Plotly, pydantic | **Two commit authors:** you and `safurasohail0504-design`. Hackathon project | Yes, labelled as team hackathon until clarified |
| 7 | Agentic-CyberShield | GitHub, 4 commits | Refactored copy of #6 in a `modules/` package | Same as #6 | Sole author | No, link from #6 |
| 8 | ThreatLens (MyThreaLens2) | GitHub, 4 commits | IOC reputation check with VirusTotal and WHOIS; deterministic verdict; Gemini explanation at 3 levels | Python, Streamlit, google-genai, python-whois | Sole author | Yes, small tile |
| 9 | AI Content Assistant | GitHub, 3 commits | Streamlit form that generates social posts through a DeepSeek-compatible API | Python, Streamlit, OpenAI SDK | Sole author | No, minor |
| 10 | Old portfolio | GitHub `portfolio`, 1 commit | Single HTML page | HTML/CSS | Sole author | Replaced |
| 11 | Zabbix rollout (250+ agents) | Old portfolio text only | Monitoring deployment | Zabbix, SNMP | Stated by you, no artifacts | Experience highlight, not a project tile |
| 12 | WSUS dashboard | Not provided yet | Unknown | Unknown | Unknown | Pending |

## Security findings
- **Local, not public:** `WOL Request version 3 copy.json` contains a hard-coded `X-API-Key` (32 characters) for the RMM API in two HTTP nodes. It also contains an internal hostname. Never upload this file. Move the key into an n8n credential and rotate it.
- `License Portal Website.json` contains an ngrok webhook URL. Do not publish.
- GitHub repos and their history: only placeholder keys (`gsk_your_...`, `Your...`). No real secrets found. No `.env` file was ever committed.

## Videos (not viewed)
`Ai Agent Wake On LAn Automation Demo.mp4` (47 MB), `AI Automation Employee Exit License audit..mp4` (75 MB), `IT Harware Upgrade Automation .mp4` (73 MB). Frame extraction was not possible: ffmpeg is not installed and serving the project folder to the browser was not permitted.
