export const portfolioProjects = [
  {
    id: "1",
    cardLabel: "B2B SaaS · RAG · 8 weeks",
    title: "RAG knowledge assistant — 60% faster internal lookup",
    description:
      "Vector ingestion from PDFs and Confluence; cited answers per workspace for a US SaaS team. Goal: cut time spent hunting for the right policy or release note.",
    scope:
      "8 weeks · FastAPI + React · LangChain, OpenAI, pgvector, async ingestion",
    outcome:
      "Measured ~60% reduction in median support-doc lookup time; 200+ documents indexed; path cleared for customer-facing rollout.",
    metric: { value: "~60%", label: "faster internal lookups" },
    tags: ["RAG pipeline development", "LangChain", "OpenAI", "FastAPI", "pgvector"],
  },
  {
    id: "2",
    cardLabel: "Fintech · MLOps · 12 weeks",
    title: "Model registry & deployments — 90% faster releases",
    description:
      "Tabular + NLP models in one governed path: A/B deploys, drift monitoring, and audit-friendly versioning for a regulated EU-facing stack.",
    scope: "12 weeks · Dagster, MLflow, GKE, dbt",
    outcome:
      "Five model families on one pipeline; deployment lead time from days to under two hours with production alerts.",
    metric: { value: "90%", label: "faster model deployments" },
    tags: ["MLOps", "Kubernetes", "MLflow", "Python", "enterprise AI solutions"],
  },
  {
    id: "3",
    cardLabel: "Retail analytics · Data platform · 10 weeks",
    title: "Unified ingestion — 80% less manual ETL",
    description:
      "Twelve sources into one BigQuery spine with dbt and SLA monitoring—so finance and ops stopped reconciling conflicting spreadsheets.",
    scope: "10 weeks · Airflow (MWAA), dbt, BigQuery, Terraform",
    outcome:
      "Daily refresh for all sources; single reporting truth; ops hours reallocated from wrangling data to using it.",
    metric: { value: "~80%", label: "less manual ETL" },
    tags: ["Airflow", "dbt", "BigQuery", "data platform"],
  },
  {
    id: "4",
    cardLabel: "Scale-up · AI agents · 6 weeks",
    title: "Support agent — 70% of tickets with AI-first drafts",
    description:
      "Agentic AI system over Zendesk + Confluence: suggested replies with confidence thresholds, full audit log, human-in-the-loop before send.",
    scope: "6 weeks · PydanticAI, OpenAI, FastAPI, React",
    outcome:
      "First-pass drafts for ~70% of tier-1 tickets; measurable handle-time reduction; roadmap to expand auto-resolution safely.",
    metric: { value: "~70%", label: "tickets with AI drafts" },
    tags: ["AI agents development", "OpenAI", "FastAPI", "Zendesk"],
  },
  {
    id: "5",
    cardLabel: "Insurance · Document AI · 6 weeks",
    title: "Document API — hours to minutes, 95%+ field accuracy",
    description:
      "Inbound PDFs and images: classify, extract entities, route to core systems—Lambda + SQS with exception queues for humans.",
    scope: "6 weeks · FastAPI on Lambda, OpenAI, AWS, Terraform",
    outcome:
      "P95 processing down from hours to minutes; 95%+ accuracy on validated fields; scale tested to 10k+ docs/day.",
    metric: { value: "95%+", label: "accuracy on key fields" },
    tags: ["Document AI", "AWS Lambda", "OpenAI", "scale"],
  },
  {
    id: "6",
    cardLabel: "SaaS · Backend · 8 weeks",
    title: "Analytics API — sub-200ms p95 at scale",
    description:
      "GraphQL + REST for a product analytics surface: aggregation jobs, caching, and IaC so new environments don’t become snowflakes.",
    scope: "8 weeks · FastAPI, GKE, PostgreSQL, Redis, Terraform",
    outcome:
      "Sub-200ms p95 on core paths; reliable scheduled jobs; infra reproducible for enterprise security reviews.",
    metric: { value: "<200ms", label: "p95 on core APIs" },
    tags: ["FastAPI", "Kubernetes", "PostgreSQL", "GCP"],
  },
];
