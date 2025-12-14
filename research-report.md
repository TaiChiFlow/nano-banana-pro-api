# 🍌 Nano Banana Pro (Gemini 3 Pro Image) — Deep Research Report (README)

<p align="center">
  <img alt="Nano Banana Pro" src="https://img.shields.io/badge/Nano%20Banana%20Pro-Gemini%203%20Pro%20Image-ffdd57?style=for-the-badge" />
  <img alt="Status" src="https://img.shields.io/badge/Research-2025--12--14-0aa?style=for-the-badge" />
  <img alt="Focus" src="https://img.shields.io/badge/Focus-Model%20Details%20%2B%20API%20Integration-6f42c1?style=for-the-badge" />
</p>

<p align="center">
  <img alt="Google" src="https://img.shields.io/badge/Primary%20Sources-Google%20%26%20Google%20Cloud-4285F4?style=flat&logo=google&logoColor=white" />
  <img alt="Docs" src="https://img.shields.io/badge/Docs-Gemini%20API-34A853?style=flat&logo=googledocs&logoColor=white" />
  <img alt="Enterprise" src="https://img.shields.io/badge/Enterprise-Vertex%20AI%20%2B%20Workspace-1a73e8?style=flat&logo=googlecloud&logoColor=white" />
</p>

> [!IMPORTANT]
> **“Nano Banana Pro”** is Google’s public branding for **Gemini 3 Pro Image**, a state‑of‑the‑art image generation + editing model.
> This README is a **research-style report** you can publish directly on GitHub.

---

## 🔎 What you’ll get from this report

- A **clear mental model** for what Nano Banana Pro is (and what it isn’t)
- The **most important “model details”** that are publicly documented: context window, grounding, resolution tiers, multi‑image inputs, etc.
- A pragmatic **API integration guide** for Gemini API + Vertex AI (with examples)
- A **prompting playbook** for production use (posters, infographics, localization, product mockups, edits)
- A **cost & pricing breakdown** (so you can estimate per‑asset economics)
- A section that links to **Nano Banana Pro API**: **https://nanobananaproapi.com/** (sponsor link)

---

## 📚 Table of Contents

- [1. Executive Summary](#1-executive-summary)
- [2. Naming, Positioning, and Timeline](#2-naming-positioning-and-timeline)
- [3. Where Nano Banana Pro Lives (Surfaces & Access)](#3-where-nano-banana-pro-lives-surfaces--access)
- [4. Publicly Documented Model Specs](#4-publicly-documented-model-specs)
- [5. Capability Deep Dive](#5-capability-deep-dive)
- [6. Gemini API Deep Dive (How to Call It)](#6-gemini-api-deep-dive-how-to-call-it)
- [7. Cost, Pricing, and Unit Economics](#7-cost-pricing-and-unit-economics)
- [8. Evaluation Framework (How to Benchmark It Yourself)](#8-evaluation-framework-how-to-benchmark-it-yourself)
- [9. Safety, Governance, and Responsible Deployment](#9-safety-governance-and-responsible-deployment)
- [10. Prompting Playbook (Pro-Grade Prompts)](#10-prompting-playbook-pro-grade-prompts)
- [11. Integration Patterns (Real Pipelines)](#11-integration-patterns-real-pipelines)
- [12. Ecosystem Notes (Adobe, Canva/Figma, Third Parties)](#12-ecosystem-notes-adobe-canvafigma-third-parties)
- [13. Troubleshooting & FAQs](#13-troubleshooting--faqs)
- [14. Sponsor: NanoBananaProAPI.com](#14-sponsor-nanobananaproapicom)
- [15. Appendix: GitHub README Styling Toolkit](#15-appendix-github-readme-styling-toolkit)
- [16. Source List (English-first)](#16-source-list-english-first)

---

# 1. Executive Summary

Nano Banana Pro is best understood as **Google’s “production‑grade” image generation and image editing model** in the Gemini 3 family.

If “Nano Banana” (Gemini 2.5 Flash Image) is the “fast, fun, high‑throughput” model for ideation and quick edits, Nano Banana Pro is the model you pick when the output must survive real production constraints: legible typography, clean composition, faithful branding, accurate diagrams, and high‑resolution delivery suitable for downstream workflows and client review.

**What makes it strategically different from most image models:**

1. **Reasoning + visual generation are coupled.** Nano Banana Pro is positioned as a model that can “think” through a prompt before emitting an image, which matters for layouts, charts, infographics, and designs where structure matters more than pure aesthetics.
2. **Grounding is first-class.** It can incorporate **Google Search grounding** (via Gemini tools) so the model can retrieve up-to-date facts and then render them visually, turning “knowledge tasks” into “visual assets.”
3. **Multi-image context scales up.** Public materials emphasize that Pro can take a large set of reference images, making it more “design workflow friendly” than models that rely mostly on a single prompt + one image.
4. **Resolution and control move upward.** Nano Banana Pro is explicitly marketed around 2K and 4K resolution options, plus precise control features such as camera angle, lighting, and aspect ratio.

If you’re building:
- marketing and localization pipelines,
- product mockups and ad creatives,
- documentation visuals and diagrams,
- branded design variants (consistent logos/colors/typography),
- or “prompt-to-layout” workflows,

Nano Banana Pro should be on your shortlist.

---

# 2. Naming, Positioning, and Timeline

## 2.1 Naming: what “Nano Banana Pro” actually refers to

Google uses “Nano Banana Pro” as a friendly name, and aligns it to the underlying model label **Gemini 3 Pro Image**. In Gemini API documentation, the developer-facing model ID is **`gemini-3-pro-image-preview`** (preview label is important; it implies the model surface can change before stable GA).

This matters because the ecosystem often mixes:
- marketing names (Nano Banana / Nano Banana Pro),
- family names (Gemini 3),
- product surfaces (Gemini app, AI Studio, Vertex AI, Workspace),
- and model IDs for APIs (`gemini-3-pro-image-preview`, `gemini-2.5-flash-image`, etc).

A clean mapping that works well in documentation:

| Friendly name | Product phrasing | Gemini API model ID | “Role” in workflow |
|---|---|---|---|
| Nano Banana | Gemini “Fast” image model | `gemini-2.5-flash-image` | quick ideation & lightweight edits |
| Nano Banana Pro | Gemini “Thinking” image model | `gemini-3-pro-image-preview` | production-grade design & high-fidelity assets |

> [!NOTE]
> The consumer UI (“Fast” vs “Thinking”) is a convenient clue: it signals that “Pro” is treated as the more reasoning-heavy option.

## 2.2 Timeline (public launch milestones)

From public announcements, Nano Banana Pro was announced and made available across Google’s stack in late 2025, with emphasis on:
- being available for builders (via Gemini API / Vertex AI),
- being available in business surfaces (Workspace),
- and integrating into major creative platforms and workflows.

This is important because it hints at the “strategic path”:
1. Get broad adoption through lightweight, fun, viral-friendly flows (Nano Banana).
2. Upgrade serious workflows through Pro features: search grounding, multilingual text fidelity, 4K outputs, and multi-image context.

---

# 3. Where Nano Banana Pro Lives (Surfaces & Access)

One reason “Nano Banana Pro” can feel confusing is that it shows up in different places with different UX and policy constraints.

## 3.1 Gemini app (consumer-facing)

On the Gemini image generation overview page, Google describes:
- **Nano Banana** as “Fast” for casual creativity,
- **Nano Banana Pro** as “Thinking” for advanced outputs and precise control,
- and explicitly calls out **2K resolution** and “advanced text rendering” as Pro features.

In the consumer app, your Pro usage can be rate-limited and you may be automatically switched back to Nano Banana after hitting usage limits. That behavior is typical for consumer surfaces and says nothing about API availability.

## 3.2 Gemini API (developer-facing)

The Gemini API is the most direct route for building:
- automated creative pipelines,
- SaaS features (prompt-to-image, edit tools),
- and enterprise backends.

In the Gemini 3 Developer Guide and image generation docs, the model ID **`gemini-3-pro-image-preview`** is presented alongside core configuration options:
- specifying output resolution (1K / 2K / 4K),
- specifying aspect ratio,
- enabling tools like `google_search` for grounding,
- and returning mixed modalities (TEXT + IMAGE).

## 3.3 Vertex AI (enterprise-facing)

Google Cloud’s enterprise announcement positions Nano Banana Pro as available in **Vertex AI**, including enterprise controls such as:
- provisioned throughput,
- pay-as-you-go,
- and advanced safety filters.

This matters for companies that need:
- auditability and governance,
- predictable throughput,
- compliance requirements (data handling),
- and procurement-ready billing.

## 3.4 Google Workspace (business-facing)

The same enterprise announcement emphasizes that Nano Banana Pro is rolling out into Workspace contexts such as:
- Slides,
- Vids,
- the Gemini app,
- and NotebookLM.

This is a key “distribution play”: it’s not just an API model; it’s meant to be used where non-developers already do work.

## 3.5 Adobe Firefly and Photoshop (partner integration)

Google Cloud’s announcement explicitly mentions Adobe Firefly and Photoshop as places where Nano Banana Pro can be used, indicating a deep partnership where Google’s model is one of the selectable image models inside creative tooling.

This is strategically huge:
- it validates that Google sees the model as “infrastructure” for creative ecosystems,
- and it makes it harder for competing models to dominate professional creative workflows by default.

---

# 4. Publicly Documented Model Specs

> [!WARNING]
> There is a difference between **“publicly documented specs”** and **“community speculation.”**
> This section sticks to what is documented in official sources and developer docs.

## 4.1 Model ID, context window, and knowledge cutoff

From the Gemini 3 Developer Guide, the image model is presented with:
- model ID: `gemini-3-pro-image-preview`
- context window: **65k input / 32k output**
- knowledge cutoff: **January 2025**

The knowledge cutoff matters because:
- image generation may require “real world facts” that change after Jan 2025,
- and that’s why Google promotes **Search grounding** as the solution for real-time data.

## 4.2 “Thinking” and why it matters for images

Gemini 3 introduces explicit control over “thinking level” for reasoning tasks. While thinking controls are documented most clearly for text-based Gemini 3 Pro, Google’s own product positioning for Nano Banana Pro emphasizes a “Thinking model.”

In practice, you should assume the Pro image model will:
- take longer to produce a first token/image than a purely “fast” model,
- but will be more consistent in multi-constraint prompts (layout, typography, strict brand rules),
- and will do better when asked to reason about what must be included vs excluded.

## 4.3 Resolution tiers: 1K / 2K / 4K

In Gemini API image generation docs, output image size is a first-class control:
- **1K** (default),
- **2K**,
- **4K**.

The docs also note the resolution values are expressed like `"2K"` and `"4K"` (including capitalization), and that you specify them via `imageConfig.imageSize`.

This is one of the most practical “model details” because it directly impacts:
- cost,
- latency,
- post-processing requirements,
- and whether an asset is usable as-is.

## 4.4 Aspect ratio options

The Gemini image generation docs list a set of supported aspect ratios such as:
`1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`.

This makes Nano Banana Pro suitable for:
- social vertical assets (9:16),
- YouTube thumbnails (16:9),
- cinema-style banners (21:9),
- and print-like compositions (4:5, 3:4, 2:3).

## 4.5 Multi-image inputs (large reference sets)

Enterprise materials highlight that Nano Banana Pro supports uploading **up to 14 reference images**, allowing a “style guide” to be loaded into the prompt context.

This feature is easy to underestimate. It’s not just “add more photos” — it changes the interaction model:
- you can supply brand assets, product shots, typography references, character turnarounds,
- and then ask the model to synthesize consistent new creative variations.

From a workflow standpoint, it acts like “few-shot prompting for designers.”

## 4.6 Google Search grounding (real-time retrieval)

Nano Banana Pro is tied to the idea of “world knowledge” and “context-rich visual assets,” and official documentation describes that the model can use Google Search grounding and then render grounded information as visuals.

This is not a small feature: it turns the model into a generator of **factual visual artifacts** like:
- maps,
- diagrams,
- infographics,
- step-by-step guides.

---

# 5. Capability Deep Dive

This section translates marketing claims into “what you can actually do,” plus the failure modes you should watch.

## 5.1 Advanced text rendering (the big headline)

Most image generation models historically struggle with:
- spelling,
- kerning,
- consistent fonts,
- and longer strings of text.

Nano Banana Pro is marketed around “advanced text rendering” and use cases like:
- posters,
- product mockups,
- educational diagrams,
- and infographics.

**Practically, this unlocks:**
- “design-first” prompting (you can specify layout and typography as requirements),
- localized variants (translate existing text inside images while keeping everything else stable),
- and mixed-mode assets (a diagram plus explanatory labels).

**Failure modes to test for:**
- long paragraphs may still degrade,
- small fonts may blur if you stay at 1K,
- and dense multi-language layouts may cause alignment drift.

## 5.2 Precise editing controls (lighting, camera angle, composition)

Nano Banana Pro is described as offering more control over:
- lighting,
- camera angle,
- and aspect ratio (and, by implication, composition planning).

This matters because professional creative work often needs:
- consistent framing,
- consistent lighting,
- consistent product proportions,
- and repeatable “shots” across a campaign.

A high-value workflow is “variant generation”:
- keep a base shot stable,
- generate 20 variants with specific changes (background, colorway, text),
- then pick the best.

## 5.3 Enhanced world knowledge: diagrams, maps, infographics

Google’s enterprise messaging emphasizes that Nano Banana Pro can create “accurate, context-rich visual assets” because it can connect to Google Search.

That directly supports:
- training manuals,
- technical guides,
- product instructions,
- and marketing assets where factual correctness matters.

The key idea: **retrieval + design**.

Instead of:
- retrieving facts in your app,
- formatting them in a chart library,
- then exporting to image,

you can ask the model to:
- retrieve,
- reason,
- and render the full graphic in one go.

You still should validate outputs, but the prototyping speed jumps.

## 5.4 Multilingual workflows: translate text inside images

Both Gemini docs and enterprise materials emphasize multilingual text capabilities.
One highlighted workflow is:
- upload an image,
- prompt: “Translate all text in this image to Korean/Spanish/etc. Do not change anything else.”

This is extremely valuable because localization is usually expensive:
- designers must recreate layouts per language,
- text expansion breaks spacing,
- and every region needs different copy.

AI-based “in-image translation” can compress the iteration loop dramatically.

## 5.5 Multi-image compositing and style transfer

With many input images, Nano Banana Pro becomes a compositing engine:
- merge elements from multiple sources,
- transfer design motifs,
- keep consistent character identity.

This is especially relevant for:
- ecommerce (swap product colors/materials),
- fashion (virtual model + garment changes),
- and UGC-style ads (consistent character, new backgrounds).

---

# 6. Gemini API Deep Dive (How to Call It)

Below is a developer-focused section that aims to be “copy/paste friendly.”

> [!NOTE]
> The official Gemini docs show multiple ways to call the model:
> - REST (raw HTTP),
> - Google’s GenAI SDKs (Python / JS / Java / Go),
> - and sometimes “chat” style calls for iterative edits.

## 6.1 Model selection

For Nano Banana Pro, the primary model ID is:

- `gemini-3-pro-image-preview`

For Nano Banana (“fast”) image generation and edits:

- `gemini-2.5-flash-image`

This mapping matters because you can build a tiered UX:
- “Draft” button uses Flash (cheap + fast),
- “Finalize” button uses Pro (high fidelity).

## 6.2 Authentication

Gemini API typically uses an API key in the header:

- `x-goog-api-key: $GEMINI_API_KEY`

For enterprise and Vertex AI flows, OAuth and Cloud IAM may be used instead (depending on integration).

## 6.3 REST endpoint pattern

Gemini API endpoint pattern for generateContent:

```
POST https://generativelanguage.googleapis.com/v1beta/models/{MODEL_ID}:generateContent
```

Example for Nano Banana Pro:

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent
```

## 6.4 Request anatomy (conceptual)

A typical request contains:

- `contents`: an array of messages
  - each message has `parts` (text, images, etc.)
- `generationConfig`: output controls
  - `responseModalities` to request TEXT + IMAGE
  - `imageConfig` with `aspectRatio` and `imageSize`
- `tools`: optional, e.g. `google_search` grounding

The response contains:
- candidate messages,
- a set of `parts`, where image data is returned as base64 in `inlineData.data`.

## 6.5 Minimal REST example (text-to-image, 16:9, 4K)

```
curl -s -X POST   "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent"   -H "x-goog-api-key: $GEMINI_API_KEY"   -H "Content-Type: application/json"   -d '{
    "contents": [{
      "parts": [{"text": "Create a clean, modern hero banner for an AI image API. Include the headline: Nano Banana Pro API. Minimal, high-contrast, 16:9, studio lighting, subtle banana motif."}]
    }],
    "tools": [{"google_search": {}}],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"],
      "imageConfig": {"aspectRatio": "16:9", "imageSize": "4K"}
    }
  }'   | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data'   | base64 --decode > output.png
```

Notes:
- The use of `google_search` is optional; it’s helpful when you want factual grounding.
- `jq` and `base64` are used for quick extraction; in production, parse JSON properly.

## 6.6 Python example (Google GenAI SDK)

```
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

prompt = (
  "Generate a product poster for a fictional snack brand. "
  "Use clean typography, high contrast, and leave whitespace for a price tag."
)

resp = client.models.generate_content(
  model="gemini-3-pro-image-preview",
  contents=prompt,
  config=types.GenerateContentConfig(
    tools=[{"google_search": {}}],
    response_modalities=["TEXT", "IMAGE"],
    image_config=types.ImageConfig(
      aspect_ratio="4:5",
      image_size="2K",
    ),
  ),
)

# Find the image part
img_parts = [p for p in resp.parts if p.inline_data]
img = img_parts[0].as_image()
img.save("poster.png")
```

## 6.7 Iterative editing: “translate text inside image” pattern

A powerful workflow is:
1. generate or upload an image,
2. then ask for a localized translation **without changing anything else**.

Pseudo-steps:
- create initial image,
- send it back with a new text instruction,
- request TEXT+IMAGE output again.

This allows you to implement:
- “Translate to Spanish / German / Japanese” buttons,
- plus region-specific disclaimers or formatting.

## 6.8 Multi-image reference prompting (style guide pattern)

When you have multiple reference assets:
- brand logo,
- typography sample,
- hero image,
- product packshot,
- color palette,

you can submit them as multiple input image parts and then instruct:

- “Generate 10 social creatives that match these brand rules. Keep the logo in the bottom-left, maintain the same typeface style, and use the color palette.”

Your application can implement:
- “asset packs” users upload once,
- then cached context that’s reused for multiple generations (where supported).

## 6.9 Error handling and limits (practical notes)

Common failure causes include:
- using an invalid model ID,
- missing billing setup,
- exceeding rate limits (especially for preview models),
- sending images that exceed payload limits,
- or requesting 4K too aggressively at scale without batching.

Mitigations:
- implement retries with exponential backoff,
- provide a “fallback to Nano Banana” mode,
- log prompt + config + response metadata for debugging,
- and start with 1K/2K in development before turning on 4K.

---

# 7. Cost, Pricing, and Unit Economics

Pricing is not just a footnote for image generation.
At scale, the cost per asset determines:
- whether you can offer “unlimited generations,”
- whether you can ship 4K by default,
- and how you price subscription tiers.

## 7.1 The key numbers you need

The Gemini pricing docs describe image output cost for `gemini-3-pro-image-preview` as:

- ~$0.134 per 1K/2K image
- ~$0.24 per 4K image

They also set image input as an equivalent token amount (so input images have a defined cost), and offer cheaper **Batch** pricing.

> [!TIP]
> If your product is “image editing heavy” (users upload images), input image cost matters. If your product is “prompt-only generation,” output dominates.

## 7.2 Standard vs Batch: when Batch wins

Batch pricing can cut image costs roughly in half (per published rates).
Batch is ideal when:
- you can tolerate longer turnaround,
- you’re generating many assets for a pipeline,
- or you want to process backlogs overnight.

Standard is ideal when:
- the user is interactive,
- you need low latency,
- you have UI loops (generate → tweak prompt → generate again).

## 7.3 Rough cost scenarios

Below are back-of-the-envelope examples to help product planning.

### Scenario A: A “social creative” tool (2K outputs)
- user generates 50 images/day
- output cost: 50 × $0.134 = $6.70/day
- monthly (30 days): ~$201/user/month just on output

That’s not viable unless:
- you use a cheaper model for drafts,
- you rate-limit Pro,
- you batch,
- or you price the product accordingly.

### Scenario B: Tiered workflow (Flash drafts + Pro finalize)
- 40 draft images with Nano Banana (cheap model)
- 5 final images with Pro (2K)
- Pro cost: 5 × $0.134 = $0.67/day
- monthly: ~$20/user/month on Pro output

That’s much more realistic.

### Scenario C: “poster generator” with 4K final assets
- 3 final images/day at 4K
- 3 × $0.24 = $0.72/day
- monthly: ~$22/user/month

This can work if:
- the value per output is high (clients, ads, ecommerce),
- and you position 4K as a premium feature.

## 7.4 Hidden costs: grounding queries

Google Search grounding can involve extra costs per search query.
If you build “infographics from current facts” at scale, track:
- how many search calls are triggered per request,
- and whether you can cache results in your app.

---

# 8. Evaluation Framework (How to Benchmark It Yourself)

If you want a research report to be genuinely useful, you need a methodology.
Here’s a robust evaluation plan you can run without access to proprietary benchmarks.

## 8.1 Build a test suite (prompt categories)

Create a prompt set with 10–30 prompts per category.

### A) Typography-heavy posters
Goal: legible text, correct spelling, stable layout.

Examples:
- event poster with date, time, venue
- product mockup with label + ingredients
- “comic panel” with speech bubbles

Metrics:
- character-level OCR accuracy,
- kerning/spacing consistency,
- font stability across variants.

### B) Infographics and diagrams
Goal: correct facts + coherent visuals.

Examples:
- “make an infographic of today’s weather in Tokyo”
- “diagram explaining photosynthesis”
- “map-style infographic of top cities by population”

Metrics:
- factual correctness (manual or via grounding validation),
- readability of labels,
- structural coherence (arrows, steps, flow).

### C) Localization edits
Goal: translate text without changing design.

Examples:
- translate a poster to Spanish without changing layout
- translate packaging label to Korean
- translate infographic labels to Japanese

Metrics:
- layout drift (% of elements moved),
- translation accuracy (human review),
- text overflow/fit quality.

### D) Brand consistency (multi-image reference)
Goal: consistent identity and style.

Inputs:
- logo
- typography sample
- color palette
- product packshot

Metrics:
- logo placement correctness,
- color match (Delta-E approximation if you want to get fancy),
- style adherence scored by human raters.

### E) Photoreal edits
Goal: realism + minimal artifacts.

Examples:
- change shirt color
- remove object
- add object with correct lighting/shadows

Metrics:
- artifact rate,
- edge blending quality,
- semantic correctness.

## 8.2 A/B comparisons: Pro vs Nano Banana

Run the same prompts with:
- Nano Banana (Flash)
- Nano Banana Pro (Pro Image)

Record:
- cost,
- latency,
- quality metrics above,
- and subjective preference.

This will give you the “frontier curve”:
- where Pro is worth the extra cost,
- and where Flash is sufficient.

## 8.3 A practical scoring rubric

Use a simple 1–5 scale on:
- prompt adherence,
- text fidelity,
- composition quality,
- realism (when relevant),
- and overall usefulness.

If you’re building a product, you can use this to:
- decide default model,
- decide when to upsell Pro,
- and decide when to auto-fallback.

---

# 9. Safety, Governance, and Responsible Deployment

## 9.1 Watermarks and provenance

Google describes two watermark layers for Gemini image generation:
- an invisible **SynthID** watermark,
- and a visible watermark indicator (in the Gemini app context).

This is relevant if you:
- publish images to the public,
- need to label AI content,
- or have client compliance requirements.

## 9.2 Rights and prohibited use

Gemini image generation docs include reminders:
- ensure you have rights to uploaded images,
- avoid generating content that infringes others’ rights,
- and follow prohibited-use policies.

When building a product:
- add a clear ToS,
- implement content moderation,
- and keep audit logs for abuse handling.

## 9.3 Enterprise assurances and indemnification

Google Cloud’s enterprise announcement frames Nano Banana Pro under a shared responsibility framework and mentions copyright indemnification “coming at general availability.”

If you’re selling to enterprise:
- keep track of whether you’re using Preview vs GA,
- document your data retention,
- and align with customer procurement needs (billing, SLAs, compliance).

---

# 10. Prompting Playbook (Pro-Grade Prompts)

Most “prompt engineering tips” online are shallow.
Nano Banana Pro becomes powerful when you treat prompts like **creative briefs**.

## 10.1 The Pro prompt template

Use a structure like this:

1. **Asset type**: poster / banner / infographic / mockup / photo edit
2. **Primary goal**: what success looks like
3. **Content constraints**: must include / must not include
4. **Layout constraints**: grid, margins, whitespace, safe areas
5. **Typography constraints**: font vibe, weight, hierarchy, spacing
6. **Color constraints**: palette, contrast rules
7. **Lighting/camera**: studio lighting, angle, lens feel
8. **Output constraints**: aspect ratio, resolution
9. **Editing constraints** (if editing): “do not change anything else”

### Example: poster prompt (4:5, 2K)

Prompt:

> Design a 4:5 event poster for “Nano Banana Pro Workshop”.  
> Use a modern minimalist layout, high contrast, and generous whitespace.  
> Headline (large): “Nano Banana Pro Workshop”  
> Subheadline: “Design-first prompting • Image grounding • 4K outputs”  
> Details (small): “Sat • 2 PM • Online”  
> Keep all text perfectly spelled, aligned, and easy to read.  
> Visual style: premium tech, subtle banana motif, soft studio lighting background.  
> Put a small placeholder logo circle in the bottom-left (do not use any real brand logos).  
> No extra text beyond what is provided.

Then set config:
- aspectRatio: 4:5
- imageSize: 2K

## 10.2 “Translate inside image” prompt pattern

For localization edits, use strict language:

- “Translate all English text to Spanish.”
- “Do not change any other elements of the image.”
- “Keep layout, colors, icons, spacing, and illustration unchanged.”
- “Preserve typographic hierarchy.”

This reduces drift.

## 10.3 “Brand kit” prompting with multi-image context

When you supply brand assets:
- describe each reference image’s role.

Example:

- Reference 1: logo (use only as a mark in bottom-left)
- Reference 2: typography sample (match this style)
- Reference 3: color palette (use these colors only)
- Reference 4: product packshot (keep proportions accurate)

Then instruct:
- “Generate 6 ad creatives with consistent brand identity.”

## 10.4 Designing for social platforms

A prompt pattern that works:

- “Leave 10% safe margin on all sides.”
- “Reserve top 15% empty space for UI overlays.”
- “Avoid small fonts; minimum font size equivalent to 24px at 1080p.”
- “Use bold headline and short subhead.”

Even if the model doesn’t literally follow pixel units, it will interpret intent.

## 10.5 Photoreal edit prompting: shadow and reflection rules

When adding objects, include:

- “Match the lighting direction and intensity from the original.”
- “Add physically plausible shadow and subtle reflections.”
- “Match the camera perspective and depth of field.”

This increases coherence.

## 10.6 Multi-step prompting (the “director workflow”)

A high-success approach:

1. Ask for 3 layout concepts as text descriptions first.
2. Pick one concept.
3. Generate the image using that concept as constraints.
4. Iterate edits: change one thing at a time.

Because Nano Banana Pro can output both TEXT and IMAGE, you can make it “think out loud” in the TEXT modality (while still delivering an image).

---

# 11. Integration Patterns (Real Pipelines)

## 11.1 The “draft → finalize” model router

A robust product pattern:

- Use Nano Banana for:
  - exploration,
  - variants,
  - rapid iteration.

- Use Nano Banana Pro for:
  - final outputs,
  - text-heavy assets,
  - localization,
  - 4K deliverables.

Your UI can expose:
- “Fast” (cheap) vs “Pro” (best) toggles,
- or automatically escalate to Pro when prompt contains typography/infographic keywords.

## 11.2 Localization pipeline

Steps:
1. Generate base asset in English.
2. Extract text areas (optional via OCR in your app).
3. Use Nano Banana Pro “translate in image” edit.
4. Human review for legal copy.
5. Save regional variants.

## 11.3 Ecommerce product swap pipeline

Steps:
1. Upload product packshot.
2. Provide style guide references.
3. Prompt: swap color/material, keep proportions.
4. Generate variants for A/B tests.
5. Score outputs (artifact detection), auto-filter low quality.

## 11.4 Documentation visuals pipeline

Steps:
1. Use search grounding to retrieve “current facts.”
2. Prompt: render as infographic (16:9 or 4:5).
3. Export image to docs site / help center.
4. Add metadata: created date, revision triggers.

---

# 12. Ecosystem Notes (Adobe, Canva/Figma, Third Parties)

## 12.1 Why partner integrations matter

Google Cloud’s enterprise post quotes partners and highlights how Nano Banana Pro is being integrated into creative tools and platforms.
The “meta message”:
- this model is meant to be embedded where creators already work.

## 12.2 Adobe Firefly and Photoshop

Adobe describes adding third-party image models inside Firefly, with Google’s model included.
For developers and businesses, this implies:
- you may see Nano Banana Pro outputs inside Adobe workflows,
- and users may expect your API product to produce comparable quality.

## 12.3 Canva, Figma, and creative platforms

Public partner quotes mention:
- multi-language text rendering importance (Canva),
- dependable style and character consistency (Figma),
- and production pipeline improvements (brands and agencies).

Even if you never use these tools directly, they shape market expectations:
- “AI image model” is no longer a toy; it must behave like a workflow component.

## 12.4 Third-party wrappers & aggregators

In the wild, you’ll find:
- proxy APIs,
- “OpenAI-compatible” gateways,
- and SaaS wrappers.

Pros:
- faster onboarding,
- unified billing,
- compatibility layers.

Cons:
- extra latency,
- policy differences,
- unclear data handling.

If you build one, be extremely clear about:
- logs and retention,
- terms,
- and where inference actually happens.

---

# 13. Troubleshooting & FAQs

## 13.1 “Why am I getting 400 or 404?”
- Wrong model ID (typos)
- Calling a model you don’t have access to
- Mixing incompatible config fields

Fix:
- verify model ID exactly,
- start from a minimal request and add config gradually.

## 13.2 “My 4K request is expensive / slow”
That’s expected:
- 4K costs more than 1K/2K,
- and high resolution increases compute.

Fix:
- use 2K for previews,
- only finalize in 4K,
- use Batch for large runs.

## 13.3 “Text is still imperfect”
Advanced text rendering is better, not magic.
Fix:
- keep text short,
- prefer headline + subhead over paragraphs,
- increase resolution,
- iterate with small edits (“fix spelling of …”).

## 13.4 “Localization changed my layout”
Fix:
- include strict constraints: “do not change anything else,” “keep layout unchanged,” “preserve hierarchy.”
- increase resolution,
- and run a second pass: “restore alignment and spacing.”

## 13.5 “Can it generate disallowed content?”
As a builder, you should assume:
- safety filters exist,
- content policies apply,
- and edge cases require moderation and user reporting.

---

# 14. Sponsor: NanoBananaProAPI.com

> [!NOTE]
> **Sponsor link / Ad placement requested by the author of this README.**

### ✅ Nano Banana Pro API Gateway / Docs

**NanoBananaProAPI.com:** https://nanobananaproapi.com/

What it appears to be (based on its published policy page):
- a website to learn about or experiment with Nano Banana Pro and Nano Banana 2 image generation APIs,
- with requests handled by an “EvoLink” API layer (see their policy for details).

At the time of writing this report, the homepage returned a temporary error from this environment, but the policy page was accessible. Always review their latest docs before integrating.

---

# 15. Appendix: GitHub README Styling Toolkit

If you want your README to look “open-source polished,” these patterns help.

## 15.1 Shields.io badges (quick templates)

- Build badge:
  - `https://img.shields.io/github/actions/workflow/status/OWNER/REPO/ci.yml?style=flat`

- License badge:
  - `https://img.shields.io/github/license/OWNER/REPO?style=flat`

- Stars badge:
  - `https://img.shields.io/github/stars/OWNER/REPO?style=social`

## 15.2 Simple Icons (SVG logos)

Use the Simple Icons CDN:

```html
<img src="https://cdn.simpleicons.org/google/4285F4" height="18" />
<img src="https://cdn.simpleicons.org/googlecloud/1A73E8" height="18" />
<img src="https://cdn.simpleicons.org/adobe/FF0000" height="18" />
```

## 15.3 Collapsible sections

```md
<details>
  <summary><b>Click to expand</b></summary>

  Hidden content goes here.

</details>
```

## 15.4 Callouts / Admonitions (GitHub-flavored)

```md
> [!TIP]
> This is a tip.

> [!WARNING]
> This is a warning.
```

## 15.5 A clean “API quickstart” block

```md
## Quickstart

1. Get an API key
2. Call `gemini-3-pro-image-preview`
3. Save base64 image bytes to a file
```

---

# 16. Source List (English-first)

This README was written using primarily English sources from Google / Google Cloud / Gemini API docs, plus partner materials where relevant.

Suggested source list to cite in your GitHub repo:

- Google Blog: Nano Banana Pro announcement
- Google Cloud Blog: Enterprise availability & positioning
- Gemini API Docs: Image generation guide + Gemini 3 guide
- Gemini API Pricing page
- Gemini overview page for image generation (consumer surface)
- Adobe Firefly “partner models” announcement

---



# 2.3 What Google *does* and *does not* disclose (so you don’t hallucinate specs)

When people ask for “model details,” they often mean “architecture” (diffusion vs transformer vs hybrid), parameter count, training dataset scope, or internal tricks. For Nano Banana Pro, those deep internals are **not fully disclosed publicly** in the way that, say, a classic academic paper might disclose.

So the safest approach is to separate “documented facts” from “operational facts.”

## Documented facts (you can rely on these)

- The model is part of the **Gemini 3** family and presented as **Gemini 3 Pro Image** with a Gemini API model ID.  
- It supports **image generation and editing** (text-to-image and text+image-to-image).  
- It can use **Google Search grounding** through the Gemini tool interface to incorporate up-to-date information before rendering images.  
- It supports explicit **aspect ratio** control and **resolution** control (1K/2K/4K).  
- It supports **multi-image prompting** (large sets of references) as a designed feature.  
- It has “preview” labeling in the API, which implies interface/behavior changes before stability.

## Operational facts (you can verify empirically)

Even when architecture is not published, you can still measure:

- **prompt adherence** under multi-constraint instructions  
- **typography accuracy** using OCR  
- **identity consistency** across variants and edits  
- **layout stability** across localization or content changes  
- **cost** and **latency** under your traffic patterns  
- **failure modes** (hallucinated icons, warped hands, text drift, unsafe content, etc.)

## Unknowns (treat as hypotheses, not facts)

If you see people claiming exact:
- parameter counts,
- training corpus composition,
- “this is diffusion with X steps,”
- or “it uses Y secret mechanism,”

treat those as **unverified** unless they cite a primary Google source.

The practical upside: you don’t need internals to build a great product. What you need is **predictable behavior** — and you can get that by rigorous evaluation + guardrails.

---

# 4.6 Token accounting, media resolution, and “why your bill changed”

Gemini 3 introduces more explicit control over how the model processes media. Even if your goal is “just an image,” media tokenization influences:
- latency,
- cost,
- and how well the model reads small text or fine details in reference images.

## 4.6.1 Image input cost: not free (even before output)

In Gemini pricing, input images are assigned an equivalent token count. This matters for editing workflows where users upload images.

Practical implications:
- A product that encourages lots of edits on user-supplied images will incur input costs frequently.
- The “prompt-only” poster generator pays mostly for output, but the “photo editor” pays for both.

## 4.6.2 Media resolution (vision processing control)

Gemini 3 introduces `media_resolution` controls (documented for multimodal understanding) that allocate more tokens to an input image or frame when you need the model to read fine text or small details.

How it affects Nano Banana Pro workflows:
- If you feed in a brand style guide screenshot with small typography, higher media resolution can help.
- If you feed in a clean logo PNG, you may not need it.

If you’re building an app, consider:
- exposing a “high precision” toggle,
- or auto-detecting when the uploaded image has dense text (OCR heuristic), then increasing resolution.

## 4.6.3 Context caching (when your app has long “brand kits”)

Gemini 3 supports context caching. In principle, this is powerful for brand kit workflows:
- user uploads 10 reference images + long style rules,
- you cache that context,
- then each new generation reuses the cached context cheaply.

Even if you don’t use caching on day one, design your product as if you might:
- treat “brand kits” as reusable bundles,
- store a stable “kit ID,”
- and separate “kit upload” from “generation requests.”

---

# 5.6 Real creative brief examples (with failure-mode guidance)

To make this report actionable, here are “brief-style prompts” you can use immediately.

## 5.6.1 Infographic: “weather + icons + labels” (grounded)

Brief:
- The infographic must be visually clean, readable, and factual.
- Use Google Search grounding.
- Keep text short.

Prompt:
> Create a 16:9 infographic for today’s weather in Tokyo.  
> Include: temperature (high/low), precipitation chance, wind speed, and a simple 5-day forecast row.  
> Use a clean grid layout with iconography (sun/rain/cloud) and minimal text.  
> Keep all numbers and city names accurate and easy to read.  
> Use a professional “news graphic” style with high contrast and plenty of whitespace.

Failure modes to watch:
- wrong forecast numbers (validate against a weather source),
- labels that drift out of alignment,
- icons that look inconsistent across days.

Mitigation:
- keep numbers small and constrained,
- run a second pass: “Fix alignment and spacing. Keep all data unchanged.”

## 5.6.2 Poster: “typography-first” (no hallucinated text)

Prompt:
> Design a 4:5 poster with a modern minimalist style.  
> Use ONLY the following text exactly as written (no extra text):  
> Headline: “NANO BANANA PRO”  
> Subhead: “Text-accurate images • Search grounding • 4K output”  
> Footer: “nanobananaproapi.com”  
> Arrange the text in a clean typographic hierarchy.  
> Use high contrast, generous whitespace, subtle banana motif, and premium studio lighting background.  
> Ensure spelling is perfect and the text is centered and aligned.

Failure modes:
- extra words appear,
- text misspells the URL,
- small kerning issues.

Mitigation:
- if extra text appears, explicitly say: “Remove all text not listed above.”
- increase resolution (2K/4K) for final output.

## 5.6.3 Packaging mockup: “brand constraints”

Prompt:
> Create a photorealistic packaging mockup for a fictional snack called “BananaByte”.  
> The package is a matte pouch with a minimal label.  
> Requirements:
> - Label text must be perfectly spelled: “BananaByte” and “Crunchy Banana Chips”
> - Include an ingredients box with: “Bananas, Coconut Oil, Sea Salt”
> - Use a clean sans-serif type style, modern, premium.
> - Add a small QR code placeholder (do not encode real data).
> - Background: neutral studio tabletop, soft shadows.
> Output: 3:4, 2K.

Failure modes:
- ingredients get rewritten,
- QR code becomes random text,
- shadows look wrong.

Mitigation:
- ask for “QR code as a simple black-and-white square placeholder, no text.”

## 5.6.4 Photo edit: “swap color, keep identity”

Prompt:
> Edit the uploaded photo: change the person’s jacket from red to black.  
> Do not change the person’s face, hair, pose, or background.  
> Preserve lighting, folds, and fabric texture.  
> Make the black jacket look natural and consistent with the original light source.

Failure modes:
- face changes slightly,
- background shifts,
- jacket texture becomes plastic.

Mitigation:
- “Preserve the original photo as much as possible. Only change jacket color.”
- If face changes, add: “Do not alter facial features.”

## 5.6.5 Multi-image “character bible” prompt

Inputs:
- 6 character reference shots (front/back/expressions)
- 3 environment references
- 2 style references (palette + brush)

Prompt:
> Using the reference images:
> - Keep the character identity consistent with references 1–6 (face shape, hairstyle, clothing silhouette).
> - Use environment style from references 7–9.
> - Use color palette and shading style from references 10–11.
> Create a new scene where the character stands in a rainy neon street, holding an umbrella.  
> Cinematic lighting, reflective pavement, subtle motion blur, 16:9, 2K.  
> No text.

Failure modes:
- identity drift,
- clothing changes,
- palette mismatch.

Mitigation:
- specify which references are “must match” vs “inspiration.”
- ask for 3 variants and pick the closest.

---

# 6.10 Detailed JSON schema (so you can build a typed client)

Below is a simplified schema you can use to build your own strongly typed client. It’s not a verbatim copy of any doc; it’s a pragmatic summary.

## Request (conceptual)

```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        { "text": "..." },
        {
          "inlineData": {
            "mimeType": "image/png",
            "data": "BASE64..."
          }
        }
      ]
    }
  ],
  "tools": [
    { "google_search": {} }
  ],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9",
      "imageSize": "2K"
    }
  }
}
```

Key engineering notes:
- Keep `parts` order intentional: text brief first, references next.
- Always validate `imageSize` values (`1K`, `2K`, `4K`) and `aspectRatio` strings.
- Design for “mixed modality” responses: some `parts` contain text, some contain image bytes.

## Response (conceptual)

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          { "text": "Optional reasoning / description / warnings..." },
          {
            "inlineData": {
              "mimeType": "image/png",
              "data": "BASE64..."
            }
          }
        ]
      }
    }
  ]
}
```

Your client should:
- iterate parts,
- save images safely,
- store the text as “model notes” (useful for debugging),
- and handle missing image parts gracefully.

---

# 6.11 Node.js example (minimal, production-ish)

```js
import fs from "node:fs";

const MODEL = "gemini-3-pro-image-preview";
const API_KEY = process.env.GEMINI_API_KEY;

async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

  const body = {
    contents: [
      { role: "user", parts: [{ text: "Create a 16:9 banner with headline 'Nano Banana Pro'. Minimal, premium, high contrast." }] }
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      imageConfig: { aspectRatio: "16:9", imageSize: "2K" }
    }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-goog-api-key": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const json = await res.json();
  const parts = json.candidates?.[0]?.content?.parts || [];

  let imageB64 = null;
  for (const p of parts) {
    if (p.inlineData?.data) imageB64 = p.inlineData.data;
  }

  if (!imageB64) throw new Error("No image part returned.");

  const buf = Buffer.from(imageB64, "base64");
  fs.writeFileSync("output.png", buf);
  console.log("Saved output.png");
}

generate().catch(console.error);
```

---

# 7.5 Cost optimization tactics (battle-tested patterns)

If you want to ship Nano Banana Pro in a SaaS product without losing money, treat cost as a first-class design constraint.

## 7.5.1 Two-pass generation (cheap first, expensive second)

- Pass 1 (cheap): generate 4–8 drafts in Nano Banana (Flash).
- Pass 2 (expensive): pick the best draft and re-run in Pro with stricter constraints and higher resolution.

This mirrors how humans work: rough sketch → final design.

## 7.5.2 Progressive resolution

- Start at 1K for ideation.
- Upgrade to 2K for review.
- Upgrade to 4K for final export.

A surprising number of users are happy if they can “see it” at 1K, but want 4K only at the end.

## 7.5.3 Batch mode for non-interactive workloads

If the user doesn’t need immediate output (e.g., “generate a full campaign pack”), use Batch.

## 7.5.4 Cache grounded facts

If you use Search grounding for factual infographics, cache the retrieved facts in your app.
Then re-render visuals without re-searching.

## 7.5.5 Detect “text-heavy” prompts automatically

Use heuristics:
- if prompt contains a lot of quoted text,
- or includes “poster,” “infographic,” “label,” “menu,” “diagram,”

route to Pro by default, because text fidelity is where Pro shines.

---

# 8.4 Reproducibility: how to make your evaluation trustworthy

Image models can be stochastic. If you want your results to be credible:

- Log prompt + config + model ID + timestamp.
- Store the raw response JSON (or at least the text part).
- Keep the reference images with content hashes.
- When possible, run multiple trials per prompt and score the distribution.

If your goal is to publish research:
- include a “prompt list appendix,”
- include a “scoring rubric appendix,”
- and publish representative outputs (with watermarks/provenance considerations).

---

# 9.4 Product UX guardrails (what users need to not get burned)

When you ship an image model, your UX is your safety layer.

Suggested guardrails:
- Always show which model was used (“Fast” vs “Pro”).
- Always show estimated cost/credits before a 4K export.
- Provide “report output” flows for harmful/illegal content.
- Provide safe defaults: 2K maximum for new users, with 4K behind a toggle.

---

# 10.7 Prompt library (copy/paste)

## “No extra text” strict prompt

> Use ONLY the exact text I provide. Do not add any additional words, letters, or hidden text. If you are unsure, leave the space blank.

## “Layout lock” edit prompt

> Edit the uploaded image. Keep composition, spacing, and layout exactly the same. Do not move elements. Only change: [X].

## “Typography spec” prompt

> Use a clean geometric sans-serif style. Large headline weight, medium subhead, small body. Keep line spacing consistent. Avoid decorative fonts.

## “Ad safe zone” prompt

> Leave a 10% margin free of important elements. Keep headline inside the center area. Avoid placing key text near the edges.

---

# 16.1 Suggested citation format for GitHub

If you want your GitHub README to look professional, add a “Sources” section with links and dates you accessed them.

Example style:

- Google AI Blog — “Nano Banana Pro” announcement (accessed 2025-12-14)
- Google AI for Developers — Gemini image generation docs (accessed 2025-12-14)
- Google AI for Developers — Gemini 3 Developer Guide (accessed 2025-12-14)
- Google AI for Developers — Gemini pricing docs (accessed 2025-12-14)
- Google Cloud Blog — enterprise availability announcement (accessed 2025-12-14)
- Adobe Firefly blog — partner model announcement (accessed 2025-12-14)

---



# 3.6 Availability, billing setup, and “Preview model” implications

A recurring confusion point: “I can try it in AI Studio, but my API call fails.”
That usually comes down to billing and model availability differences across surfaces.

Practical checklist:
1. **AI Studio** is often the easiest place to test quickly, but it doesn’t guarantee you have API access on a given project.
2. For the **Gemini API**, ensure:
   - API key is created,
   - billing is enabled where required,
   - and you’re using the correct `v1beta` endpoints and model IDs.
3. For **Vertex AI**, ensure:
   - the correct GCP project is selected,
   - model access is enabled in your region,
   - IAM permissions exist for the calling identity.

## Preview model caveats (why your results may change)

The pricing docs explicitly warn that preview models may change before becoming stable and can have more restrictive rate limits.

Operational implications:
- Your app should pin model IDs explicitly and monitor changelogs.
- Keep integration tests that detect “behavior drift” (text accuracy drops, layout changes, output format changes).
- Avoid shipping mission-critical workflows without a fallback plan.

A robust strategy:
- treat Nano Banana Pro as your “best quality” path,
- but keep Nano Banana (Flash image) as a fallback when the Pro model is rate-limited.

---

# 4.7 Rate limits, throughput planning, and latency expectations

Even without exact published numbers in this README, you should plan for three realities:

1. **Interactive users feel latency more than cost.**  
   If Pro takes longer, you need a UX that makes that acceptable (progress indicators, drafts, streaming notes, etc.).

2. **Throughput constraints appear suddenly at growth inflection points.**  
   A product that works for 50 users can hit rate limits at 5,000 users if you don’t plan.

3. **“4K everywhere” is a trap.**  
   4K is amazing, but it’s expensive and heavier. Make it a deliberate choice.

Practical recommendations:
- Build a job queue for non-interactive requests.
- Provide “generate 8 drafts” as an async batch job.
- For interactive UI, keep Pro requests small and constrained (one image per click, not 10).
- Implement concurrency controls per user and per workspace.

---

# 11.5 Shipping checklist (what to implement before you go live)

If you want to ship Nano Banana Pro in production, here’s a checklist that catches most real-world issues.

## Product & UX
- [ ] Model selector: Fast vs Pro
- [ ] Resolution selector: 1K / 2K / 4K (with cost hint)
- [ ] Clear error messages and retry UX
- [ ] History panel: prompts + outputs + configs
- [ ] “Regenerate with same settings” button
- [ ] “Edit this output” flow

## Engineering
- [ ] Input validation for aspectRatio and imageSize
- [ ] Robust JSON parsing of mixed modality responses
- [ ] Safe file handling for base64 images
- [ ] Timeout + retry logic with exponential backoff
- [ ] Structured logging: prompt hash + request id + model id
- [ ] Rate limit handling (429) with queues

## Governance
- [ ] Terms of use + content policy
- [ ] Abuse reporting and moderation workflow
- [ ] Data retention policy (especially for uploaded images)
- [ ] Provenance labeling guidance for users
- [ ] Enterprise settings: logging toggle, SSO, audit exports

---

# 12.5 Competitive landscape (how to position Nano Banana Pro honestly)

If you’re writing marketing or a technical comparison, avoid vague claims like “best in the world.”
Instead, position Nano Banana Pro around **the things it is explicitly designed to do well**:

- **Design-first outputs:** typography, layout, branded assets
- **Grounded visuals:** infographics and “current facts” rendered as images
- **Multi-image prompting:** large reference sets for consistent style and identity
- **Integration footprint:** APIs + enterprise surfaces + creative tool partnerships

Where competitors may still win (depending on your use case):
- extremely stylized art niche workflows,
- highly specific control nets or inpainting features in other ecosystems,
- or open-source customization where you need full training control.

The honest framing:
- Nano Banana Pro is a strong default for productized, professional creative workflows.
- Specialized needs may still require specialized tools.

---

# Glossary

- **Grounding**: letting the model retrieve information (e.g., via Google Search) before responding.
- **Preview model**: a model release stage where behavior and limits can change before stable GA.
- **Aspect ratio**: width:height format (e.g., 16:9).
- **1K / 2K / 4K**: output resolution tiers; higher is sharper, slower, and more expensive.
- **Multi-image prompting**: providing multiple reference images in the input context.
- **SynthID**: Google’s invisible watermarking approach for AI-generated media provenance.
- **Variant generation**: generating multiple creative alternatives from the same brief.
- **Localization drift**: layout and element changes that happen unintentionally during translation edits.

---
