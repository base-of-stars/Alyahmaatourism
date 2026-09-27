import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Compass,
  FileCheck2,
  Globe2,
  Headphones,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/dubai-creek-hero.jpg";
import { blogPosts, destinations, packages } from "@/lib/travel-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Al Yahmaa Tourism Dubai | Bespoke Luxury Travel & UAE Experiences",
      },
      {
        name: "description",
        content:
          "Curated holidays, private desert safaris, 5-star holiday packages, express UAE tourist visas, and corporate travel management from Dubai.",
      },
      {
        property: "og:title",
        content: "Al Yahmaa Tourism | Travel Beyond the Ordinary",
      },
      {
        property: "og:description",
        content:
          "Thoughtfully planned journeys and personal travel concierge from Dubai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image-1200x630.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Al Yahmaa Tourism Dubai - Luxury Travel & Desert Sanctuaries" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Al Yahmaa Tourism Dubai | Bespoke Luxury Travel" },
      { name: "twitter:description", content: "Curated holidays, private desert safaris, 5-star packages, and UAE visa concierge." },
      { name: "twitter:image", content: "/og-image-1200x630.jpg" },
    ],
  }),
  component: HomePage,
});

const servicePillars = [
  {
    icon: Plane,
    title: "Flights & Luxury Charters",
    text: "First and business class commercial ticketing, multi-city routing, and private jet charters.",
    to: "/services",
  },
  {
    icon: Building2,
    title: "Curated Hotels & Resorts",
    text: "Preferred partner rates and VIP privileges at overwater villas, cave suites, and heritage palazzos.",
    to: "/packages",
  },
  {
    icon: FileCheck2,
    title: "UAE & Global Visa Concierge",
    text: "Direct GDRFA 30/60-day tourist visas, 4-hour express issuance, and Schengen/UK dossier prep.",
    to: "/visas",
  },
  {
    icon: Compass,
    title: "Private Desert Expeditions",
    text: "Conservation reserve safaris in vintage Land Rovers, starlit majlis dining, and falconry traditions.",
    to: "/destinations",
  },
];

function HomePage() {
  const [selectedDest, setSelectedDest] = useState("Maldives");
  const [travelPace, setTravelPace] = useState("Luxury Leisure");

  const latestPosts = blogPosts.slice(0, 3);
  const featuredPackages = packages.slice(0, 3);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const query = encodeURIComponent(
      `Hello Al Yahmaa Tourism, I am planning a journey to ${selectedDest} focusing on ${travelPace}. I would like to consult with a travel designer.`
    );
    window.open(`https://wa.me/971585669200?text=${query}`, "_blank");
  };

  return (
    <SiteShell overlayHeader>
      <main>
        {/* Main Hero Section */}
        <section className="relative flex min-h-[94svh] items-end overflow-hidden pb-20 pt-40 md:items-center md:pb-0">
          <img
            src={heroImage}
            alt="Traditional abra on Dubai Creek at twilight"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover motion-safe:animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-hero-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Dubai-Based Luxury Travel Specialists
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-hero-foreground sm:text-6xl lg:text-8xl">
                Travel beyond
                <br />
                <span className="font-normal italic text-gold">
                  the ordinary.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">
                Bespoke global holidays, private desert sanctuaries, and seamless
                visa management—thoughtfully orchestrated from Dubai with
                24/7 client care.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-sm bg-gold px-8 text-xs font-bold uppercase tracking-wider text-ink shadow-lg hover:bg-gold/90"
                >
                  <a
                    href="https://wa.me/971585669200"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    Start Your Journey <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-sm border-hero-foreground/40 bg-hero-foreground/10 px-8 text-xs font-bold uppercase tracking-wider text-hero-foreground backdrop-blur-sm hover:bg-hero-foreground hover:text-ink"
                >
                  <Link to="/packages">Explore Signature Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Travel Planner Ribbon */}
        <section className="relative z-30 -mt-10 mx-auto max-w-6xl px-5 lg:px-8">
          <div className="rounded-sm border border-border bg-card p-6 shadow-xl md:p-8">
            <form
              onSubmit={handleQuickInquiry}
              className="grid gap-6 md:grid-cols-4 md:items-end"
            >
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Dream Destination
                </label>
                <select
                  value={selectedDest}
                  onChange={(e) => setSelectedDest(e.target.value)}
                  className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3 text-xs font-medium text-foreground focus:border-gold focus:outline-none"
                >
                  {destinations.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.region})
                    </option>
                  ))}
                  <option value="Custom Itinerary">Other Custom Route</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Travel Atmosphere
                </label>
                <select
                  value={travelPace}
                  onChange={(e) => setTravelPace(e.target.value)}
                  className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3 text-xs font-medium text-foreground focus:border-gold focus:outline-none"
                >
                  <option value="Honeymoon & Romantic Sanctuary">
                    Honeymoon & Romantic Sanctuary
                  </option>
                  <option value="Family Holiday & Multi-Gen">
                    Family Holiday & Multi-Gen
                  </option>
                  <option value="Alpine Rail & High Altitude">
                    Alpine Rail & High Altitude
                  </option>
                  <option value="Desert Wildlife & Heritage">
                    Desert Wildlife & Heritage
                  </option>
                  <option value="VIP Corporate Retreat">
                    VIP Corporate Retreat
                  </option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Concierge Channel
                </label>
                <div className="mt-2 flex h-11 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-gold shrink-0" />
                  <span>Direct Dubai Concierge</span>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="h-11 w-full rounded-sm bg-primary text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                >
                  Check Availability
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Trust Credentials Bar */}
        <section className="border-b border-border py-8 pt-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <ShieldCheck className="size-8 text-coral shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    DTCM Licensed In Dubai
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Government regulated tourism boutique
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Star className="size-8 text-gold shrink-0 fill-gold" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Handpicked 5-Star Partners
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Overwater villas, chalets & cave suites
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Headphones className="size-8 text-coral shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    24/7 Client WhatsApp
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Always one conversation away
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Award className="size-8 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Express Visa Channel
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Direct GDRFA & ICP electronic portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Where Will You Go Next?</p>
                <h2 className="section-title">Journeys worth remembering</h2>
              </div>
              <Button asChild variant="link" className="w-fit px-0 text-coral">
                <Link to="/destinations" className="flex items-center gap-1">
                  See all 8 destinations <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {destinations.slice(0, 3).map((dest, idx) => (
                <Link
                  key={dest.id}
                  to="/destinations"
                  className={`group relative overflow-hidden rounded-sm border border-border shadow-xs ${
                    idx === 1 ? "md:-mt-6 md:mb-6" : ""
                  }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    width={1500}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-card-overlay" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-hero-foreground">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                        {dest.note}
                      </p>
                      <h3 className="mt-1 font-display text-3xl font-semibold">
                        {dest.name}
                      </h3>
                      <p className="mt-1 text-xs text-hero-foreground/80">
                        {dest.price} · {dest.duration}
                      </p>
                    </div>
                    <span className="grid size-11 place-items-center border border-hero-foreground/50 transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Packages Spotlight */}
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Ready-To-Experience</p>
                <h2 className="section-title">Curated signature packages</h2>
              </div>
              <Button asChild variant="link" className="w-fit px-0 text-coral">
                <Link to="/packages" className="flex items-center gap-1">
                  View all packages <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {pkg.badge && (
                        <span className="absolute top-3 left-3 rounded-sm bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-coral">
                        {pkg.category} · {pkg.duration}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                        {pkg.title}
                      </h3>
                      <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {pkg.summary}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-muted-foreground">
                        From
                      </span>
                      <p className="font-display text-lg font-bold text-primary">
                        {pkg.price}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-sm bg-gold text-xs font-bold text-ink hover:bg-gold/90"
                    >
                      <Link to="/packages">
                        Details <ArrowRight className="ml-1 size-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Journal / Editorial Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">The Travel Journal</p>
                <h2 className="section-title">
                  Perspectives, dispatches & insider guides
                </h2>
              </div>
              <Button asChild variant="link" className="w-fit px-0 text-coral">
                <Link to="/blog" className="flex items-center gap-1">
                  Visit the Journal <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      <span className="absolute top-3 left-3 rounded-sm bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span>{post.publishedAt}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-coral">
                        <Link
                          to="/blog/$slug"
                          params={{ slug: post.slug }}
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border px-6 py-4">
                    <span className="text-xs font-medium text-foreground">
                      By {post.author.name}
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center text-xs font-semibold text-coral"
                    >
                      Read Story <ArrowRight className="ml-1 size-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Support Section */}
        <section className="bg-primary py-20 text-hero-foreground md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow text-gold">Complete Travel Mastery</p>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl text-hero-foreground">
                Everything you need,
                <br />
                <span className="font-normal italic text-gold">
                  arranged with distinction.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-hero-foreground/75">
                From luxury airport tarmac transfers to bespoke visa processing
                and private yacht charters, we coordinate every logistical
                element through one trusted Dubai contact.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                >
                  <Link to="/services">
                    Explore All Services <ArrowRight className="ml-1.5 size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid border-l border-t border-hero-foreground/15 sm:grid-cols-2">
              {servicePillars.map((serv) => {
                const Icon = serv.icon;
                return (
                  <Link
                    key={serv.title}
                    to={serv.to as any}
                    className="group border-b border-r border-hero-foreground/15 p-7 transition-colors hover:bg-hero-foreground/5 block"
                  >
                    <Icon
                      className="size-7 text-gold transition-transform group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-6 text-lg font-semibold text-hero-foreground group-hover:text-gold transition-colors">
                      {serv.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-hero-foreground/70">
                      {serv.text}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial & Dubai Headquarters Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="eyebrow">The Al Yahmaa Difference</p>
              <h2 className="section-title">
                Real specialists. Handcrafted itineraries. Flawless execution.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We combine deep Emirati heritage, direct aviation networks, and
                personalized attention to make every journey effortless. You
                never speak with call centers; you speak directly with
                experienced travel designers in Dubai.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-6 text-coral shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Full Protection & Licensing
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Licensed by Department of Economy & Tourism, Dubai.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="size-6 text-coral shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Continuous Trip Monitoring
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We check flight status, hotel readiness, and driver arrivals
                      in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="rounded-sm border border-border bg-surface p-8 md:p-12 shadow-xs">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                “Al Yahmaa organized our family's anniversary trip to the
                Maldives and Cappadocia. Every private transfer was early, the
                cave suite was breathtaking, and having their team on WhatsApp
                made our entire journey completely stress-free.”
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-coral">
                  Verified Traveler Review
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Faisal & Mariam Al-Qasimi{" "}
                  <span className="font-normal text-muted-foreground">
                    — Dubai, UAE
                  </span>
                </p>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}