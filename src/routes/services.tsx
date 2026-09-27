import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Car, Check, FileCheck2, Headphones, Palmtree, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import maldivesImage from "@/assets/maldives.jpg";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "Travel Services in Dubai | Al Yahmaa Tourism" }, { name: "description", content: "Flights, hotels, holiday packages, visa assistance, transfers and UAE experiences with personal support." },
  { property: "og:title", content: "Travel Services | Al Yahmaa Tourism" }, { property: "og:description", content: "One trusted Dubai team for every part of your journey." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ServicesPage });

const services = [
  [Plane, "Flights & ticketing", "Route planning and fare options for leisure, family and business travel.", ["Multi-city itineraries", "Flexible fare guidance", "Group flight support"]],
  [Building2, "Hotels & resorts", "Carefully selected stays that match your location, comfort and budget.", ["City and beach hotels", "Family-friendly resorts", "Luxury villas"]],
  [Palmtree, "Holiday packages", "Complete trips with flights, stays, transfers and experiences in one plan.", ["Honeymoons", "Family escapes", "Group holidays"]],
  [FileCheck2, "Visa assistance", "Organised guidance to help you prepare and submit a complete application.", ["Document checklist", "Application review", "Status guidance"]],
  [Car, "Transfers & experiences", "Reliable airport pickups, private drivers and memorable local activities.", ["Airport transfers", "City tours", "Desert experiences"]],
  [Headphones, "Travel support", "A familiar Dubai-based team available before and throughout your journey.", ["Pre-departure checks", "On-trip assistance", "Itinerary changes"]],
] as const;

function ServicesPage() { return <SiteShell><main><PageHero eyebrow="One team, every detail" title="Travel feels better when everything connects." text="From your first flight search to the ride home, we bring every part of your trip together with clarity, care and one point of contact." image={maldivesImage} imageAlt="Clear lagoon and overwater villas in the Maldives" />
  <section className="py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 max-w-2xl"><p className="eyebrow">What we arrange</p><h2 className="section-title">Complete support, without the complexity</h2></div><div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon, title, text, points]) => <article key={title} className="border-b border-r border-border p-7 transition-colors hover:bg-surface"><Icon className="size-8 text-coral" strokeWidth={1.5}/><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><ul className="mt-5 space-y-2">{points.map((point) => <li key={point} className="flex items-center gap-2 text-sm"><Check className="size-4 text-gold" />{point}</li>)}</ul></article>)}</div></div></section>
  <section className="bg-surface py-20"><div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8"><div><p className="eyebrow">How it works</p><h2 className="section-title">Simple from the start</h2></div><ol className="grid gap-6 sm:grid-cols-3">{[["01","Tell us your idea"],["02","Review your plan"],["03","Travel with support"]].map(([number,title]) => <li key={number} className="border-t border-primary pt-5"><span className="font-display text-3xl text-coral">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">We keep each step clear, personal and easy to approve.</p></li>)}</ol></div></section>
  <section className="bg-primary py-16 text-hero-foreground"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Ready when you are</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">Make your plans real with one conversation.</h2></div><Button asChild size="lg" className="rounded-sm bg-gold text-ink hover:bg-gold/90"><a href="https://wa.me/971585669200" target="_blank" rel="noreferrer">Speak with our team <ArrowRight /></a></Button></div></section>
</main></SiteShell> }