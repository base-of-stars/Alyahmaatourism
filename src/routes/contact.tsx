import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import dubaiImage from "@/assets/dubai-creek-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Al Yahmaa Tourism | Deira, Dubai Headquarters",
      },
      {
        name: "description",
        content:
          "Connect with Al Yahmaa Tourism LLC in Deira, Dubai. WhatsApp concierge, phone, email, and office consultation for bespoke holidays and visas.",
      },
      {
        property: "og:title",
        content: "Contact Al Yahmaa Tourism | Dubai",
      },
      {
        property: "og:description",
        content: "Speak directly with our Dubai travel designers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Maldives");
  const [passengers, setPassengers] = useState("2 Adults");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Al Yahmaa Tourism!\nName: ${fullName}\nPhone: ${phone}\nDestination: ${destination}\nParty: ${passengers}\nDetails: ${notes || "No special notes"}`
    );
    window.open(`https://wa.me/971585669200?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Start A Conversation"
          title="Where would you like to go?"
          text="Share your dates, party size, and travel style. Our Dubai travel specialists will prepare a thoughtful, transparent proposal within hours."
          image={dubaiImage}
          imageAlt="Dubai Creek and the illuminated city skyline at sunset"
        />

        {/* Contact Information & Interactive Form */}
        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
            {/* Left: Office & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="eyebrow">Dubai Concierge Desk</p>
                <h2 className="section-title text-3xl sm:text-4xl">
                  Always available, always local
                </h2>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Our headquarters are located in the historic trading heart of
                  Deira, Dubai. We welcome clients for private in-person
                  consultations, or connect immediately via our verified
                  WhatsApp desk.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="https://wa.me/971585669200"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-sm border border-emerald-500/30 bg-emerald-50/50 p-5 dark:bg-emerald-950/20 transition-all hover:border-emerald-500"
                >
                  <MessageCircle className="size-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      WhatsApp Priority Line
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      +971 58 566 9200
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Fastest response · Typically replies within 5 minutes
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+971585669200"
                  className="flex items-start gap-4 rounded-sm border border-border bg-card p-5 transition-all hover:border-gold"
                >
                  <Phone className="size-6 text-coral shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Direct Telephone
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      +971 58 566 9200
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Arabic and English spoken fluently
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:Alyahmaatourism@gmail.com"
                  className="flex items-start gap-4 rounded-sm border border-border bg-card p-5 transition-all hover:border-gold"
                >
                  <Mail className="size-6 text-coral shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Official Inquiries Email
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground break-all">
                      Alyahmaatourism@gmail.com
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Written proposals & corporate tenders
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
                  <MapPin className="size-6 text-coral shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Office Address
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      301, Zarooni Building, Al Marrar, Deira
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dubai, United Arab Emirates
                    </p>
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      Mon – Sat: 9:00 AM – 9:00 PM GST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-border bg-card p-8 shadow-md md:p-10">
                <span className="eyebrow">Trip Consultation Request</span>
                <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Tell us about your upcoming plans
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Complete this form to generate a customized travel request
                  directly to our lead travel designer on WhatsApp.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-sm border border-gold/30 bg-gold/10 p-6 text-center text-sm text-gold">
                    <Sparkles className="mx-auto size-8 text-gold" />
                    <p className="mt-3 font-display text-lg font-bold">
                      Thank You! Your Request Has Been Prepared
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      If WhatsApp did not automatically open, please click below
                      to connect with our concierge immediately.
                    </p>
                    <Button
                      asChild
                      className="mt-5 rounded-sm bg-gold text-xs font-bold text-ink hover:bg-gold/90"
                    >
                      <a
                        href="https://wa.me/971585669200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open WhatsApp Concierge
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Faisal Al-Mansoori"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Intended Destination
                        </label>
                        <select
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                        >
                          <option value="Maldives">Maldives Overwater Sanctuary</option>
                          <option value="Switzerland">Swiss Alps & Zermatt</option>
                          <option value="Cappadocia">Cappadocia & Istanbul</option>
                          <option value="Bali">Bali & Nusa Islands</option>
                          <option value="Dubai Desert">Dubai Private Desert Reserve</option>
                          <option value="Georgia">Georgia & Kazbegi Retreat</option>
                          <option value="Amalfi Coast">Italy & Amalfi Coast</option>
                          <option value="Japan">Kyoto & Tokyo Harmony</option>
                          <option value="UAE Tourist Visa">UAE Tourist Visa Assistance</option>
                          <option value="Corporate / MICE">Corporate / Group Travel</option>
                          <option value="Other">Other Bespoke Destination</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Travel Party Size
                        </label>
                        <select
                          value={passengers}
                          onChange={(e) => setPassengers(e.target.value)}
                          className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                        >
                          <option value="Solo Traveler">Solo Traveler</option>
                          <option value="Couple (2 Adults)">Couple (2 Adults)</option>
                          <option value="Family (2 Adults + Children)">Family (2 Adults + Children)</option>
                          <option value="Small Group (4-8 Guests)">Small Group (4-8 Guests)</option>
                          <option value="Corporate Delegation (8+ Guests)">Corporate Delegation (8+ Guests)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        Specific Wishes, Dates or Preferences
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your preferred travel window, flight class, hotel style, or specific experiences you'd like included..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-2 w-full rounded-sm border border-border bg-background p-3.5 text-xs text-foreground focus:border-gold focus:outline-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="h-12 w-full rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                    >
                      <Send className="mr-2 size-4" />
                      Send Travel Request to Concierge
                    </Button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      Strict privacy guaranteed · No automated sales calls
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}