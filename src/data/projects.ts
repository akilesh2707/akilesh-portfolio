export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: 'primary' | 'research' | 'client' | 'exploration';
  status: string;
  eyebrow: string;
  headline: string;
  description: string;
  problem: string;
  approach: string;
  decision: string;
  pipeline: string[];
  capabilities: { title: string; text: string }[];
  stack: string[];
  stackNote?: string;
  role?: string;
  evidence: string[];
  limitations: string[];
  future: string[];
  link?: { href: string; label: string };
  source: string;
};
export const projects: Project[] = [
  {
    slug: 'sentinelx',
    name: 'SentinelX',
    subtitle: 'Secure assessment & intelligent proctoring',
    category: 'primary',
    status: 'Proposed system',
    eyebrow: '01 / ASSESSMENT INTELLIGENCE',
    headline: 'Assessment integrity, built into the system.',
    description:
      'A configurable assessment architecture connecting policy, monitoring, evidence and human review.',
    problem:
      'Different assessments need different security rules. Fragmented exam tools and noisy alerts make it difficult for organizers to understand what actually needs attention.',
    approach:
      'Bring multiple assessment formats into a universal engine, then surround it with configurable security policies, AI-assisted monitoring and an evidence-led command center.',
    decision:
      'Separate policy from detection. The same monitoring signal can lead to a different response depending on the assessment’s permitted resources and organizer-defined rules.',
    pipeline: [
      'Assessment',
      'Security policy',
      'AI monitoring',
      'Evidence',
      'Human review',
      'Integrity report',
    ],
    capabilities: [
      {
        title: 'One assessment engine',
        text: 'The documented design covers MCQ, coding, SQL, essays, file uploads and video responses.',
      },
      {
        title: 'Policy-aware monitoring',
        text: 'Camera, browser, device, permitted-resource and violation policies can be configured per assessment.',
      },
      {
        title: 'Evidence over alert volume',
        text: 'A proposed command center connects candidate status, incident timelines, evidence and organizer intervention.',
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Python / FastAPI',
      'OpenCV',
      'MediaPipe',
      'YOLO',
      'WebRTC',
      'Socket.IO',
    ],
    stackNote:
      'Documented architecture choices; this source does not establish implementation or deployment of every component.',
    evidence: [
      'The source defines modules, functional requirements, a technology architecture and an end-to-end assessment workflow.',
      'Assessment design, evidence management and reporting are specified as separate responsibilities.',
    ],
    limitations: [
      'The document presents a proposed system and does not establish production deployment, measured detection accuracy or operational scale.',
      'Browser and device monitoring are documented requirements, not guarantees that every signal is detectable on every device.',
      'AI findings require organizer review; no automatic malpractice certainty is claimed.',
    ],
    future: [
      'Interview module, SSO, LMS/ERP integration and advanced predictive analytics are listed as future enhancements.',
    ],
    source: 'SentinelX.pdf',
  },
  {
    slug: 'queuezero',
    name: 'QueueZero AI',
    subtitle: 'Flow operations intelligence',
    category: 'primary',
    status: 'Working prototype',
    eyebrow: '02 / OPERATIONAL FLOW',
    headline: 'The queue is a symptom. Understand the flow.',
    description:
      'Sense bottlenecks, simulate interventions and optimize constrained resources before a human acts.',
    problem:
      'In hospitals and diagnostic centres, congestion at one stage propagates through registration, consultation, diagnostics, pharmacy and billing. An isolated queue display misses those dependencies.',
    approach:
      'Use analytical queueing models to understand capacity, SimPy to test interventions and OR-Tools CP-SAT to choose feasible resource changes. A copilot orchestrates the tools and explains their outputs.',
    decision:
      'Keep the LLM out of the quantitative source of truth. Models, simulation and constrained optimization calculate outcomes; the operator approves the intervention.',
    pipeline: ['Sense', 'Predict', 'Simulate', 'Optimize', 'Act', 'Measure'],
    capabilities: [
      {
        title: 'Simulation-driven Digital Twin',
        text: 'A SimPy event timeline drives synchronized 2D/3D flow visualization, rather than random frontend movement.',
      },
      {
        title: 'Constrained interventions',
        text: 'CP-SAT evaluates capacity additions, transfers, routing and budget limits, then validates the chosen plan through simulation.',
      },
      {
        title: 'Operations copilot',
        text: 'Rule-based orchestration with an optional local LLM provider invokes analytical tools for natural-language decision support.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'SimPy', 'OR-Tools'],
    stackNote:
      'Prototype state is primarily in memory. PostgreSQL and Redis are planned production infrastructure.',
    evidence: [
      'The documented synthetic validation uses a 240-minute horizon and 30 Monte Carlo replications across five departments.',
      'In that scenario, average total queue wait changes from 58.63 to 53.65 minutes; throughput changes from 19.24 to 22.19 patients/hour. These are simulation results.',
      'Documentation records 78 backend tests passing, frontend lint/build passing, and six prototype scenarios.',
    ],
    limitations: [
      'All current operational data and financial values are synthetic/configurable; these are not real hospital outcomes.',
      'Current congestion forecasting uses analytical queue-velocity projection, not trained historical ML.',
      'No autonomous real-world intervention, clinical safety outcome or validated ROI is claimed.',
    ],
    future: [
      'Design-partner pilot, observed operational data, calibration and historical ML forecasting after sufficient data.',
    ],
    source: 'QueueZero_AI_Full_Project_Documentation.pdf',
  },
  {
    slug: 'scamcheck',
    name: 'ScamCheck',
    subtitle: 'Opportunity verification & digital trust',
    category: 'primary',
    status: 'Deployed application',
    eyebrow: '03 / EVIDENCE & TRUST',
    headline: 'Trust should come with evidence.',
    description:
      'Multi-input opportunity analysis that keeps credibility, suitability and uncertainty separate.',
    problem:
      'An opportunity can hide payment pressure, impersonation, unverifiable claims or a mismatch with a person’s goals. A binary message classifier cannot explain all of those dimensions.',
    approach:
      'Extract claims from text, URLs, screenshots, images and PDFs. Investigate payment context, website/domain identity and organization consistency, then produce a structured evidence report and optional profile suitability analysis.',
    decision:
      'Use explicit evidence states: supported, contradicted, not verified, unavailable and inferred. Missing external information never becomes a fabricated answer.',
    pipeline: ['Input', 'Extraction', 'Claims & risk', 'Evidence', 'Suitability', 'Report'],
    capabilities: [
      {
        title: 'Verification in the browser',
        text: 'A Manifest V3 extension supports current-page, selected-text and screenshot analysis with scoped device pairing.',
      },
      {
        title: 'Separate dimensions',
        text: 'Credibility and suitability are independent: a legitimate opportunity can still be a poor fit.',
      },
      {
        title: 'Graceful degradation',
        text: 'Search, extraction and AI-provider failures remain visible as unavailable or unverified information.',
      },
    ],
    stack: [
      'React / Vite',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'FastAPI',
      'Tesseract OCR',
      'Manifest V3',
    ],
    evidence: [
      'The documentation records a production architecture: Vercel frontend, Railway API and Render intelligence service.',
      'Testing covers authorization, IDOR, token confusion, prompt injection, URL/PDF handling, extension authentication and external-service fallbacks.',
    ],
    limitations: [
      'Public information and search coverage can be insufficient; provider availability affects the report.',
      'LLM outputs are probabilistic. Domain age and HTTPS are contextual signals, not proof of legitimacy.',
      'No fraud-detection accuracy or guarantee is established. Dynamic pages and inaccessible frames can limit extension extraction.',
    ],
    future: [
      'Organization knowledge graphs, temporal evidence, richer overlays and comparison workflows are future enhancements.',
    ],
    link: { href: 'https://scamcheck-orpin.vercel.app/', label: 'Visit application' },
    source: 'ScamCheck_Project_Documentation.pdf',
  },
  {
    slug: 'infraguard',
    name: 'INFRAguard AI',
    subtitle: 'Infrastructure inspection intelligence',
    category: 'primary',
    status: 'In development',
    eyebrow: '04 / VISUAL INSPECTION',
    headline: 'From frames to traceable findings.',
    description:
      'A source-independent computer-vision pipeline for visible damage and inspection decision support.',
    problem:
      'Reviewing long inspection footage manually is demanding, and the same defect can appear in many adjacent frames. Counting every detection inflates findings and obscures inspection history.',
    approach:
      'Extend an existing image-based damage detector into a shared frame pipeline for uploaded video, configurable drone streams and an optional webcam. Connect detection to tracking, severity, location context and reporting.',
    decision:
      'Normalize the frame, regardless of source. Keep inference reusable, findings isolated by inspection session, and GPS status independent from network connectivity.',
    pipeline: [
      'Source adapter',
      'Frames',
      'Detection',
      'Tracking',
      'Severity',
      'Inspection report',
    ],
    capabilities: [
      {
        title: 'Shared inference path',
        text: 'Video, compatible drone streams and explicitly enabled webcam input are designed to reuse the same preprocessing and model logic.',
      },
      {
        title: 'Unique findings',
        text: 'Temporal association and duplicate suppression are central to the evolving inspection architecture.',
      },
      {
        title: 'Field-aware context',
        text: 'Optional GPS metadata, connection indicators and recovery behavior support a configurable field-deployment direction.',
      },
    ],
    stack: [
      'Computer vision',
      'Trained damage-detection model',
      'Video processing',
      'Source adapters',
    ],
    stackNote:
      'The source does not identify a specific frontend framework, backend framework or model family; none is assumed here.',
    evidence: [
      'The document identifies an existing trained model and image-based inference pipeline.',
      'Broader video, tracking, geospatial, live-stream and report workflows are described as product direction and proposed architecture, without a completed field-validation record.',
    ],
    limitations: [
      'Decision support only: findings do not replace engineering judgment or formal structural assessment.',
      'Severity and live input depend on supported logic, codecs, hardware and configured drone protocols.',
      'No measured accuracy, field deployment, precise defect geolocation or real-time throughput guarantee is established.',
    ],
    future: [
      'Stronger tracking, camera calibration, field connectivity, history and validation against representative infrastructure data.',
    ],
    source: 'Infraguard_AI_Project_Documentation.pdf',
  },
  {
    slug: 'farmigle',
    name: 'FARMIGLE',
    subtitle: 'AI Farm Intelligence Network',
    category: 'primary',
    status: 'Locally verified',
    eyebrow: '05 / FARM DIGITAL TWIN',
    headline: 'A farm is more than a single image.',
    description:
      'A persistent Farm Digital Twin built from multi-source evidence, freshness and attributable decisions.',
    problem:
      'Agricultural decisions depend on fragmented observations. A phone image, satellite signal or weather reading alone cannot represent the complete condition of a farm.',
    approach:
      'Combine satellite context, drone/aerial imagery, phone/ground observations, weather, soil, crop/history and farmer voice/text. Gate image quality, qualify source freshness, fuse eligible evidence and persist transparent risk and harvest intelligence.',
    decision:
      'Publish the Twin only after a completed full-farm analysis. Immutable runs retain evidence, geometry and configuration lineage; partial or failed runs preserve the previous current-state projection.',
    pipeline: [
      'Observations',
      'Perception',
      'Freshness & fusion',
      'Risk / harvest',
      'Immutable run',
      'Digital Twin',
    ],
    capabilities: [
      {
        title: 'Evidence with a lineage',
        text: 'REAL, PRECOMPUTED, MOCK, SIMULATED, PARTIAL and NOT_IMPLEMENTED origins remain distinct. Missing sources lower confidence and weights are renormalized.',
      },
      {
        title: 'Farm & zone intelligence',
        text: 'The farmer interface connects uploads, zone harvest readiness, a spatial Digital Twin and grounded guidance. Officer views aggregate potential findings with limited identity exposure.',
      },
      {
        title: 'Multilingual interaction',
        text: 'Voice/text questions use accepted Twin facts before explanation and translation. Provider provenance and mock limitations are explicit.',
      },
    ],
    stack: [
      'React',
      'Vite',
      'TypeScript',
      'Python / FastAPI',
      'OpenCV',
      'Firebase / Firestore',
      'Gemini provider layer',
    ],
    stackNote:
      'YOLO is a configurable perception option; no trained weights are shipped. Live Firebase, Firestore and language-provider execution require external verification.',
    evidence: [
      'Documentation records 608 backend tests, 97 frontend tests and 6 direct API-client tests passing at local acceptance.',
      'Local browser acceptance covered upload/Twin publication, officer workflows, immutable trends, provenance and Tamil/English guidance.',
      'Core Digital Twin, lifecycle, fusion, deterministic risk/harvest, history and release guards are substantially complete within the documented local scope.',
    ],
    limitations: [
      'All heuristics are versioned and explicitly unvalidated. No trained-model accuracy or agronomist/field validation is claimed.',
      'No production deployment, nationwide coverage, live government integration or live satellite/drone/sensor acceptance is established.',
      'Health findings are possible indicators, not diagnoses or confirmed outbreaks. No free-form pesticide advice is permitted.',
      'Live Firestore/IAM/storage, identity, Gemini/STT/Translate/TTS, hardware, deployment, load/soak, backup/restore and operational monitoring remain external gates.',
      'The MVP is one mango orchard, pre-captured aerial imagery, precomputed satellite context, basic soil context and simulated officer farms. Satellite context never enters ripeness scoring.',
    ],
    future: [
      'External integration acceptance, approved model evaluation, agronomist calibration and controlled staging before production readiness.',
    ],
    source: 'FARMIGLE_Project_Documentation_Personal.pdf',
  },
  {
    slug: 'oncotwin',
    name: 'OncoTwin AI',
    subtitle: 'RECIST-enhanced patient-specific Digital Twin',
    category: 'research',
    status: 'Concept / research',
    eyebrow: '06 / PRECISION ONCOLOGY RESEARCH',
    headline: 'Connect anatomy, time and evidence.',
    description:
      'A research direction for a longitudinal, multimodal oncology Digital Twin with clinician-facing explanations.',
    problem:
      'Imaging, clinical records and treatment history are distributed. A single tumor-size label cannot communicate a patient’s disease trajectory or the quality of supporting evidence.',
    approach:
      'The existing concept covers CT/MRI analysis, segmentation, quantification, 3D reconstruction, progression visualization and treatment simulation. Proposed extensions add auditable RECIST response trajectories and clinically meaningful patient representations.',
    decision:
      'Represent clinical features, not patient identifiers, in similarity search. Keep missing modalities, uncertainty and historical evidence visible to the clinician.',
    pipeline: [
      'CT / MRI',
      'Segmentation',
      'Quantification',
      '3D Twin',
      'Trajectory',
      'Clinician review',
    ],
    capabilities: [
      {
        title: 'Anatomical foundation',
        text: 'The existing project concept connects imaging, tumor measurements, 3D reconstruction and progression visualization.',
      },
      {
        title: 'Proposed research extensions',
        text: 'RECIST/iRECIST, radiomics, longitudinal embeddings, similar-patient retrieval and uncertainty are proposed additions requiring validation.',
      },
      {
        title: 'Explainable evidence',
        text: 'The research design surfaces why a historical cohort is relevant, which data is missing and what uncertainty remains.',
      },
    ],
    stack: ['Python', 'PyTorch / TensorFlow', 'MONAI', 'PyRadiomics', 'FAISS', 'FastAPI'],
    stackNote:
      'Suggested research components from the specification; not a verified implemented stack.',
    evidence: [
      'The source is explicitly a concept and research-development specification.',
      'It distinguishes the existing tumor-analysis/Digital Twin foundation from proposed RECIST, vector, radiomics and iRECIST extensions.',
    ],
    limitations: [
      'Research and clinical decision-support direction only; no clinical validation or production deployment is established.',
      'Does not autonomously diagnose, select treatment, replace biopsy or replace specialist judgment.',
      'Illustrative patient similarities and predicted responses in the source are not clinical findings; retrospective associations do not establish causal treatment effects.',
    ],
    future: [
      'Expert annotation, segmentation/measurement validation, clinician relevance evaluation, external and prospective clinical research validation.',
    ],
    source: 'OncoTwin_AI_Full_Project_Documentation.pdf',
  },
  {
    slug: 'chipx',
    name: 'ChipX',
    subtitle: 'Adaptive restoration of degraded images',
    category: 'research',
    status: 'Submission-ready',
    eyebrow: '07 / SIGNAL RESTORATION',
    headline: 'Two restoration paths. One adaptive result.',
    description:
      'A lightweight learned model, a stable Bicubic baseline and a Ridge gate for continuous image restoration.',
    problem:
      'Neither a learned restoration nor conventional interpolation is best for every degraded grayscale input. A fixed choice sacrifices input-dependent behavior and deployment reliability.',
    approach:
      'Validate a .npy image, compute five DSP channels, run ReliabilityAwareUNetSR and Bicubic, extract 19 adaptive features and predict a continuous blending weight with RidgeAdaptiveGate. Validate the fused result before saving.',
    decision:
      'The adaptive weight α is a blending weight, not a confidence score. Keep inference independent of the development frontend and API in a self-contained offline evaluator package.',
    pipeline: [
      '.npy input',
      'DSP features',
      'UNet + Bicubic',
      'Ridge gate · α',
      'Fusion',
      'Validated output',
    ],
    capabilities: [
      {
        title: 'Bounded input contract',
        text: '128×128 and 256×256 grayscale .npy inputs produce 2× dimensions, finite float32 output in [0,1].',
      },
      {
        title: 'Lightweight restoration',
        text: 'The frozen ReliabilityAwareUNetSR contains 121,440 trainable parameters and uses a five-channel DSP representation.',
      },
      {
        title: 'Standalone reliability',
        text: 'Vendored modules and artifacts support offline runtime, path independence and explicit malformed-input rejection.',
      },
    ],
    stack: ['Python', 'NumPy', 'PyTorch', 'OpenCV', 'RidgeAdaptiveGate', 'FastAPI (demo)'],
    evidence: [
      'Checkpoint integrity, parameter count, API equivalence and clean-room installation are documented.',
      'The final standalone adversarial matrix passed 26/26 cases, including validation-before-save and path safety.',
      'Memory sampling over 150 files showed a warm-up plateau rather than linear growth.',
    ],
    limitations: [
      'Residual CPU ULP-level variation remains; bit-for-bit reproducibility is not claimed.',
      'CUDA availability was demonstrated, but complete final-package GPU inference and a GPU speedup benchmark are not established.',
      'Some out-of-distribution numerical inputs are structurally accepted without a restoration-quality guarantee.',
      'Historical pixel equivalence is unverifiable where intermediate arrays were not retained; the feature extractor was not independently re-derived from first principles.',
    ],
    future: [
      'Complete final-package GPU evaluation and quality measurements on the exact demonstration environment.',
    ],
    source: 'CHIPX_KLA_2026_Full_Project_Documentation.pdf',
  },
  {
    slug: '3-sports-academy',
    name: '3 Sports Academy',
    subtitle: 'A football academy, connected end to end',
    category: 'client',
    status: 'Production · client project',
    eyebrow: '08 / REAL-WORLD ENGINEERING',
    headline: 'The interface is only the beginning.',
    description:
      'A client-facing full-stack platform connecting registrations, administration, media and communications.',
    problem:
      'A football academy needed a professional public presence and dependable registration and enquiry workflows across branches, with protected administration and multiple external services.',
    approach:
      'Build a responsive React/Vite website and an Express API with MongoDB persistence, Cloudinary media, Google Sheets synchronization and Resend transactional email. Isolate integrations behind backend services.',
    decision:
      'Design the complete data flow, including protected administration, encrypted sensitive-data storage and masked outputs. Verify integrations on the real custom domain, where deployment ownership and CORS behavior matter.',
    pipeline: ['Registration', 'Validate', 'Persist', 'Sheets sync', 'Email', 'Confirmation'],
    capabilities: [
      {
        title: 'Operational workflows',
        text: 'Public pages, online registration, enquiries, a protected admin dashboard, configurable branches and media management.',
      },
      {
        title: 'Production integrations',
        text: 'Server-side Google Sheets authentication, media uploads and customer/academy transactional notifications.',
      },
      {
        title: 'Real release work',
        text: 'Custom domain, client-owned services, DNS, provider migration and normalized production CORS allowlists.',
      },
    ],
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Cloudinary',
      'Google Sheets API',
      'Resend',
      'Vercel',
      'Render',
    ],
    role: 'Full-Stack Developer — architecture, frontend, backend, integrations, deployment and production debugging.',
    evidence: [
      'Documentation records a production registration returning HTTP 201 with persistence, spreadsheet synchronization and both notification emails.',
      'Production contact submission and custom-domain CORS were verified after the allowlist fix.',
    ],
    limitations: [
      'The source recommends further regression testing for controlled sensitive-data reveal and gallery rendering.',
      'Formal sensitive-action audit logs, public-form rate limiting, granular permissions, staging and backup/recovery testing remain future improvements.',
      'The case study contains no applicant records, sensitive identifiers, internal service addresses, private repository links or screenshots.',
    ],
    future: [
      'Critical-flow automation, staging, audit logs, rate limiting, observability and recovery testing.',
    ],
    link: { href: 'https://3sportsacademy.co.in', label: 'Visit academy' },
    source: '3_Sports_Academy_Portfolio_Project_Documentation.pdf',
  },
  {
    slug: 'stylesense',
    name: 'StyleSense AI',
    subtitle: 'Personal outfit intelligence',
    category: 'exploration',
    status: 'Product concept',
    eyebrow: '09 / PRODUCT EXPLORATION',
    headline: 'Make a wardrobe easier to use.',
    description:
      'An AI-assisted product concept for personal outfit recommendations and virtual visualization.',
    problem:
      'Choosing clothing combinations takes time when people cannot easily see what matches, suits their preferences or fits an occasion.',
    approach:
      'The documented product flow combines a personal profile, wardrobe uploads, an avatar, an outfit builder and an instant outfit check, with explanations and saved collections.',
    decision:
      'Connect recommendation to the user’s own wardrobe and context, then make the result visible through an avatar and understandable explanations.',
    pipeline: ['Profile', 'Wardrobe', 'Outfit builder', 'Recommendation', 'Visualization', 'Save'],
    capabilities: [
      {
        title: 'Wardrobe structure',
        text: 'Proposed categories, favorites, collections, outfit history and item metadata support reusable wardrobe organization.',
      },
      {
        title: 'Contextual outfit checks',
        text: 'The design considers color harmony, style, occasion and weather when describing a recommendation.',
      },
      {
        title: 'Virtual visualization',
        text: 'A personalized-avatar direction helps users preview combinations before saving outfits.',
      },
    ],
    stack: ['Product workflows', 'Data model', 'API design'],
    stackNote:
      'No implementation framework, trained model, deployment or measured recommendation quality is specified.',
    evidence: [
      'The source documents screen flows, wardrobe/outfit/user entities and a proposed API map.',
    ],
    limitations: [
      'This is a product concept, not a documented production application.',
      'Illustrative outfit scores in the source are interface examples, not validation metrics.',
      'Body analysis and avatar functionality are proposed capabilities; no model accuracy or deployment is claimed.',
    ],
    future: [
      'Prototype and evaluate the recommendation and visualization flows before making capability claims.',
    ],
    source: 'StyleSense AI (1).pdf',
  },
];
export const primaryProjects = projects.filter((p) => p.category === 'primary');
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
