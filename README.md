# Week 2 Lab — Collaboration & Ownership

## Purpose

This lab is not about REST, Express, or Node.js.

This lab exists to make **collaboration and ownership visible**.

You will work as a team to evolve a small codebase under mild ambiguity, while making your decisions, communication, and responsibility observable through your workflow.

---

## What This Lab Is Testing

This lab focuses on:

- How teams divide and own work
- How ownership is expressed through Git
- How teams collaborate through pull requests and reviews
- How teams respond to change
- How responsibility persists beyond “my part is done”

**Code correctness is secondary.**
**Behavior and process matter most.**

---

## Constraints (Read Carefully)

- This is a **team lab**
- This is a **throwaway exercise**
- The code produced here will **not** be used in your semester project
- You are expected to use:
  - Feature branches
  - Pull requests
  - Code reviews

### Prohibited

- Direct commits to `main`
- One person implementing everything
- “LGTM” reviews with no substance

---

## The Codebase

You are given a very small Express application with a single entry point: src/index.js

The application already:

- Starts an HTTP server
- Parses JSON request bodies
- Exposes a root route

You may add code **above the marked boundary only**.

---

## The Problem (Intentionally High-Level)

Your team is responsible for evolving this service to support a **basic user lifecycle**.

At a minimum, the service should allow:

- Creating users
- Retrieving users
- Updating users
- Deleting users

User data may be stored **in memory**.

The **exact API design**, data structures, and implementation details are **up to your team**.

There is no single “correct” solution.

---

## Step 1 — Establish Ownership (Before Coding)

Before writing any code, your team must agree on:

- Who owns which parts of the system
- Who is responsible for integration
- How decisions will be made
- How disagreements will be resolved

### Required Deliverable

Create a file named: OWNERSHIP.md

This file should briefly describe:

- What each person owns
- How ownership will be enforced

This document is not graded for quality — only for clarity and intent.

---

## Step 2 — Implement Collaboratively

As you implement:

- All meaningful changes must be made on branches
- All branches must be merged via pull requests
- Every pull request must receive at least one real review
- Review comments should be specific and constructive

Commits should represent **complete, coherent changes**, not experiments.

---

## Step 3 — Respond to Change

Partway through the lab, a requirement or assumption may change.

This is intentional.

What matters is:

- How quickly the team notices
- How ownership adapts
- How communication changes

No additional time will be given.

---

## Step 4 — Final State

By the end of the lab:

- `main` should be in a working state
- There should be evidence of:
  - Multiple contributors
  - Pull requests
  - Reviews
  - Discussion
- Open issues or TODOs are acceptable if clearly communicated

---

## How This Lab Is Evaluated

This lab is evaluated on **process, not polish**.

Positive signals:

- Clear ownership
- Visible collaboration
- Meaningful reviews
- Adaptation to change
- Professional communication

Negative signals:

- One person doing all the work
- No reviews
- Silent disagreement
- Direct commits to `main`

You are not given a point-based rubric for this lab.

---

## Final Note

In professional software teams:

- Ownership is observable
- Collaboration leaves artifacts
- Silence is a signal

This lab is designed to surface those realities early.

Treat it accordingly.
