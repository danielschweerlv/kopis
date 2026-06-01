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

const roomStatusCards: Record<
  Exclude<RouteId, "command-brief" | "investor-kit">,
  OperatingStatusCard[]
> = {
  "what-is-kopis": [
    {
      label: "Role",
      value: "Neutral orchestration layer",
      evidence: "Verified",
      tone: "verified",
      body: "Kopis coordinates consent, rules, servicing, reconciliation, exceptions, and continuity for lenders.",
    },
    {
      label: "Boundary",
      value: "Not lender, not payroll API",
      evidence: "Verified",
      tone: "verified",
      body: "The product should not be framed as origination, payroll connectivity, or broad payroll deduction invention.",
    },
    {
      label: "Buyer",
      value: "Third-party lenders",
      evidence: "Likely",
      tone: "likely",
      body: "The first user is a lender team that needs lower loss risk and lower operational lift.",
    },
    {
      label: "Next proof",
      value: "One full repayment workflow",
      evidence: "Next",
      tone: "next",
      body: "Show plan creation, borrower authorization, schedule, reconciliation, exception, and job-change handling.",
    },
  ],
  "legal-path": [
    {
      label: "Primary gate",
      value: "Voluntary wage assignment",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "Recognition, notice, revocation, enforceability, and employer participation need pilot-state review.",
    },
    {
      label: "Role perimeter",
      value: "Servicer and funds-flow status",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "Kopis must document whether it controls funds or triggers servicing/licensing obligations.",
    },
    {
      label: "IP path",
      value: "Narrow continuity claims",
      evidence: "Assumption",
      tone: "assumption",
      body: "The plausible patent area is continuity, rules, orchestration, and revocation state machines.",
    },
    {
      label: "Next output",
      value: "Five-state counsel packet",
      evidence: "Next",
      tone: "next",
      body: "Create the state memo, borrower authorization draft, provider terms review, and pilot lender template.",
    },
  ],
  "borrower-trust": [
    {
      label: "Trust standard",
      value: "Show the number before consent",
      evidence: "Verified",
      tone: "verified",
      body: "Borrowers need the amount, timing, lender, paycheck source, and support path before authorizing.",
    },
    {
      label: "Open legal item",
      value: "Revocation mechanics",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "The right to stop or change an authorization needs state-specific timing and copy rules.",
    },
    {
      label: "Confusion risk",
      value: "Paystub line item",
      evidence: "Assumption",
      tone: "assumption",
      body: "Every payroll label needs a matching explainer so the deduction is not mysterious.",
    },
    {
      label: "Next proof",
      value: "Consent disclosure v1",
      evidence: "Next",
      tone: "next",
      body: "Draft the screen, event trail, support script, job-change copy, and short-paycheck language.",
    },
  ],
  "market-competitors": [
    {
      label: "Market fact",
      value: "The mechanic exists",
      evidence: "Verified",
      tone: "verified",
      body: "Employer lenders, payroll APIs, consumer proof points, and repayment rails already prove pieces.",
    },
    {
      label: "Kopis wedge",
      value: "Repayment operations above connectivity",
      evidence: "Likely",
      tone: "likely",
      body: "Connectivity alone does not solve consent, compliance, servicing, reconciliation, and continuity.",
    },
    {
      label: "Category risk",
      value: "Overclaiming novelty",
      evidence: "Assumption",
      tone: "assumption",
      body: "The stronger pitch is standardizing a lender rail, not pretending payroll deduction is new.",
    },
    {
      label: "Next proof",
      value: "Highline and middleware benchmark",
      evidence: "Next",
      tone: "next",
      body: "Compare neutrality, multi-lender support, compliance depth, exception handling, and job-change coverage.",
    },
  ],
  "build-pilot": [
    {
      label: "Pilot shape",
      value: "500 to 1,500 opt-ins",
      evidence: "Assumption",
      tone: "assumption",
      body: "The first pilot needs a comparable baseline and measurable repayment-event data.",
    },
    {
      label: "Scope discipline",
      value: "Middleware first",
      evidence: "Likely",
      tone: "likely",
      body: "One or two provider integrations can prove the rail before direct payroll builds.",
    },
    {
      label: "Legal bound",
      value: "Five pilot states",
      evidence: "Needs counsel",
      tone: "needs-counsel",
      body: "State choice must follow wage assignment, revocation, servicing, and funds-flow analysis.",
    },
    {
      label: "Success threshold",
      value: "30%+ 60-day delinquency reduction",
      evidence: "Next",
      tone: "next",
      body: "The threshold is a pilot hypothesis until measured against real portfolio economics.",
    },
  ],
  "growth-system": [
    {
      label: "Primary motion",
      value: "Founder-led lender outreach",
      evidence: "Likely",
      tone: "likely",
      body: "Sell lower loss risk, servicing clarity, and implementation lift to lenders first.",
    },
    {
      label: "Buyer proof",
      value: "CFO, servicing, compliance, CTO",
      evidence: "Verified",
      tone: "verified",
      body: "The diligence packet must answer each stakeholder's risk, economics, and integration questions.",
    },
    {
      label: "Messaging risk",
      value: "Consumer wellness framing",
      evidence: "Assumption",
      tone: "assumption",
      body: "A borrower-first pitch makes Kopis look like cash advance instead of lender infrastructure.",
    },
    {
      label: "Next output",
      value: "Lender pilot one-pager",
      evidence: "Next",
      tone: "next",
      body: "Package baseline, cohort, success criteria, implementation lift, consent, and reconciliation.",
    },
  ],
  "next-moves": [
    {
      label: "Operating principle",
      value: "Narrow risk before scope",
      evidence: "Verified",
      tone: "verified",
      body: "The next seven days should remove unknowns, not add product surface area.",
    },
    {
      label: "Critical path",
      value: "Counsel, middleware, lender LOI",
      evidence: "Likely",
      tone: "likely",
      body: "The work order runs through counsel, ToS review, pilot-state choice, and design-partner commitment.",
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
      body: "Assemble legal queue, pilot one-pager, borrower trust draft, and competitive benchmark.",
    },
  ],
};

const commandQueueItems = [
  {
    title: "Counsel queue",
    body: "Narrow wage assignment, funds flow, servicer role, middleware terms, and revocation mechanics.",
    meta: "Needs counsel",
    path: "/legal-path",
    icon: Scale,
  },
  {
    title: "Pilot packet",
    body: "Lock cohort, baseline, candidate states, middleware path, success threshold, and failure thresholds.",
    meta: "Assumption",
    path: "/build-pilot",
    icon: Gauge,
  },
  {
    title: "Borrower trust draft",
    body: "Make the authorization, paystub label, revocation path, support path, and job-change flow readable.",
    meta: "Next",
    path: "/borrower-trust",
    icon: ShieldCheck,
  },
  {
    title: "Operating order",
    body: "Keep the next seven days focused on removing unknowns before adding new product surface area.",
    meta: "Verified",
    path: "/next-moves",
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
          href="/command-brief"
          onClick={(event) => onNavigate(event, "/command-brief")}
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
  routeId: Exclude<RouteId, "command-brief" | "investor-kit">;
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

function CommandBriefPage({
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
          <span className="eyebrow">Founder Command Center</span>
          <h1>
            <span className="command-hero-wordmark">
              <img src={heroLogoSrc} alt="KOPIS" />
            </span>
            <strong>War Room</strong>
          </h1>
          <p>
            Payroll linked repayment system for third-party lenders: consented repayment orchestration, compliance
            controls, servicing, reconciliation, exception handling, and job-change continuity.
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

      <PlainEnglishBrief routeId="command-brief" />
    </section>
  );
}

function WhatIsKopisPage() {
  return (
    <>
      <RoomBriefing
        routeId="what-is-kopis"
        eyebrow="What Kopis Is"
        title="Payroll linked repayment system."
        body="Kopis is the orchestration layer for borrower-consented wage repayment, compliance controls, servicing workflows, reconciliation, and job-change continuity."
      />
      <div className="two-column">
        <Panel title="Product definition" eyebrow="Core answer" icon={<Layers3 size={18} aria-hidden="true" />}>
          <WorkList items={whatIsKopis} />
        </Panel>
        <Panel title="Non-claims" eyebrow="Positioning guardrails">
          <ul className="check-list">
            {nonClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </Panel>
      </div>
      <Panel title="Product layers" eyebrow="What Kopis owns">
        <MatrixTable rows={productLayers} headers={["Layer", "Function", "Why it matters"]} />
      </Panel>
      <WhatIsKopisFocus />
    </>
  );
}

function LegalPathPage() {
  return (
    <>
      <RoomBriefing
        routeId="legal-path"
        eyebrow="Legal Review Plan"
        title="Legal is a product workstream."
        body="The rail should not make final legal claims until counsel narrows wage assignment, funds flow, servicing, middleware, revocation, and pilot-state scope."
      />
      <div className="two-column">
        <Panel title="Counsel queue" eyebrow="Questions to resolve" icon={<Scale size={18} aria-hidden="true" />}>
          <WorkList items={legalQuestions} />
        </Panel>
        <Panel title="Funds-flow map" eyebrow="Role discipline" icon={<Landmark size={18} aria-hidden="true" />}>
          <MatrixTable rows={fundsFlowRows} headers={["Actor", "Function", "Open point"]} />
        </Panel>
      </div>
      <div className="two-column">
        <Panel title="Legal workstreams" eyebrow="Eight tracks">
          <WorkList items={legalWorkstreams} />
        </Panel>
        <Panel title="Legal sequencing" eyebrow="Counsel order">
          <Timeline items={legalSequencing} />
        </Panel>
      </div>
      <Panel title="Patent strategy" eyebrow="Narrow and defensible">
        <WorkList items={patentAngles} />
      </Panel>
    </>
  );
}

function MarketCompetitorsPage() {
  return (
    <>
      <RoomBriefing
        routeId="market-competitors"
        eyebrow="Market Map + Competitors"
        title="The wedge is orchestration, not payroll access alone."
        body="Kopis competes against lender internal builds, employer-linked lenders, payroll APIs used directly, and repayment-adjacent rails."
      />
      <div className="two-column">
        <Panel title="Market signals" eyebrow="What the market already proves">
          <WorkList items={marketSignals} />
        </Panel>
        <Panel title="Claim discipline" eyebrow="Say it this way">
          <MatrixTable rows={claimsAnalysis.slice(0, 4)} headers={["Claim", "Verdict", "Better framing"]} />
        </Panel>
      </div>
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
      <RoomBriefing
        routeId="build-pilot"
        eyebrow="MVP + Pilot Plan"
        title="Scope the smallest credible repayment rail."
        body="The MVP should prove consented repayment, reconciliation, exception handling, and manual job-change recovery without overbuilding direct payroll integrations."
      />
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
      <RoomBriefing
        routeId="growth-system"
        eyebrow="Lender GTM Plan"
        title="Sell loss reduction with lower operational lift."
        body="The primary buyer is the lender. Borrowers and employers matter, but they support the lender proof story rather than replacing it."
      />
      <Panel title="Buyer matrix" eyebrow="Who must believe the pilot">
        <MatrixTable rows={buyerProofRows} headers={["Buyer", "Primary concern", "Proof packet"]} />
      </Panel>
      <div className="two-column">
        <Panel title="GTM operating logic" eyebrow="Lender-led" icon={<Rocket size={18} aria-hidden="true" />}>
          <WorkList items={growthItems} />
        </Panel>
        <Panel title="Phases" eyebrow="Commercial path" icon={<TrendingUp size={18} aria-hidden="true" />}>
          <Timeline items={gtmPhases} />
        </Panel>
      </div>
      <div className="two-column">
        <Panel title="Brand thesis" eyebrow="Two audiences, one rail">
          <WorkList items={brandThesis} />
        </Panel>
        <Panel title="Reference architecture" eyebrow="Future content map">
          <MatrixTable rows={seoArchitecture} headers={["Path", "Intent", "What it must answer"]} />
        </Panel>
      </div>
    </>
  );
}

function BorrowerTrustPage() {
  return (
    <>
      <RoomBriefing
        routeId="borrower-trust"
        eyebrow="Borrower Trust + Consent"
        title="The borrower must understand the repayment before they authorize it."
        body="Kopis can be lender-facing infrastructure, but the borrower still needs a plain explanation of the deduction, data access, revocation path, paystub label, job-change flow, and support channel."
      />
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
      <RoomBriefing
        routeId="next-moves"
        eyebrow="Operating Plan"
        title="The next week should narrow risk, not expand scope."
        body="Prioritize legal boundaries, middleware permission, pilot definition, and the lender diligence packet before adding new product surface area."
      />
      <div className="two-column">
        <Panel title="Next seven days" icon={<Clock3 size={18} aria-hidden="true" />}>
          <Timeline items={nextSevenDays} />
        </Panel>
        <Panel title="Owner map" icon={<ListChecks size={18} aria-hidden="true" />}>
          <MatrixTable rows={ownerMap} headers={["Owner", "Workstream", "Decision right"]} />
        </Panel>
      </div>
      <div className="two-column">
        <Panel title="Critical path" eyebrow="Do these in order">
          <WorkList items={criticalPath} />
        </Panel>
        <Panel title="7 / 30 / 90 day operating plan" eyebrow="Execution horizon">
          <Timeline items={operatingPlan} />
        </Panel>
      </div>
      <Panel title="Claims audit" eyebrow="Before investor or lender diligence">
        <MatrixTable rows={claimsAnalysis} headers={["Claim", "Verdict", "Better framing"]} />
      </Panel>
    </>
  );
}

function InvestorKitPage() {
  return (
    <>
      <section className="investor-kit-hero">
        <div className="investor-kit-copy">
          <span className="eyebrow">Investor Packet</span>
          <h1>Make the thesis inspectable before the pilot claim gets loud.</h1>
          <p>
            The investor surface should package the category wedge, counsel queue, lender pilot plan, borrower trust
            draft, and current PDF materials without pretending unresolved legal questions are solved.
          </p>
        </div>
        <div className="investor-status-grid" aria-label="Investor packet status">
          {investorStatusCards.map((card) => (
            <article className="room-status-card" data-tone={card.tone} key={card.label}>
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

      <div className="two-column">
        <Panel title="Source PDF" eyebrow="Current document" icon={<FolderOpen size={18} aria-hidden="true" />}>
          <div className="investor-action-list">
            <a className="investor-action" href="/docs/KOPIS.pdf">
              <FileText size={17} aria-hidden="true" />
              <span>
                <strong>Open KOPIS.pdf</strong>
                <small>Use the current PDF as a source artifact, not the only inspectable investor route.</small>
              </span>
            </a>
            <a className="investor-action" href="/export/investor">
              <Download size={17} aria-hidden="true" />
              <span>
                <strong>Print investor brief</strong>
                <small>Generate the structured investor packet from the live operating content.</small>
              </span>
            </a>
          </div>
        </Panel>

        <Panel title="Export packets" eyebrow="Audience views" icon={<Download size={18} aria-hidden="true" />}>
          <ExportPacketLinks />
        </Panel>
      </div>

      <Panel title="Diligence packet" eyebrow="What must be visible">
        <MatrixTable rows={investorPacketRows} headers={["Packet area", "Investor read", "Proof source"]} />
      </Panel>

      <div className="two-column">
        <Panel title="Investor resources" eyebrow="Materials">
          <ResourceList items={investorResources} />
        </Panel>
        <Panel title="Brand and trust assets" eyebrow="Support materials">
          <ResourceList items={brandAssets} />
        </Panel>
      </div>

      <PlainEnglishBrief routeId="investor-kit" />
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
      return <CommandBriefPage onNavigate={onNavigate} theme={theme} />;
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
    <main className={`app-shell ${activeRoute.id === "command-brief" ? "landing-shell" : ""}`} data-theme={theme}>
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
