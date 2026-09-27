import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  Compass,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import { destinations, type Destination } from "@/lib/travel-data";
import cappadociaImage from "@/assets/cappadocia.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      {
        title: "Curated Holiday Destinations & Luxury Escapes | Al Yahmaa Dubai",
      },
      {
        name: "description",
        content:
          "Discover tailor-made luxury holidays to the Maldives, Switzerland, Bali, Cappadocia, Amalfi Coast, Japan, and UAE private desert reserves.",
      },
      {
        property: "og:title",
        content: "Curated Global Destinations | Al Yahmaa Tourism",
      },
      {
        property: "og:description",
        content:
          "Handpicked escapes shaped around your dates, style, and travel pace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image-1200x630.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image-1200x630.jpg" },
    ],
  }),
  component: DestinationsPage,
});

const regions = [
  "All Destinations",
  "United Arab Emirates",
  "Indian Ocean",
  "Europe",
  "Türkiye",
  "Asia",
] as const;

function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All Destinations");

  const filteredDestinations = destinations.filter((item) => {
    if (selectedRegion === "All Destinations") return true;
    if (selectedRegion === "Europe") {
      return item.region.includes("Switzerland") || item.region.includes("Italy") || item.region.includes("Georgia");
    }
    if (selectedRegion === "Asia") {
      return item.region.includes("Indonesia") || item.region.includes("Japan");
    }
    return item.region.includes(selectedRegion);
  });

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The World, Thoughtfully Chosen"
          title="Places that linger long after you return."
          text="These journeys are refined blueprints. Every stay, private excursion, and transit cadence is adjusted by our Dubai team around your preferences."
          image={cappadociaImage}
          imageAlt="Hot air balloons floating above Cappadocia at dawn"
        />

        {/* Region Filter Bar */}
        <section className="border-b border-border bg-surface/50 py-6">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                    selectedRegion === reg
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Handpicked Sanctuaries</p>
                <h2 className="section-title">
                  {selectedRegion === "All Destinations"
                    ? "Eight journeys designed for the discerning traveler"
                    : `Featured escapes in ${selectedRegion}`}
                </h2>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Showing {filteredDestinations.length} destinations
              </span>
            </div>

            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {filteredDestinations.map((dest) => {
                const inquiryMsg = encodeURIComponent(
                  `Hello Al Yahmaa Tourism, I am interested in planning a luxury trip to ${dest.name} (${dest.duration}). Please provide sample itineraries and hotel options.`
                );

                return (
                  <article
                    key={dest.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card shadow-xs transition-all hover:border-gold/40 hover:shadow-lg"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          loading="lazy"
                          width={1400}
                          height={900}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 rounded-sm bg-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                          {dest.note}
                        </div>
                        <div className="absolute bottom-4 right-4 rounded-sm bg-background/90 px-3 py-1 text-xs font-bold text-primary shadow">
                          {dest.price}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-coral">
                              {dest.region}
                            </p>
                            <h3 className="mt-1 font-display text-3xl font-semibold text-foreground">
                              {dest.name}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {dest.description}
                        </p>

                        {/* Highlights list */}
                        <div className="mt-5 space-y-2 border-t border-border pt-4">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                            Signature Experiences:
                          </p>
                          <ul className="space-y-1.5 text-xs text-muted-foreground">
                            {dest.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Sparkles className="size-3 text-gold shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Meta info & Action */}
                    <div className="border-t border-border bg-surface/30 px-7 py-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
                        <div className="space-y-1">
                          <p className="flex items-center gap-1.5">
                            <Calendar className="size-3.5 text-coral" />
                            <span>Pacing: <strong className="text-foreground">{dest.duration}</strong></span>
                          </p>
                          <p className="flex items-center gap-1.5">
                            <Compass className="size-3.5 text-gold" />
                            <span>Best season: <strong className="text-foreground">{dest.bestSeason}</strong></span>
                          </p>
                        </div>

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
                            Plan Trip
                          </a>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="bg-primary py-16 text-hero-foreground">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Have somewhere else in mind?
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-hero-foreground">
                Tell us where. We will shape the journey.
              </h2>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-hero-foreground/75">
                Our global partner network extends across 45 countries, from
                Seychelles villas to Nordic Aurora glass igloos.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-sm bg-gold px-7 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
            >
              <a
                href="https://wa.me/971585669200"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                Request Custom Route <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}