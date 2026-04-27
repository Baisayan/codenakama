# CodeNakama – AI GitHub PR Reviewer

CodeNakama is an AI-powered GitHub pull request reviewer that analyzes code changes using repository-wide context and posts structured feedback directly on PRs.

Built to demonstrate real-world backend engineering with event-driven systems, RAG pipelines, repo-wide indexing strategies, GitHub OAuth and external integrations using webhooks and APIs.

🔗 Live Demo: [CodeNakama](https://codenakama.baisayan.tech)

## Features

* Secure authentication using Better Auth with GitHub OAuth (supports both public and private repositories)

* Seamless GitHub integration using Octokit and GraphQL APIs to fetch repositories, PRs, commits, and contribution data

* Event-driven Automated PR review triggered by GitHub webhooks (handles both PR opened and synchronize events)

* Context-aware AI reviews powered by RAG over the entire codebase

* Repository-wide indexing using Pinecone vector database with background workers via Inngest

* Multi-step background workflows (Inngest) for indexing and PR review pipelines

* AI-generated reviews posted directly on GitHub pull requests and saved in Database to view from app

* Supports multiple repos per user with independent indexing and review pipelines


## Architecture

```txt
User connects repository
      ↓
Repository indexing
      ↓
GitHub sends webhook on PR
      ↓
Webhook (Next.js API)
      ↓
Inngest (Background Job)
      ↓
Fetch PR Diff
      ↓
Retrieve Context
      ↓
Generate AI Review
      ↓
Post on GitHub
      ↓
Store Review in DB
```

## Test it locally

```bash
git clone https://github.com/Baisayan/codenakama.git
cd codenakama
npm install
```

1. Copy `.env.example` to `.env.local` and fill in all required variables.

2. Create a Neon PostgreSQL database and add the connection string to your .env file.

3. Create a GitHub OAuth App and set callback URL to: `http://localhost:3000/api/auth/callback/github`.

4. Create an index with: `Dimensions: 768` and add API key to env

5. Expose your local server using `ngrok http 3000` and set the HTTPS URL as your GitHub webhook URL

6. Run all services in separate terminals:

```bash
npm run dev
npx inngest-cli@latest dev
ngrok http 3000
```
7. Open http://localhost:3000 in your browser.


## Deployment

* Deployed on Vercel
* Inngest configured with production event keys
* GitHub webhooks updated to production URL