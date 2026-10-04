# MASTER PORTFOLIO SPECIFICATION

## Akilesh S — Personal Portfolio

**Version:** 1.0  
**Status:** Implementation Specification  
**Target Stack:** Next.js + TypeScript + Tailwind CSS  
**Deployment Target:** Vercel  
**Development Mode:** Local-first

---

# 0. CODEX OPERATING DIRECTIVE

You are implementing a high-end personal portfolio website for:

**Akilesh S**

The goal is **NOT** to create a generic student portfolio.

The goal is to create a distinctive, product-engineering-style portfolio that presents Akilesh as:

- a software systems student
- a builder of practical software systems
- an AI-focused developer
- a problem solver
- someone who experiments with emerging technologies
- someone who builds systems rather than merely listing technologies

The portfolio must feel like a carefully designed digital product.

It should be:

- technically sophisticated
- visually distinctive
- interactive
- animation-rich but controlled
- fast
- responsive
- accessible
- credible
- content-driven
- evidence-based

The website should be inspired by the interaction quality, information hierarchy, and storytelling quality of the provided reference portfolio, but it MUST NOT be a visual or structural copy.

The final result should have its own identity.

---

# 1. SOURCE MATERIAL RULES

The project contains a `docs/` directory.

Treat the documents inside `docs/` as source material.

Current source documents:

- `docs/SentinelX.pdf`
- `docs/QueueZero_AI_Full_Project_Documentation.pdf`
- `docs/ScamCheck_Project_Documentation.pdf`
- `docs/Infraguard_AI_Project_Documentation.pdf`
- `docs/OncoTwin_AI_Full_Project_Documentation.pdf`
- `docs/CHIPX_KLA_2026_Full_Project_Documentation.pdf`
- `docs/3_Sports_Academy_Portfolio_Project_Documentation.pdf`
- `docs/StyleSense AI (1).pdf`

Additional source material expected:

- `docs/AKILESH_S_Resume.pdf`
- FARMIGLE project documentation

If a source document is missing, DO NOT invent its contents.

For FARMIGLE specifically:

- FARMIGLE MUST appear in the portfolio.
- Do not invent its technology stack, role, features, metrics, architecture, status, or claims.
- Until reliable source material is available, use a clearly marked placeholder internally or omit unsupported descriptive details.
- The implementation must make it easy to add the verified FARMIGLE content later.

---

# 2. SOURCE-OF-TRUTH HIERARCHY

Use different sources for different categories of information.

## Personal identity / education / certifications / achievements / explicitly listed skills

Use the current resume as the primary source.

## Project-specific information

Use the corresponding project documentation as the primary source.

## Portfolio design and implementation decisions

Use this specification.

## Missing information

Never fabricate.

Use:

`[ADD: ...]`

where appropriate during development.

Before final deployment, resolve all `[ADD: ...]` placeholders unless intentionally left as a clearly identified future item.

---

# 3. IMPORTANT ACCURACY RULE

Never convert a proposed idea, research direction, future enhancement, prototype capability, or conceptual architecture into a claim that it is already implemented.

Use accurate language such as:

- Concept
- Prototype
- Research direction
- Proposed
- Planned
- In development
- Demonstrated
- Implemented
- Production-tested

only when supported by the source material.

Do not invent:

- users
- revenue
- deployment scale
- performance percentages
- accuracy percentages
- customer numbers
- production status
- benchmark improvements
- business impact
- awards
- team sizes
- job positions
- technologies
- integrations

unless supported by source material.

---

# 4. PERSONAL BRAND DIRECTION

The portfolio should communicate:

## SYSTEM

Akilesh understands software as interconnected systems.

## SIGNAL

He works with AI, data, interfaces, automation, and emerging technologies.

## FLOW

He focuses on turning problems into practical workflows and usable software.

The portfolio should therefore feel closer to:

- product engineering
- systems engineering
- applied AI
- technical experimentation
- full-stack development

than a traditional:

> "Hi, I'm a student. Here are my skills."

portfolio.

---

# 5. CORE POSITIONING

Candidate hero positioning:

> I turn complex problems into practical software systems.

This is a candidate positioning statement.

Keep the implementation flexible enough to change this wording later without redesigning the hero.

Other supporting positioning language may communicate:

- Software Systems
- Full-Stack Development
- Applied AI
- Emerging Technology
- Problem Solving
- Systems Thinking

Do not make the hero overloaded with keywords.

---

# 6. REFERENCE PORTFOLIO PRINCIPLE

A reference portfolio may be provided separately.

Use it ONLY as inspiration for:

- storytelling
- section rhythm
- interaction quality
- animation quality
- technical presentation
- information density
- portfolio sophistication

Do NOT copy:

- exact layouts
- exact text
- exact animations
- exact color palette
- exact typography combinations
- exact component structures
- exact visual compositions

The final portfolio must look like Akilesh's own product.

---

# 7. VISUAL IDENTITY

Design direction:

## SYSTEM / SIGNAL / FLOW

The interface should feel technical, modern, editorial, and precise.

Avoid generic SaaS landing-page aesthetics.

Avoid:

- excessive glassmorphism
- purple AI gradients
- generic neon cyberpunk
- template-like cards everywhere
- excessive rounded containers
- stock-looking visuals
- huge meaningless gradient blobs
- excessive serif typography
- "AI-generated portfolio" visual clichés

---

# 8. COLOR SYSTEM

Primary dark:

`#101314`

Secondary dark:

`#191D1E`

Warm/cool off-white:

`#F4F1EA`

White:

`#FFFFFF`

Primary signal accent:

Cobalt / electric blue

Secondary signal:

Amber / warm orange

Supporting neutral:

Steel gray

The final cobalt and amber values may be tuned during implementation for accessibility and visual harmony.

The palette must remain restrained.

Accent colors should communicate interaction, state, and hierarchy rather than decorate every component.

---

# 9. TYPOGRAPHY

Preferred typography direction:

### Display

Bricolage Grotesque

Use for:

- hero
- major headings
- project titles
- high-impact statements

### Body

Geist

Use for:

- paragraphs
- navigation
- UI
- descriptions

### Technical

Geist Mono

Use for:

- labels
- metadata
- system states
- section identifiers
- technical tags
- terminal content
- path-like labels

Examples:

`~/about.md`

`~/projects/sentinelx`

`SYSTEM.STATUS`

`BUILD.LOG`

Typography should create a strong visual hierarchy.

---

# 10. WEBSITE INFORMATION ARCHITECTURE

Primary structure:

1. Loader
2. Hero
3. Signal / scrolling banner system
4. About
5. Current / Community Work
6. Selected Systems
7. Technical Deep Dives
8. Real-World Engineering
9. AI & Agentic Coding
10. Technical Stack
11. Impact / Achievements
12. Side Projects
13. Next Project
14. Contact
15. Footer

The exact section transitions can be refined during implementation.

---

# 11. LOADER

Create a short technical build-log-style loader.

Concept:

```text
INITIALIZING PORTFOLIO
SYSTEM CHECK ............ 100%
LOADING PROJECTS ........ 100%
LOADING SIGNALS ......... 100%
READY

Include a counter:
000 → 100
The loader should feel like a system initializing rather than a generic website spinner.
Requirements:
- short
- polished
- not annoying
- skipable or automatically dismissed
- no long artificial loading
- accessible
- reduced-motion compatible
The website must not remain blocked unnecessarily.
12. HERO
The hero is the most important visual section.
It should communicate immediately:
- who Akilesh is
- what he builds
- what technical direction he follows
Possible structure:
AKILESH S

Software Systems
Applied AI
Full-Stack Development

I turn complex problems into practical software systems.

Include a strong visual interaction layer.
13. HERO INTERACTION
Create an interactive background based on a network of:
- dots
- lines
- nodes
- subtle signals
The system should react to cursor movement.
Possible behaviors:
- nearby nodes react to cursor
- lines connect dynamically
- small glowing signals travel along connections
- movement remains subtle
Do NOT make it look like a cryptocurrency dashboard or sci-fi HUD.
It should feel like:
systems communicating.

14. HERO NAME ANIMATION
Animate the name:
AKILESH
letter-by-letter.
Interaction concept:
- letters react subtly to cursor proximity
- nearby letters may become thinner/narrower
- motion must remain elegant
Do not sacrifice readability.
15. ROTATING ROLE SYSTEM
Include a rotating role descriptor.
Possible verified directions:
- Software Systems Student
- Full-Stack Developer
- AI Builder
- Emerging Technology Explorer
Do not imply professional employment if not supported.
Rotation should be subtle and accessible.
16. HERO TERMINAL
Include a small terminal-like interface containing a short narrative based on verified information.
Example structure:
$ whoami

software systems student
building practical systems
exploring applied AI
shipping experiments
learning by building

This content must be based on verified information.
Do not invent career history.
17. SCROLLING SIGNAL BANNERS
Use horizontal scrolling statements between major sections.
Examples:
BUILD → TEST → LEARN → ITERATE

SOFTWARE / AI / SYSTEMS / EXPERIMENTS

PROBLEM → MODEL → SYSTEM → INTERFACE

The banners should respond subtly to scroll velocity.
Possible effects:
- speed increase
- skew
- directional movement
Do not make them visually overwhelming.
18. ABOUT SECTION
The About section should explain:
- who Akilesh is
- what he studies
- what he builds
- what technical areas interest him
- his approach to learning
- his interest in AI and software systems
Avoid generic biography writing.
Use short paragraphs.
Prefer:
problem → curiosity → experimentation → system

over:
"I am passionate about..."

19. ABOUT TEXT REVEAL
Implement word-by-word or line-based reveal as the user scrolls.
Requirements:
- readable without animation
- reduced-motion final state
- no text disappearing permanently
- accessible DOM content
20. PROFILE PHOTO
Use a profile image if supplied.
Expected location:
public/images/photo.jpg
Until a real image exists, support a placeholder.
Do not invent a portrait.
Visual treatment:
- subtle rotating gradient border
- slight 3D tilt
- responsive crop
- centered face
- no excessive distortion
Fallback:
A minimal monogram such as:
AS
may be used until the real image loads.
21. CURRENT / COMMUNITY WORK
Do NOT invent employment.
If verified community or leadership experience exists in source material, present it here.
Possible source:
GDG On Campus CIT
Only include exact role/title claims if supported by source material available to Codex.
Presentation should focus on:
- responsibility
- contribution
- technical/community impact
- learning
not fake corporate experience.
22. SELECTED SYSTEMS
This is the central project section.
Projects should not be presented as a simple grid of cards.
Each project should feel like a system.
Every project presentation should communicate:
1. Problem
2. Why it matters
3. Approach
4. System architecture
5. Key capabilities
6. Technologies
7. Akilesh's role
8. Status
9. Evidence / implementation level
Use visual storytelling.
23. PRIMARY PROJECTS
The primary portfolio project set is:
1. SentinelX
Title:
SentinelX
Description:
AI-powered secure assessment and intelligent proctoring platform.
Use the SentinelX documentation as the source.
Important capabilities documented include:
- multiple assessment types
- AI-assisted proctoring
- configurable security policies
- live monitoring
- evidence management
- reports and analytics
- assessment experience design
- browser/device/security monitoring
- AI-based behavioral analysis
Technology information should be taken directly from:
docs/SentinelX.pdf
Do not claim production deployment unless documented.
2. QueueZero AI
Title:
QueueZero AI
Position:
AI-powered flow operations intelligence platform.
Core concept:
SENSE
↓
PREDICT
↓
SIMULATE
↓
OPTIMIZE
↓
ACT
↓
MEASURE

Important framing:
QueueZero is NOT simply a queue display or token-management system.
It is positioned as a decision-intelligence layer for operational flow.
Initial beachhead:
Hospitals and diagnostic centres.
Important pipeline:
Registration
→ Consultation
→ Diagnostics
→ Pharmacy
→ Billing

The documentation states that the current prototype uses synthetic operational data.
Therefore:
DO NOT claim real-world hospital performance.
Do not claim historical ML forecasting is already implemented if the documentation describes it as future integration.
Source:
docs/QueueZero_AI_Full_Project_Documentation.pdf
3. ScamCheck
Title:
ScamCheck
Position:
AI-powered opportunity verification and digital trust platform.
Core problem:
Users need to determine whether opportunities, organizations, websites, payment requests, and claims are trustworthy.
Important capabilities documented:
- multi-input analysis
- URL analysis
- screenshots
- images
- PDFs
- text
- browser extension
- organization credibility
- website/domain analysis
- payment analysis
- evidence-based reasoning
- profile suitability
- alternatives
- verification history
Architecture and technology should be taken from:
docs/ScamCheck_Project_Documentation.pdf
Do not exaggerate fraud-detection accuracy.
4. INFRAguard AI
Title:
INFRAguard AI
Position:
Intelligent infrastructure inspection and damage detection platform.
Pipeline:
INPUT
↓
FRAME CAPTURE
↓
PRE-PROCESSING
↓
AI DETECTION
↓
CLASSIFICATION
↓
SEVERITY
↓
TRACKING / DEDUPLICATION
↓
VISUALIZATION
↓
INSPECTION RESULTS
↓
REPORT

Capabilities include:
- visual defect detection
- uploaded video
- live drone stream
- optional webcam
- bounding boxes
- labels
- confidence values
- severity where supported
- tracking / duplicate suppression
- inspection summaries
- GPS/location information
Critical positioning:
This is decision-support software.
It does NOT replace engineering judgment or formal structural assessment.
Source:
docs/Infraguard_AI_Project_Documentation.pdf
24. TECHNICAL / RESEARCH SYSTEMS
OncoTwin AI
Title:
OncoTwin AI
Position:
RECIST-enhanced patient-specific digital twin for precision oncology.
Important existing concept:
- CT/MRI analysis
- AI tumor segmentation
- tumor quantification
- 3D anatomical reconstruction
- disease progression visualization
- treatment simulation
- multimodal patient information
- explainable AI
The documentation explicitly distinguishes proposed research extensions from existing project material.
Therefore:
Do not present proposed features as implemented production functionality.
Important positioning:
Clinical decision support / research infrastructure.
Not:
- autonomous treatment selection
- replacement for biopsy
- replacement for specialist judgment
Source:
docs/OncoTwin_AI_Full_Project_Documentation.pdf
25. CHIPX
Title:
ChipX
Position:
AI-based restoration of degraded images.
Problem:
Restore degraded grayscale images using a lightweight AI restoration architecture.
Documented technical details include:
- .npy input
- 128×128 and 256×256 supported inputs
- 2× output dimensions
- grayscale float32 output
- ReliabilityAwareUNetSR
- adaptive representation
- RidgeAdaptiveGate
- Bicubic fusion
- continuous blending
Important:
The adaptive blending value is an:
Adaptive Blending Weight
It is NOT a confidence score.
Do not invent benchmark improvements.
Documented evidence includes:
- checkpoint integrity
- parameter verification
- API equivalence
- clean-room installation
- path independence
- malformed-input rejection
- validation-before-save
- memory sampling
Limitations from the source must remain respected.
Source:
docs/CHIPX_KLA_2026_Full_Project_Documentation.pdf
26. REAL-WORLD ENGINEERING
3 Sports Academy
Title:
3 Sports Academy
Position:
Client project / real-world full-stack web application.
Role:
Full-Stack Developer
Documented technologies include:
- React
- Vite
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- Google Sheets API
- Resend
- Vercel
- Render
- GitHub
The project includes documented registration and communication workflows.
The documentation also describes a sensitive identity-data workflow.
IMPORTANT:
NEVER expose:
- real applicant information
- Aadhaar numbers
- personal phone numbers
- personal email addresses
- database records
- sensitive screenshots
- private credentials
- production secrets
The portfolio should explain the engineering challenge and architecture without exposing private data.
Source:
docs/3_Sports_Academy_Portfolio_Project_Documentation.pdf
27. PRODUCT / AI EXPLORATION
StyleSense AI
Title:
StyleSense AI
Position:
AI-assisted personalized outfit recommendation and virtual visualization concept/product exploration.
Problem:
People spend significant time deciding what to wear and determining which clothing combinations suit them.
Use only what is supported by:
docs/StyleSense AI (1).pdf
Do not invent production metrics or deployment status.
28. FARMIGLE
FARMIGLE MUST be included in the portfolio.
However, no FARMIGLE documentation is currently present in the project docs/ directory.
Therefore:
DO NOT fabricate:
- description
- architecture
- features
- technology stack
- AI capabilities
- role
- metrics
- status
Create the project entry so verified content can be inserted later.
Use:
[ADD: FARMIGLE verified project description]
[ADD: FARMIGLE role]
[ADD: FARMIGLE technologies]
[ADD: FARMIGLE status]

Do not leave fake placeholder text visible in the production portfolio.
29. EXCLUDED PROJECTS
The following projects MUST NOT appear in the portfolio:
- LLS Project
- OOP & DSA Projects
- PYTHON LAB Project
- Portfolio itself
Do not include them even if they appear in older materials.
30. PROJECT PRIORITY
Recommended hierarchy:
Flagship Systems
1. SentinelX
2. QueueZero AI
3. ScamCheck
4. INFRAguard AI
Technical / Research
5. OncoTwin AI
6. ChipX
Real-World Engineering
7. 3 Sports Academy
Product / AI Exploration
8. StyleSense AI
9. FARMIGLE
This ordering can be adjusted if the actual evidence or portfolio storytelling makes a different order stronger.
31. PROJECT VISUALIZATION
Projects should use more than cards.
Possible visual treatments:
- system diagrams
- architecture flows
- pipeline animations
- input → processing → output
- data flow
- state transitions
- feature layers
- technical labels
- animated nodes
- terminal fragments
- metrics only when verified
Each project should have a visual language appropriate to its problem.
Do not force every project into the same card template.
32. TECHNICAL DEEP DIVE
Create a section showing how projects become systems.
Use an animated layered model:
PROBLEM
↓
DATA
↓
MODEL / LOGIC
↓
API
↓
INTEGRATION
↓
INTERFACE
↓
ACCESS
↓
RELEASE

This should communicate systems thinking.
The animation should be visual rather than a wall of text.
33. AI & AGENTIC CODING
Create a dedicated section about how Akilesh uses modern AI-assisted development workflows.
Known tools include:
- ChatGPT
- Antigravity
- Codex
Do not claim unsupported proprietary workflows.
Present the section as a practical development methodology.
Potential concepts:
01 — Specification First
Define the problem and desired result before implementation.
02 — Skills as Standards
Use reusable instructions and standards to maintain consistency.
03 — Real Tools
Use tools and integrations where they materially improve execution.
04 — Parallel Work
Break complex work into independent subproblems where appropriate.
05 — Persistent Context
Maintain project context and documentation.
06 — Verify Everything
AI-generated output is reviewed, tested, and validated.
These should communicate engineering discipline rather than "AI magic."
34. AGENT ORCHESTRATION VISUAL
Create an interactive conceptual diagram:
                 AKILESH
                    │
                    ▼
              ORCHESTRATOR
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   EXPLORE       IMPLEMENT      TEST
       │            │            │
       └────────────┼────────────┘
                    ▼
                  REVIEW
                    │
                    ▼
                 SHIP

Label it as conceptual/illustrative if necessary.
Do not claim a specific architecture is always used.
35. TERMINAL / AI WORKFLOW VISUAL
Use a terminal-style UI for selected AI-assisted development examples.
The terminal content should be explicitly marked:
ILLUSTRATIVE
Do not present fabricated logs as actual historical logs.
36. TECHNICAL STACK
Do not create a giant technology cloud.
Organize technologies into meaningful groups.
Potential structure:
Languages
- C
- C++
- Python
- JavaScript
- HTML
- CSS
Frontend
- React
- Next.js where verified/project-supported
- Vite
- Tailwind CSS
Backend
- Node.js
- Express.js
- REST APIs
- FastAPI where supported by project documentation
Data
- MySQL
- Firebase
- MongoDB
Tools
- Git
- GitHub
- VS Code
- ChatGPT
- Antigravity
- Codex
Only include technologies that are supported by the resume or project documentation.
Project-specific technologies may appear in their project context.
37. IMPACT / ACHIEVEMENTS
Only use verified numbers.
Potential resume-backed items include:
- 86% aggregate in Class 12
- 100+ day coding streak
- 50 Days Coding Badge
- 40-hour Python Programming program
- Google Cloud Study Jams
- HackerRank 5-Star Gold rating in C
Do not manufacture:
- "built X users"
- "saved X hours"
- "improved accuracy by X%"
- "processed X images"
- "served X students"
unless verified.
38. ACHIEVEMENT VISUALIZATION
Do not make achievements look like a certificate wall.
Use:
- counters
- timeline
- badges
- technical milestones
- compact evidence blocks
Numbers should animate when entering the viewport.
Respect reduced-motion preferences.
39. SIDE PROJECTS
The side-project section should contain smaller experiments and product ideas.
Possible projects:
- StyleSense AI
- FARMIGLE
- other verified smaller projects
Do not make every project visually equal.
Hierarchy matters.
40. NEXT PROJECT SLOT
Include an intentionally incomplete project slot:
NEXT PROJECT

IN DEVELOPMENT

The next system is being built.

This should communicate that the portfolio is evolving.
Do not fabricate the next project.
41. CONTACT
Contact section should be minimal.
Include verified contact information.
Current known email:
akileshs2707@gmail.com
Location:
Coimbatore, India
Potential links:
- GitHub
- LinkedIn
- LeetCode
- HackerRank
Only use verified URLs.
If URLs are unavailable:
[ADD: verified URL]
Do not guess URLs.
42. NAVIGATION
Use a compact navigation system.
Possible structure:
AKILESH

About
Systems
AI
Stack
Impact
Contact

Navigation should support:
- smooth scrolling
- active section state
- keyboard navigation
- mobile menu
Use technical micro-labels where appropriate.
43. STICKY SECTION INDEX
For desktop, consider a subtle side index:
01 ABOUT
02 SYSTEMS
03 AI
04 STACK
05 IMPACT
06 CONTACT

Active section should update based on scroll position.
On mobile, replace it with a compact alternative.
44. COMMAND MENU
Implement:
⌘K
for an "Ask about me" interface.
Important:
This does NOT need an external AI API.
Use local page content and keyword matching.
Example:
User enters:
projects
The system surfaces relevant project information.
User enters:
AI
The system surfaces AI-related work.
User enters:
skills
The system surfaces the technical stack.
Clearly label the feature:
offline · keyword matched
Do not imply that an LLM is running behind it.
45. THEME SYSTEM
Support:
- system theme
- light mode
- dark mode
Initial mode:
follow system preference.
Allow manual override.
Persist manual preference using:
localStorage
46. THEME TRANSITION
Use the View Transitions API where supported.
Preferred interaction:
The theme change should appear to spread outward from the theme toggle.
Provide a graceful fallback where View Transitions are unsupported.
Do not allow the animation to block interaction.
47. SMOOTH SCROLL
Use smooth scrolling carefully.
Potential stack:
- Lenis
- GSAP
- ScrollTrigger
Do not add animation libraries unnecessarily.
Animations should serve storytelling.
48. MOTION SYSTEM
Use motion for:
- section reveals
- hero interactions
- scrolling banners
- project transitions
- counters
- system diagrams
- photo interaction
- theme transition
Avoid:
- constant bouncing
- excessive parallax
- unnecessary text movement
- animations that delay access to content
49. REDUCED MOTION
Implement:
prefers-reduced-motion
properly.
When reduced motion is enabled:
- remove large movement
- disable complex particle animation
- remove excessive transitions
- show final content states immediately
- retain usability and hierarchy
50. CUSTOM CURSOR
A custom cursor may be used on desktop.
It should:
- remain subtle
- react to interactive elements
- never replace the normal pointer semantics
- be disabled or simplified on touch devices
Do not let it interfere with accessibility.
51. MAGNETIC BUTTONS
Buttons may use subtle magnetic interaction.
Use only for:
- primary CTA
- important links
- selected interactive controls
Keep the effect restrained.
52. MICRO-INTERACTIONS
Use small interactions for:
- nav links
- buttons
- project tags
- cards
- command menu
- theme toggle
Every interaction should communicate state.
53. FILM GRAIN
A very subtle film-grain/noise layer may be used.
It must:
- remain low opacity
- not reduce readability
- not cause expensive rendering
- not affect accessibility
54. RESPONSIVE DESIGN
Minimum target:
375px
Also support:
- 390px
- 768px
- 1024px
- 1280px
- 1440px+
- large desktop screens
No horizontal overflow.
No broken text.
No inaccessible interactive elements.
Mobile is not an afterthought.
55. ACCESSIBILITY
Implement:
- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- alt text
- sufficient color contrast
- accessible buttons
- accessible navigation
- reduced motion
- screen-reader-friendly labels
Canvas/visual effects must never contain the only important information.
56. PERFORMANCE
The portfolio should feel fast.
Prioritize:
- optimized images
- lazy loading
- minimal JavaScript where possible
- animation cleanup
- avoiding unnecessary re-renders
- efficient canvas animation
- responsive image sizing
- font optimization
Do not sacrifice performance for decorative animation.
57. SEO
Implement:
- meaningful title
- meta description
- Open Graph metadata
- semantic structure
- favicon
- robots configuration where appropriate
- sitemap where appropriate
The title should identify Akilesh clearly.
58. SECURITY / PRIVACY
Never expose:
- API keys
- credentials
- private source documents
- private client information
- Aadhaar data
- database records
- internal secrets
The docs/ directory is source material for development.
Do not make it publicly accessible through the website.
59. GITIGNORE
Private source documents should not accidentally be committed.
If appropriate, include:
docs/source/

or the equivalent path used for sensitive source material.
Do not blindly ignore the entire docs/ directory if the project requires some public documentation.
Review the repository before committing.
60. PROJECT DATA ARCHITECTURE
Separate content from presentation.
Project content should preferably live in structured data files.
For example:
src/data/projects.ts

or equivalent.
Components should render project data rather than hardcoding large amounts of content into JSX.
This makes future updates easier.
61. COMPONENT ARCHITECTURE
Prefer reusable components.
Potential structure:
src/
├── app/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── about/
│   ├── projects/
│   ├── systems/
│   ├── ai/
│   ├── impact/
│   ├── contact/
│   └── ui/
├── data/
├── lib/
└── styles/

The exact structure may be improved during implementation.
Avoid creating unnecessary abstraction.
62. ANIMATION ARCHITECTURE
Animation code should be organized.
Do not scatter animation logic randomly across components.
Potential organization:
src/lib/animations/

or a similarly clean architecture.
Clean up:
- event listeners
- animation frames
- observers
- ScrollTrigger instances
- Lenis instances
when components unmount.
63. DATA / CONTENT ARCHITECTURE
Create structured data for:
- projects
- skills
- achievements
- navigation
- contact
- command menu responses
This makes the website easy to maintain.
64. PROJECT STATUS LABELS
Use honest labels such as:
- Concept
- Prototype
- Research
- In Development
- Demonstrated
- Production
- Client Project
Only use the label supported by source material.
65. CASE STUDY CONTENT FORMAT
Every major project should follow a consistent conceptual model:
PROJECT

01 — PROBLEM
What problem exists?

02 — APPROACH
How does the system address it?

03 — SYSTEM
How does it work?

04 — ROLE
What did Akilesh contribute?

05 — STACK
What technologies were used?

06 — STATUS
What stage is it at?

Do not necessarily display these exact labels everywhere.
Use them as the content model.
66. SOURCE-BASED PROJECT WRITING
When converting project documentation into website copy:
Prefer:
problem → decision → implementation → result/evidence

Avoid:
buzzword → buzzword → buzzword

Keep technical depth available without overwhelming the primary narrative.
Use expandable details where useful.
67. CONFIDENTIALITY
For any third-party/client work:
- do not expose private information
- do not expose sensitive identifiers
- do not expose credentials
- do not expose internal infrastructure
- do not expose private user data
For 3 Sports Academy specifically, sensitive identity information documented in the project must never appear in the public portfolio.
68. NO FABRICATION POLICY
This rule overrides visual completeness.
If something is unknown:
DO NOT MAKE IT UP.
Use:
[ADD: ...]
during development.
It is better to have a temporary placeholder than a false claim.
69. DESIGN QUALITY BAR
The finished portfolio should feel like it was designed by someone who understands:
- interaction design
- frontend engineering
- typography
- motion design
- information architecture
- software systems
- applied AI
It should not feel like:
- a college template
- a Bootstrap template
- a generic React portfolio
- a collection of GitHub cards
- an AI-generated landing page
70. DEVELOPMENT PHASES
Implement in phases.
PHASE 1 — PROJECT FOUNDATION
Set up:
- Next.js
- TypeScript
- Tailwind
- fonts
- global styles
- theme system
- base layout
- metadata
- responsive foundation
Do not build every section immediately.
PHASE 2 — CORE VISUAL SYSTEM
Build:
- loader
- navigation
- theme toggle
- typography
- color system
- buttons
- section labels
- animation utilities
PHASE 3 — HERO
Build and polish:
- interactive network
- name animation
- role rotation
- terminal
- hero CTA
- responsive behavior
PHASE 4 — ABOUT
Build:
- about narrative
- word/line reveal
- profile image
- photo interaction
- system labels
PHASE 5 — PROJECT SYSTEM
Build reusable project architecture.
Implement:
1. SentinelX
2. QueueZero AI
3. ScamCheck
4. INFRAguard AI
5. OncoTwin AI
6. ChipX
7. 3 Sports Academy
8. StyleSense AI
9. FARMIGLE
Use source documents.
PHASE 6 — AI / AGENTIC CODING
Build:
- AI workflow section
- orchestration diagram
- terminal illustration
- methodology cards
PHASE 7 — STACK / IMPACT
Build:
- technology groups
- achievement timeline
- verified counters
PHASE 8 — CONTACT
Build:
- contact CTA
- verified links
- footer
PHASE 9 — INTERACTION POLISH
Add:
- smooth scrolling
- scroll progress
- magnetic interactions
- cursor
- command menu
- theme transition
- banner velocity
- section transitions
PHASE 10 — RESPONSIVE / ACCESSIBILITY
Test:
- 375px
- mobile
- tablet
- desktop
- keyboard
- screen reader basics
- reduced motion
PHASE 11 — PERFORMANCE / QA
Check:
- console errors
- hydration issues
- image optimization
- animation performance
- layout shifts
- horizontal overflow
- broken links
- incorrect claims
- accidental source-document exposure
71. LOCAL DEVELOPMENT
The project is being developed locally first.
Expected local development command:
pnpm dev

Expected development URL:
http://localhost:3000

The portfolio must be fully functional locally before deployment.
72. VERCEL DEPLOYMENT
Deployment target:
Vercel.
Do not hardcode a final production domain.
The domain must be configurable later.
Before deployment:
- run production build
- verify all routes
- verify metadata
- verify assets
- verify environment variables
- verify no private documents are exposed
- verify mobile layout
- verify animations
73. FINAL QA CHECKLIST
Before considering the portfolio complete, verify:
Content
- [ ] Name is correct
- [ ] Education is correct
- [ ] Contact details are correct
- [ ] Skills are source-supported
- [ ] Achievements are source-supported
- [ ] Projects are source-supported
- [ ] FARMIGLE is included
- [ ] excluded projects are absent
- [ ] no fabricated metrics
- [ ] no fabricated roles
- [ ] no fabricated production claims
Design
- [ ] distinctive visual identity
- [ ] strong typography
- [ ] coherent color system
- [ ] polished animations
- [ ] strong project storytelling
- [ ] no generic template appearance
Technical
- [ ] Next.js works
- [ ] TypeScript clean
- [ ] production build succeeds
- [ ] no console errors
- [ ] no hydration warnings
- [ ] responsive
- [ ] accessible
- [ ] reduced motion works
- [ ] no horizontal scrolling
Security
- [ ] no API keys exposed
- [ ] no credentials exposed
- [ ] no private PDFs publicly served
- [ ] no sensitive client data exposed
- [ ] no Aadhaar information exposed
Deployment
- [ ] Vercel build succeeds
- [ ] domain configurable
- [ ] metadata correct
- [ ] favicon present
- [ ] social preview configured
74. FINAL CONTENT AUDIT
Before final deployment, search the complete project for:
- [ADD:
- TODO
- FIXME
- placeholder URLs
- placeholder email addresses
- fake metrics
- fake project status
- unsupported technologies
- unsupported roles
- unsupported company claims
- accidental private information
Resolve everything that should not remain.
75. IMPORTANT IMPLEMENTATION PHILOSOPHY
Do not optimize for:
"How many features can be added?"

Optimize for:
"How convincingly does this portfolio communicate how Akilesh thinks, builds, and solves problems?"

Every feature should justify its existence.
Every animation should support the story.
Every section should communicate something meaningful.
Every project should demonstrate engineering thinking.
The final website should feel like:
a product built by a software systems student who is serious about building real systems.
76. CODEX EXECUTION RULE
Before modifying the codebase:
1. Read this entire specification.
2. Inspect the repository.
3. Inspect the available source documents in docs/.
4. Identify missing source material.
5. Do not invent missing information.
6. Establish the implementation architecture.
7. Build incrementally.
8. Test after each major phase.
9. Keep content separate from presentation.
10. Maintain a high visual quality bar.
Do not rush directly into generating a large amount of code.
First understand the system.
Then build it.

# END OF MASTER PORTFOLIO SPECIFICATION