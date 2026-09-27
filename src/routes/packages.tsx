import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Compass,
  MapPin,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import { packages, type TourPackage } from "@/lib/travel-data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      {
        title: "Signature Holiday Packages & Luxury Itineraries | Al Yahmaa Dubai",
      },
      {
        name: "description",
        content:
          "Handcrafted luxury travel packages to the Maldives, Switzerland, Cappadocia, and UAE private desert sanctuaries with 24/7 concierge support.",
      },
      {
        property: "og:title",
        content: "Signature Journeys & Packages | Al Yahmaa Tourism",
      },
      {
        property: "og:description",
        content:
          "Complete luxury itineraries featuring 5-star suites, private chauffeurs, and exclusive access.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image-1200x630.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-1200x630.jpg" },
    ],
  }),
  component: PackagesPage,
});

const filterCategories = [
  "All Journeys",
  "Desert & Arabian",
  "Island & Sanctuary",
  "Heritage & Wonder",
  "Alpine & Scenic",
] as const;

function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Journeys");
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const filteredPackages = packages.filter((pkg) => {
    if (activeCategory === "All Journeys") return true;
    return pkg.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedPackage((curr) => (curr === id ? null : id));
  };

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Crafted to Perfection"
          title="Signature journeys, seamlessly executed."
          text="Complete, multi-day journeys designed with uncompromising attention to detail—from private chauffeur arrivals to handpicked cliffside villas."
          image="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Dubai skyline illuminated at golden hour"
        />

        {/* Filter bar */}
        <section className="border-b border-border bg-surface/60 py-6">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages List */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="space-y-16">
              {filteredPackages.map((pkg) => {
                const isExpanded = expandedPackage === pkg.id;
                const inquiryMsg = encodeURIComponent(
                  `Hello Al Yahmaa Tourism, I am interested in booking or customizing the "${pkg.title}" package (${pkg.duration}). Could you provide detailed availability?`
                );

                return (
                  <article
                    key={pkg.id}
                    className="overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="grid gap-8 lg:grid-cols-12">
                      {/* Image side */}
                      <div className="relative overflow-hidden lg:col-span-5">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          loading="lazy"
                          width={1000}
                          height={700}
                          className="h-full w-full object-cover min-h-[320px]"
                        />
                        {pkg.badge && (
                          <div className="absolute top-4 left-4 rounded-sm bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow">
                            {pkg.badge}
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 rounded-sm bg-ink/80 px-3 py-1.5 text-xs font-semibold text-hero-foreground backdrop-blur-md">
                          <MapPin className="mr-1.5 inline size-3.5 text-gold" />
                          {pkg.destination}
                        </div>
                      </div>

                      {/* Content side */}
                      <div className="flex flex-col justify-between p-6 lg:col-span-7 lg:p-8 lg:pl-0">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                              {pkg.category}
                            </span>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                              <Clock className="size-4 text-gold" />
                              {pkg.duration}
                            </div>
                          </div>

                          <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                            {pkg.title}
                          </h2>

                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {pkg.summary}
                          </p>

                          {/* Highlights pills */}
                          <div className="mt-6 space-y-2.5">
                            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                              Signature Inclusions:
                            </p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {pkg.highlights.map((h, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-foreground/80"
                                >
                                  <Check className="mt-0.5 size-3.5 shrink-0 text-coral" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Investment (Per Person)
                            </span>
                            <p className="font-display text-2xl font-semibold text-primary">
                              {pkg.price}
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleExpand(pkg.id)}
                              className="rounded-sm border-border text-xs font-semibold"
                            >
                              {isExpanded ? "Hide Itinerary" : "View Day-by-Day"}
                              <ChevronDown
                                className={`ml-1.5 size-3.5 transition-transform ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </Button>

                            <Button
                              asChild
                              size="sm"
                              className="rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                            >
                              <a
                                href={`https://wa.me/971585669200?text=${inquiryMsg}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5"
                              >
                                <MessageCircle className="size-3.5" />
                                Inquire Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Day-by-Day Accordion Breakdown */}
                    {isExpanded && (
                      <div className="border-t border-border bg-surface/40 p-6 lg:p-10">
                        <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                          <Compass className="size-4" />
                          Detailed Day-by-Day Route
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {pkg.days.map((d) => (
                            <div
                              key={d.day}
                              className="rounded-sm border border-border bg-background p-5 shadow-xs"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-display text-lg font-bold text-coral">
                                  Day {d.day}
                                </span>
                              </div>
                              <h4 className="mt-2 text-sm font-bold text-foreground">
                                {d.title}
                              </h4>
                              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                {d.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 rounded-sm border border-border bg-background p-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                            What Is Always Included:
                          </p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                            {pkg.included.map((inc, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Journey Consultation */}
        <section className="bg-primary py-20 text-hero-foreground">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <span className="eyebrow text-gold">Bespoke Travel Design</span>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl text-hero-foreground">
              Desire a tailor-made route crafted exclusively for you?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-hero-foreground/75">
              Every detail can be modified. Add private jet charters, swap
              hotels, arrange celebratory dinners, or build a multi-country
              expedition from scratch with our Dubai team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
              >
                <a
                  href="https://wa.me/971585669200?text=Hello%20Al%20Yahmaa,%20I%20would%20like%20to%20design%20a%20completely%20custom%20luxury%20itinerary."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  Consult Our Travel Designers
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
