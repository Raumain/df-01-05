# Project Roadmap: "MindSync Solutions" (2000s Startup Vaporware)

## 1. Global Directives for LLM Agents
*   **Context:** This is a hackathon project. The theme is "2000s website". The goal is to create a fake B2C/B2B startup selling "consciousness uploading".
*   **Tech Stack:** Strict HTML, CSS, and Vanilla Javascript. **Do NOT use any frameworks or libraries** (No React, No Tailwind, No Bootstrap).
*   **Browser Target:** Modern desktop browsers only (latest Chrome/Firefox/Safari/Edge).
*   **HTML Structure:** Make heavy use of `<table>` tags for the page layout. Use `<marquee>` for scrolling text.
*   **Design System ("2000s Corporate Scam"):**
    *   **Colors:** Metallic gray, royal blue, white.
    *   **Buttons:** Heavy beveled effects (outset/inset borders) to simulate 3D.
    *   **Typography:** Verdana, Tahoma, or Arial. Small text sizes (10px - 12px).
    *   **Visuals:** Leave placeholders for low-resolution stock photos (e.g., men in suits shaking hands in front of a glowing globe).
*   **Bilingual Requirement (Mandatory):** Every visible string must support EN/FR.
    *   Add a language toggle on every page.
    *   Persist language selection in `localStorage.lang` (`en` by default).
*   **State Management:** Use the browser's `localStorage` to simulate data passing between pages.
    *   Persist scan data keys: `answers`, `compatibility`, `timestamp`.
*   **Content Safety Rule:** Keep parody tone, but allow small wording edits to avoid risky real-entity references.

## 2. File Architecture
```text
/mindsync
├── index.html       (Landing page)
├── scanner.html     (Neural assessment tool)
├── result.html      (Post-scan fake dashboard)
├── pricing.html     (Upload subscription plans)
├── style.css        (Single stylesheet for all pages)
└── /public
    ├── logo.gif
    ├── brain-map.jpg
    └── construction.gif
```

## 3. Page Specifications & Copywriting

### A. `index.html` (Landing Page)
*   **Page Title (`<title>`):** `MindSync Solutions ::: Welcome to the future of YOU`
*   **Header:** Logo aligned to the left. Plain text navigation menu with pipe separators (`|`).
*   **Hero Section (H1):** `Digitize your essence. Join Cyber-Space 2.0.`
*   **Description:** `Why leave your mind trapped in an obsolete flesh vessel? Thanks to MindSync Solutions' patented Cyber-Extract™ technology, upload your consciousness to our 128-bit secure servers. Become immortal. Become digital.`
*   **Ticker (`<marquee>` at the bottom):** `+++ MINDSYNC STOCK UP 400% +++ CEO DECLARES: "FLESH IS OBSOLETE" +++ OVER 10,000 MINDS ALREADY SYNERGIZED ON OUR SERVERS +++`
*   **Call to action (Heavy 3D Button):** `> Start Neural Scanner <` (Redirects to `scanner.html`).

### B. `scanner.html` (The Core App)
*   **Title (H2):** `Step 1/2: Transfer Configuration`
*   **Step 1: The Quiz.** A `<form>` with 3 absurd multiple-choice questions (radio buttons):
    *   *Q1: What is the compression format of your childhood memories?* (.ZIP / .RAR / .TAR.GZ)
    *   *Q2: What is your current synaptic connection speed?* (56k Modem / 64k ISDN / Broadband Mental ADSL)
    *   *Q3: How do you handle an emotional overflow?* (I empty the Recycle Bin / I press Ctrl+Alt+Del and kill the process / I disable my anti-virus)
*   **Step 2: The Interaction.** An image of a brain (`brain-map.jpg`) using the obsolete HTML `<map>` and `<area>` tags. Instruction: `Click on the Frontal Lobe on this diagram to initiate connection via COM1 port.`
*   **Interaction Guardrail:** Upload must be blocked until:
    *   all 3 quiz questions are answered, and
    *   the user clicks the correct map area (Frontal Lobe).
*   **Step 3: The JS Script & Easter Egg.** When clicking "Upload", the form does NOT submit. A Vanilla JS script hides the form and displays a loading bar (built with a `<table>` where cells turn blue one by one) alongside a fake console log.
*   **Timing:** Total fake upload duration is fixed to ~6 seconds before redirect.
*   **Console Log Output (Must include this exact sequence):**
    ```text
    > Initializing transfer protocol... [OK]
    > Defragmenting ego... [OK]
    > Bypassing ethical firewall... [OK]
    > Training model with proprietary MindSync heuristics... [SUCCESS]
    > Knowledge assimilation completed in 0.04ms...
    > Uploading to mainframe...
    ```
*   Before redirect, store `answers`, `compatibility`, and `timestamp` in `localStorage`.
*   Upon reaching 100%, automatically redirect to `result.html`.

### C. `result.html` (Conclusion & Upsell)
*   **Title (H1):** `SYSTEM ALERT: Partial Transfer`
*   **Message:** `Congratulations. Your consciousness is 87.4% compatible with our servers. However, your disk space quota (1.44 MB) has been exceeded. Your memories from the year 1998 had to be overwritten.`
*   **Call to action (Blinking Button):** `Buy more mental storage` (Redirects to `pricing.html`).
*   **Dynamic Data:** Read persisted scan data from `localStorage` and display compatibility from stored data (fallback to 87.4% only if missing).

### D. `pricing.html` (Pricing Grid)
*   Must be built using a visible `<table>` with `border="1"`.

| Plan | Storage | Features | Price |
| :--- | :--- | :--- | :--- |
| **Floppy Disk Tier** | 1.44 MB | Basic consciousness. *Warning: Includes intrusive popup ads directly in your thoughts.* | **Free** |
| **CD-ROM Tier** | 700 MB | Full upload. Personality backup on unalterable optical disc. | **$999 / month** |
| **T3 Enterprise** | Unlimited | Mainframe hosting. High-speed access to the collective subconscious. | **Contact Sales** |
```

## 4. Resilience & Asset Fallbacks
*   If `logo.gif`, `brain-map.jpg`, or `construction.gif` are missing, render visible placeholder blocks with fixed dimensions and alt text.
*   Missing assets must not break layout or navigation flow.

## 5. Definition of Done (Strict)
*   End-to-end journey works: `index.html` → `scanner.html` → `result.html` → `pricing.html`.
*   EN/FR toggle exists and works on all pages; preference persists via `localStorage.lang`.
*   Scanner upload cannot start without full quiz completion and Frontal Lobe click.
*   Upload animation/log sequence runs for ~6 seconds and then redirects automatically.
*   `result.html` consumes persisted scan data and renders compatibility.
*   No frameworks/libraries are used anywhere.
