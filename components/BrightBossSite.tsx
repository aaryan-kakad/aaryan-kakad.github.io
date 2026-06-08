"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryItems, nowEntries, storyBeats, trailImages, workItems, type GalleryItem, type WorkItem } from "@/data/site";

const navItems = ["story", "made", "moments", "now"];
const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const mediaTypeFor = (src: string) => (src.toLowerCase().endsWith(".mp4") ? "video/mp4" : "video/webm");
const momentGroups = [
  {
    id: "early",
    label: "01 / early",
    title: "Early Signals",
    copy: "Small proofs from before code: initiative, calculations, movement, farms, and fitness before any of it had a name.",
    match: (item: GalleryItem) => ["2017 / age 10", "very early", "2017", "childhood", "native place", "old video"].includes(item.meta ?? "")
  },
  {
    id: "lockdown",
    label: "02 / lockdown",
    title: "Lockdown School",
    copy: "Markets, crypto, Python, first projects. Ordinary photos from the period where learning started compounding.",
    match: (item: GalleryItem) => item.meta === "2020-2021" || item.meta === "2020"
  },
  {
    id: "deep-work",
    label: "03 / deep work",
    title: "Deep Work Loops",
    copy: "Screens, notebooks, timelapses, lectures. The visible part is quiet because the useful part is mostly repetition.",
    match: (item: GalleryItem) => item.meta === "deep work" || item.meta === "CS229" || item.meta === "CS231n"
  },
  {
    id: "papers",
    label: "04 / papers",
    title: "Paper Margins",
    copy: "Classic papers, new architectures, implementation notes. The page has to become messy before the idea becomes usable.",
    match: (item: GalleryItem) =>
      ["reading system", "transformers", "attention is all you need", "ViT", "DeepSeek V4", "FlashAttention"].includes(item.meta ?? "")
  },
  {
    id: "builds",
    label: "05 / builds",
    title: "Build Receipts",
    copy: "Models, tools, and systems. Not everything is equally important, but every one of them records a loop that got completed.",
    match: (item: GalleryItem) => item.meta === "project proof"
  },
  {
    id: "body",
    label: "06 / outside",
    title: "Life Around The Work",
    copy: "Portraits, training, and the physical thread. The site should not pretend the work happens in a vacuum.",
    match: (item: GalleryItem) => item.meta === "portrait" || item.meta === "fitness"
  }
];

function splitChars(text: string) {
  return text.split("").map((char, index) => (
    <span className="hero-char" aria-hidden="true" key={`${char}-${index}`}>
      {char === " " ? "\u00a0" : char}
    </span>
  ));
}

function splitWords(text: string) {
  return text.split(" ").map((word, index) => (
    <span className="word-wrap" aria-hidden="true" key={`${word}-${index}`}>
      <span>{word}</span>
    </span>
  ));
}

function useMagneticButton<T extends HTMLElement>(ref: React.RefObject<T | null>, strength = 0.28) {
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      if (distance > 90) return;

      gsap.to(element, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)"
      });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);
    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);
}

function SignalCanvas({ mounted }: { mounted: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const points = Array.from({ length: 54 }, (_, index) => ({
      seed: index,
      x: 0,
      y: 0,
      radius: 0.5 + (index % 5) * 0.15
    }));
    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const compact = window.innerWidth <= 768;
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(17, 16, 39, 0.12)";
      context.fillStyle = "rgba(17, 16, 39, 0.52)";

      points.forEach((point, index) => {
        const angle = index * 1.14 + time * 0.00012;
        const orbit = 0.2 + (index % 11) * 0.045;
        point.x = width * (0.5 + Math.cos(angle) * orbit);
        point.y = height * (0.5 + Math.sin(angle * 0.82) * orbit);
      });

      for (let index = 0; index < points.length - 1; index += 1) {
        const current = points[index];
        const next = points[index + 1];
        context.beginPath();
        context.moveTo(current.x, current.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }

      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      });

      if (!compact) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw(0);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [mounted]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

export function BrightBossSite() {
  const [mounted, setMounted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [introReady, setIntroReady] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoverWork, setHoverWork] = useState<WorkItem | null>(null);
  const [detail, setDetail] = useState<WorkItem | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [voiceStarted, setVoiceStarted] = useState(false);
  const [voiceEnded, setVoiceEnded] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(false);
  const [egg, setEgg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const voiceRef = useRef<HTMLVideoElement | null>(null);
  const workPreviewRef = useRef<HTMLDivElement | null>(null);
  const openStoryRef = useRef<HTMLAnchorElement | null>(null);
  const openVoiceRef = useRef<HTMLAnchorElement | null>(null);
  const helloRef = useRef<HTMLAnchorElement | null>(null);

  useMagneticButton(openStoryRef);
  useMagneticButton(openVoiceRef);
  useMagneticButton(helloRef);

  const activeLightbox: GalleryItem | null = lightbox === null ? null : galleryItems[lightbox];
  const groupedMoments = momentGroups
    .map((group) => ({
      ...group,
      items: galleryItems
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => group.match(item))
    }))
    .filter((group) => group.items.length > 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth <= 768) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      duration: reduced ? 0.01 : 1.4,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5
    });
    lenisRef.current = lenis;

    const updateScroll = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.innerWidth <= 768;
    const seen = sessionStorage.getItem("aaryan-bright-boss-seen");
    const body = document.body;

    const runHero = () => {
      setIntroReady(true);
      const duration = reduced ? 0.01 : compact ? 0.28 : 1;
      gsap.timeline()
        .fromTo(".hero-eyebrow", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: duration * 0.38, ease: "power3.out" }, 0)
        .fromTo(".hero-char", { yPercent: 108, opacity: 0 }, { yPercent: 0, opacity: 1, duration: duration * 0.64, stagger: reduced ? 0 : 0.021, ease: "power4.out" }, 0.08)
        .fromTo(".hero-subline, .hero-actions, .hero-metrics", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: duration * 0.48, stagger: reduced ? 0 : 0.07, ease: "power3.out" }, 0.62)
        .fromTo(".site-nav", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: duration * 0.45, ease: "power3.out" }, 0.8);

      gsap.fromTo(".hero-photo img", { scale: compact ? 1 : 1.08 }, { scale: 1, duration: reduced || compact ? 0.01 : 2, ease: "power2.out" });
    };

    if (compact) {
      setShowPreloader(false);
      setIntroReady(true);
      return;
    }

    if (seen) {
      setShowPreloader(false);
      runHero();
      return;
    }

    body.classList.add("is-preloading");
    const timeline = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("aaryan-bright-boss-seen", "1");
        setShowPreloader(false);
        body.classList.remove("is-preloading");
        runHero();
      }
    });

    timeline
      .to(".pre-mark", { opacity: 1, duration: reduced ? 0.01 : 0.24 }, 0.1)
      .to(".pre-fill", { scaleX: 1, duration: reduced ? 0.01 : 0.55, ease: "power3.inOut" }, 0.2)
      .to(".pre-mark", { scale: 1.15, opacity: 0, duration: reduced ? 0.01 : 0.22, ease: "power2.in" }, 0.82)
      .to(".preloader", { clipPath: "inset(0 0 100% 0)", duration: reduced ? 0.01 : 0.36, ease: "power4.inOut" }, 0.9);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (window.innerWidth <= 768) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = document.querySelector(".scroll-progress");
    if (progress) {
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: reduced ? true : 0.3
        }
      });
    }

    gsap.to(".hero-photo", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-copy", {
      opacity: 0,
      scale: 0.96,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "55% top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".scroll-cue", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 92%",
        end: "top 70%",
        scrub: true
      }
    });

    const isAlreadyVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight * 0.9;
    };

    if (!window.location.hash) {
      document.querySelectorAll<HTMLElement>(".fade-line").forEach((element) => {
        if (isAlreadyVisible(element)) return;
        gsap.fromTo(
          element,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: reduced ? 0.01 : 0.55,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: element,
              start: "top 88%"
            }
          }
        );
      });

      document.querySelectorAll<HTMLElement>(".work-row").forEach((row) => {
        const line = row.querySelector(".row-line");
        const content = row.querySelectorAll(".row-part");
        gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%"
          }
        })
          .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: reduced ? 0.01 : 0.7, ease: "power3.out", immediateRender: false })
          .fromTo(content, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: reduced ? 0.01 : 0.5, stagger: reduced ? 0 : 0.08, ease: "power3.out", immediateRender: false }, "-=0.25");
      });

      document.querySelectorAll<HTMLElement>(".gallery-card").forEach((card) => {
        if (isAlreadyVisible(card)) return;
        gsap.fromTo(
          card,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: reduced ? 0.01 : 0.48,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 90%"
            }
          }
        );
      });
    }

    ["home", ...navItems, "closing"].forEach((section) => {
      const el = document.getElementById(section);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section)
      });
    });

    const revealVisibleContent = () => {
      document.querySelectorAll<HTMLElement>(".word-reveal").forEach((headline) => {
        if (!isAlreadyVisible(headline)) return;
        gsap.set(headline.querySelectorAll(".word-wrap span"), { yPercent: 0, y: 0, clearProps: "transform" });
      });
      document.querySelectorAll<HTMLElement>(".fade-line").forEach((element) => {
        if (!isAlreadyVisible(element)) return;
        gsap.set(element, { y: 0, opacity: 1, clearProps: "transform" });
      });
    };

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
      revealVisibleContent();
    }, 180);
    let hashTimer = 0;
    const onHashChange = () => {
      window.clearTimeout(hashTimer);
      hashTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
        revealVisibleContent();
      }, 120);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.clearTimeout(refreshTimer);
      window.clearTimeout(hashTimer);
      window.removeEventListener("hashchange", onHashChange);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted || window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const label = document.getElementById("cursor-label");
    if (!dot || !ring || !label) return;

    document.querySelectorAll<HTMLElement>("a, button").forEach((element) => {
      if (!element.dataset.cursor) element.dataset.cursor = "link";
    });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      const target = (event.target as Element | null)?.closest("[data-cursor]") as HTMLElement | null;
      const mode = target?.dataset.cursor ?? "default";
      document.body.dataset.cursor = mode;
      label.textContent = mode === "play" ? "PLAY" : mode === "drag" ? "DRAG ->" : "";
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) return;
    const hero = heroRef.current;
    const trail = trailRef.current;
    if (!hero || !trail) return;

    let lastX = 0;
    let lastY = 0;
    let index = 0;

    const onMove = (event: PointerEvent) => {
      const velocity = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      lastX = event.clientX;
      lastY = event.clientY;
      if (velocity < 80) return;

      const echo = document.createElement("div");
      echo.className = "hero-echo";
      echo.style.left = `${event.clientX}px`;
      echo.style.top = `${event.clientY}px`;
      echo.style.backgroundImage = `url(${trailImages[index % trailImages.length]})`;
      index += 1;
      trail.appendChild(echo);
      while (trail.children.length > 8) trail.firstElementChild?.remove();

      gsap.fromTo(
        echo,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 0.92,
          duration: 0.05,
          onComplete: () => {
            gsap.to(echo, {
              opacity: 0,
              scale: 0.85,
              duration: 0.45,
              ease: "power2.out",
              onComplete: () => echo.remove()
            });
          }
        }
      );
    };

    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const letters = "AKMESSI0123456789";
    const elements = document.querySelectorAll<HTMLElement>("[data-scramble]");

    const onEnter = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      const original = element.dataset.scramble ?? element.textContent ?? "";
      let frame = 0;
      const total = 14;
      const timer = window.setInterval(() => {
        element.textContent = original
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            return index < (frame / total) * original.length ? original[index] : letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
        frame += 1;
        if (frame > total) {
          window.clearInterval(timer);
          element.textContent = original;
        }
      }, 22);
    };

    elements.forEach((element) => element.addEventListener("mouseenter", onEnter));
    return () => elements.forEach((element) => element.removeEventListener("mouseenter", onEnter));
  }, [mounted]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const next = [...(window.__aaryanKonami ?? []), event.key].slice(-konami.length);
      window.__aaryanKonami = next;
      if (konami.every((key, index) => key === next[index])) setEgg(true);
      if (event.key === "Escape") {
        setDetail(null);
        setLightbox(null);
        setEgg(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!workPreviewRef.current || !hoverWork) return;
    gsap.to(workPreviewRef.current, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
  }, [hoverWork]);

  const scrollTo = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setDetail(null);
    setLightbox(null);
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -88 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const moveWorkPreview = (event: React.PointerEvent) => {
    if (!workPreviewRef.current) return;
    gsap.to(workPreviewRef.current, {
      x: event.clientX + 26,
      y: event.clientY - 120,
      duration: 0.45,
      ease: "power3.out"
    });
  };

  const leaveWork = () => {
    setHoverWork(null);
    if (workPreviewRef.current) {
      gsap.to(workPreviewRef.current, { opacity: 0, scale: 0.92, duration: 0.3, ease: "power2.out" });
    }
  };

  const startVoice = async () => {
    const video = voiceRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.controls = true;
    setVoiceMuted(false);
    setVoiceStarted(true);
    try {
      await video.play();
    } catch {
      video.controls = true;
    }
  };

  const toggleVoiceMute = () => {
    const video = voiceRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setVoiceMuted(video.muted);
  };

  const nextLightbox = () => setLightbox((value) => (value === null ? value : (value + 1) % galleryItems.length));
  const prevLightbox = () => setLightbox((value) => (value === null ? value : (value - 1 + galleryItems.length) % galleryItems.length));

  return (
    <>
      <div className="scroll-progress" />
      <div id="cursor-dot" />
      <div id="cursor-ring">
        <span id="cursor-label" />
      </div>

      {showPreloader ? (
        <div className="preloader" aria-hidden="true">
          <div className="pre-mark">A</div>
          <div className="pre-line">
            <span className="pre-fill" />
          </div>
        </div>
      ) : null}

      <div className={`site-shell ${introReady ? "is-ready" : ""}`}>
        <header className="site-nav">
          <a href="#home" onClick={scrollTo("home")} className="brand" data-scramble="AARYAN">
            <Image src="/mark.svg" width={32} height={32} alt="" />
            <span>Aaryan</span>
          </a>
          <nav>
            {navItems.map((item) => (
              <a href={`#${item}`} onClick={scrollTo(item)} className={activeSection === item ? "active" : ""} data-scramble={item} key={item}>
                {item}
              </a>
            ))}
          </nav>
          <button type="button" className="menu-button" onClick={() => setMenuOpen(true)}>
            menu
          </button>
        </header>

        {menuOpen ? (
          <div className="mobile-menu" role="dialog" aria-modal="true">
            <button type="button" onClick={() => setMenuOpen(false)}>close</button>
            {["home", ...navItems, "closing"].map((item) => (
              <a href={`#${item}`} onClick={scrollTo(item)} key={item}>
                {item}
              </a>
            ))}
          </div>
        ) : null}

        <main>
          <section id="home" ref={heroRef} className="hero-section" data-cursor="image">
            <div ref={trailRef} className="trail-layer" />
            <div className="hero-bg-grid" />
            <figure className="hero-photo media-frame">
              <Image src="/media/hero-formal.webp" alt="Aaryan Kakad standing in front of a bright written-in-the-stars backdrop" fill priority fetchPriority="high" sizes="(max-width: 900px) 100vw, 58vw" />
            </figure>
            <SignalCanvas mounted={mounted} />
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">self-taught / mumbai / 19</p>
              <h1 aria-label="Aaryan Kakad">
                <span>{splitChars("AARYAN")}</span>
                <span>{splitChars("KAKAD")}</span>
              </h1>
              <p className="hero-subline">
                The lockdown taught me I could learn anything from the internet. Markets made me care about prediction. ML gave me leverage. Now I am building from that.
              </p>
              <div className="hero-actions">
                <a ref={openStoryRef} href="#story" onClick={scrollTo("story")} className="magnetic primary-action" data-cursor="link">
                  read my story
                </a>
                <a ref={openVoiceRef} href="https://youtube.com/@MachineLearningWithAaryan" target="_blank" rel="noreferrer" className="magnetic secondary-action" data-cursor="link">
                  watch ML videos
                </a>
              </div>
              <div className="hero-metrics" aria-label="quick signals">
                <span>13: first project</span>
                <span>16: two failed business attempts</span>
                <span>18: ML from scratch</span>
              </div>
            </div>
            <a href="#story" onClick={scrollTo("story")} className="scroll-cue" data-cursor="link" aria-label="Scroll to story">
              <span />
            </a>
          </section>

          <section id="story" className="story-section">
            <div className="section-head">
              <p className="eyebrow fade-line">story</p>
              <h2 className="word-reveal" aria-label="Timeline, not a pitch.">
                {splitWords("Timeline, not a pitch.")}
              </h2>
              <p className="section-note fade-line">
                Not a resume. Just the years that kept repeating the same loop: move first, learn alone, build the mechanism, make the proof visible.
              </p>
            </div>
            <div className="story-grid">
              <div className="story-text-col">
                {storyBeats.map((beat, index) => {
                  const links = beat.links ?? (beat.href ? [{ href: beat.href, label: beat.linkLabel ?? "open" }] : []);

                  return (
                    <article className="story-beat" data-index={index} key={beat.id}>
                      <p className="eyebrow fade-line">{beat.label}</p>
                      <div className="story-beat-image media-frame" data-cursor="image">
                        {beat.image === "/media/deepseek-v4-thumbnail.png" || beat.image.endsWith(".svg") ? (
                          <img src={beat.image} alt={beat.alt} loading="lazy" decoding="async" />
                        ) : (
                          <Image src={beat.image} alt={beat.alt} fill sizes="(max-width: 980px) 100vw, 34vw" />
                        )}
                      </div>
                      <div className="story-beat-copy">
                        <h3 className="word-reveal" aria-label={beat.line}>{splitWords(beat.line)}</h3>
                        <p className="fade-line">{beat.copy}</p>
                        {links.length ? (
                          <div className="story-links fade-line">
                            {links.map((link) => (
                              <a className="story-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="voice" className="voice-section">
            <div className="section-head voice-head">
              <p className="eyebrow fade-line">voice</p>
              <h2 className="word-reveal" aria-label="This is what I sounded like in 2020.">
                {splitWords("This is what I sounded like in 2020.")}
              </h2>
              <p className="fade-line">One of the first coding projects. Rough voice, rough screen, real starting point.</p>
            </div>
            <div className={`voice-stage media-frame ${voiceStarted ? "is-playing" : ""}`} data-cursor="play">
              <Image className="voice-poster" src="/media/origin-2020-poster.webp" alt="Poster frame from Aaryan's first coding project video" fill sizes="100vw" />
              <video ref={voiceRef} preload="metadata" playsInline onEnded={() => setVoiceEnded(true)}>
                <source src="/media/origin-2020.MP4" type="video/mp4" />
              </video>
              {!voiceStarted ? (
                <button type="button" className="voice-play" onClick={startVoice} data-cursor="play" aria-label="Play 2020 voice with sound">
                  <span />
                </button>
              ) : null}
              {voiceStarted ? (
                <button type="button" className="mute-toggle" onClick={toggleVoiceMute}>
                  {voiceMuted ? "sound off" : "sound on"}
                </button>
              ) : null}
            </div>
            {voiceEnded ? <p className="voice-after">The self-learning habit started before the taste caught up.</p> : null}
          </section>

          <section id="made" className="made-section">
            <div className="section-head">
              <p className="eyebrow fade-line">made</p>
              <h2 className="word-reveal" aria-label="Things I made while figuring it out.">
                {splitWords("Things I made while figuring it out.")}
              </h2>
            </div>
            <div className="work-list" onPointerMove={moveWorkPreview}>
              {workItems.map((item) => (
                <button
                  type="button"
                  className="work-row"
                  onMouseEnter={() => setHoverWork(item)}
                  onMouseLeave={leaveWork}
                  onFocus={() => setHoverWork(item)}
                  onBlur={leaveWork}
                  onClick={() => setDetail(item)}
                  key={item.id}
                >
                  <span className="row-line" />
                  <span className="row-part work-meta">
                    <span>{item.number}</span>
                    <small>{item.kind}</small>
                  </span>
                  <strong className="row-part">{item.title}</strong>
                  <em className="row-part">{item.sentence}</em>
                </button>
              ))}
            </div>
            <div ref={workPreviewRef} className="work-preview" aria-hidden="true">
              {hoverWork ? <Image src={hoverWork.image} alt="" fill sizes="320px" /> : null}
            </div>
          </section>

          <section id="moments" className="moments-section">
            <div className="section-head">
              <p className="eyebrow fade-line">moments</p>
              <h2 className="word-reveal" aria-label="The proof is usually boring until it compounds.">
                {splitWords("The proof is usually boring until it compounds.")}
              </h2>
              <p className="section-note fade-line">
                A visual archive, grouped by what the frame is actually proving. Tap any piece to open it properly.
              </p>
            </div>
            <div className="gallery-stack">
              {groupedMoments.map((group, groupIndex) => (
                <article className="gallery-group" key={group.id}>
                  <div className="gallery-group-head">
                    <p className="eyebrow fade-line">{group.label}</p>
                    <h3 className="fade-line">{group.title}</h3>
                    <p className="fade-line">{group.copy}</p>
                  </div>
                  <div className="gallery-grid">
                    {group.items.map(({ item, index }, itemIndex) => {
                      const variant = itemIndex === 0 ? "is-feature" : item.kind === "video" ? "is-video" : itemIndex % 7 === 3 ? "is-wide" : itemIndex % 6 === 4 ? "is-tall" : "";
                      return (
                        <button
                          type="button"
                          className={`gallery-card media-frame ${variant}`}
                          onClick={() => setLightbox(index)}
                          data-cursor="image"
                          aria-label={`Open ${item.title}`}
                          key={`${group.id}-${item.src}-${index}`}
                        >
                          {item.kind === "image" ? (
                            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
                          ) : (
                            <video muted playsInline preload="none" poster={item.poster}>
                              <source src={item.src} type={mediaTypeFor(item.src)} />
                            </video>
                          )}
                          <span className="gallery-tag">{item.caption}</span>
                          <span className="gallery-card-copy">
                            <strong>{item.title}</strong>
                            {item.meta ? <small>{item.meta}</small> : null}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="now" className="now-section">
            <div className="section-head">
              <p className="eyebrow fade-line">now</p>
              <h2 className="word-reveal" aria-label="Current loop.">
                {splitWords("Current loop.")}
              </h2>
            </div>
            <div className="now-list">
              {nowEntries.map((entry) => (
                <div className="now-row fade-line" key={`${entry.category}-${entry.item}`}>
                  <span>{entry.category}</span>
                  <p>{entry.item}</p>
                  {entry.since ? <em>{entry.since}</em> : null}
                </div>
              ))}
            </div>
          </section>

          <section id="closing" className="closing-section">
            <p className="eyebrow fade-line">end</p>
            <h2 className="word-reveal" aria-label="Not trying to look impressive. Trying to become undeniable.">
              {splitWords("Not trying to look impressive. Trying to become undeniable.")}
            </h2>
            <div className="closing-links fade-line">
              <a ref={helloRef} href="mailto:aaryankakad1@gmail.com" className="magnetic primary-action">Email me</a>
              <a href="https://github.com/AKMessi" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://x.com/aaryan_kakad" target="_blank" rel="noreferrer">X</a>
              <a href="https://youtube.com/@MachineLearningWithAaryan" target="_blank" rel="noreferrer">ML YouTube</a>
              <a href="https://youtube.com/@AaryanKakad" target="_blank" rel="noreferrer">Personal YouTube</a>
              <a href="https://www.linkedin.com/in/aaryankakad/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>Aaryan Kakad</span>
          <button type="button" onClick={() => setEgg(true)}>hidden room</button>
          <span>2026</span>
        </footer>
      </div>

      {detail ? (
        <div className="modal-shell" role="dialog" aria-modal="true">
          <article className="detail-panel">
            <button type="button" className="close-button" onClick={() => setDetail(null)}>close</button>
            <div className="detail-image media-frame">
              <Image src={detail.image} alt={`${detail.title} screenshot`} fill sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
            <div className="detail-copy">
              <p className="eyebrow">{detail.kind}</p>
              <h2>{detail.title}</h2>
              <p>{detail.sentence}</p>
              <p>{detail.detail}</p>
              {detail.href ? <a href={detail.href} target="_blank" rel="noreferrer">{detail.linkLabel ?? "open repo"}</a> : null}
            </div>
          </article>
        </div>
      ) : null}

      {activeLightbox ? (
        <div className="modal-shell" role="dialog" aria-modal="true">
          <div className="lightbox">
            <button type="button" className="close-button" onClick={() => setLightbox(null)}>close</button>
            <button type="button" className="light-nav prev" onClick={prevLightbox}>prev</button>
            <button type="button" className="light-nav next" onClick={nextLightbox}>next</button>
            <div className="light-media media-frame">
              {activeLightbox.kind === "image" ? (
                <Image src={activeLightbox.src} alt={activeLightbox.alt} fill sizes="96vw" />
              ) : (
                <video controls autoPlay playsInline poster={activeLightbox.poster}>
                  <source src={activeLightbox.src} type={mediaTypeFor(activeLightbox.src)} />
                </video>
              )}
            </div>
            <div className="light-copy">
              {activeLightbox.meta ? <span>{activeLightbox.meta}</span> : null}
              <h3>{activeLightbox.title}</h3>
              <p>{activeLightbox.story ?? activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      ) : null}

      {egg ? (
        <div className="modal-shell" role="dialog" aria-modal="true">
          <div className="egg-panel">
            <button type="button" className="close-button" onClick={() => setEgg(false)}>close</button>
            <div className="egg-image media-frame">
              <Image src="/media/childhood.webp" alt="Aaryan as a child in a black suit" fill sizes="360px" />
            </div>
            <p>small me was already overdressed for the internet.</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

declare global {
  interface Window {
    __aaryanKonami?: string[];
  }
}
