import {
  AudioLines,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CircleDollarSign,
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
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
  brandAssets,
  competitorRows,
  fundsFlowRows,
  growthItems,
  gtmPhases,
  investorResources,
  legalQuestions,
  marketSignals,
  mvpRows,
  nextSevenDays,
  nonClaims,
  ownerMap,
  pilotFacts,
  pilotTimeline,
  productLayers,
  routes,
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
  competitorBestPractices,
  exploitMap,
  legalSequencing,
  legalWorkstreams,
  patentAngles,
} from "./data/legalMarketData";
import {
  brandThesis,
  buyerNeeds,
  claimsAnalysis,
  criticalPath,
  operatingPlan,
  seoArchitecture,
} from "./data/gtmDiligenceData";

type ThemeMode = "night" | "day";

const iconByRoute: Record<RouteId, LucideIcon> = {
  "command-brief": Target,
  "what-is-kopis": FileText,
  "legal-path": Scale,
  "market-competitors": TrendingUp,
  "build-pilot": Gauge,
  "growth-system": Rocket,
  "next-moves": ListChecks,
  "investor-kit": FolderOpen,
};

const routeByPath = new Map(routes.map((route) => [route.path, route]));

type IpTimezoneResponse = {
  timezone?: string;
  utc_offset?: string;
};

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

function LogoMark() {
  return (
    <a className="brand" href="/command-brief" aria-label="KOPIS War Room home">
      <span className="brand-word" aria-hidden="true">
        KOPIS
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

  return (
    <a
      className="nav-link"
      data-accent={route.accent}
      href={route.path}
      onClick={(event) => onNavigate(event, route.path)}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={16} aria-hidden="true" />
      <span>{route.label}</span>
    </a>
  );
}

function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <div className="ambient-wave" />
      <div className="ambient-grid ambient-grid-a" />
      <div className="ambient-grid ambient-grid-b" />
    </div>
  );
}

function TopBar({
  activeRoute,
  theme,
  onThemeChange,
}: {
  activeRoute: RouteDefinition;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
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
      <ThemeToggle compact onThemeChange={onThemeChange} theme={theme} />
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
    let cancelled = false;
    let intervalId: number | undefined;

    function startClock(timeZone: string) {
      const updateClock = () => {
        setClock({
          time: formatClock(timeZone),
          zone: timeZone,
        });
      };

      updateClock();
      intervalId = window.setInterval(updateClock, 1000);
    }

    async function detectTimezone() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`Timezone lookup failed: ${response.status}`);
        }

        const data = (await response.json()) as IpTimezoneResponse;
        const detectedZone = data.timezone;

        if (!detectedZone) {
          throw new Error("Timezone lookup returned no timezone");
        }

        if (!cancelled) {
          startClock(detectedZone);
        }
      } catch {
        if (!cancelled) {
          startClock(browserZone);
        }
      }
    }

    void detectTimezone();

    return () => {
      cancelled = true;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
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
              <td>
                <strong>{row.first}</strong>
              </td>
              <td>{row.second}</td>
              <td>{row.third}</td>
              {headers[3] && <td>{row.fourth}</td>}
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
          <button type="button" aria-label={`Download placeholder for ${item.title}`}>
            <Download size={14} aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
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

function AudioVisualizer({ compact = false }: { compact?: boolean }) {
  const bars = useMemo(
    () =>
      Array.from({ length: compact ? 88 : 172 }, (_, index) => {
        const center = (compact ? 88 : 172) / 2;
        const distance = Math.abs(index - center) / center;
        const pulse = Math.abs(Math.sin(index * 0.61)) * 0.7 + Math.abs(Math.sin(index * 0.19)) * 0.5;
        const envelope = Math.max(0.03, Math.pow(1 - distance, 1.45));
        const height = Math.max(8, envelope * (compact ? 118 : 244) * (0.44 + pulse));
        return { index, height };
      }),
    [compact],
  );

  return (
    <DottedFrame label="Audio briefing placeholder" className={compact ? "audio-frame compact" : "audio-frame"}>
      <div className="media-label">
        <AudioLines size={18} aria-hidden="true" />
        <span>War Room Audio Briefing</span>
      </div>
      <div className="waveform" aria-hidden="true">
        {bars.map((bar) => (
          <span key={bar.index} style={{ "--dot-h": `${bar.height}px`, "--dot-i": bar.index } as CSSProperties} />
        ))}
      </div>
      <div className="audio-footer">
        <button type="button" aria-label="Audio placeholder is not active yet">
          <Play size={16} aria-hidden="true" />
        </button>
        <div className="progress-track">
          <span />
        </div>
        <time>0:00</time>
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

function RouteCardGrid({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="route-grid" id="war-room-grid">
      {routes.map((route) => {
        const Icon = iconByRoute[route.id];

        return (
          <a
            className="route-card"
            data-accent={route.accent}
            href={route.path}
            key={route.id}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
                return;
              }

              event.preventDefault();
              onNavigate(route.path);
            }}
          >
            <Icon size={43} strokeWidth={1.85} aria-hidden="true" />
            <span>{route.number}</span>
            <strong>{route.label}</strong>
            <p>{route.summary}</p>
            <ArrowRight size={20} strokeWidth={1.8} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

function BriefStatusChip({
  label,
  value,
  variant = "neutral",
}: {
  label: string;
  value: string;
  variant?: "amber" | "blue" | "green" | "neutral";
}) {
  return (
    <div className="brief-status-chip" data-variant={variant}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CommandBriefPage({
  onNavigate,
  theme,
  onThemeChange,
}: {
  onNavigate: (path: string) => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
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
            Lender-neutral payroll repayment infrastructure. Third-party lenders integrate once, then orchestrate
            borrower-consented repayment across payroll systems with compliance, reconciliation, and job-change
            continuity.
          </p>
          <div className="brief-status-row">
            <BriefStatusChip label="Stage" value="Pre-pilot" variant="amber" />
            <BriefStatusChip label="Legal" value="Counsel gates open" variant="amber" />
            <BriefStatusChip label="Pilot target" value="Mid-market installment" variant="blue" />
          </div>
          <ThemeToggle onThemeChange={onThemeChange} theme={theme} />
        </div>
        <AudioVisualizer />
      </section>
      <RouteCardGrid onNavigate={onNavigate} />
    </section>
  );
}

function WhatIsKopisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core Thesis"
        title="Lender-neutral payroll repayment infrastructure."
        body="Kopis is the orchestration layer for borrower-consented wage repayment, compliance controls, servicing workflows, reconciliation, and job-change continuity."
      />
      <div className="two-column media-layout">
        <Panel title="Product definition" eyebrow="Core answer" icon={<Layers3 size={18} aria-hidden="true" />}>
          <WorkList items={whatIsKopis} />
        </Panel>
        <VideoFrame />
      </div>
      <div className="two-column">
        <Panel title="Product layers" eyebrow="Operating stack" icon={<Building2 size={18} aria-hidden="true" />}>
          <MatrixTable rows={productLayers} headers={["Layer", "What it owns", "Why it matters"]} />
        </Panel>
        <Panel title="Non-claims" eyebrow="Positioning guardrails" icon={<ShieldCheck size={18} aria-hidden="true" />}>
          <ul className="check-list">
            {nonClaims.map((claim) => (
              <li key={claim}>{claim}</li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}

function LegalPathPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Path"
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
      <Panel title="Counsel package output" eyebrow="Documents to produce" icon={<ScrollText size={18} aria-hidden="true" />}>
        <div className="document-grid">
          <article>Five-state wage assignment and revocation memo</article>
          <article>Money transmitter and control-of-funds analysis</article>
          <article>Servicing role classification by pilot state</article>
          <article>Middleware repayment terms review</article>
          <article>Borrower authorization and revocation draft</article>
          <article>IP claim screen for continuity and rules engine</article>
        </div>
      </Panel>
      <Panel title="Patent strategy" eyebrow="Narrow and defensible">
        <WorkList items={patentAngles} />
      </Panel>
      <Panel title="Legal workstreams" eyebrow="Eight tracks">
        <WorkList items={legalWorkstreams} />
      </Panel>
      <Panel title="Legal sequencing" eyebrow="Eight steps">
        <Timeline items={legalSequencing} />
      </Panel>
    </>
  );
}

function MarketCompetitorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Market + Competitors"
        title="The wedge is orchestration, not payroll access alone."
        body="Kopis competes against lender internal builds, employer-linked lenders, payroll APIs used directly, and repayment-adjacent rails."
      />
      <Panel title="Competitive map" eyebrow="Landscape" icon={<TrendingUp size={18} aria-hidden="true" />}>
        <MatrixTable rows={competitorRows} headers={["Category", "Examples", "What they own", "Kopis wedge"]} />
      </Panel>
      <div className="three-column">
        <Panel title="Buyer pain" icon={<WalletCards size={18} aria-hidden="true" />}>
          <WorkList items={marketSignals} />
        </Panel>
        <Panel title="Proof story" icon={<CircleDollarSign size={18} aria-hidden="true" />}>
          <ul className="metric-list">
            <li>
              <strong>Loss reduction</strong>
              <span>Primary lender ROI claim, validated through pilot data.</span>
            </li>
            <li>
              <strong>Servicing lift</strong>
              <span>Reconciliation, exception, and consent trails should lower operational friction.</span>
            </li>
            <li>
              <strong>Continuity</strong>
              <span>Job-change workflow keeps repayment paths from breaking silently.</span>
            </li>
          </ul>
        </Panel>
        <Panel title="First vertical" icon={<BriefcaseBusiness size={18} aria-hidden="true" />}>
          <p className="panel-copy">
            Start with personal or medical installment lenders. Do not use mortgage as the initial beachhead because the
            compliance and servicing surface is heavier before the repayment rail is proven.
          </p>
        </Panel>
      </div>
      <Panel title="What the best players do well" eyebrow="Steal these patterns">
        <WorkList items={competitorBestPractices} />
      </Panel>
      <Panel title="Where competitors leave the door open" eyebrow="The exploit map">
        <WorkList items={exploitMap} />
      </Panel>
    </>
  );
}

function BuildPilotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Build + Pilot"
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
      <PageHeader
        eyebrow="Growth System"
        title="Sell loss reduction with lower operational lift."
        body="The primary buyer is the lender. Borrowers and employers matter, but they support the lender proof story rather than replacing it."
      />
      <div className="two-column">
        <Panel title="GTM operating logic" eyebrow="Lender-led" icon={<Rocket size={18} aria-hidden="true" />}>
          <WorkList items={growthItems} />
        </Panel>
        <Panel title="Phases" eyebrow="Commercial path" icon={<TrendingUp size={18} aria-hidden="true" />}>
          <Timeline items={gtmPhases} />
        </Panel>
      </div>
      <Panel title="Copy-ready lender frame" eyebrow="Pitch spine" icon={<BriefcaseBusiness size={18} aria-hidden="true" />}>
        <div className="quote-panel">
          <p>
            One integration gives your repayment team access to borrower-consented payroll repayment across providers,
            with compliance controls, reconciliation, exceptions, and job-change continuity built into the operating layer.
          </p>
        </div>
      </Panel>
      <Panel title="What each buyer cares about" eyebrow="Persona matrix">
        <MatrixTable rows={buyerNeeds} headers={["Buyer", "Primary concern", ""]} />
      </Panel>
      <Panel title="Brand thesis" eyebrow="Institutional, not consumer">
        <WorkList items={brandThesis} />
      </Panel>
      <Panel title="SEO architecture" eyebrow="Site structure">
        <MatrixTable rows={seoArchitecture} headers={["Route", "Intent", "Content"]} />
      </Panel>
    </>
  );
}

function NextMovesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Next Moves"
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
      <Panel title="Decision log" eyebrow="Locked choices" icon={<ShieldCheck size={18} aria-hidden="true" />}>
        <div className="document-grid">
          <article>No legacy confidence tags in the routed product surface.</article>
          <article>Landing page centers the audio-briefing visualizer placeholder.</article>
          <article>What is Kopis owns the explainer video.</article>
          <article>MP3 audio waits until the War Room build is complete.</article>
          <article>Third-party visual assets are references only.</article>
          <article>Kopis stays lender infrastructure, not lender or payroll API.</article>
        </div>
      </Panel>
      <Panel title="Claims analysis" eyebrow="What to keep, sharpen, retire">
        <MatrixTable rows={claimsAnalysis} headers={["Claim", "Status", "Better framing"]} />
      </Panel>
      <Panel title="Critical path" eyebrow="Sequenced steps">
        <WorkList items={criticalPath} />
      </Panel>
      <Panel title="Operating plan" eyebrow="7 · 30 · 90 days">
        <Timeline items={operatingPlan} />
      </Panel>
    </>
  );
}

function InvestorKitPage({
  theme,
  onThemeChange,
}: {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Investor Kit"
        title="Package the thesis without overstating the proof."
        body="The kit should make the operating thesis, pilot plan, legal queue, and lender wedge legible while keeping unresolved items counsel-dependent."
      />
      <div className="investor-grid">
        <AudioVisualizer compact />
        <VideoFrame compact />
        <Panel title="Resources" eyebrow="Placeholder packet" icon={<FolderOpen size={18} aria-hidden="true" />}>
          <ResourceList items={investorResources} />
        </Panel>
        <Panel title="Brand assets" eyebrow="Local system" icon={<FileText size={18} aria-hidden="true" />}>
          <ResourceList items={brandAssets} />
        </Panel>
        <Panel title="Ambient color animation" eyebrow="Original rebuild" icon={<Pause size={18} aria-hidden="true" />}>
          <div className="ambient-preview">
            <ThemeToggle onThemeChange={onThemeChange} theme={theme} />
            <div className="mini-wave" aria-hidden="true" />
          </div>
        </Panel>
      </div>
      <Panel title="Export packets" eyebrow="Print-ready views" icon={<Download size={18} aria-hidden="true" />}>
        <div className="export-link-grid">
          <a className="export-link" href="/export/counsel">
            <Scale size={18} aria-hidden="true" />
            <div>
              <strong>Counsel Packet</strong>
              <p>Legal queue, funds flow, workstreams, sequencing, and patent strategy.</p>
            </div>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="export-link" href="/export/lender">
            <Gauge size={18} aria-hidden="true" />
            <div>
              <strong>Lender Pilot Brief</strong>
              <p>Product overview, pilot scope, MVP, timeline, and buyer matrix.</p>
            </div>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="export-link" href="/export/investor">
            <FolderOpen size={18} aria-hidden="true" />
            <div>
              <strong>Investor Brief</strong>
              <p>Operating thesis, competitive map, GTM logic, critical path, operating plan.</p>
            </div>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Panel>
    </>
  );
}

function RouteContent({
  route,
  onNavigate,
  theme,
  onThemeChange,
}: {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
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
    case "next-moves":
      return <NextMovesPage />;
    case "investor-kit":
      return <InvestorKitPage onThemeChange={onThemeChange} theme={theme} />;
    case "command-brief":
    default:
      return <CommandBriefPage onNavigate={onNavigate} onThemeChange={onThemeChange} theme={theme} />;
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
        title="KOPIS Counsel Packet"
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
    </>
  );
}

function InvestorBriefView() {
  return (
    <>
      <ExportDocumentHeader
        icon={FolderOpen}
        title="KOPIS Investor Brief"
        subtitle="Operating thesis, market wedge, competitive position, and execution path. Pilot proof pending."
      />
      <Panel title="What Kopis is" eyebrow="Product thesis">
        <WorkList items={whatIsKopis} />
      </Panel>
      <Panel title="Product layers" eyebrow="Operating stack">
        <MatrixTable rows={productLayers} headers={["Layer", "What it owns", "Why it matters"]} />
      </Panel>
      <Panel title="Competitive map" eyebrow="Landscape">
        <MatrixTable rows={competitorRows} headers={["Category", "Examples", "What they own", "Kopis wedge"]} />
      </Panel>
      <div className="two-column">
        <Panel title="GTM operating logic" eyebrow="Lender-led">
          <WorkList items={growthItems} />
        </Panel>
        <Panel title="GTM phases" eyebrow="Commercial path">
          <Timeline items={gtmPhases} />
        </Panel>
      </div>
      <Panel title="Critical path" eyebrow="Sequenced steps">
        <WorkList items={criticalPath} />
      </Panel>
      <Panel title="Operating plan" eyebrow="7 · 30 · 90 days">
        <Timeline items={operatingPlan} />
      </Panel>
    </>
  );
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
        <AmbientField />
        <header className="export-top-bar">
          <a className="brand" href="/command-brief" onClick={(e) => handleNavigate(e, "/command-brief")}>
            <span className="brand-word">KOPIS</span>
            <span className="brand-subtitle">War Room</span>
          </a>
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
      <AmbientField />
      <aside className="side-rail" aria-label="KOPIS navigation">
        <LogoMark />
        <nav>
          {routes.map((route) => (
            <NavLink
              active={activeRoute.id === route.id}
              key={route.id}
              onNavigate={handleNavigate}
              route={route}
            />
          ))}
        </nav>
        <a
          className="war-room-cta"
          href="/command-brief"
          onClick={(event) => handleNavigate(event, "/command-brief")}
        >
          <span>Enter War Room</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <div className="rail-footer">
          <span>Operating frame</span>
          <strong>Lender infrastructure</strong>
          <p>Neutral orchestration, consent, servicing, reconciliation, and continuity for third-party lenders.</p>
        </div>
      </aside>
      <section className="content-shell">
        {activeRoute.id !== "command-brief" && (
          <TopBar activeRoute={activeRoute} onThemeChange={setTheme} theme={theme} />
        )}
        <RouteContent route={activeRoute} onNavigate={navigate} onThemeChange={setTheme} theme={theme} />
      </section>
    </main>
  );
}

export default App;
