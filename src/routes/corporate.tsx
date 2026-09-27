import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Globe2,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      {
        title: "Corporate Travel & MICE Management Dubai | Al Yahmaa Tourism",
      },
      {
        name: "description",
        content:
          "End-to-end corporate travel solutions, executive chauffeur fleet, VIP airport fast-track, and MICE group hospitality in Dubai and across the GCC.",
      },
      {
        property: "og:title",
        content: "Corporate Travel & Executive Concierge | Al Yahmaa Dubai",
      },
      {
        property: "og:description",
        content:
          "High-touch business travel management, private aviation, and luxury corporate events in Dubai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image-1200x630.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-1200x630.jpg" },
    ],
  }),
  component: CorporatePage,
});

const corporatePillars = [
  {
    icon: Users2,
    title: "MICE & Corporate Retreats",
    text: "Curated executive summits, annual retreats, incentive travel programs, and private desert gala dinners tailored for multinational teams.",
    points: [
      "Custom gala staging in private desert reserves",
      "High-tech meeting room & banquet sourcing",
      "Experiential team building & yacht regattas",
    ],
  },
  {
    icon: Building,
    title: "Luxury Chauffeur & Fleet",
    text: "Pristine Mercedes-Benz S-Class, Maybach, and V-Class luxury vans with professional suited chauffeurs fluent in English and Arabic.",
    points: [
      "Point-to-point executive transfers",
      "Full-day dedicated chauffeur standby",
      "Luxury 35-50 passenger VIP motorcoaches",
    ],
  },
  {
    icon: Plane,
    title: "VIP Airport Fast-Track & Ahlan",
    text: "Tarmac luxury limousine escort, dedicated immigration clearance, and premium lounge hospitality at DXB and DWC terminals.",
    points: [
      "No waiting in standard passport queues",
      "Personal baggage porterage to vehicle",
      "Access to Marhaba and First Class lounges",
    ],
  },
  {
    icon: Sparkles,
    title: "Private Aviation & Charters",
    text: "On-demand midsize and heavy business jets for regional GCC hops, European business circuits, and urgent executive travel.",
    points: [
      "Access to Al Maktoum VIP Executive Terminal",
      "Departure clearance in under 15 minutes",
      "Custom in-flight catering & sommelier",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Trade Expos & Delegations",
    text: "Comprehensive travel logistics for global exhibitions in Dubai: GITEX, Arab Health, Gulfood, and Dubai Airshow.",
    points: [
      "Hotel room blocks near Dubai World Trade Centre",
      "Daily scheduled executive shuttles",
      "VIP delegate visa fast-tracking",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & VAT Invoicing",
    text: "Transparent corporate billing, itemized FTA-compliant Tax Invoices, and flexible 30-day corporate credit terms for vetted clients.",
    points: [
      "Dedicated corporate account director",
      "Consolidated monthly travel statements",
      "Emergency 24/7 flight rebooking line",
    ],
  },
];

function CorporatePage() {
  const corporateMsg = encodeURIComponent(
    "Hello Al Yahmaa Tourism, I am looking to establish a corporate travel account or request an executive group proposal for Dubai."
  );

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Business Elevated"
          title="Corporate travel management with executive precision."
          text="From Fortune 500 delegations and VIP airport fast-tracking to luxury fleet management and unforgettable desert galas in Dubai."
          image="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Executive corporate meeting and skyline presentation"
        />

        {/* Corporate Metrics Bar */}
        <section className="border-b border-border bg-surface/50 py-8">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-coral">15 Mins</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  Guaranteed SLA Response
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-coral">50+ Fleet</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  Luxury Vehicles & Chauffeurs
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-coral">100%</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  VAT & FTA Compliant Billing
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-coral">24 / 7</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  Dedicated Corporate Desk
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="eyebrow">Enterprise Solutions</p>
              <h2 className="section-title">
                Complete travel management for companies that value time
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We understand that for executives and corporate planners, timing,
                flawless presentation, and instant responsiveness are non-negotiable.
              </p>
            </div>

            <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
              {corporatePillars.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border-b border-r border-border p-8 transition-colors hover:bg-surface"
                  >
                    <Icon className="size-8 text-coral" strokeWidth={1.5} />
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    <ul className="mt-6 space-y-2 text-xs">
                      {item.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-foreground/85"
                        >
                          <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Corporate Inquiry Strip */}
        <section className="bg-ink py-16 text-hero-foreground">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Corporate Accounts
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl text-hero-foreground">
                Partner with Al Yahmaa for your corporate travel.
              </h2>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-hero-foreground/75">
                Speak directly with our Head of Corporate Partnerships to set
                up corporate rates, billing terms, and dedicated account support.
              </p>
            </div>

            <Button
              asChild
              className="h-12 shrink-0 rounded-sm bg-gold px-7 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
            >
              <a
                href={`https://wa.me/971585669200?text=${corporateMsg}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                Connect With Corporate Desk
              </a>
            </Button>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
