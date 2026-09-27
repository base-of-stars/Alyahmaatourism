import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/al-yahmaa-logo.png.asset.json";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "Destinations", to: "/destinations" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteShell({ children, overlayHeader = false }: { children: ReactNode; overlayHeader?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerTone = overlayHeader
    ? "absolute border-hero-foreground/15 text-hero-foreground"
    : "relative border-border bg-background text-foreground";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className={`inset-x-0 top-0 z-40 border-b ${headerTone}`}>
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" aria-label="Al Yahmaa Tourism home" className="rounded-sm bg-hero-foreground px-3 py-1.5">
            <img src={logoAsset.url} alt="Al Yahmaa Tourism" className="h-14 w-auto" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="story-link text-sm font-medium transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden h-11 rounded-sm bg-gold px-5 text-ink shadow-none hover:bg-gold/90 lg:inline-flex">
            <a href="https://wa.me/971585669200" target="_blank" rel="noreferrer">Plan my trip <ArrowRight /></a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-hero-foreground/10 hover:text-gold lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="absolute inset-x-0 border-t border-hero-foreground/10 bg-primary px-5 py-5 text-hero-foreground shadow-xl lg:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="block border-b border-hero-foreground/10 py-3.5 text-sm font-medium" activeProps={{ className: "text-gold" }}>{item.label}</Link>
            ))}
          </nav>
        )}
      </header>

      {children}

      <footer className="bg-ink py-14 text-hero-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_1.5fr] lg:px-8">
          <div>
            <div className="inline-block rounded-sm bg-hero-foreground px-3 py-2"><img src={logoAsset.url} alt="Al Yahmaa Tourism" className="h-16 w-auto" /></div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-hero-foreground/60">Curated travel, personal service and memorable journeys from the heart of Dubai.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div><p className="footer-heading">Visit</p><p className="footer-copy"><MapPin className="footer-icon" />301, Zarooni Building<br />Al Marrar, Deira<br />Dubai, UAE</p></div>
            <div><p className="footer-heading">Contact</p><a href="tel:+971585669200" className="footer-copy hover:text-gold"><Phone className="footer-icon" />+971 58 566 9200</a><a href="mailto:Alyahmaatourism@gmail.com" className="footer-copy mt-3 break-all hover:text-gold"><Mail className="footer-icon" />Alyahmaatourism@gmail.com</a></div>
            <div><p className="footer-heading">Explore</p>{navigation.slice(1).map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-hero-foreground/10 px-5 pt-6 text-xs text-hero-foreground/45 sm:flex-row sm:justify-between lg:px-8">
          <p>© 2026 Al Yahmaa Tourism LLC. All rights reserved.</p><p>Dubai, United Arab Emirates</p>
        </div>
      </footer>

      <a href="https://wa.me/971585669200" target="_blank" rel="noreferrer" aria-label="Chat with Al Yahmaa on WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-13 place-items-center rounded-full bg-coral text-coral-foreground shadow-lg transition-transform hover:scale-105">
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image, imageAlt }: { eyebrow: string; title: string; text: string; image: string; imageAlt: string }) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden py-16 md:min-h-[68svh]">
      <img src={image} alt={imageAlt} width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover motion-safe:animate-hero-zoom" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold"><span className="h-px w-10 bg-gold" />{eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.04] text-hero-foreground sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/80 sm:text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
}