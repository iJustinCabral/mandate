# Mandate

**Your values, at legislative scale.**

An open-source, experimental platform for **Augmented Democracy** — inspired by César Hidalgo's 2018 TED talk *"A bold idea to replace politicians"*.

Mandate lets citizens create and fully control personalized AI "digital twins" that deeply understand real legislation and express nuanced positions on their behalf. Not as a replacement for representative democracy, but as a non-binding experimental layer that expands the design space of how populations can participate in self-governance.

> **Core principle**: This is a research and education tool. All outputs are unofficial, non-binding, and for learning only. We are building an *instrument* for understanding, not a new source of political power.

---

## Why This Exists

Representative democracy has a capture problem (money, special interests, low accountability). Pure direct democracy has a bandwidth problem — there are thousands of complex bills and citizens have lives.

Hidalgo's insight: instead of forcing humans to read everything, give each person a personalized AI agent trained on *their* values, corrections, and feedback. These agents can analyze legislation at a scale and depth impossible for any individual, while the human stays in complete control through constant correction and oversight.

The 2024 paper "LLMs as Agents for Augmented Democracy" (Gudiño, Grandi & Hidalgo) showed this is already technically viable for policy preferences. Mandate takes the next step: real legislation, real bills, real citizens.

---

## Current Status

**Phase 0 → Phase 1 (in progress)**

We are building the first credible personal "Bill Twin" experience:

- Automatic ingestion of US federal legislation (congress.gov + GovInfo)
- High-quality structuring of bills (plain English, key provisions, impact analysis)
- Simple but powerful personal values profile
- A twin that can read a bill and say "Based on what you've told me, here's how you would likely feel — and why"
- Easy, continuous correction so the twin actually improves and stays yours

Everything will be open source. You will always be able to export your complete twin profile and run it locally.

**This is deliberately narrow and humble at the start.** US federal bills only. Strictly non-binding. Solo/small-team development. We will earn the right to expand.

---

## Core Values & Guardrails

See [CHARTER.md](./CHARTER.md) for the non-negotiable principles that guide every decision.

In short:
- Human sovereignty over their twin, always
- Radical transparency (open source + explainable)
- No single point of capture
- Understanding first, prediction second
- Never claim or imply legal/electoral authority

---

## Getting Involved (Early)

Right now this is in very early development. The best ways to help:

1. **Star the repo** and follow along
2. Read the [CHARTER.md](./CHARTER.md)
3. When the first alpha is ready, be one of the first 20–50 ruthless testers who will tell us exactly where it sucks
4. If you have deep expertise in legislative data, LLMs + alignment, civic tech, or privacy-preserving systems — reach out

We are not looking for hype or premature political claims. We are looking for people who want to build something careful, technically excellent, and intellectually honest.

---

## Technical Direction (Phase 1)

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind + shadcn/ui (trustworthy, calm aesthetic)
- **Bill pipeline**: Python (congress.gov API + GPO bulk data, XML parsing, LLM structuring)
- **Twin engine**: Hybrid — strong RAG + profile memory today, moving toward user-owned fine-tunable adapters (LoRA) + local runtimes (Ollama)
- **Architecture**: Start centralized for speed of learning, with excellent data export and a clear path to local-first / federated operation

See the full [implementation plan](./docs/PLAN.md) (internal) for the 5-phase roadmap.

---

## Name & Inspiration

**Mandate** — because the goal is to surface a clearer, higher-bandwidth version of what the actual people would decide if they had the time and tools to study the issues.

Directly builds on:
- César Hidalgo's Augmented Democracy concept (TED 2018 + FAQ)
- The 2024 empirical work showing LLMs can already act as useful digital twins for policy preferences
- Lessons from Polis (vTaiwan), Opencracia, liquid democracy experiments, and decades of civic tech

---

## License

To be determined (likely AGPLv3 or similar strong copyleft for the core, with more permissive for certain components). All research outputs will be public.

---

**This is not a product launch. It is the beginning of a long, careful experiment.**

If it works, future generations might look back and say the design space of democracy expanded in the 2020s — not because we replaced politicians with code, but because we gave citizens tools worthy of the complexity of the decisions they were being asked to live with.

Let's build it right.

— The Mandate project

**Links**:
- Original TED talk: https://www.youtube.com/watch?v=CyGWML6cI_k
- Hidalgo's Augmented Democracy page: https://cesarhidalgo.com/augmented-democracy
- Foundational paper (2024): https://arxiv.org/abs/2405.03452

---

*Repository initialized 2026. This README will evolve with the project.*