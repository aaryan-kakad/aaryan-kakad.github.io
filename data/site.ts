export type WorkLink = {
  href: string;
  label: string;
};

export type WorkItem = {
  id: string;
  number: string;
  title: string;
  kind: string;
  sentence: string;
  detail: string;
  image: string;
  href?: string;
  linkLabel?: string;
  links?: WorkLink[];
  imageAlt?: string;
  relatedArticleId?: string;
  tier?: "flagship" | "earlier";
};

export type StoryBeat = {
  id: string;
  label: string;
  line: string;
  copy: string;
  image: string;
  alt: string;
  href?: string;
  linkLabel?: string;
  links?: Array<{
    href: string;
    label: string;
  }>;
};

export type GalleryItem = {
  src: string;
  kind: "image" | "video";
  title: string;
  caption: string;
  meta?: string;
  story?: string;
  alt: string;
  poster?: string;
};

export type NowEntry = {
  category: string;
  item: string;
  since?: string;
};

export const storyBeats: StoryBeat[] = [
  {
    id: "early-details",
    label: "age 4",
    line: "I cared about the small details early.",
    copy: "The suit photo is not meant to be deep. It just shows an old pattern: presentation mattered to me before I had serious words for it.",
    image: "/media/childhood.webp",
    alt: "Aaryan as a child standing in a black suit against a blue wall"
  },
  {
    id: "initiative",
    label: "2017 / age 10",
    line: "Initiative started in small rooms.",
    copy: "Calling restaurants to order food. Leading school teams. Jumping into projects before anyone assigned me a role. It was not a grand plan. Just the habit of moving first.",
    image: "/media/active-since-birth.jpg",
    alt: "Aaryan as a child standing near a table during a family moment"
  },
  {
    id: "calculations",
    label: "2017",
    line: "Calculations were fun before code was serious.",
    copy: "The UCMAS trophy is not the point. The useful part is simpler: I liked patterns, mental math, and the feeling of working through a problem.",
    image: "/media/loved calculations and brainstorming since birth won a ucmas state level merit trophy.jpg",
    alt: "Aaryan as a child at a UCMAS event"
  },
  {
    id: "movement-roots",
    label: "2017",
    line: "Movement was always part of it.",
    copy: "Cycle stunts, trees, monkey bars, whatever looked climbable. None of this needs a thesis. It was just the physical side of the same restlessness.",
    image: "/media/loved-adventure-since-birth.jpg",
    alt: "Aaryan standing on a monkey bar as a child"
  },
  {
    id: "roots",
    label: "2019",
    line: "The farm visits kept the world bigger than the screen.",
    copy: "Nashik with my grandma. Soil, open space, family roots. A useful counterweight before everything became screens, charts, code, and papers.",
    image: "/media/love-sticking to my roots - farming.jpg",
    alt: "Aaryan as a child standing in a farm"
  },
  {
    id: "fitness",
    label: "2019",
    line: "Fitness was there before the gym gave it structure.",
    copy: "The old push-up clip says enough. Later it became training. Early on it was just energy looking for a place to go.",
    image: "/media/fitness-freak-since-birth-poster.webp",
    alt: "Poster frame from an old push-up video"
  },
  {
    id: "lockdown",
    label: "2020-2021",
    line: "Lockdown gave me the internet as a school.",
    copy: "The photos are ordinary: chair, laptop, headphones, a room. But that was where stock markets, crypto, Python, and the self-learning loop started becoming real.",
    image: "/media/lockdown learning setup 1.jpg",
    alt: "Aaryan learning on a laptop during the lockdown"
  },
  {
    id: "origin-project",
    label: "2020 / age 13",
    line: "The first projects were rough. Good.",
    copy: "Bad interfaces, rough voice, real curiosity. I was not trying to look like a builder. I was trying to make the thing work.",
    image: "/media/origin-2020-poster.webp",
    alt: "Poster frame from Aaryan's first coding project video"
  },
  {
    id: "business",
    label: "2023 / age 16",
    line: "I tried business two times. Neither one worked.",
    copy: "SMMA, dropshipping, the usual internet maze. It failed, but it taught me how offers, distribution, trust, leverage, and timing actually behave.",
    image: "/media/code-selfie.webp",
    alt: "Aaryan beside a laptop with code open"
  },
  {
    id: "chatgpt",
    label: "2023-2025",
    line: "ChatGPT changed the question from using AI to understanding it.",
    copy: "At first it was a tool: ask, get an answer, move faster. Then it became uncomfortable. If a machine could write, reason, code, and help me think, I did not just want to use it. I wanted to understand the mechanism underneath.",
    image: "/media/2022-chatgpt.jpg",
    alt: "Aaryan in a white hoodie at a laptop during the early ChatGPT period"
  },
  {
    id: "scratch",
    label: "june 2025",
    line: "I stopped wondering and started learning ML from scratch.",
    copy: "First it was random AI agents with LangChain. Then Andrew Ng's beginner ML course. Then CS229 with Andrew Ng and CS231n with Karpathy running side by side. Not a rebrand. Just time around the subject until the hidden parts started becoming visible.",
    image: "/media/classroom-study.webp",
    alt: "Notebook and laptop in a classroom while a lecture plays"
  },
  {
    id: "ten-thousand-hours",
    label: "2025-now",
    line: "Now it is the 10,000-hour problem.",
    copy: "Karpathy's advice is the right frame: spend absurd time around ML. New papers, old classic papers, reading, understanding, implementing, building. Not collecting topics. Staying with the field long enough for taste to form.",
    image: "/media/csa-notes.webp",
    alt: "Annotated CSA and HCA notes from the DeepSeek V4 architecture paper"
  },
  {
    id: "independent-research",
    label: "late 2026",
    line: "From annotating papers to writing them.",
    copy: "Reading papers turned into running 200+ local experiments on a 4 GB RX 6400, authoring two verified Weight-Space Programming papers, shipping fine-tuned open weights, and building studios people actually open and use.",
    image: "/media/project-wsp.png",
    alt: "Weight-Space Programming and 4-bit/3-bit quantization survival research overview",
    links: [
      { href: "https://akmessi.github.io/weight-space-programming/", label: "research site" },
      { href: "https://github.com/AKMessi/weight-space-programming", label: "papers & code" }
    ]
  },
  {
    id: "videos",
    label: "now",
    line: "I make videos to force clarity.",
    copy: "Machine Learning With Aaryan is where I explain ML while I am still close to the confusion. My personal channel is looser: self-improvement, training, discipline, and the rest of the life around the work.",
    image: "/media/deepseek-v4-thumbnail.png",
    alt: "DeepSeek V4 explained video thumbnail with Aaryan holding handwritten notes",
    links: [
      { href: "https://youtube.com/@MachineLearningWithAaryan", label: "ML channel" },
      { href: "https://youtube.com/@AaryanKakad", label: "personal channel" }
    ]
  },
  {
    id: "leverage",
    label: "direction",
    line: "The goal is leverage, not a title.",
    copy: "Markets gave me prediction. Business attempts gave me distribution scars. ML gives me a way to build systems that can actually scale.",
    image: "/media/leverage-curve.svg",
    alt: "A rising compounding curve"
  }
];

export type ArticleItem = {
  id: string;
  title: string;
  topic: string;
  date: string;
  dateLabel: string;
  summary: string;
  href: string;
  label?: string;
};

export const articles: ArticleItem[] = [
  {
    id: "self-learn",
    title: "how I self learn anything",
    topic: "learning / method",
    date: "2026-10-24",
    dateLabel: "24 Oct 2026",
    label: "best · start here",
    summary: "Ingest, build, hit a wall, fill the gaps, repeat—forever. The exact self-teaching loop behind every paper, engine, and system on this site.",
    href: "https://medium.com/@kakadaaryan10/how-to-self-learn-anything-81587b6ce7bb"
  },
  {
    id: "training",
    title: "how an llm is trained from scratch",
    topic: "ML foundations",
    date: "2026-08-24",
    dateLabel: "24 Aug 2026",
    label: "co-best · foundations",
    summary: "From cleaning data and training a tokenizer to pretraining, scaling, and fitting the run across GPUs. A tour of the training pipeline and the engineering decisions behind a language model.",
    href: "https://medium.com/@kakadaaryan10/how-an-llm-is-trained-from-scratch-50dfd8b5337b"
  },
  {
    id: "wsp-research",
    title: "Gemini Neon and I spent the last 80 hours doing research around Weight-Space Programming.",
    topic: "original research / LLMs",
    date: "2026-11-24",
    dateLabel: "24 Nov 2026",
    label: "behind WSP",
    summary: "The story and mechanics behind 80 hours of zero-gradient Weight-Space Programming experiments—exposing the Greedy-Perturbation Illusion and making compiled weight edits survive 4-bit and 3-bit quantization.",
    href: "https://medium.com/@kakadaaryan10/neon-and-i-spent-the-last-80-hours-exploring-some-things-in-weight-space-programming-708b1f4f8c34"
  },
  {
    id: "frontier-vs-oss",
    title: "Comparing 2025’s Frontier Models With 2026’s OSS Models. The Results Shocked Me.",
    topic: "open models / benchmarks",
    date: "2026-11-09",
    dateLabel: "09 Nov 2026",
    label: "benchmark",
    summary: "Stacking 2025's flagship frontier models directly against 2026's open-weight models under 40B parameters—and what the gap collapsing means for local AI.",
    href: "https://medium.com/@kakadaaryan10/i-compared-2025s-frontier-ai-with-2026-s-open-models-under-40b-params-the-results-shocked-me-4c8ccd554669"
  },
  {
    id: "harness",
    title: "what is a harness?",
    topic: "agents / systems",
    date: "2026-09-01",
    dateLabel: "01 Sep 2026",
    label: "behind Pactrail",
    summary: "The machinery that lets a model act: tools, context, memory, verification, recovery, and sandboxing. A practical explanation of the agent loop and why the system around the model matters for reliability.",
    href: "https://medium.com/@kakadaaryan10/what-is-an-agentic-harness-de78b99e432b"
  },
  {
    id: "ferrite-debugging",
    title: "I Built Qwen 3.5 From Scratch in Rust. It Silently Broke.",
    topic: "Rust / build notes",
    date: "2026-08-17",
    dateLabel: "17 Aug 2026",
    label: "inside Ferrite",
    summary: "Building a hybrid LLM inference engine exposed bugs that compiled cleanly but ruined the numbers. Notes from tracing near-zero logits, checking intermediate values, and learning why a running pipeline is only the beginning.",
    href: "https://medium.com/@kakadaaryan10/i-built-qwen-3-5-from-scratch-in-rust-it-silently-broke-6772ebf6c5d7"
  },
  {
    id: "agent-communication",
    title: "can two AI agents communicate without using a language?",
    topic: "agents / theory",
    date: "2026-10-16",
    dateLabel: "16 Oct 2026",
    summary: "Humans have no choice but to compress thought through natural language. Why do we force AI agents through the same bottleneck when they can share latent state directly?",
    href: "https://medium.com/@kakadaaryan10/can-two-ai-agents-communicate-without-using-a-language-3eb5dd0fee1d"
  },
  {
    id: "deepseek",
    title: "deepseek v4.1 flash’s alien architecture explained.",
    topic: "model architecture",
    date: "2026-09-10",
    dateLabel: "10 Sep 2026",
    summary: "A walkthrough of compressed attention, shared caches, and the different work a model does when reading versus generating. The thread running through it: memory is a central constraint for long agent runs.",
    href: "https://medium.com/@kakadaaryan10/890-bytes-is-what-deepseek-v4-1-flash-needs-to-store-one-token-cf4a9643ae60"
  }
];

const allWorkItems: WorkItem[] = [
  {
    id: "wsp",
    number: "01",
    title: "Weight-Space Programming",
    kind: "original ML research · 2 papers",
    sentence: "Zero-gradient weight compilers that survive 4-bit and 3-bit quantization.",
    detail: "Two programmatically verified independent research papers evaluated across 3 reasoning LLM architectures (Qwen3-0.6B, Qwen3.5-0.8B hybrid DeltaNet, DeepSeek-R1-Distill-Qwen-1.5B) on a single 4 GB RX 6400 (206 runs, 18,513 responses, 25M+ tokens, 0 errors). Exposes the Greedy-Perturbation Illusion, introduces oblique_res & BA-WSC (zero-shot ARC-100 +15 pp, p = 0.0003), and proves hardware-aligned block packing cuts quantization collateral 4,514×–16,685× on real llama-quantize.",
    image: "/media/project-wsp.png",
    imageAlt: "Weight-Space Programming and 4-bit/3-bit quantization survival infographic showing verified results across 3 LLM architectures",
    href: "https://akmessi.github.io/weight-space-programming/",
    linkLabel: "interactive site",
    links: [
      { href: "https://akmessi.github.io/weight-space-programming/", label: "research site" },
      { href: "https://github.com/AKMessi/weight-space-programming", label: "open repo" },
      { href: "https://github.com/AKMessi/weight-space-programming/blob/main/papers/Paper1_Greedy_Perturbation_Illusion_and_Zero_Gradient_WSP_Kakad2026.pdf", label: "paper 1 pdf" },
      { href: "https://github.com/AKMessi/weight-space-programming/blob/main/papers/Paper2_Quantization_Cliff_and_BA_WSC_Kakad2026.pdf", label: "paper 2 pdf" }
    ],
    relatedArticleId: "wsp-research",
    tier: "flagship"
  },
  {
    id: "vex",
    number: "02",
    title: "Vex",
    kind: "AI video studio · 100+ stars",
    sentence: "AI video generation and editing from your browser or terminal.",
    detail: "Source-available AI video studio (100+ GitHub stars) where plain English drives real video production. Describe a video from scratch or import footage, run Vex Studio in the browser (vex web --open) or natively in the terminal, and assemble narrated animated films with Remotion, HyperFrames, FFmpeg, layer controls, and resumable production delivery.",
    image: "/media/project-vex-studio.png",
    imageAlt: "Vex Studio browser interface showing the Where Light Meets animated optics explainer with prompt controls and timeline",
    href: "https://github.com/AKMessi/vex",
    links: [
      { href: "https://github.com/AKMessi/vex", label: "open repo (100+ ★)" }
    ],
    tier: "flagship"
  },
  {
    id: "architecton",
    number: "03",
    title: "ARCHITECTON",
    kind: "interactive LLM studio",
    sentence: "Drag and drop 49 real LLM blocks and watch VRAM, KV-cache, and PyTorch react live.",
    detail: "A 100% client-side LLM architecture workbench grounded in all 120 open-weight models from Sebastian Raschka's LLM Architecture Gallery. Combine MLA, GQA, Gated DeltaNet, Mamba-2, Sparse & Latent MoE, QK-Norm, mHC Hyper-Connections, MTP heads, and 8 tokenizers across 7 decoder stages to feel real hardware-fit physics, live SVG schematics, and instant PyTorch export.",
    image: "/media/project-architecton.png",
    imageAlt: "ARCHITECTON interactive LLM architecture studio overview card showing 120 models and 49 modular blocks across 7 stages",
    href: "https://llmarch.online",
    linkLabel: "launch studio",
    links: [
      { href: "https://llmarch.online", label: "launch studio" },
      { href: "https://github.com/AKMessi/llm-arch", label: "open repo" }
    ],
    tier: "flagship"
  },
  {
    id: "pactrail",
    number: "04",
    title: "Pactrail",
    kind: "Rust coding-agent harness",
    sentence: "Every change carries its evidence.",
    detail: "A model-agnostic coding-agent harness built in Rust. Tasks become contracts, edits stay in isolated transactions, and verification produces inspectable receipts. Review the diff and evidence before applying a change. Durable traces, recovery checkpoints, and a local browser interface make the whole run visible.",
    image: "/media/project-pactrail.svg",
    imageAlt: "Pactrail execution diagram: task contract, isolated edits, verification receipt, human review, and explicit apply",
    href: "https://github.com/AKMessi/pactrail",
    links: [
      { href: "https://github.com/AKMessi/pactrail", label: "open repo" },
      { href: "https://github.com/AKMessi/pactrail/releases/latest", label: "latest release" }
    ],
    relatedArticleId: "harness",
    tier: "flagship"
  },
  {
    id: "ffcraft",
    number: "05",
    title: "FFCraft Studio",
    kind: "fine-tuned 1.5B + desktop app",
    sentence: "Plain-English FFmpeg powered by my own fine-tuned 1.5B local model.",
    detail: "Zero-dependency local desktop app powered by FFCraft-1.5B (Apache-2.0, trained on 6,000 execution-verified FFmpeg examples). Auto-inspects local media with ffprobe, asks brief clarifying questions when prompts are vague, and executes 1-click commands locally. On 60 held-out real ffmpeg + ffprobe tasks, jumps from 43.3% (base Qwen2.5-Coder-1.5B) to 96.7% pass rate (+53.4 pp) with 100% smart-ask and 100% lint-clean commands.",
    image: "/media/project-ffcraft.png",
    imageAlt: "FFCraft-1.5B v2 vs base Qwen2.5-Coder-1.5B benchmark showing 96.7% real ffmpeg execution pass rate",
    href: "https://github.com/AKMessi/ffcraft-studio",
    links: [
      { href: "https://github.com/AKMessi/ffcraft-studio", label: "open repo" },
      { href: "https://huggingface.co/AKMESSI/FFCraft-1.5B-GGUF", label: "FFCraft-1.5B on HF" }
    ],
    tier: "flagship"
  },
  {
    id: "openview",
    number: "06",
    title: "OpenView",
    kind: "Rust/WASM trading workbench",
    sentence: "Clean-room open-source TradingView alternative across four global markets.",
    detail: "MIT-licensed web charting, scripting, orderflow, backtesting, alerting, and screening workbench engineered from scratch for Crypto, Forex/Metals, US Equities, and Indian NSE/BSE/MCX. Pairs a React 19 two-canvas-per-tile UI (53 vector drawing tools) and Fastify local bridge with a shared Rust-to-WebAssembly engine (openview-wasm): 18+ TA indicators, clean-room Pine v5/v6 compiler, and deterministic gap-open-realistic backtesting.",
    image: "/media/project-openview.svg",
    imageAlt: "OpenView architecture diagram: React 19 multi-chart UI, Fastify bridge, and Rust to WebAssembly TA and Pine compiler engine",
    href: "https://github.com/AKMessi/open-view",
    tier: "flagship"
  },
  {
    id: "npu-sr",
    number: "07",
    title: "NPU-SR",
    kind: "local hardware / vision",
    sentence: "Give the laptop’s NPU real work: enhance images and video locally.",
    detail: "2× super-resolution and luminance denoising on Qualcomm Hexagon NPUs. The published Snapdragon X Plus trial reports 52.74 FPS median processing throughput for 540p to 1080p video across three runs, with strict NPU execution and hardware codecs. Results describe one tested laptop and declared settings; the repository includes comparisons, limitations, and reproduction details.",
    image: "/media/project-npu-sr.png",
    imageAlt: "NPU-SR published test card enhanced to twice its original resolution using the Qualcomm NPU",
    href: "https://github.com/AKMessi/npu-sr",
    tier: "flagship"
  },
  {
    id: "kivarro",
    number: "08",
    title: "Kivarro",
    kind: "local inference workstation",
    sentence: "An all-in-one desktop tool for running local models under your hand.",
    detail: "Model registry, runtime profiles, hardware fit, chat, local API, RAG tests, benchmarks, logs. I wanted local inference to feel like a real workstation instead of a pile of scripts.",
    image: "/media/project-kivarro.png",
    href: "https://github.com/AKMessi/kivarro",
    tier: "flagship"
  },
  {
    id: "ferrite",
    relatedArticleId: "ferrite-debugging",
    number: "09",
    title: "Ferrite",
    kind: "rust inference internals",
    sentence: "A tiny inference engine built to learn Rust and how LLMs work at the roots.",
    detail: "GGUF parsing, tensors, quantization, tokenizer, sampler, KV cache, and forward passes. Not a product. A way to stop treating inference as a black box.",
    image: "/media/project-ferrite.png",
    href: "https://github.com/AKMessi/ferrite",
    tier: "flagship"
  },
  {
    id: "smartie",
    number: "10",
    title: "Smartie",
    kind: "screen recorder",
    sentence: "A recorder that understands demos are usually badly directed.",
    detail: "Cursor focus, zoom, chapters, keyboard overlay, motion cues. The screen stops looking dead.",
    image: "/media/project-smartie.webp",
    href: "https://github.com/AKMessi/smartie",
    tier: "flagship"
  },
  {
    id: "medvlm",
    number: "11",
    title: "MedVLM",
    kind: "medical vision",
    sentence: "A hybrid Vision Transformer that reads chest X-rays.",
    detail: "Trained on roughly 3,400 X-rays on a free-tier Kaggle GPU. No lab, no budget, no drama. Just the architecture surviving contact with data.",
    image: "/media/project-medvlm.webp",
    href: "https://github.com/AKMessi/medvlm",
    tier: "flagship"
  },
  {
    id: "flash",
    number: "12",
    title: "FlashAttention",
    kind: "paper implementation",
    sentence: "The paper clicked when memory became the villain.",
    detail: "Tile the work. Keep tiny statistics. Recompute what is cheaper than storing. That is the whole idea.",
    image: "/media/project-flash.webp",
    href: "https://github.com/AKMessi/flash-attn-from-scratch",
    tier: "flagship"
  },
  {
    id: "autograd",
    number: "13",
    title: "tiny-autograd-rs",
    kind: "rust autodiff",
    sentence: "Backprop, small enough that the ugly parts cannot hide.",
    detail: "Ownership, graph edges, gradients, and the awkward Rust parts are all visible. That was the point.",
    image: "/media/project-autograd.webp",
    href: "https://github.com/AKMessi/tiny-autograd-rs",
    tier: "earlier"
  },
  {
    id: "heart",
    number: "14",
    title: "Heart Disease Risk XGBoost Model",
    kind: "clinical risk",
    sentence: "A model that got better after the leakage stopped flattering it.",
    detail: "Risk modeling with curated datasets, SHAP, ECG integration, and metrics that make weak spots obvious.",
    image: "/media/project-heart.webp",
    href: "https://github.com/AKMessi/heart-disease-xgboost-model",
    tier: "earlier"
  },
  {
    id: "face-rater",
    number: "15",
    title: "ResNet18 Face Rater",
    kind: "first real ML build",
    sentence: "Fine-tuned on 5,500 images. The first model that made the switch flip.",
    detail: "Not the most important model in the world. Important because it proved the loop worked: collect data, train, break, fix, understand.",
    image: "/media/resnet-face-rating.png",
    href: "https://github.com/AKMessi/facial-rating-using-cnn",
    linkLabel: "open repo",
    tier: "earlier"
  },
  {
    id: "lookalike",
    number: "16",
    title: "Celebrity Lookalike Network",
    kind: "siamese network",
    sentence: "A similarity model for finding which celebrity a face resembles.",
    detail: "A small project, but a clean lesson in embeddings, distance, and why representation matters more than the final label.",
    image: "/media/celebrity-doppelganger-poster.webp",
    href: "https://akmessi-celebrity-doppelganger.hf.space/",
    linkLabel: "try demo",
    tier: "earlier"
  }
];

export const workItems: WorkItem[] = allWorkItems
  .filter((item) => item.tier !== "earlier")
  .map((item, index) => ({ ...item, number: String(index + 1).padStart(2, "0") }));

export const earlierWorkItems: WorkItem[] = allWorkItems
  .filter((item) => item.tier === "earlier")
  .map((item, index) => ({ ...item, number: String(workItems.length + index + 1).padStart(2, "0") }));

export const nowEntries: NowEntry[] = [
  { category: "research", item: "Weight-Space Programming & 4-bit/3-bit quantization survival in local reasoning LLMs—two verified papers and open code." },
  { category: "ARCHITECTON", item: "Turning modern LLM architecture trade-offs into a live drag-and-drop workbench at llmarch.online." },
  { category: "FFCraft", item: "Post-training small task-specific local models like FFCraft-1.5B and wrapping them into zero-bloat desktop tools." },
  { category: "Vex Studio", item: "Scaling Vex (100+ stars) from a terminal video agent into a full browser + CLI AI video generation and editing studio." },
  { category: "OpenView", item: "Building a clean-room open-source TradingView alternative with a Rust/WASM indicator, Pine compiler, and backtest core." },
  { category: "writing", item: "Publishing deep dives on self-learning, LLM training, weight-space research, and open-weight benchmarks on Medium." },
  { category: "learning", item: "The 10,000-hour ML problem: papers, implementations, experiments, and builds." },
  { category: "videos", item: "Machine Learning With Aaryan for ML. Aaryan Kakad for self-improvement and the life around the work." },
  { category: "mornings", item: "5 AM to 9 or 10 AM. Deep work before the day gets loud." },
  { category: "markets", item: "Stocks, crypto, commodities, and the habit of thinking in incentives." },
  { category: "training", item: "Gym every day. Code and weights both expose fake effort fast." },
  { category: "direction", item: "Use ML as leverage. Build companies that solve real problems at scale." }
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/media/active-since-birth.jpg",
    kind: "image",
    title: "Initiative Early",
    caption: "move first, then learn",
    meta: "2017 / age 10",
    story: "Calling restaurants to order food, leading school teams, jumping into projects early. The habit was simple: move first.",
    alt: "Aaryan as a child standing near a table during a family moment"
  },
  {
    src: "/media/childhood.webp",
    kind: "image",
    title: "Small Suit",
    caption: "small suit, serious face",
    meta: "very early",
    story: "I liked looking put together early. Not a thesis, just an old pattern.",
    alt: "Aaryan as a child in a black suit"
  },
  {
    src: "/media/loved calculations and brainstorming since birth won a ucmas state level merit trophy.jpg",
    kind: "image",
    title: "Calculations Before Code",
    caption: "brainstorming came early",
    meta: "2017",
    story: "The trophy is not the point. The point is that calculations, mental models, and solving things already felt natural.",
    alt: "Aaryan as a child at a UCMAS event"
  },
  {
    src: "/media/loved-adventure-since-birth.jpg",
    kind: "image",
    title: "Adventure Since Birth",
    caption: "monkey bars, no warning",
    meta: "childhood",
    story: "Random cycle stunts, climbing trees, monkey bars, whatever looked climbable. Movement was part of the personality.",
    alt: "Aaryan standing on a monkey bar as a child"
  },
  {
    src: "/media/love-sticking to my roots - farming.jpg",
    kind: "image",
    title: "Roots In Nashik",
    caption: "farms with grandma",
    meta: "native place",
    story: "Trips to the farms in Nashik with grandma. The city was never the whole story.",
    alt: "Aaryan as a child standing in a field"
  },
  {
    src: "/media/love sticking to my roots -farming (2).jpg",
    kind: "image",
    title: "Still Close To Soil",
    caption: "roots stayed visible",
    meta: "native place",
    story: "Same pull toward the farms, the open place, the original rhythm.",
    alt: "Aaryan crouching in a green farm"
  },
  {
    src: "/media/fitness-freak-since-birth-a-very-old-push-ups-video.MP4",
    kind: "video",
    title: "Push-Up Clip",
    caption: "push-ups before the gym",
    meta: "old video",
    story: "The gym did not create the fitness thread. It gave it a place to become structured.",
    alt: "Old video of Aaryan doing push-ups as a child",
    poster: "/media/fitness-freak-since-birth-poster.webp"
  },
  {
    src: "/media/lockdown learning setup 1.jpg",
    kind: "image",
    title: "Lockdown Setup One",
    caption: "markets, crypto, python",
    meta: "2020-2021",
    story: "The room where self-learning started becoming a real system.",
    alt: "Aaryan learning on a laptop during lockdown"
  },
  {
    src: "/media/lockdown setup 2 learning.jpg",
    kind: "image",
    title: "Lockdown Setup Two",
    caption: "youtube became school",
    meta: "2020-2021",
    story: "Random photos from the period where stock markets, crypto, and Python started competing for attention.",
    alt: "Aaryan at a lockdown learning setup"
  },
  {
    src: "/media/lockdown learning.jpg",
    kind: "image",
    title: "Learning Alone",
    caption: "headphones and charts",
    meta: "2020-2021",
    story: "Nothing cinematic. Just sitting there long enough for the internet to start compounding.",
    alt: "Aaryan wearing headphones while learning during lockdown"
  },
  {
    src: "/media/lockdown learning (2).jpg",
    kind: "image",
    title: "Lockdown Repetition",
    caption: "same room, more reps",
    meta: "2020-2021",
    story: "Learning stock markets, crypto, and Python from whatever good material could be found.",
    alt: "Aaryan in a lockdown learning setup"
  },
  {
    src: "/media/lockdown learning (3).jpg",
    kind: "image",
    title: "The Early Loop",
    caption: "curiosity got structured",
    meta: "2020-2021",
    story: "The setup was basic, but the loop was serious: find, learn, try, repeat.",
    alt: "Aaryan learning at home during lockdown"
  },
  {
    src: "/media/origin-2020.MP4",
    kind: "video",
    title: "One Of The First Projects",
    caption: "thirteen, building anyway",
    meta: "2020",
    story: "Rough voice, rough interface, real starting point.",
    alt: "Aaryan's 2020 coding project video",
    poster: "/media/origin-2020-poster.webp"
  },
  {
    src: "/media/code-selfie.webp",
    kind: "image",
    title: "Code Beside The Bed",
    caption: "building from wherever",
    meta: "deep work",
    story: "No studio, no lab. Just a laptop close enough to keep going.",
    alt: "Aaryan beside a laptop with code open"
  },
  {
    src: "/media/desk-timelapse.webp",
    kind: "image",
    title: "Desk Timelapse Frame",
    caption: "work gets quiet",
    meta: "deep work",
    story: "A still frame from the kind of work that does not look impressive while it is happening.",
    alt: "Aaryan working at a desk with a purple screen"
  },
  {
    src: "/media/loop-coding.webm",
    kind: "video",
    title: "Coding Loop",
    caption: "code loop, no audience",
    meta: "deep work",
    story: "Build, test, stare, change one line, repeat.",
    alt: "Coding timelapse",
    poster: "/media/loop-coding-poster.webp"
  },
  {
    src: "/media/loop-desk.webm",
    kind: "video",
    title: "Desk Loop",
    caption: "builds in motion",
    meta: "deep work",
    story: "The desk version of repetition: tabs, notes, terminal, back again.",
    alt: "Desk timelapse of Aaryan doing deep work",
    poster: "/media/loop-desk-poster.webp"
  },
  {
    src: "/media/loop-laptop.webm",
    kind: "video",
    title: "Hoodie Deep Work Timelapse",
    caption: "hoodie, laptop, focus",
    meta: "deep work",
    story: "The one hoodie frame that stays: sit down, open the machine, stay there long enough for the work to move.",
    alt: "Aaryan working on a laptop in a hoodie",
    poster: "/media/loop-laptop-poster.webp"
  },
  {
    src: "/media/loop-study.webm",
    kind: "video",
    title: "Study Loop",
    caption: "study before noise",
    meta: "deep work",
    story: "Reading, switching, checking, writing. The boring part of getting better.",
    alt: "Study timelapse",
    poster: "/media/loop-study-poster.webp"
  },
  {
    src: "/media/classroom-study.webp",
    kind: "image",
    title: "CS229 In The Classroom",
    caption: "andrew ng between benches",
    meta: "CS229",
    story: "This frame is CS229 with Andrew Ng. Around the same time, CS231n with Karpathy was running beside it.",
    alt: "Notebook and laptop in a classroom while a lecture plays"
  },
  {
    src: "/media/attention-page-notes.webp",
    kind: "image",
    title: "Attention Is All You Need",
    caption: "attention decoded by hand",
    meta: "transformers",
    story: "Queries, keys, values, and positional encoding written back until the diagram stopped being decorative.",
    alt: "Annotated attention paper page"
  },
  {
    src: "/media/transformer-architecture-notes.webp",
    kind: "image",
    title: "Transformer Architecture",
    caption: "decoder notes everywhere",
    meta: "attention is all you need",
    story: "The architecture became clearer only after the page got messy.",
    alt: "Annotated Transformer architecture page"
  },
  {
    src: "/media/vit-page-notes.webp",
    kind: "image",
    title: "Vision Transformer",
    caption: "vision split into patches",
    meta: "ViT",
    story: "Pictures became tokens. The page had to be argued with before it made sense.",
    alt: "Annotated Vision Transformer paper page"
  },
  {
    src: "/media/csa-notes.webp",
    kind: "image",
    title: "CSA And HCA",
    caption: "deepseek compression notes",
    meta: "DeepSeek V4",
    story: "Compressed Sparse Attention and Heavily Compressed Attention, worked through as part of the DeepSeek V4 architecture.",
    alt: "Annotated CSA and HCA paper notes"
  },
  {
    src: "/media/deepseek-intro-notes.webp",
    kind: "image",
    title: "DeepSeek V4 Intro",
    caption: "architecture before claims",
    meta: "DeepSeek V4",
    story: "Long-context efficiency, hybrid attention, kernels, quantization, and the parts that make the system hold together.",
    alt: "Annotated DeepSeek V4 introduction page"
  },
  {
    src: "/media/deepseek-summary-notes.webp",
    kind: "image",
    title: "DeepSeek V4 Summary",
    caption: "benchmarks with margins",
    meta: "DeepSeek V4",
    story: "The summary page only becomes useful after the claims are tied back to the mechanism.",
    alt: "Annotated DeepSeek V4 summary page"
  },
  {
    src: "/media/deepseek-architecture-notes.webp",
    kind: "image",
    title: "FlashAttention Architecture",
    caption: "architecture margins",
    meta: "FlashAttention",
    story: "A clean diagram, then the handwritten mess that proves it was actually read.",
    alt: "Annotated FlashAttention architecture notes"
  },
  {
    src: "/media/flash-standard-notes.webp",
    kind: "image",
    title: "FlashAttention",
    caption: "memory bottleneck notes",
    meta: "FlashAttention",
    story: "The bottleneck became visible here: materialize too much, move too much, pay too much.",
    alt: "Annotated FlashAttention implementation page"
  },
  {
    src: "/media/flash-point-closeup.webp",
    kind: "image",
    title: "FlashAttention Point",
    caption: "recompute beats storing again",
    meta: "FlashAttention",
    story: "The idea that clicked: recomputation can be cheaper than storing and reading again.",
    alt: "Close-up of handwritten FlashAttention note on a paper page"
  },
  {
    src: "/media/flash-algorithm-notes.webp",
    kind: "image",
    title: "FlashAttention Algorithm",
    caption: "algorithm becomes muscle memory",
    meta: "FlashAttention",
    story: "Tiling, SRAM, softmax statistics, recomputation. The algorithm had to become mechanical.",
    alt: "Annotated FlashAttention algorithm page"
  },
  {
    src: "/media/flash-performance-notes.webp",
    kind: "image",
    title: "FlashAttention Performance",
    caption: "memory was the villain",
    meta: "FlashAttention",
    story: "The performance section matters because it explains why the trick is not cosmetic.",
    alt: "Annotated FlashAttention performance page"
  },
  {
    src: "/media/loop-annotations.webm",
    kind: "video",
    title: "Paper Annotation Timelapse",
    caption: "margins moving in real-time",
    meta: "reading system",
    story: "The paper is not learned until the margin says it back.",
    alt: "Timelapse of paper annotations",
    poster: "/media/loop-annotations-poster.webp"
  },
  {
    src: "/media/project-wsp.png",
    kind: "image",
    title: "Weight-Space Programming",
    caption: "2 papers, 0 gradients",
    meta: "project proof",
    story: "206 local runs across 3 reasoning LLM architectures on a single 4 GB RX 6400—zero-gradient weight compilation that survives 4-bit and 3-bit GGUF quantization.",
    alt: "Weight-Space Programming and quantization survival research infographic"
  },
  {
    src: "/media/project-vex-studio.png",
    kind: "image",
    title: "Vex Studio",
    caption: "100+ stars, browser + CLI",
    meta: "project proof",
    story: "Vex grew from a terminal video agent into a full AI video generation and editing studio.",
    alt: "Vex Studio browser interface"
  },
  {
    src: "/media/project-architecton.png",
    kind: "image",
    title: "ARCHITECTON",
    caption: "49 LLM blocks, live physics",
    meta: "project proof",
    story: "Interactive drag-and-drop LLM architecture studio grounded in 120 real open-weight models.",
    alt: "ARCHITECTON interactive LLM architecture playground overview"
  },
  {
    src: "/media/project-ffcraft.png",
    kind: "image",
    title: "FFCraft-1.5B Benchmark",
    caption: "43.3% → 96.7% pass rate",
    meta: "project proof",
    story: "Fine-tuned a 1.5B local model on 6,000 execution-verified FFmpeg examples and wrapped it into a zero-bloat desktop app.",
    alt: "FFCraft-1.5B v2 vs base model FFmpeg execution benchmark chart"
  },
  {
    src: "/media/project-openview.svg",
    kind: "image",
    title: "OpenView",
    caption: "Rust/WASM market workbench",
    meta: "project proof",
    story: "Clean-room open-source TradingView alternative spanning Crypto, Forex/Metals, US Equities, and Indian NSE/BSE/MCX.",
    alt: "OpenView architecture diagram"
  },
  {
    src: "/media/project-pactrail.svg",
    kind: "image",
    title: "Pactrail",
    caption: "evidence-backed coding agent",
    meta: "project proof",
    story: "Verification-native Rust coding-agent harness: task contracts, isolated edits, evidence receipts, and explicit apply.",
    alt: "Pactrail execution flow diagram"
  },
  {
    src: "/media/project-npu-sr.png",
    kind: "image",
    title: "NPU-SR",
    caption: "52.74 FPS on Hexagon NPU",
    meta: "project proof",
    story: "Local 2× super-resolution and luminance denoising running strictly on a Snapdragon X Plus NPU.",
    alt: "NPU-SR 2x super-resolution test card"
  },
  {
    src: "/media/project-medvlm.webp",
    kind: "image",
    title: "MedVLM",
    caption: "x-rays through transformers",
    meta: "project proof",
    story: "Hybrid Vision Transformer for chest X-rays, trained with limited compute because waiting for perfect conditions is a trap.",
    alt: "MedVLM architecture screenshot"
  },
  {
    src: "/media/resnet-face-rating.png",
    kind: "image",
    title: "Aesthetix AI",
    caption: "first real ML model",
    meta: "project proof",
    story: "A ResNet18 face-rating model. Not the biggest project, but the first one that made the ML loop feel real.",
    alt: "Facial symmetry and aesthetic rater project screenshot"
  },
  {
    src: "/media/celebrity-doppelganger.MP4",
    kind: "video",
    title: "Celebrity Doppelganger",
    caption: "embeddings meet faces",
    meta: "project proof",
    story: "A similarity model where representation mattered more than the final label.",
    alt: "Celebrity doppelganger model demo video",
    poster: "/media/celebrity-doppelganger-poster.webp"
  },
  {
    src: "/media/project-kivarro.png",
    kind: "image",
    title: "Kivarro",
    caption: "local inference under control",
    meta: "project proof",
    story: "An all-in-one local inference workstation: model registry, profiles, hardware fit, chat, local API, RAG tests, benchmarks, and logs.",
    alt: "Kivarro local inference workbench screenshot"
  },
  {
    src: "/media/project-vex.webp",
    kind: "image",
    title: "Vex",
    caption: "terminal with actual teeth",
    meta: "project proof",
    story: "A video tool where language can touch the timeline.",
    alt: "Vex terminal screenshot"
  },
  {
    src: "/media/project-smartie.webp",
    kind: "image",
    title: "Smartie",
    caption: "screen recorder with taste",
    meta: "project proof",
    story: "A recorder that makes demos feel directed instead of dead.",
    alt: "Smartie screen recorder interface screenshot"
  },
  {
    src: "/media/project-ferrite.png",
    kind: "image",
    title: "Ferrite",
    caption: "inference roots in rust",
    meta: "project proof",
    story: "A tiny inference engine built to learn Rust and the lower layers of LLMs: GGUF, tensors, quantization, tokenization, sampling, and cache state.",
    alt: "Ferrite repository screenshot"
  },
  {
    src: "/media/project-flash.webp",
    kind: "image",
    title: "FlashAttention From Scratch",
    caption: "paper to implementation",
    meta: "project proof",
    story: "Reading the paper was one layer. Rebuilding the core idea was the next.",
    alt: "FlashAttention from scratch README screenshot"
  },
  {
    src: "/media/project-autograd.webp",
    kind: "image",
    title: "tiny-autograd-rs",
    caption: "backprop with no hiding",
    meta: "project proof",
    story: "A tiny Rust autodiff engine where the awkward parts stay visible.",
    alt: "tiny-autograd-rs README screenshot"
  },
  {
    src: "/media/project-heart.webp",
    kind: "image",
    title: "Heart Disease Risk XGBoost Model",
    caption: "metrics after leakage",
    meta: "project proof",
    story: "The model got better after the flattering leakage stopped.",
    alt: "Heart disease model timeline screenshot"
  },
  {
    src: "/media/hero-formal.webp",
    kind: "image",
    title: "Written In The Lights",
    caption: "written in the lights",
    meta: "portrait",
    story: "The clean version. Useful, but never the whole story.",
    alt: "Aaryan standing in a blue shirt in front of a glowing written-in-the-stars backdrop"
  },
  {
    src: "/media/portrait-day.webp",
    kind: "image",
    title: "Outside But Still Thinking",
    caption: "outside but still thinking",
    meta: "portrait",
    story: "The phone is there. The thought is somewhere else.",
    alt: "Aaryan seated at a cafe in a white shirt"
  },
  {
    src: "/media/cafe.webp",
    kind: "image",
    title: "Cafe Frame",
    caption: "phone down, mind elsewhere",
    meta: "portrait",
    story: "A normal outside frame from a mostly inside-head life.",
    alt: "Aaryan looking down at a phone in a cafe"
  },
  {
    src: "/media/mirror-close.webp",
    kind: "image",
    title: "Mirror Before Work",
    caption: "mirror before the work",
    meta: "portrait",
    story: "Looks and work were never separate lanes for me.",
    alt: "Aaryan close-up mirror portrait"
  },
  {
    src: "/media/hero-night.webp",
    kind: "image",
    title: "Night Frame",
    caption: "quiet after the noise",
    meta: "portrait",
    story: "The calmer frame. Still the same loop underneath.",
    alt: "Aaryan sitting at night near a pool with arms crossed"
  },
  {
    src: "/media/deadlift.webp",
    kind: "image",
    title: "Deadlift",
    caption: "heavy bar, quiet room",
    meta: "fitness",
    story: "Fitness was always there. The gym just made the scoreboard honest.",
    alt: "Aaryan deadlifting in a gym"
  },
  {
    src: "/media/gym.webp",
    kind: "image",
    title: "Gym Mirror",
    caption: "gym after the stack",
    meta: "fitness",
    story: "ML in the morning, gym every day. Fake effort gets exposed in both places.",
    alt: "Aaryan gym mirror photo"
  },
  {
    src: "/media/gym-back.webp",
    kind: "image",
    title: "Back Day",
    caption: "fitness was always there",
    meta: "fitness",
    story: "Not a new identity. Just the old fitness obsession with more structure.",
    alt: "Aaryan gym back mirror photo"
  },
  {
    src: "/media/stance.webp",
    kind: "image",
    title: "Stance",
    caption: "ready before the round",
    meta: "fitness",
    story: "Movement, sport, training, body control. That thread stayed.",
    alt: "Aaryan standing in a boxing stance"
  }
];

export const trailImages = [
  "/media/hero-formal.webp",
  "/media/hoodie-work.webp",
  "/media/project-architecton.png",
  "/media/flash-point-closeup.webp",
  "/media/deadlift.webp",
  "/media/project-vex-studio.png"
];
