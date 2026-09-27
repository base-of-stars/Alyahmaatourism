import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, Globe2, Headphones, Plane, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/dubai-creek-hero.jpg";
import { destinations } from "@/lib/travel-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Al Yahmaa Tourism | Tailor-Made Travel from Dubai" },
    { name: "description", content: "Curated holidays, UAE experiences, flights, hotels and visa assistance from Al Yahmaa Tourism in Dubai." },
    { property: "og:title", content: "Al Yahmaa Tourism | Travel Beyond the Ordinary" },
    { property: "og:description", content: "Thoughtfully planned journeys and personal travel service from Dubai." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const services = [
  { icon: Plane, title: "Flights & Holidays", text: "Smart routes, handpicked stays and complete holiday planning." },
  { icon: Building2, title: "Hotels & Resorts", text: "From city landmarks to private-island villas, selected for you." },
  { icon: Globe2, title: "Visa Assistance", text: "Clear document guidance and careful application support." },
  { icon: Compass, title: "UAE Experiences", text: "Private desert evenings, city highlights and family adventures." },
];

function HomePage() {
  return (
    <SiteShell overlayHeader>
      <main>
        <section className="relative flex min-h-[92svh] items-end overflow-hidden pb-16 pt-36 md:items-center md:pb-0">
          <img src={heroImage} alt="A traditional abra on Dubai Creek at sunset" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover motion-safe:animate-hero-zoom" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold"><span className="h-px w-10 bg-gold" />Dubai-based travel specialists</p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-hero-foreground sm:text-6xl lg:text-8xl">Travel beyond<br /><span className="font-normal italic text-gold">the ordinary.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">Bespoke holidays, seamless planning and remarkable places—thoughtfully arranged from Dubai, just for you.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-13 rounded-sm bg-gold px-7 text-ink shadow-none hover:bg-gold/90"><a href="https://wa.me/971585669200" target="_blank" rel="noreferrer">Start your journey <ArrowRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-sm border-hero-foreground/50 bg-transparent px-7 text-hero-foreground shadow-none hover:bg-hero-foreground hover:text-primary"><Link to="/destinations">Explore destinations</Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-5"><div className="mx-auto max-w-5xl px-5 lg:px-8"><p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Bespoke planning, personal support, every journey</p></div></section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Where will you go next?</p><h2 className="section-title">Journeys worth remembering</h2></div><Button asChild variant="link" className="w-fit px-0 text-coral"><Link to="/destinations">See all destinations</Link></Button></div>
            <div className="grid gap-5 md:grid-cols-3">{destinations.slice(0, 3).map((destination, index) => <Link key={destination.name} to="/destinations" className={`group relative overflow-hidden rounded-sm ${index === 1 ? "md:mt-12" : ""}`}><img src={destination.image} alt={destination.name} loading="lazy" width={1536} height={1024} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-card-overlay" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-hero-foreground"><div><p className="text-xs uppercase tracking-[0.14em] text-gold">{destination.note}</p><h3 className="mt-1 font-display text-3xl">{destination.name}</h3></div><span className="grid size-11 place-items-center border border-hero-foreground/50 transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink"><ArrowRight /></span></div></Link>)}</div>
          </div>
        </section>

        <section className="bg-primary py-20 text-hero-foreground md:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="eyebrow text-gold">Travel, made effortless</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Everything you need,<br /><span className="font-normal italic text-gold">all in one place.</span></h2><p className="mt-6 max-w-md leading-7 text-hero-foreground/70">One team, one conversation and a journey that feels effortless from the first idea to the flight home.</p></div><div className="grid border-l border-t border-hero-foreground/15 sm:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <article key={title} className="border-b border-r border-hero-foreground/15 p-7 transition-colors hover:bg-hero-foreground/5"><Icon className="size-7 text-gold" strokeWidth={1.5} /><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-hero-foreground/65">{text}</p></article>)}</div></div></section>

        <section className="py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8"><div><p className="eyebrow">Why Al Yahmaa</p><h2 className="section-title">Real people. Thoughtful plans. Better journeys.</h2><p className="mt-6 leading-7 text-muted-foreground">We combine local knowledge, global partners and careful listening to make every trip feel personal. You always know who to call, and every detail has a purpose.</p><div className="mt-8 flex items-center gap-4"><ShieldCheck className="size-9 text-coral" /><div><p className="font-semibold">Support from Dubai, wherever you travel</p><p className="text-sm text-muted-foreground">Before departure, while away and when you return.</p></div></div></div><blockquote className="bg-surface p-8 md:p-12"><p className="font-display text-2xl leading-relaxed">“The itinerary felt completely ours. Every transfer was on time, the hotels were beautiful and the team checked in throughout.”</p><footer className="mt-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-coral">Sample review</p><p className="mt-2 text-sm font-semibold">Mariam & Faisal <span className="font-normal text-muted-foreground">— Maldives escape</span></p></footer></blockquote></div></section>
      </main>
    </SiteShell>
  );
}