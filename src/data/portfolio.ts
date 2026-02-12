export const portfolioProjects = [
  {
    id: "1",
    title: "RAG-Powered Knowledge Assistant",
    description:
      "Internal chatbot for a B2B SaaS company: ingest PDFs and docs into a vector store, answer questions with cited sources, and support multiple workspaces. Includes admin UI for content upload and usage analytics.",
    scope: "8-week engagement · FastAPI + React · LangChain, OpenAI embeddings & chat, pgvector, Celery for async ingestion",
    outcome: "Reduced internal support lookup time by ~60%; 200+ docs indexed; ready for customer-facing rollout.",
    tags: ["LangChain", "OpenAI", "RAG", "FastAPI", "pgvector", "React"],
  },
  {
    id: "2",
    title: "ML Pipeline & Model Registry",
    description:
      "End-to-end MLOps for a fintech client: train and version models (tabular + NLP), run A/B deployments, and monitor drift. Dagster for orchestration, MLflow for registry and experiments, inference on Kubernetes with autoscaling.",
    scope: "12-week build · Python, Dagster, MLflow, Kubernetes (GKE), dbt for feature store sync",
    outcome: "Unified pipeline for 5 model types; deployment time from days to under 2 hours; drift alerts in production.",
    tags: ["Dagster", "MLflow", "Kubernetes", "Python", "dbt"],
  },
  {
    id: "3",
    title: "Real-Time Data Ingestion Platform",
    description:
      "Central data platform for a retail analytics team: ingest from 12 sources (APIs, DBs, files), transform with dbt, load into BigQuery. Airflow DAGs with retries and SLA alerts; lightweight React dashboard for pipeline status.",
    scope: "10-week engagement · Airflow (MWAA), dbt Cloud, BigQuery, Terraform, Python",
    outcome: "Daily refresh for all sources; single source of truth for reporting; reduced manual ETL by ~80%.",
    tags: ["Airflow", "dbt", "BigQuery", "Terraform", "Python"],
  },
  {
    id: "4",
    title: "AI Agent for Customer Support",
    description:
      "Autonomous support agent for a scale-up: read tickets, search Confluence and Zendesk, suggest replies, and hand off to humans when confidence is low. Full audit log and feedback loop for improving answers.",
    scope: "6-week MVP · PydanticAI agents, OpenAI, FastAPI backend, React dashboard, tool integrations (Zendesk, Confluence API)",
    outcome: "First-response draft for 70% of tickets; human review before send; clear path to full auto-reply for simple cases.",
    tags: ["PydanticAI", "OpenAI", "FastAPI", "React", "Zendesk"],
  },
  {
    id: "5",
    title: "Serverless Document Processing API",
    description:
      "Document intake for an insurance workflow: upload PDFs/images, extract entities (names, dates, amounts) via LLM + optional NER, classify document type, and push to internal systems. Runs on AWS Lambda with S3 triggers and SQS for retries.",
    scope: "6-week build · FastAPI (Lambda), OpenAI, AWS S3/SQS/Lambda, Terraform",
    outcome: "Processing time from hours to minutes; 95%+ accuracy on key fields; scalable to 10k+ docs/day.",
    tags: ["FastAPI", "AWS Lambda", "OpenAI", "S3", "Terraform"],
  },
  {
    id: "6",
    title: "Cloud-Native Analytics Backend",
    description:
      "Backend for a SaaS analytics product: REST and GraphQL APIs, scheduled aggregation jobs, and caching layer. Fully on GCP with Terraform; Kubernetes for API and CronJobs; PostgreSQL + Redis; observability with structured logs and metrics.",
    scope: "8-week engagement · Python, FastAPI, SQLAlchemy, Kubernetes (GKE), Terraform, PostgreSQL, Redis",
    outcome: "Sub-200ms p95 for core APIs; reliable daily/weekly jobs; infra as code for easy replication.",
    tags: ["Kubernetes", "Terraform", "FastAPI", "PostgreSQL", "GCP"],
  },
];
