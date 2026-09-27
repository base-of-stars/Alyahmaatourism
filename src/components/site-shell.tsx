import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/al-yahmaa-logo.png.asset.json";
import brandLogo from "@/assets/logo.webp";

export const mainNav = [
  { label: "Home", to: "/" as const },
  { label: "Destinations", to: "/destinations" as const },
  { label: "Packages", to: "/packages" as const },
  { label: "Services", to: "/services" as const },
  { label: "Visa Concierge", to: "/visas" as const },
  { label: "Journal", to: "/blog" as const },
  { label: "Corporate", to: "/corporate" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteShell({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerTone = overlayHeader
    ? "absolute border-hero-foreground/15 text-hero-foreground"
    : "relative border-border bg-background text-foreground";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-gold/30 selection:text-ink">
      {/* Top Luxury Bar */}
      <div className="relative z-50 hidden border-b border-hero-foreground/10 bg-ink px-4 py-2 text-xs text-hero-foreground/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold">
              <ShieldCheck className="size-3.5" />
              DTCM Licensed Tourism Operator · Dubai, UAE
            </span>
            <span className="text-hero-foreground/30">|</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-gold" />
              Bespoke Private Itineraries & Luxury Charters
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+971585669200"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="size-3 text-gold" />
              +971 58 566 9200
            </a>
            <span className="text-hero-foreground/30">|</span>
            <a
              href="mailto:Alyahmaatourism@gmail.com"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="size-3 text-gold" />
              Alyahmaatourism@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-colors ${headerTone}`}>
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            aria-label="Al Yahmaa Tourism home"
            className="group flex items-center gap-3 rounded-sm bg-hero-foreground px-3.5 py-2 shadow-sm transition-transform hover:scale-[1.02]"
          >
            <img
              src={brandLogo || logoAsset.url}
              alt="Al Yahmaa Tourism"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="story-link text-xs font-semibold uppercase tracking-wider transition-colors hover:text-gold"
                activeProps={{ className: "text-gold font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              className="h-11 rounded-sm bg-gold px-5 text-ink shadow-sm transition-all hover:bg-gold/90 hover:shadow"
            >
              <a
                href="https://wa.me/971585669200"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="size-4" />
                Concierge Chat
              </a>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-hero-foreground/10 hover:text-gold lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav
            className="absolute inset-x-0 border-t border-hero-foreground/10 bg-primary/95 px-6 py-6 text-hero-foreground shadow-2xl backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-hero-foreground/10 py-3.5 text-sm font-medium tracking-wide transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold font-bold" }}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-2">
              <Button
                asChild
                className="h-12 w-full rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
              >
                <a
                  href="https://wa.me/971585669200"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Concierge
                </a>
              </Button>
              <div className="mt-2 text-center text-xs text-hero-foreground/60">
                Al Marrar, Deira · Dubai, UAE · +971 58 566 9200
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Page Body */}
      {children}

      {/* Footer */}
      <footer className="relative bg-ink pt-16 pb-12 text-hero-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-2">
              <div className="inline-block rounded-sm bg-hero-foreground px-4 py-2.5 shadow-sm">
                <img
                  src={brandLogo || logoAsset.url}
                  alt="Al Yahmaa Tourism"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-hero-foreground/70">
                Al Yahmaa Tourism LLC is a premier Dubai-based luxury travel
                management boutique. We curate bespoke global escapes, private
                desert expeditions, VIP visa clearances, and tailored corporate
                travel with uncompromising care.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gold">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
                  <ShieldCheck className="size-3.5" /> Licensed by Dubai Economy & Tourism
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
                  <Globe2 className="size-3.5" /> IATA Registered Services
                </span>
              </div>
            </div>

            {/* Col 2: Destinations & Packages */}
            <div>
              <p className="footer-heading">Journeys</p>
              <div className="flex flex-col gap-2">
                <Link to="/destinations" className="footer-link">
                  All Destinations
                </Link>
                <Link to="/packages" className="footer-link">
                  Signature Packages
                </Link>
                <Link to="/destinations" className="footer-link">
                  Maldives Overwater
                </Link>
                <Link to="/destinations" className="footer-link">
                  Cappadocia Suites
                </Link>
                <Link to="/destinations" className="footer-link">
                  Swiss Alpine Rails
                </Link>
                <Link to="/destinations" className="footer-link">
                  Dubai Desert Sanctuaries
                </Link>
              </div>
            </div>

            {/* Col 3: Services & Visas */}
            <div>
              <p className="footer-heading">Specialties</p>
              <div className="flex flex-col gap-2">
                <Link to="/services" className="footer-link">
                  Travel Services
                </Link>
                <Link to="/visas" className="footer-link">
                  UAE 30/60 Day Visas
                </Link>
                <Link to="/visas" className="footer-link">
                  Express 4-Hour Visas
                </Link>
                <Link to="/visas" className="footer-link">
                  Schengen & UK Concierge
                </Link>
                <Link to="/corporate" className="footer-link">
                  Corporate & MICE Travel
                </Link>
                <Link to="/faq" className="footer-link">
                  Travel FAQ & Advice
                </Link>
              </div>
            </div>

            {/* Col 4: Contact & Office */}
            <div>
              <p className="footer-heading">Dubai Headquarters</p>
              <div className="space-y-3 text-xs text-hero-foreground/70">
                <p className="footer-copy text-xs">
                  <MapPin className="footer-icon size-3.5" />
                  <span>
                    301, Zarooni Building
                    <br />
                    Al Marrar, Deira
                    <br />
                    Dubai, United Arab Emirates
                  </span>
                </p>
                <a
                  href="tel:+971585669200"
                  className="footer-copy text-xs hover:text-gold"
                >
                  <Phone className="footer-icon size-3.5" />
                  +971 58 566 9200
                </a>
                <a
                  href="mailto:Alyahmaatourism@gmail.com"
                  className="footer-copy text-xs break-all hover:text-gold"
                >
                  <Mail className="footer-icon size-3.5" />
                  Alyahmaatourism@gmail.com
                </a>
                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-hero-foreground/40">
                    Concierge Hours
                  </p>
                  <p className="text-xs text-hero-foreground/80">
                    Mon – Sat: 9:00 AM – 9:00 PM GST
                    <br />
                    24/7 Emergency Guest Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hero-foreground/10 pt-8 text-xs text-hero-foreground/50 sm:flex-row">
            <p>© {new Date().getFullYear()} Al Yahmaa Tourism LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/blog" className="hover:text-gold">
                Travel Journal
              </Link>
              <span>·</span>
              <Link to="/faq" className="hover:text-gold">
                FAQ & Policies
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-gold">
                Contact Concierge
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971585669200"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Al Yahmaa on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-500"
      >
        <MessageCircle className="size-5 fill-current" />
        <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  actionLabel,
  actionHref,
  actionTo,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  actionLabel?: string;
  actionHref?: string;
  actionTo?: string;
}) {
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden py-16 md:min-h-[64svh]">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover motion-safe:animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-10 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-hero-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-hero-foreground/80 sm:text-lg">
            {text}
          </p>
          {(actionLabel && (actionHref || actionTo)) && (
            <div className="mt-8">
              {actionTo ? (
                <Button asChild size="lg" className="rounded-sm bg-gold text-ink hover:bg-gold/90">
                  <Link to={actionTo as any}>
                    {actionLabel} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="rounded-sm bg-gold text-ink hover:bg-gold/90">
                  <a href={actionHref} target="_blank" rel="noreferrer">
                    {actionLabel} <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}