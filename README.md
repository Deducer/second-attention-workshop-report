# Second Attention Workshop Report

This repository contains the reference implementation for the before/after EEG report for Second Attention Workshop participants. It is designed as a visual and UX guide for the development team building the app that processes EEG data and auto-generates participant reports.

---

## 📊 Project Purpose
- **Showcase**: This is the intended output for the workshop's before/after comparison report.
- **Reference**: Use this as a design/UX and data-visualization reference for auto-generating reports from participant EEG data.

---

## 🚀 Live Demo
https://second-attention-workshop-report.vercel.app/

---

## 🎥 Loom Walkthrough
https://www.loom.com/share/57fbedec20634ef8ab7a66314f5f6f36?sid=669c30cf-2e25-4ae8-b1fe-ff0cb57d661b

---

## 🛠️ How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/Deducer/second-attention-workshop-report.git
   cd second-attention-workshop-report
   ```
2. Install dependencies and start the app:
   ```bash
   cd second-attention-app
   npm install
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the report.

---

## 🧠 What's Dynamic
- **All numbers, bars, and graphs** are to be generated from participant EEG data.
- The "before" and "after" states correspond to baseline and entrained meditation sessions.
- The report is designed to be auto-generated for each participant after their workshop session.

---

## 📥 Data Requirements for Report Generation
For each section/element of the report, the following data is required (from EEG analysis and participant input):

### 1. Meditative Depth Score (Gradient Card)
- **Inputs:**
  - Aggregate meditative depth metric for each session (e.g., Alpha-Theta power ratio, or a custom score)
  - "Before" (baseline) and "After" (entrained) values
- **How to compute:**
  - Typically derived from band power analysis (e.g., mean Alpha+Theta power during meditation)

### 2. Brain Activity Comparison (Spatial EEG)
- **Inputs:**
  - Band power (Alpha, Theta, etc.) for each electrode/region (O1, O2, T3, T4) for both sessions
  - (Optional) Coherence/connectivity values between regions
- **How to compute:**
  - Compute average band power per region for each session
  - (Optional) Compute pairwise coherence between regions

### 3. Neural Coherence (Progress Bar)
- **Inputs:**
  - Global or average coherence value for each session (e.g., mean pairwise coherence across all regions)
- **How to compute:**
  - Use standard EEG coherence analysis (e.g., magnitude-squared coherence in Alpha/Theta bands)

### 4. Wave Metrics (Alpha, Theta, Beta)
- **Inputs:**
  - Mean band power for Alpha, Theta, Beta for each session (whole brain or specific regions)
- **How to compute:**
  - Compute mean power in each band for each session
  - Calculate % change (After vs. Before)

### 5. Subjective Experience (SMS)
- **Inputs:**
  - State Mindfulness Scale (SMS) scores: total and subscales (Mind Awareness, Body Awareness) for each session
  - Individual item scores for notable improvements
- **How to compute:**
  - Collect via participant self-report (questionnaire)
  - Calculate subscale and total scores for before/after

### 6. Unique Neural Strength
- **Inputs:**
  - Any standout EEG metric (e.g., exceptional increase in a specific band or region, or unique coherence pattern)
- **How to compute:**
  - Identify participant-specific outliers or strengths in the EEG data

### 7. Comparative Results
- **Inputs:**
  - Participant's metrics (depth, enhancement, time to deep state) compared to a reference group/distribution
- **How to compute:**
  - Place participant's results in context of group data (e.g., percentile rank)

---

## 🎨 Design & UX Notes
- **Color Mapping:**
  - Blue → Purple: "After"/"Improvement"/"Higher is better"
  - Peach: "Before"/"Baseline"
- **Section Structure:**
  - Meditative Depth Score (gradient card)
  - Brain Activity Comparison (spatial EEG, coherence)
  - Neural Coherence (progress bar)
  - Wave Metrics (Alpha, Theta, Beta)
  - Subjective Experience (SMS)
  - Unique Neural Strength & Recommendations
  - Comparative Results
- **Responsiveness:**
  - Layout is designed for desktop/tablet, but can be adapted for mobile.
- **Accessibility:**
  - Color contrast and font sizes are chosen for readability.

---

## 📝 Developer Context & Next Steps
- This repo is a **reference implementation**: use the structure, styles, and data-visualization logic as a guide for the production app.
- All data is currently static; in production, replace with dynamic values from EEG processing pipeline.
- See Loom walkthrough for intent, dynamic data mapping, and design rationale.
- For questions, contact the report designer or project lead.

---

## 📂 Repo Structure
- `second-attention-app/` — React app source code
- `public/` — Static assets (images, logos)
- `README.md` — This file

---

## 📣 Additional Notes
- If you deploy a live demo, update the link above.
- If you record a Loom walkthrough, add the link above.
- For any design/UX clarifications, refer to the Loom or contact the designer.

---

© Vayu Labs • Neural State Training • www.vayulabs.com 
