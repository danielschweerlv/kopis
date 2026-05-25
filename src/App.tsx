import {
  AudioLines,
  CalendarDays,
  ChevronDown,
  Clock3,
  Download,
  FileText,
  FolderOpen,
  Gauge,
  Landmark,
  Layers3,
  ListChecks,
  Moon,
  Pause,
  Play,
  Rocket,
  Scale,
  ScrollText,
  ShieldCheck,
  Sun,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  borrowerTrustPrinciples,
  borrowerTrustRows,
  competitorRows,
  consentFlow,
  fundsFlowRows,
  growthItems,
  gtmPhases,
  legalQuestions,
  mvpRows,
  nextSevenDays,
  nonClaims,
  ownerMap,
  plainEnglishBriefs,
  pilotFacts,
  pilotTimeline,
  routes,
  whatIsKopis,
  type FactCard,
  type MatrixRow,
  type RouteDefinition,
  type RouteId,
  type TimelineItem,
  type WorkItem,
} from "./data/warRoomData";
import {
  topMarketPlayers,
  legalSequencing,
  legalWorkstreams,
  patentAngles,
} from "./data/legalMarketData";
import {
  buyerNeeds,
} from "./data/gtmDiligenceData";

type ThemeMode = "night" | "day";

const DAY_UNICORN_PROJECT_ID = "qTiAlX0sxkuBOAiL7qHL";
const DAY_UNICORN_IFRAME_URL = `https://unicorn.studio/embed/${DAY_UNICORN_PROJECT_ID}`;
const UNICORN_SCRIPT_ID = "unicorn-studio-runtime";
const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
const NIGHT_SPLINE_URL = "https://my.spline.design/liquidgradientabstractbackground-gEjylYLumN1b1CUcuIb8DyUA";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

const iconByRoute: Record<RouteId, LucideIcon> = {
  "command-brief": Target,
  "what-is-kopis": FileText,
  "legal-path": Scale,
  "market-competitors": TrendingUp,
  "build-pilot": Gauge,
  "growth-system": Rocket,
  "borrower-trust": ShieldCheck,
  "next-moves": ListChecks,
  "investor-kit": FolderOpen,
};

const topNavLabelByRoute: Record<RouteId, string> = {
  "command-brief": "Kopis",
  "what-is-kopis": "Product",
  "legal-path": "Legal",
  "borrower-trust": "Borrower",
  "market-competitors": "Market",
  "build-pilot": "Pilot",
  "growth-system": "GTM",
  "next-moves": "Plan",
  "investor-kit": "Investor",
};

const routeByPath = new Map(routes.map((route) => [route.path, route]));

type IpClock = {
  time: string;
  zone: string;
};

function resolveRoute(pathname: string) {
  if (pathname === "/") {
    return routes[0];
  }

  return routeByPath.get(pathname) ?? routes[0];
}

function LogoMark({
  theme,
  onNavigate,
}: {
  theme: ThemeMode;
  onNavigate?: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) {
  const logoSrc = theme === "day" ? "/brand/kopis-logo-day.png" : "/brand/kopis-logo-night.png";

  return (
    <a
      className="brand"
      href="/command-brief"
      onClick={onNavigate ? (event) => onNavigate(event, "/command-brief") : undefined}
      aria-label="KOPIS War Room home"
    >
      <span className="brand-logo-shell" aria-hidden="true">
        <img className="brand-logo" src={logoSrc} alt="" />
      </span>
      <span className="brand-subtitle">War Room</span>
    </a>
  );
}

function ThemeToggle({
  theme,
  onThemeChange,
  compact = false,
}: {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  compact?: boolean;
}) {
  const options: { label: string; value: ThemeMode; icon: LucideIcon }[] = [
    { label: "Day", value: "day", icon: Sun },
    { label: "Night", value: "night", icon: Moon },
  ];

  return (
    <div className={compact ? "theme-toggle compact" : "theme-toggle"} aria-label="War Room theme">
      {!compact && <span>Theme</span>}
      <div role="group" aria-label="Day or night color scheme">
        {options.map(({ label, value, icon: Icon }) => (
          <button
            aria-pressed={theme === value}
            key={value}
            onClick={() => onThemeChange(value)}
            type="button"
          >
            <Icon size={compact ? 13 : 15} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function NavLink({
  route,
  active,
  onNavigate,
}: {
  route: RouteDefinition;
  active: boolean;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) {
  const Icon = iconByRoute[route.id];
  const navLabel = topNavLabelByRoute[route.id];

  return (
    <a
      className="nav-link"
      data-accent={route.accent}
      href={route.path}
      onClick={(event) => onNavigate(event, route.path)}
      aria-current={active ? "page" : undefined}
      aria-label={navLabel}
    >
      <Icon size={16} aria-hidden="true" />
      <span>{navLabel}</span>
    </a>
  );
}

function RouteMenu({
  activeRoute,
  onNavigate,
}: {
  activeRoute: RouteDefinition;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) {
  return (
    <details className="route-menu">
      <summary>
        <span className="route-menu-logo-shell" aria-hidden="true">
          <img className="route-menu-logo" src="/brand/kopis-logo-night.png" alt="" />
        </span>
        <span className="route-menu-current">
          <span>Room</span>
          <strong>{topNavLabelByRoute[activeRoute.id]}</strong>
        </span>
        <ChevronDown size={15} aria-hidden="true" />
      </summary>
      <div className="route-menu-panel" aria-label="War Room rooms">
        {routes.map((route) => {
          const Icon = iconByRoute[route.id];
          const navLabel = topNavLabelByRoute[route.id];

          return (
            <a
              aria-current={activeRoute.id === route.id ? "page" : undefined}
              className="route-menu-link"
              data-accent={route.accent}
              href={route.path}
              key={route.id}
              onClick={(event) => {
                onNavigate(event, route.path);
                event.currentTarget.closest("details")?.removeAttribute("open");
              }}
            >
              <Icon size={17} aria-hidden="true" />
              <span>
                <strong>{navLabel}</strong>
                <small>{route.label}</small>
              </span>
            </a>
          );
        })}
      </div>
    </details>
  );
}

function useUnicornStudio(active: boolean) {
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    if (!active) {
      setUseIframeFallback(false);
      return;
    }

    let cancelled = false;
    let fallbackTimer = 0;
    let observer: MutationObserver | null = null;

    const initialize = () => {
      const target = document.querySelector<HTMLElement>(`[data-us-project="${DAY_UNICORN_PROJECT_ID}"]`);
      if (cancelled || !window.UnicornStudio?.init || !target || target.children.length > 0) {
        return;
      }

      observer = new MutationObserver(() => {
        if (target.children.length > 0) {
          window.UnicornStudio!.isInitialized = true;
          setUseIframeFallback(false);
        }
      });
      observer.observe(target, { childList: true });

      try {
        window.UnicornStudio.isInitialized = false;
        window.UnicornStudio.init();
      } catch (error) {
        window.UnicornStudio.isInitialized = false;
        console.warn("KOPIS day background failed to initialize", error);
        return;
      }

      fallbackTimer = window.setTimeout(() => {
        if (!cancelled && target.children.length > 0) {
          window.UnicornStudio!.isInitialized = true;
          setUseIframeFallback(false);
        } else if (!cancelled) {
          setUseIframeFallback(true);
        }
      }, 2500);
    };

    const existingScript = document.getElementById(UNICORN_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.UnicornStudio?.init) {
        initialize();
      } else {
        existingScript.addEventListener("load", initialize, { once: true });
      }

      return () => {
        cancelled = true;
        window.clearTimeout(fallbackTimer);
        observer?.disconnect();
        existingScript.removeEventListener("load", initialize);
      };
    }

    window.UnicornStudio = window.UnicornStudio ?? { isInitialized: false };

    const script = document.createElement("script");
    script.id = UNICORN_SCRIPT_ID;
    script.src = UNICORN_SCRIPT_SRC;
    script.async = true;
    script.onload = initialize;
    (document.head || document.body).appendChild(script);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      observer?.disconnect();
      script.removeEventListener("load", initialize);
    };
  }, [active]);

  return useIframeFallback;
}

function AmbientField({ theme }: { theme: ThemeMode }) {
  const useDayIframeFallback = useUnicornStudio(theme === "day");

  return (
    <div className="ambient-field" data-theme={theme} aria-hidden="true">
      <div className="ambient-layer ambient-layer-day" style={{ opacity: theme === "day" ? 1 : 0 }}>
        {theme === "day" && useDayIframeFallback && (
          <iframe
            allow="autoplay; fullscreen"
            className="unicorn-iframe-background"
            frameBorder="0"
            loading="eager"
            src={DAY_UNICORN_IFRAME_URL}
            title="KOPIS day ambient background"
          />
        )}
        <div className="unicorn-background" data-us-project={DAY_UNICORN_PROJECT_ID} />
      </div>
      <div className="ambient-layer ambient-layer-night" style={{ opacity: theme === "night" ? 1 : 0 }}>
        <iframe
          allow="autoplay; fullscreen"
          className="spline-background"
          frameBorder="0"
          id="aura-spline"
          loading="eager"
          src={NIGHT_SPLINE_URL}
          title="KOPIS night ambient background"
        />
      </div>
      <div className="ambient-scrim" />
    </div>
  );
}

function TopBar({
  activeRoute,
}: {
  activeRoute: RouteDefinition;
}) {
  const clock = useIpClock();

  return (
    <header className="top-bar" aria-label="War Room context">
      <div>
        <span>Founder</span>
        <strong>Joshua Walters</strong>
      </div>
      <div>
        <span>Local time</span>
        <strong>{clock.time}</strong>
        <small>{clock.zone}</small>
      </div>
      <div>
        <span>Active room</span>
        <strong>{activeRoute.label}</strong>
      </div>
    </header>
  );
}

function NavigationHeader({
  activeRoute,
  theme,
  onThemeChange,
  onNavigate,
}: {
  activeRoute: RouteDefinition;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) {
  return (
    <header className="site-header" aria-label="KOPIS navigation">
      <div className="site-header-sheen" aria-hidden="true" />
      <nav className="site-nav">
        <LogoMark theme={theme} onNavigate={onNavigate} />
        <div className="site-nav-links" aria-label="War Room routes">
          {routes.map((route) => (
            <NavLink active={activeRoute.id === route.id} key={route.id} onNavigate={onNavigate} route={route} />
          ))}
        </div>
        <RouteMenu activeRoute={activeRoute} onNavigate={onNavigate} />
        <div className="site-header-actions">
          <ThemeToggle compact onThemeChange={onThemeChange} theme={theme} />
        </div>
      </nav>
    </header>
  );
}

function formatClock(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
    timeZoneName: "short",
  }).format(new Date());
}

function useIpClock() {
  const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local timezone";
  const [clock, setClock] = useState<IpClock>(() => ({
    time: formatClock(browserZone),
    zone: browserZone,
  }));

  useEffect(() => {
    const updateClock = () => {
      setClock({
        time: formatClock(browserZone),
        zone: browserZone,
      });
    };

    updateClock();
    const intervalId = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [browserZone]);

  return clock;
}

function PageHeader({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string;
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <section className="page-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {action}
    </section>
  );
}

function Panel({
  title,
  eyebrow,
  children,
  icon,
  className = "",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-head">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>
        {icon && <div className="panel-icon">{icon}</div>}
      </div>
      {children}
    </section>
  );
}

function FactGrid({ items }: { items: FactCard[] }) {
  return (
    <div className="fact-grid">
      {items.map((item) => (
        <article key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <div className="work-list">
      {items.map((item) => (
        <article key={item.title}>
          <div>
            <strong>{item.title}</strong>
            {item.meta && <span>{item.meta}</span>}
          </div>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function MatrixTable({
  rows,
  headers,
}: {
  rows: MatrixRow[];
  headers: [string, string, string, string?];
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => header && <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.first}>
              <td data-label={headers[0]}>
                <strong>{row.first}</strong>
              </td>
              <td data-label={headers[1]}>{row.second}</td>
              <td data-label={headers[2] || "Detail"}>{row.third}</td>
              {headers[3] && <td data-label={headers[3]}>{row.fourth}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.date}-${item.title}`}>
          <span>{item.date}</span>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function PlainEnglishBrief({ routeId }: { routeId: RouteId }) {
  return (
    <Panel title="Here is the breakdown" className="plain-brief">
      <WorkList items={plainEnglishBriefs[routeId]} />
    </Panel>
  );
}

function BriefCardStack({ items }: { items: WorkItem[] }) {
  return (
    <div className="brief-card-stack">
      {items.map((item) => (
        <article className="brief-card" key={item.title}>
          <div>
            <strong>{item.title}</strong>
          </div>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function WhatIsKopisFocus() {
  const briefItems = plainEnglishBriefs["what-is-kopis"];

  return (
    <section className="kopis-focus" aria-labelledby="kopis-plain-read-title">
      <div className="kopis-focus-head">
        <h2 id="kopis-plain-read-title">Here is the breakdown</h2>
      </div>
      <div className="kopis-video-layout">
        <BriefCardStack items={briefItems.slice(0, 2)} />
        <VideoFrame compact />
        <BriefCardStack items={briefItems.slice(2, 4)} />
      </div>
    </section>
  );
}

function DottedFrame({ children, label, className = "" }: { children: ReactNode; label: string; className?: string }) {
  return (
    <section className={`dotted-frame ${className}`} aria-label={label}>
      <div className="dot-border" aria-hidden="true" />
      {children}
    </section>
  );
}

function formatAudioTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const wholeSeconds = Math.floor(seconds);
  const minutes = Math.floor(wholeSeconds / 60);
  const remainingSeconds = String(wholeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function AudioVisualizer({ compact = false }: { compact?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const bars = useMemo(
    () => {
      const barCount = compact ? 88 : 68;
      const peakHeight = compact ? 118 : 72;
      const minHeight = compact ? 8 : 4;

      return Array.from({ length: barCount }, (_, index) => {
        const center = barCount / 2;
        const distance = Math.abs(index - center) / center;
        const pulse = Math.abs(Math.sin(index * 0.61)) * 0.7 + Math.abs(Math.sin(index * 0.19)) * 0.5;
        const envelope = Math.max(0.03, Math.pow(1 - distance, 1.45));
        const height = Math.max(minHeight, envelope * peakHeight * (0.44 + pulse));
        return { index, height };
      });
    },
    [compact],
  );
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const audio = audioRef.current;

      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    }, 200);

    return () => window.clearInterval(intervalId);
  }, [isPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      void audio.play();
      return;
    }

    audio.pause();
  };

  const scrubAudio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = Number(event.currentTarget.value);
    const audio = audioRef.current;

    setCurrentTime(nextTime);

    if (audio && Number.isFinite(nextTime)) {
      audio.currentTime = nextTime;
    }
  };

  return (
    <DottedFrame
      label="Kopis intro audio"
      className={`${compact ? "audio-frame compact" : "audio-frame"}${isPlaying ? " is-playing" : ""}`}
    >
      <div className="media-label">
        <AudioLines size={18} aria-hidden="true" />
        <span>Kopis Intro Audio</span>
      </div>
      <div className="waveform" aria-hidden="true">
        {bars.map((bar) => (
          <span key={bar.index} style={{ "--dot-h": `${bar.height}px`, "--dot-i": bar.index } as CSSProperties} />
        ))}
      </div>
      <div className="audio-footer">
        <audio
          className="war-room-audio-source"
          onEnded={(event) => {
            event.currentTarget.currentTime = 0;
            setIsPlaying(false);
            setCurrentTime(0);
          }}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          preload="metadata"
          ref={audioRef}
          src="/media/kopis-introaudio.wav"
        />
        <button
          aria-label={isPlaying ? "Pause Kopis intro audio" : "Play Kopis intro audio"}
          className="audio-control-btn"
          onClick={togglePlayback}
          type="button"
        >
          {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        </button>
        <div className="audio-progress-wrap">
          <input
            aria-label="Kopis intro audio progress"
            className="audio-progress"
            max={duration || 0}
            min="0"
            onChange={scrubAudio}
            step="0.1"
            style={{ "--audio-progress": `${progress}%` } as CSSProperties}
            type="range"
            value={duration > 0 ? Math.min(currentTime, duration) : 0}
          />
        </div>
        <time className="audio-time">
          {formatAudioTime(currentTime)} / {formatAudioTime(duration)}
        </time>
      </div>
    </DottedFrame>
  );
}

function VideoFrame({ compact = false }: { compact?: boolean }) {
  return (
    <DottedFrame label="Kopis thesis explainer video" className={compact ? "video-frame compact" : "video-frame"}>
      <div className="media-label">
        <Video size={18} aria-hidden="true" />
        <span>Kopis thesis explainer</span>
      </div>
      <video controls preload="metadata" src="/media/kopis-thesis-explainer.mp4" />
    </DottedFrame>
  );
}

function CommandBriefPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <section className="landing-stage">
      <section className="landing-grid">
        <div className="landing-copy">
          <span className="eyebrow landing-eyebrow">Founder Command Center</span>
          <h1>
            KOPIS
            <br />
            War Room
          </h1>
          <p>
            Payroll linked repayment system. Third-party lenders integrate once, then orchestrate
            borrower-consented repayment across payroll systems with compliance, reconciliation, and job-change
            continuity.
          </p>
        </div>
        <AudioVisualizer />
      </section>
      <PlainEnglishBrief routeId="command-brief" />
    </section>
  );
}

function WhatIsKopisPage() {
  return (
    <>
      <PageHeader
        eyebrow="What Kopis Is"
        title="Payroll linked repayment system."
        body="Kopis is the orchestration layer for borrower-consented wage repayment, compliance controls, servicing workflows, reconciliation, and job-change continuity."
      />
      <WhatIsKopisFocus />
      <div className="product-definition-row">
        <Panel
          className="product-definition-panel"
          title="Product definition"
          eyebrow="Core answer"
          icon={<Layers3 size={18} aria-hidden="true" />}
        >
          <WorkList items={whatIsKopis.slice(0, 2)} />
        </Panel>
      </div>
    </>
  );
}

function LegalPathPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Review Plan"
        title="Legal is a product workstream."
        body="The rail should not make final legal claims until counsel narrows wage assignment, funds flow, servicing, middleware, revocation, and pilot-state scope."
      />
      <PlainEnglishBrief routeId="legal-path" />
      <div className="two-column">
        <Panel title="Counsel queue" eyebrow="Questions to resolve" icon={<Scale size={18} aria-hidden="true" />}>
          <WorkList items={legalQuestions} />
        </Panel>
        <Panel title="Funds-flow map" eyebrow="Role discipline" icon={<Landmark size={18} aria-hidden="true" />}>
          <MatrixTable rows={fundsFlowRows} headers={["Actor", "Function", "Open point"]} />
        </Panel>
      </div>
    </>
  );
}

function MarketCompetitorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Market Map + Competitors"
        title="The wedge is orchestration, not payroll access alone."
        body="Kopis competes against lender internal builds, employer-linked lenders, payroll APIs used directly, and repayment-adjacent rails."
      />
      <PlainEnglishBrief routeId="market-competitors" />
      <Panel title="Competitive map" eyebrow="Landscape" icon={<TrendingUp size={18} aria-hidden="true" />}>
        <MatrixTable rows={competitorRows} headers={["Category", "Examples", "What they own", "Kopis wedge"]} />
      </Panel>
      <MarketPlayerDocument />
    </>
  );
}

function MarketPlayerDocument() {
  return (
    <section className="panel market-document" aria-labelledby="market-player-document-title">
      <div className="panel-head">
        <div>
          <span className="eyebrow">Top five market players</span>
          <h2 id="market-player-document-title">What they do well, and where Kopis is different</h2>
        </div>
        <div className="panel-icon">
          <TrendingUp size={18} aria-hidden="true" />
        </div>
      </div>
      <div className="market-document-intro">
        <p>
          The useful comparison is not who has payroll access. It is who owns lender repayment orchestration after
          consent: rules, servicing, reconciliation, exceptions, notices, and job-change continuity.
        </p>
      </div>
      <div className="market-player-list">
        {topMarketPlayers.map((player) => (
          <article className="market-player-row" key={player.name}>
            <header>
              <span>{player.category}</span>
              <h3>{player.name}</h3>
            </header>
            <div>
              <h4>What they do well</h4>
              <p>{player.doesWell}</p>
            </div>
            <div>
              <h4>Where they stop</h4>
              <p>{player.whereTheyStop}</p>
            </div>
            <div>
              <h4>Kopis read</h4>
              <p>{player.kopisRead}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BuildPilotPage() {
  return (
    <>
      <PageHeader
        eyebrow="MVP + Pilot Plan"
        title="Scope the smallest credible repayment rail."
        body="The MVP should prove consented repayment, reconciliation, exception handling, and manual job-change recovery without overbuilding direct payroll integrations."
      />
      <PlainEnglishBrief routeId="build-pilot" />
      <FactGrid items={pilotFacts} />
      <div className="two-column">
        <Panel title="MVP scope" eyebrow="Build versus defer" icon={<Gauge size={18} aria-hidden="true" />}>
          <MatrixTable rows={mvpRows} headers={["Area", "Build", "Defer"]} />
        </Panel>
        <Panel title="Pilot timeline" eyebrow="Near-term sequence" icon={<CalendarDays size={18} aria-hidden="true" />}>
          <Timeline items={pilotTimeline} />
        </Panel>
      </div>
    </>
  );
}

function GrowthSystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lender GTM Plan"
        title="Sell loss reduction with lower operational lift."
        body="The primary buyer is the lender. Borrowers and employers matter, but they support the lender proof story rather than replacing it."
      />
      <PlainEnglishBrief routeId="growth-system" />
      <div className="two-column">
        <Panel title="GTM operating logic" eyebrow="Lender-led" icon={<Rocket size={18} aria-hidden="true" />}>
          <WorkList items={growthItems} />
        </Panel>
        <Panel title="Phases" eyebrow="Commercial path" icon={<TrendingUp size={18} aria-hidden="true" />}>
          <Timeline items={gtmPhases} />
        </Panel>
      </div>
    </>
  );
}

function BorrowerTrustPage() {
  return (
    <>
      <PageHeader
        eyebrow="Borrower Trust + Consent"
        title="The borrower must understand the repayment before they authorize it."
        body="Kopis can be lender-facing infrastructure, but the borrower still needs a plain explanation of the deduction, data access, revocation path, paystub label, job-change flow, and support channel."
      />
      <PlainEnglishBrief routeId="borrower-trust" />
      <div className="two-column">
        <Panel title="Trust rules" eyebrow="Borrower-facing standard" icon={<ShieldCheck size={18} aria-hidden="true" />}>
          <WorkList items={borrowerTrustPrinciples} />
        </Panel>
        <Panel title="Consent flow" eyebrow="Before authorization" icon={<ScrollText size={18} aria-hidden="true" />}>
          <Timeline items={consentFlow} />
        </Panel>
      </div>
      <Panel title="Questions the borrower will actually ask" eyebrow="Answer these before Reddit does">
        <MatrixTable rows={borrowerTrustRows} headers={["Question", "Plain answer", "Proof needed"]} />
      </Panel>
    </>
  );
}

function NextMovesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Operating Plan"
        title="The next week should narrow risk, not expand scope."
        body="Prioritize legal boundaries, middleware permission, pilot definition, and the lender diligence packet before adding new product surface area."
      />
      <PlainEnglishBrief routeId="next-moves" />
      <div className="two-column">
        <Panel title="Next seven days" icon={<Clock3 size={18} aria-hidden="true" />}>
          <Timeline items={nextSevenDays} />
        </Panel>
        <Panel title="Owner map" icon={<ListChecks size={18} aria-hidden="true" />}>
          <MatrixTable rows={ownerMap} headers={["Owner", "Workstream", "Decision right"]} />
        </Panel>
      </div>
    </>
  );
}

function InvestorKitPage() {
  return (
    <section className="investor-document-route" aria-label="KOPIS investor document">
      <iframe className="investor-document" src="/docs/KOPIS.pdf" title="KOPIS investor document" />
    </section>
  );
}

function RouteContent({
  route,
  onNavigate,
}: {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}) {
  switch (route.id) {
    case "what-is-kopis":
      return <WhatIsKopisPage />;
    case "legal-path":
      return <LegalPathPage />;
    case "market-competitors":
      return <MarketCompetitorsPage />;
    case "build-pilot":
      return <BuildPilotPage />;
    case "growth-system":
      return <GrowthSystemPage />;
    case "borrower-trust":
      return <BorrowerTrustPage />;
    case "next-moves":
      return <NextMovesPage />;
    case "investor-kit":
      return <InvestorKitPage />;
    case "command-brief":
    default:
      return <CommandBriefPage onNavigate={onNavigate} />;
  }
}

function ExportDocumentHeader({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) {
  return (
    <header className="export-doc-header">
      <div className="export-doc-brand">
        <span className="brand-word">KOPIS</span>
        <span className="brand-subtitle">War Room</span>
      </div>
      <div>
        <div className="export-doc-eyebrow">
          <Icon size={13} aria-hidden="true" />
          <span>Confidential · Pre-pilot · All legal statements provisional until counsel review</span>
        </div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <button className="export-print-btn" onClick={() => window.print()} type="button">
        <Download size={14} aria-hidden="true" />
        <span>Print / Save PDF</span>
      </button>
    </header>
  );
}

function CounselPacketView() {
  return (
    <>
      <ExportDocumentHeader
        icon={Scale}
        title="KOPIS Counsel Review Packet"
        subtitle="Legal workstreams, counsel queue, funds-flow analysis, and sequencing. All items provisional until counsel review."
      />
      <div className="two-column">
        <Panel title="Counsel queue" eyebrow="Questions to resolve">
          <WorkList items={legalQuestions} />
        </Panel>
        <Panel title="Funds-flow map" eyebrow="Role discipline">
          <MatrixTable rows={fundsFlowRows} headers={["Actor", "Function", "Open point"]} />
        </Panel>
      </div>
      <Panel title="Counsel package output" eyebrow="Documents to produce">
        <div className="document-grid">
          <article>Five-state wage assignment and revocation memo</article>
          <article>Money transmitter and control-of-funds analysis</article>
          <article>Servicing role classification by pilot state</article>
          <article>Middleware repayment terms review</article>
          <article>Borrower authorization and revocation draft</article>
          <article>IP claim screen for continuity and rules engine</article>
        </div>
      </Panel>
      <Panel title="Legal workstreams" eyebrow="Eight tracks">
        <WorkList items={legalWorkstreams} />
      </Panel>
      <Panel title="Legal sequencing" eyebrow="Eight steps">
        <Timeline items={legalSequencing} />
      </Panel>
      <Panel title="Borrower consent review" eyebrow="Trust package">
        <Timeline items={consentFlow} />
      </Panel>
      <Panel title="Patent strategy" eyebrow="Narrow and defensible">
        <WorkList items={patentAngles} />
      </Panel>
    </>
  );
}

function LenderPilotView() {
  return (
    <>
      <ExportDocumentHeader
        icon={Gauge}
        title="KOPIS Lender Pilot Brief"
        subtitle="Product overview, pilot scope, MVP design, timeline, and success criteria for the first lender cohort."
      />
      <Panel title="What Kopis is" eyebrow="Product definition">
        <WorkList items={whatIsKopis} />
      </Panel>
      <Panel title="Non-claims" eyebrow="Positioning guardrails">
        <ul className="check-list">
          {nonClaims.map((claim) => (
            <li key={claim}>{claim}</li>
          ))}
        </ul>
      </Panel>
      <FactGrid items={pilotFacts} />
      <div className="two-column">
        <Panel title="MVP scope" eyebrow="Build versus defer">
          <MatrixTable rows={mvpRows} headers={["Area", "Build", "Defer"]} />
        </Panel>
        <Panel title="Pilot timeline" eyebrow="Near-term sequence">
          <Timeline items={pilotTimeline} />
        </Panel>
      </div>
      <Panel title="What each buyer cares about" eyebrow="Buyer matrix">
        <MatrixTable rows={buyerNeeds} headers={["Buyer", "Primary concern", ""]} />
      </Panel>
      <Panel title="GTM phases" eyebrow="Commercial path">
        <Timeline items={gtmPhases} />
      </Panel>
      <Panel title="Borrower trust package" eyebrow="Consent and paystub clarity">
        <WorkList items={borrowerTrustPrinciples} />
      </Panel>
    </>
  );
}

function InvestorBriefView() {
  return <InvestorKitPage />;
}

function App() {
  const [activeRoute, setActiveRoute] = useState(() => resolveRoute(window.location.pathname));
  const [theme, setTheme] = useState<ThemeMode>("night");
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setPathname(path);
      setActiveRoute(resolveRoute(path));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = pathname.startsWith("/export/") ? "day" : theme;
  }, [theme, pathname]);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setPathname(path);
    setActiveRoute(resolveRoute(path));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    navigate(path);
  };

  const exportType = pathname.startsWith("/export/") ? pathname.slice("/export/".length) : null;
  if (exportType !== null) {
    return (
      <main className="export-mode" data-theme="day">
        <AmbientField theme="day" />
        <header className="export-top-bar">
          <LogoMark theme="day" onNavigate={handleNavigate} />
          <span className="export-back-hint">Export view — ⌘P or browser Print to save as PDF</span>
        </header>
        <div className="export-shell">
          {exportType === "counsel" && <CounselPacketView />}
          {exportType === "lender" && <LenderPilotView />}
          {exportType === "investor" && <InvestorBriefView />}
        </div>
      </main>
    );
  }

  return (
    <main className={`app-shell ${activeRoute.id === "command-brief" ? "landing-shell" : ""}`} data-theme={theme}>
      <AmbientField theme={theme} />
      <NavigationHeader
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onThemeChange={setTheme}
        theme={theme}
      />
      <section className="content-shell">
        {activeRoute.id !== "command-brief" && activeRoute.id !== "investor-kit" && (
          <TopBar activeRoute={activeRoute} />
        )}
        <RouteContent route={activeRoute} onNavigate={navigate} />
      </section>
    </main>
  );
}

export default App;
