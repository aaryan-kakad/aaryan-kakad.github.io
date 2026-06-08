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

export const workItems: WorkItem[] = [
  {
    id: "medvlm",
    number: "01",
    title: "MedVLM",
    kind: "medical vision",
    sentence: "A hybrid Vision Transformer that reads chest X-rays.",
    detail: "Trained on roughly 3,400 X-rays on a free-tier Kaggle GPU. No lab, no budget, no drama. Just the architecture surviving contact with data.",
    image: "/media/project-medvlm.webp",
    href: "https://github.com/AKMessi/medvlm"
  },
  {
    id: "face-rater",
    number: "02",
    title: "ResNet18 Face Rater",
    kind: "first real ML build",
    sentence: "Fine-tuned on 5,500 images. The first model that made the switch flip.",
    detail: "Not the most important model in the world. Important because it proved the loop worked: collect data, train, break, fix, understand.",
    image: "/media/resnet-face-rating.png",
    href: "https://github.com/AKMessi/facial-rating-using-cnn",
    linkLabel: "open repo"
  },
  {
    id: "lookalike",
    number: "03",
    title: "Celebrity Lookalike Network",
    kind: "siamese network",
    sentence: "A similarity model for finding which celebrity a face resembles.",
    detail: "A small project, but a clean lesson in embeddings, distance, and why representation matters more than the final label.",
    image: "/media/celebrity-doppelganger-poster.webp",
    href: "https://akmessi-celebrity-doppelganger.hf.space/",
    linkLabel: "try demo"
  },
  {
    id: "vex",
    number: "04",
    title: "Vex",
    kind: "terminal video agent",
    sentence: "A video tool where language can touch the timeline.",
    detail: "Commands, memory, cuts, and source context. Not a chat box next to a video. A real interface for changing the thing itself.",
    image: "/media/project-vex.webp",
    href: "https://github.com/AKMessi/vex"
  },
  {
    id: "smartie",
    number: "05",
    title: "Smartie",
    kind: "screen recorder",
    sentence: "A recorder that understands demos are usually badly directed.",
    detail: "Cursor focus, zoom, chapters, keyboard overlay, motion cues. The screen stops looking dead.",
    image: "/media/project-smartie.webp",
    href: "https://github.com/AKMessi/smartie"
  },
  {
    id: "flash",
    number: "06",
    title: "FlashAttention",
    kind: "paper implementation",
    sentence: "The paper clicked when memory became the villain.",
    detail: "Tile the work. Keep tiny statistics. Recompute what is cheaper than storing. That is the whole idea.",
    image: "/media/project-flash.webp",
    href: "https://github.com/AKMessi/flash-attn-from-scratch"
  },
  {
    id: "autograd",
    number: "07",
    title: "tiny-autograd-rs",
    kind: "rust autodiff",
    sentence: "Backprop, small enough that the ugly parts cannot hide.",
    detail: "Ownership, graph edges, gradients, and the awkward Rust parts are all visible. That was the point.",
    image: "/media/project-autograd.webp",
    href: "https://github.com/AKMessi/tiny-autograd-rs"
  },
  {
    id: "heart",
    number: "08",
    title: "Heart Disease Risk XGBoost Model",
    kind: "clinical risk",
    sentence: "A model that got better after the leakage stopped flattering it.",
    detail: "Risk modeling with curated datasets, SHAP, ECG integration, and metrics that make weak spots obvious.",
    image: "/media/project-heart.webp",
    href: "https://github.com/AKMessi/heart-disease-xgboost-model"
  }
];

export const nowEntries: NowEntry[] = [
  { category: "learning", item: "The 10,000-hour ML problem: papers, implementations, lectures, and builds." },
  { category: "papers", item: "New research papers plus old classics. Printed when the mechanism matters." },
  { category: "videos", item: "Machine Learning With Aaryan for ML. Aaryan Kakad for self-improvement and the life around the work." },
  { category: "mornings", item: "5 AM to 9 or 10 AM. Deep work before the day gets loud." },
  { category: "building", item: "models, agents, video tools, and systems where the hidden mechanism matters." },
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
  "/media/flash-point-closeup.webp",
  "/media/deadlift.webp",
  "/media/project-vex.webp"
];
