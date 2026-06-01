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
import { useEffect, useRef, useState, type ReactNode } from "react";
import WaveSurfer from "wavesurfer.js";
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
  investorResources,
  brandAssets,
  routes,
  productLayers,
  marketSignals,
  whatIsKopis,
  type FactCard,
  type MatrixRow,
  type ResourceItem,
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
  brandThesis,
  claimsAnalysis,
  criticalPath,
  operatingPlan,
  seoArchitecture,
} from "./data/gtmDiligenceData";
import {
  alreadyExistsRows,
  counselGates,
  differenceRows,
  differenceWedge,
  repaymentFlow,
  systemLayers,
  techBoundaries,
  watchlistPlayers,
  workstreamRows,
} from "./data/rebuildData";

type ThemeMode = "night" | "day";
type EvidenceTone = "verified" | "likely" | "needs-counsel" | "assumption" | "next";

type OperatingStatusCard = {
  label: string;
  value: string;
  evidence: string;
  tone: EvidenceTone;
  body: string;
};

const iconByRoute: Record<RouteId, LucideIcon> = {
  thesis: Target,
  "already-exists": Layers3,
  competitors: TrendingUp,
  difference: Rocket,
  technology: Gauge,
  "next-30": ListChecks,
};

const topNavLabelByRoute: Record<RouteId, string> = {
  thesis: "Thesis",
  "already-exists": "Exists?",
  competitors: "Competitors",
  difference: "Difference",
  technology: "Technology",
  "next-30": "Next 30",
};

const routeByPath = new Map(routes.map((route) => [route.path, route]));

const commandBriefSignals = [
  {
    label: "Verified",
    title: "Product posture",
    body: "Payroll-linked repayment orchestration for third-party lenders; not a lender and not a payroll API.",
  },
  {
    label: "Needs counsel",
    title: "Legal gate",
    body: "Voluntary wage assignment, servicing role, money transmission, and pilot-state scope stay open until reviewed.",
  },
  {
    label: "Assumption",
    title: "Pilot wedge",
    body: "Personal or medical installment lenders are the first proving ground before broader credit categories.",
  },
  {
    label: "Next",
    title: "Proof order",
    body: "Confirm middleware permission, borrower consent language, reconciliation workflow, and one clean opt-in path.",
  },
];

const commandStatusCards: OperatingStatusCard[] = [
  {
    label: "Current stage",
    value: "Pre-pilot diligence",
    evidence: "Verified",
    tone: "verified",
    body: "Package the lender proof story while legal, middleware, consent, and reconciliation remain actively open.",
  },
  {
    label: "Biggest risk",
    value: "Counsel perimeter",
    evidence: "Needs counsel",
    tone: "needs-counsel",
    body: "Voluntary wage assignment, servicer role, money transmission, and pilot-state scope still need review.",
  },
  {
    label: "Pilot target",
    value: "Personal or medical installment lender",
    evidence: "Assumption",
    tone: "assumption",
    body: "The cleanest first wedge is a lender with measurable loss pressure and no in-house payroll rail.",
  },
  {
    label: "Next proof",
    value: "One consented repayment flow",
    evidence: "Next",
    tone: "next",
    body: "Show a borrower-authorized plan from consent through schedule, exception, reconciliation, and job-change handling.",
  },
];

const roomStatusCards: Record<Exclude<RouteId, "thesis">, OperatingStatusCard[]> = {
  "already-exists": [
    {
      label: "Market fact",
      value: "The behavior already exists",
      evidence: "Verified",
      tone: "verified",
      body: "Payroll deduction loans, paycheck-linked rails, and payroll APIs are all live products today.",
    },
    {
      label: "Honest read",
      value: "Kopis did not invent this",
      evidence: "Verified",
      tone: "verified",
      body: "The stronger pitch names the existing players instead of pretending payroll deduction is new.",
    },
    {
      label: "The opening",
      value: "Neutral lender operating layer",
      evidence: "Likely",
      tone: "likely",
      body: "No one owns the shared consent, compliance, servicing, and continuity layer across many lenders.",
    },
    {
      label: "Next proof",
      value: "Benchmark the rails",
      evidence: "Next",
      tone: "next",
      body: "Compare Highline, Truv, and the payroll middleware to show exactly where Kopis sits above them.",
    },
  ],
  competitors: [
    {
      label: "Closest comparator",
      value: "Highline",
      evidence: "Verified",
      tone: "verified",
      body: "Pay-by-paycheck repayment for lenders is the nearest direct match to the Kopis rail.",
    },
    {
      label: "Inputs, not rivals",
      value: "Pinwheel, Truv, Argyle, Atomic",
      evidence: "Likely",
      tone: "likely",
      body: "Payroll connectivity is something Kopis sits on top of, not something it tries to out-build.",
    },
    {
      label: "Category risk",
      value: "Fighting the wrong battle",
      evidence: "Assumption",
      tone: "assumption",
      body: "Treating payroll APIs as head-to-head rivals points the pitch in the wrong direction.",
    },
    {
      label: "Next proof",
      value: "Highline benchmark",
      evidence: "Next",
      tone: "next",
      body: "Compare neutrality, multi-lender support, compliance depth, and job-change coverage.",
    },
  ],
  difference: [
    {
      label: "Role",
      value: "Neutral layer for many lenders",
      evidence: "Verified",
      tone: "verified",
      body: "Kopis coordinates consent, rules, servicing, reconciliation, exceptions, and continuity.",
    },
    {
      label: "Boundary",
      value: "Not a lender, not a payroll API",
      evidence: "Verified",
      tone: "verified",
      body: "Kopis is not origination and not payroll connectivity. It is the work that sits above both.",
    },
    {
      label: "The wedge",
      value: "One integration, many payroll systems",
      evidence: "Likely",
      tone: "likely",
      body: "A lender connects once instead of rebuilding the same payroll plumbing on its own.",
    },
    {
      label: "Next proof",
      value: "One workflow, many providers",
      evidence: "Next",
      tone: "next",
      body: "Show one lender integration running consent and reconciliation across more than one payroll system.",
    },
  ],
  technology: [
    {
      label: "What it is",
      value: "Operating layer above payroll",
      evidence: "Verified",
      tone: "verified",
      body: "Eight layers turn a borrower's consent into a tracked, reconciled, recoverable repayment.",
    },
    {
      label: "Build first",
      value: "Smallest credible rail",
      evidence: "Likely",
      tone: "likely",
      body: "A lender API, consent, five pilot-state rules, reconciliation, and manual job-change re-linking.",
    },
    {
      label: "Boundary",
      value: "No overclaiming v1",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "No direct integrations everywhere, no 50-state compliance, and no funds movement until counsel confirms.",
    },
    {
      label: "Next proof",
      value: "One consented repayment flow",
      evidence: "Next",
      tone: "next",
      body: "Run a borrower-authorized plan from consent through schedule, reconciliation, and job-change handling.",
    },
  ],
  "next-30": [
    {
      label: "Operating principle",
      value: "Narrow risk before scope",
      evidence: "Verified",
      tone: "verified",
      body: "The next month removes unknowns instead of adding product surface area.",
    },
    {
      label: "Critical path",
      value: "Counsel, middleware, lender LOI",
      evidence: "Likely",
      tone: "likely",
      body: "The work order runs through counsel, terms review, pilot-state choice, and a design-partner commitment.",
    },
    {
      label: "Blocker",
      value: "State and role analysis",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "External claims stay provisional until counsel resolves wage assignment, servicing, and funds flow.",
    },
    {
      label: "Next output",
      value: "Diligence packet v1",
      evidence: "Next",
      tone: "next",
      body: "Assemble the counsel queue, pilot one-pager, borrower trust draft, and competitive benchmark.",
    },
  ],
};

const commandQueueItems = [
  {
    title: "Does this already exist?",
    body: "See what is already on the market and where Kopis still has a clear opening.",
    meta: "Honest read",
    path: "/already-exists",
    icon: Layers3,
  },
  {
    title: "Who are the competitors?",
    body: "The five players to know, what they do well, and how Kopis is different.",
    meta: "Market map",
    path: "/competitors",
    icon: TrendingUp,
  },
  {
    title: "What is the technology?",
    body: "The layers, the repayment flow, and the smallest version worth building first.",
    meta: "Product",
    path: "/technology",
    icon: Gauge,
  },
  {
    title: "What do we do next?",
    body: "The 30-day operating plan, the counsel gates, and who owns each workstream.",
    meta: "Operating order",
    path: "/next-30",
    icon: ListChecks,
  },
];

const buyerProofRows: MatrixRow[] = [
  {
    first: "Lender CFO",
    second: "Loss rate reduction, collection cost per loan, unit economics per vertical.",
    third: "Comparable baseline, pilot cohort economics, success threshold, and commercial conversion math.",
  },
  {
    first: "Lender Head of Servicing",
    second: "Reconciliation clarity, exception handling, integration effort.",
    third: "Repayment event ledger, exception queue, support workflow, and operational lift estimate.",
  },
  {
    first: "Lender Compliance",
    second: "State coverage, consent framework, audit trail, revocation mechanics.",
    third: "Counsel packet, disclosure versions, authorization log, and revocation-state rules.",
  },
  {
    first: "Lender CTO",
    second: "API quality, SLA, sandbox, time to pilot.",
    third: "API flow, middleware terms, sandbox plan, integration checklist, and data-handling schedule.",
  },
];

const investorStatusCards: OperatingStatusCard[] = [
  {
    label: "Investor posture",
    value: "Pre-pilot diligence",
    evidence: "Verified",
    tone: "verified",
    body: "The packet should show the wedge, work order, proof gaps, and counsel gates before fundraising claims harden.",
  },
  {
    label: "Primary risk",
    value: "Legal perimeter unresolved",
    evidence: "Needs counsel",
    tone: "needs-counsel",
    body: "Voluntary wage assignment, servicing role, funds flow, middleware terms, and pilot-state scope remain provisional.",
  },
  {
    label: "Proof order",
    value: "Pilot before broad category claim",
    evidence: "Assumption",
    tone: "assumption",
    body: "The strongest investor story comes after one lender cohort proves repayment lift and operational control.",
  },
  {
    label: "Next output",
    value: "Diligence packet v1",
    evidence: "Next",
    tone: "next",
    body: "Package counsel queue, lender pilot brief, borrower trust draft, market map, and PDF materials together.",
  },
];

const investorPacketRows: MatrixRow[] = [
  {
    first: "Thesis",
    second: "Payroll linked repayment exists, but lenders still lack a neutral consent, compliance, servicing, reconciliation, and continuity layer.",
    third: "Use Product, Market, and GTM rooms as source material.",
  },
  {
    first: "Legal queue",
    second: "Do not hide wage assignment, money transmitter, servicer role, middleware terms, or pilot-state uncertainty.",
    third: "Export counsel packet and mark all unresolved items counsel-dependent.",
  },
  {
    first: "Pilot plan",
    second: "Define a narrow personal or medical installment-lender cohort, baseline, success threshold, and failure thresholds.",
    third: "Export lender brief before any investor-forward growth claim.",
  },
  {
    first: "Trust layer",
    second: "Show borrower authorization, paystub explanation, revocation path, support path, and job-change continuity.",
    third: "Pair the investor narrative with borrower-facing proof of comprehension.",
  },
];

const exportPacketLinks = [
  {
    title: "Counsel Packet",
    body: "Legal workstreams, funds-flow questions, sequencing, and provisional state analysis.",
    href: "/export/counsel",
    icon: Scale,
  },
  {
    title: "Lender Pilot Brief",
    body: "MVP scope, cohort, implementation lift, success criteria, and buyer proof.",
    href: "/export/lender",
    icon: Gauge,
  },
  {
    title: "Investor Brief",
    body: "Product thesis, wedge, legal queue, pilot path, and operating sequence.",
    href: "/export/investor",
    icon: TrendingUp,
  },
];

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
      href="/thesis"
      onClick={onNavigate ? (event) => onNavigate(event, "/thesis") : undefined}
      aria-label="KOPIS War Room home"
    >
      <span className="brand-logo-shell" aria-hidden="true">
        <img className="brand-logo" src={logoSrc} alt="" />
      </span>
      <span className="brand-subtitle">War Room</span>
    </a>
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

function AmbientField({ theme }: { theme: ThemeMode }) {
  return (
    <div className="ambient-field" data-theme={theme} aria-hidden="true">
      <div className="ambient-layer ambient-layer-day" style={{ opacity: theme === "day" ? 1 : 0 }} />
      <div className="ambient-layer ambient-layer-night" style={{ opacity: theme === "night" ? 1 : 0 }} />
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
    <footer className="top-bar" aria-label="War Room context">
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
    </footer>
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
  const headerLogoSrc = theme === "day" ? "/brand/kopis-logo-day.png" : "/brand/kopis-logo-night.png";

  return (
    <header className="site-header" aria-label="KOPIS navigation">
      <nav className="site-nav" aria-label="KOPIS War Room rooms">
        <a
          className="site-wordmark"
          href="/thesis"
          onClick={(event) => onNavigate(event, "/thesis")}
        >
          <span className="site-wordmark-frame">
            <img src={headerLogoSrc} alt="KOPIS" />
          </span>
        </a>
        <ul className="site-nav-links" aria-label="War Room routes">
          {routes.map((route) => (
            <li key={route.id}>
              <NavLink active={activeRoute.id === route.id} onNavigate={onNavigate} route={route} />
            </li>
          ))}
        </ul>
        <RouteMenu activeRoute={activeRoute} onNavigate={onNavigate} />
        <div className="site-header-actions" aria-label="Theme controls">
          <button
            aria-label="Switch to day mode"
            aria-pressed={theme === "day"}
            className="nav-icon-button"
            onClick={() => onThemeChange("day")}
            type="button"
          >
            <Sun size={16} aria-hidden="true" />
          </button>
          <button
            aria-label="Switch to night mode"
            aria-pressed={theme === "night"}
            className="nav-icon-button nav-icon-button-active"
            onClick={() => onThemeChange("night")}
            type="button"
          >
            <Moon size={16} aria-hidden="true" />
          </button>
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

function ResourceList({ items }: { items: ResourceItem[] }) {
  return (
    <div className="resource-list">
      {items.map((item) => (
        <article key={item.title}>
          <FileText size={16} aria-hidden="true" />
          <div>
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
          </div>
          <span>{item.kind}</span>
        </article>
      ))}
    </div>
  );
}

function ExportPacketLinks() {
  return (
    <div className="export-link-grid">
      {exportPacketLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a className="export-link" href={link.href} key={link.title}>
            <Icon size={17} aria-hidden="true" />
            <span>
              <strong>{link.title}</strong>
              <p>{link.body}</p>
            </span>
            <Download size={15} aria-hidden="true" />
          </a>
        );
      })}
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
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!waveformRef.current) {
      return;
    }

    const wavesurfer = WaveSurfer.create({
      barGap: compact ? 2 : 3,
      barRadius: 12,
      barWidth: compact ? 2 : 3,
      container: waveformRef.current,
      cursorColor: "rgba(98, 128, 112, 0.58)",
      cursorWidth: 1,
      dragToSeek: true,
      height: compact ? 72 : 86,
      hideScrollbar: true,
      normalize: true,
      progressColor: "#50d28f",
      url: "/media/kopis-introaudio.wav",
      waveColor: "rgba(122, 144, 135, 0.54)",
    });

    wavesurferRef.current = wavesurfer;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsReady(false);
    setLoadError(null);

    wavesurfer.on("ready", (loadedDuration) => {
      setDuration(loadedDuration);
      setIsReady(true);
      setLoadError(null);
    });
    wavesurfer.on("play", () => setIsPlaying(true));
    wavesurfer.on("pause", () => setIsPlaying(false));
    wavesurfer.on("finish", () => {
      setCurrentTime(0);
      setIsPlaying(false);
      wavesurfer.seekTo(0);
    });
    wavesurfer.on("timeupdate", (time) => setCurrentTime(time));
    wavesurfer.on("error", () => {
      setLoadError("Audio failed to load");
      setIsReady(false);
      setIsPlaying(false);
    });

    return () => {
      wavesurfer.destroy();
      wavesurferRef.current = null;
    };
  }, [compact]);

  const togglePlayback = () => {
    const wavesurfer = wavesurferRef.current;

    if (!wavesurfer || !isReady) {
      return;
    }

    void wavesurfer.playPause();
  };

  return (
    <DottedFrame
      label="Kopis intro audio"
      className={`${compact ? "audio-frame compact" : "audio-frame"} wave-audio-frame${isPlaying ? " is-playing" : ""}`}
    >
      <div className="wave-player-head">
        <button
          aria-label={isPlaying ? "Pause Kopis intro audio" : "Play Kopis intro audio"}
          className="wave-play-button"
          disabled={!isReady || Boolean(loadError)}
          onClick={togglePlayback}
          type="button"
        >
          {isReady ? (
            isPlaying ? (
              <Pause size={18} aria-hidden="true" />
            ) : (
              <Play size={18} aria-hidden="true" />
            )
          ) : (
            <span className="wave-loading-dot" aria-hidden="true" />
          )}
        </button>
        <div className="wave-track-meta">
          <span>Kopis Intro Audio</span>
          <strong>Founder command briefing</strong>
        </div>
        <time className="wave-audio-time" aria-live="off">
          {formatAudioTime(currentTime)} / {formatAudioTime(duration)}
        </time>
      </div>
      <div className="waveform-shell">
        <div className="waveform-surface" ref={waveformRef} />
        {loadError && <p className="wave-error">{loadError}</p>}
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

function CommandSignalRail() {
  return (
    <section className="command-signal-rail" aria-label="Command brief evidence posture">
      {commandBriefSignals.map((signal) => (
        <article
          className="command-signal"
          data-label={signal.label.toLowerCase().replace(/\s+/g, "-")}
          key={signal.title}
        >
          <span>{signal.label}</span>
          <strong>{signal.title}</strong>
          <p>{signal.body}</p>
        </article>
      ))}
    </section>
  );
}

function CommandStatusGrid() {
  return (
    <section className="command-status-grid" aria-label="Current KOPIS operating status">
      {commandStatusCards.map((card) => (
        <article className="command-status-card" data-tone={card.tone} key={card.label}>
          <div>
            <span>{card.label}</span>
            <em>{card.evidence}</em>
          </div>
          <strong>{card.value}</strong>
          <p>{card.body}</p>
        </article>
      ))}
    </section>
  );
}

function CommandQueue({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="command-queue-list">
      {commandQueueItems.map((item) => {
        const Icon = item.icon;

        return (
          <button className="command-queue-item" key={item.title} onClick={() => onNavigate(item.path)} type="button">
            <Icon size={17} aria-hidden="true" />
            <span>
              <strong>{item.title}</strong>
              <small>{item.body}</small>
            </span>
            <em>{item.meta}</em>
          </button>
        );
      })}
    </div>
  );
}

function RoomBriefing({
  routeId,
  eyebrow,
  title,
  body,
}: {
  routeId: Exclude<RouteId, "thesis">;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="room-briefing">
      <div className="room-briefing-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div className="room-status-grid" aria-label={`${title} operating status`}>
        {roomStatusCards[routeId].map((card) => (
          <article className="room-status-card" data-tone={card.tone} key={`${routeId}-${card.label}`}>
            <div>
              <span>{card.label}</span>
              <em>{card.evidence}</em>
            </div>
            <strong>{card.value}</strong>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ThesisPage({
  onNavigate,
  theme,
}: {
  onNavigate: (path: string) => void;
  theme: ThemeMode;
}) {
  const heroLogoSrc = theme === "day" ? "/brand/kopis-logo-day.png" : "/brand/kopis-logo-night.png";

  return (
    <section className="command-dashboard">
      <section className="command-hero">
        <div className="command-hero-copy">
          <span className="eyebrow">The thesis, in plain English</span>
          <h1>
            <span className="command-hero-wordmark">
              <img src={heroLogoSrc} alt="KOPIS" />
            </span>
            <strong>War Room</strong>
          </h1>
          <p>
            Kopis is the payroll-linked repayment layer for third-party lenders. When repayment moves upstream of the
            checking account, a lender sees fewer missed payments with less servicing work. The borrower agrees to
            repay from their wages, and Kopis runs the work in between: consent, compliance, repayment setup,
            reconciliation, exceptions, and job-change continuity.
          </p>
        </div>
        <CommandStatusGrid />
      </section>

      <section className="command-operating-grid" aria-label="KOPIS command operating surface">
        <section className="command-module command-audio-module">
          <div className="command-module-head">
            <span className="eyebrow">Briefing media</span>
            <h2>Founder command audio</h2>
          </div>
          <AudioVisualizer compact />
        </section>

        <section className="command-module command-evidence-module">
          <div className="command-module-head">
            <span className="eyebrow">Evidence posture</span>
            <h2>Keep the hard claims labeled</h2>
          </div>
          <CommandSignalRail />
        </section>

        <section className="command-module command-queue-module">
          <div className="command-module-head">
            <span className="eyebrow">Decision gates</span>
            <h2>Open the room that resolves the risk</h2>
          </div>
          <CommandQueue onNavigate={onNavigate} />
        </section>

        <section className="command-module command-next-module">
          <div className="command-module-head">
            <span className="eyebrow">Operating order</span>
            <h2>Next seven days</h2>
          </div>
          <Timeline items={nextSevenDays} />
        </section>
      </section>

      <PlainEnglishBrief routeId="thesis" />
    </section>
  );
}

function AlreadyExistsPage() {
  return (
    <>
      <RoomBriefing
        routeId="already-exists"
        eyebrow="Already Exists?"
        title="Win above the rail."
        body="Payroll deduction loans, paycheck-linked repayment products, and payroll connectivity APIs all exist today. Kopis should not claim it invented payroll deduction — it should own the neutral lender layer on top."
      />
      <Panel title="What already exists" eyebrow="The honest map" icon={<Layers3 size={18} aria-hidden="true" />}>
        <MatrixTable
          rows={alreadyExistsRows}
          headers={["What already exists", "Examples", "What it means for Kopis"]}
        />
      </Panel>
      <div className="two-column">
        <Panel title="What the market proves" eyebrow="Signals">
          <WorkList items={marketSignals} />
        </Panel>
        <Panel title="Say it this way" eyebrow="Claim discipline">
          <MatrixTable rows={claimsAnalysis.slice(0, 4)} headers={["Claim", "Verdict", "Better framing"]} />
        </Panel>
      </div>
    </>
  );
}

function CompetitorsPage() {
  return (
    <>
      <RoomBriefing
        routeId="competitors"
        eyebrow="Top 5 Competitors"
        title="Five players to know."
        body="Highline, Truv, and Pinwheel sit on the repayment rail. Kashable and BMG prove employer-channel lending. Some are comparators; some are inputs Kopis builds on."
      />
      <Panel title="Competitive map" eyebrow="Categories" icon={<TrendingUp size={18} aria-hidden="true" />}>
        <MatrixTable rows={competitorRows} headers={["Category", "Examples", "What they own", "Kopis wedge"]} />
      </Panel>
      <MarketPlayerDocument />
      <Panel title="Watchlist" eyebrow="Track, but secondary">
        <WorkList items={watchlistPlayers} />
      </Panel>
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
            {player.source && (
              <a className="market-player-source" href={player.source.href} target="_blank" rel="noreferrer">
                Source: {player.source.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function DifferencePage() {
  return (
    <>
      <RoomBriefing
        routeId="difference"
        eyebrow="KOPIS Difference"
        title="Usable for many lenders."
        body="Kopis is not trying to prove payroll deduction exists. No lender wants to wire up every payroll provider, write its own consent logic, track the rules state by state, and reconcile every deduction. Kopis handles that work once, starting with the pilot states."
      />
      <Panel title="Where each category stops" eyebrow="And where Kopis fits" icon={<Rocket size={18} aria-hidden="true" />}>
        <MatrixTable rows={differenceRows} headers={["Existing category", "What they do", "Where Kopis fits"]} />
      </Panel>
      <div className="two-column">
        <Panel title="The wedge" eyebrow="One integration, many payroll systems">
          <WorkList items={differenceWedge} />
        </Panel>
        <Panel title="Non-claims" eyebrow="Positioning guardrails">
          <ul className="check-list">
            {nonClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </Panel>
      </div>
      <Panel title="What each lender stakeholder needs" eyebrow="Who must believe it">
        <MatrixTable rows={buyerProofRows} headers={["Buyer", "Primary concern", "Proof packet"]} />
      </Panel>
    </>
  );
}

function TechnologyPage() {
  return (
    <>
      <RoomBriefing
        routeId="technology"
        eyebrow="Technology"
        title="Above payroll connectivity."
        body="A lender creates a repayment plan. The borrower authorizes it. Kopis records consent, checks pilot-state rules, coordinates setup through a payroll provider, tracks repayment, reconciles status for the lender, and handles exceptions like revocation, a short paycheck, or a job change."
      />
      <div className="two-column">
        <Panel title="System layers" eyebrow="What Kopis owns" icon={<Layers3 size={18} aria-hidden="true" />}>
          <WorkList items={systemLayers} />
        </Panel>
        <Panel title="How a repayment flows" eyebrow="Step by step" icon={<ScrollText size={18} aria-hidden="true" />}>
          <Timeline items={repaymentFlow} />
        </Panel>
      </div>
      <FactGrid items={pilotFacts} />
      <div className="two-column">
        <Panel title="Build now vs. defer" eyebrow="MVP scope" icon={<Gauge size={18} aria-hidden="true" />}>
          <MatrixTable rows={mvpRows} headers={["Area", "Build", "Defer"]} />
        </Panel>
        <Panel title="Pilot timeline" eyebrow="Near-term sequence" icon={<CalendarDays size={18} aria-hidden="true" />}>
          <Timeline items={pilotTimeline} />
        </Panel>
      </div>
      <Panel title="Technology boundaries" eyebrow="What we do not claim yet" icon={<Landmark size={18} aria-hidden="true" />}>
        <ul className="check-list">
          {techBoundaries.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

function Next30Page() {
  return (
    <>
      <RoomBriefing
        routeId="next-30"
        eyebrow="Next 30 Days"
        title="Remove the unknowns."
        body="The next month is about removing unknowns, not adding features. Narrow the legal boundaries, confirm middleware permission, define the pilot, and package the lender diligence story."
      />
      <Panel title="Workstreams" eyebrow="The operating plan" icon={<ListChecks size={18} aria-hidden="true" />}>
        <MatrixTable rows={workstreamRows} headers={["Workstream", "Owner", "Next task", "Status"]} />
      </Panel>
      <div className="two-column">
        <Panel title="Next seven days" eyebrow="Immediate" icon={<Clock3 size={18} aria-hidden="true" />}>
          <Timeline items={nextSevenDays} />
        </Panel>
        <Panel title="Owner map" eyebrow="Who decides what">
          <MatrixTable rows={ownerMap} headers={["Owner", "Workstream", "Decision right"]} />
        </Panel>
      </div>
      <div className="two-column">
        <Panel title="Counsel gates" eyebrow="Keep these visible" icon={<Scale size={18} aria-hidden="true" />}>
          <ul className="check-list">
            {counselGates.map((gate) => (
              <li key={gate}>{gate}</li>
            ))}
          </ul>
        </Panel>
        <Panel title="7 / 30 / 90 day plan" eyebrow="Execution horizon">
          <Timeline items={operatingPlan} />
        </Panel>
      </div>
      <Panel title="Critical path" eyebrow="Do these in order">
        <WorkList items={criticalPath} />
      </Panel>
      <Panel title="Claims audit" eyebrow="Before investor or lender diligence">
        <MatrixTable rows={claimsAnalysis} headers={["Claim", "Verdict", "Better framing"]} />
      </Panel>
      <div className="two-column">
        <Panel title="Diligence exports" eyebrow="Source materials" icon={<FolderOpen size={18} aria-hidden="true" />}>
          <div className="investor-action-list">
            <a className="investor-action" href="/docs/KOPIS.pdf">
              <FileText size={17} aria-hidden="true" />
              <span>
                <strong>Open KOPIS.pdf</strong>
                <small>The current source document, kept as a reference artifact.</small>
              </span>
            </a>
            <a className="investor-action" href="/export/investor">
              <Download size={17} aria-hidden="true" />
              <span>
                <strong>Print investor brief</strong>
                <small>Generate the structured investor packet from the live content.</small>
              </span>
            </a>
          </div>
        </Panel>
        <Panel title="Export packets" eyebrow="Audience views" icon={<Download size={18} aria-hidden="true" />}>
          <ExportPacketLinks />
        </Panel>
      </div>
    </>
  );
}

function RouteContent({
  route,
  onNavigate,
  theme,
}: {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
  theme: ThemeMode;
}) {
  switch (route.id) {
    case "already-exists":
      return <AlreadyExistsPage />;
    case "competitors":
      return <CompetitorsPage />;
    case "difference":
      return <DifferencePage />;
    case "technology":
      return <TechnologyPage />;
    case "next-30":
      return <Next30Page />;
    case "thesis":
    default:
      return <ThesisPage onNavigate={onNavigate} theme={theme} />;
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
        <MatrixTable rows={buyerProofRows} headers={["Buyer", "Primary concern", "Proof packet"]} />
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
  return (
    <>
      <ExportDocumentHeader
        icon={TrendingUp}
        title="KOPIS Investor Brief"
        subtitle="Product thesis, legal queue, pilot proof path, and diligence materials. All legal conclusions remain provisional until counsel review."
      />
      <Panel title="Investor thesis" eyebrow="Diligence spine">
        <MatrixTable rows={investorPacketRows} headers={["Packet area", "Investor read", "Proof source"]} />
      </Panel>
      <Panel title="Product definition" eyebrow="What Kopis is">
        <WorkList items={whatIsKopis} />
      </Panel>
      <Panel title="Buyer proof" eyebrow="Lender diligence">
        <MatrixTable rows={buyerProofRows} headers={["Buyer", "Primary concern", "Proof packet"]} />
      </Panel>
      <Panel title="Pilot sequence" eyebrow="Proof before scale">
        <Timeline items={pilotTimeline} />
      </Panel>
      <Panel title="Claims audit" eyebrow="Do not overstate">
        <MatrixTable rows={claimsAnalysis} headers={["Claim", "Verdict", "Better framing"]} />
      </Panel>
    </>
  );
}

function App() {
  const [activeRoute, setActiveRoute] = useState(() => resolveRoute(window.location.pathname));
  const [theme, setTheme] = useState<ThemeMode>("day");
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
    <main className={`app-shell ${activeRoute.id === "thesis" ? "landing-shell" : ""}`} data-theme={theme}>
      <AmbientField theme={theme} />
      <NavigationHeader
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onThemeChange={setTheme}
        theme={theme}
      />
      <section className="content-shell">
        <RouteContent route={activeRoute} onNavigate={navigate} theme={theme} />
      </section>
      <TopBar activeRoute={activeRoute} />
    </main>
  );
}

export default App;
