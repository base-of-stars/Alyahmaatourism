import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck2,
  HelpCircle,
  MessageCircle,
  Plane,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import { visaServices, type VisaService } from "@/lib/travel-data";

export const Route = createFileRoute("/visas")({
  head: () => ({
    meta: [
      {
        title: "UAE Tourist Visas & Global Visa Concierge | Al Yahmaa Dubai",
      },
      {
        name: "description",
        content:
          "Official UAE 30-day and 60-day tourist visas, 4-hour express processing, and international visa assistance for Schengen, UK, and Saudi e-visas.",
      },
      {
        property: "og:title",
        content: "UAE & Global Visa Services | Al Yahmaa Tourism",
      },
      {
        property: "og:description",
        content:
          "Fast, licensed visa issuance and document preparation from Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisasPage,
});

function VisasPage() {
  const [selectedService, setSelectedService] = useState<string>("all");

  const uaeVisas = visaServices.filter((v) =>
    v.country.includes("United Arab Emirates")
  );
  const internationalVisas = visaServices.filter(
    (v) => !v.country.includes("United Arab Emirates")
  );

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Government Authorized Partner"
          title="UAE tourist visas & global visa concierge."
          text="Seamless electronic entry permits, 4-hour express approvals, and meticulous international visa dossier assistance direct from our Dubai offices."
          image="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Passports, boarding passes and international travel preparation"
        />

        {/* Trust Badges Bar */}
        <section className="border-b border-border bg-surface/50 py-6">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    GDRFA & ICP Direct Access
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Authorized electronic immigration portal
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-6 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    4-Hour Express Options
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Emergency travel & same-day turnaround
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck2 className="size-6 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    99.4% Approval Rate
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Pre-submission document verification
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="size-6 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Direct WhatsApp Support
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Real-time status updates & instant copy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UAE Entry Permits Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">United Arab Emirates Visas</p>
              <h2 className="section-title">
                Clear pricing, swift turnaround, zero complications
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Whether you are planning a family holiday, hosting international
                relatives, or attending Dubai trade expos, our licensed visa
                specialists manage every requirement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {uaeVisas.map((visa) => {
                const visaMsg = encodeURIComponent(
                  `Hello Al Yahmaa Tourism, I would like to apply for the "${visa.type}". Could you check my passport documents?`
                );

                return (
                  <div
                    key={visa.id}
                    className="flex flex-col justify-between rounded-sm border border-border bg-card p-7 shadow-sm transition-all hover:border-gold hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-coral">
                          {visa.country}
                        </span>
                        {visa.badge && (
                          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                            {visa.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                        {visa.type}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {visa.description}
                      </p>

                      <div className="mt-5 space-y-2 border-y border-border py-4 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Processing:</span>
                          <span className="font-semibold text-foreground">
                            {visa.processingTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Validity:</span>
                          <span className="font-semibold text-foreground">
                            {visa.validity}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          Requirements:
                        </p>
                        <ul className="mt-2.5 space-y-2">
                          {visa.requirements.map((req, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-border pt-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            Total Fee
                          </span>
                          <p className="font-display text-xl font-bold text-primary">
                            {visa.price}
                          </p>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                        >
                          <a
                            href={`https://wa.me/971585669200?text=${visaMsg}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <MessageCircle className="size-3.5" />
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step-by-Step Walkthrough */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">The Simple Protocol</p>
              <h2 className="section-title">
                Four simple steps to your approved visa
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Send Documents",
                  desc: "Send your clear passport scan and photo via WhatsApp or email to our immigration desk.",
                },
                {
                  step: "02",
                  title: "Pre-Audit Check",
                  desc: "We verify validity, name spelling, and eligibility against official immigration databases.",
                },
                {
                  step: "03",
                  title: "Government Lodgement",
                  desc: "Application is submitted with expedited fees directly through our licensed GDRFA/ICP channel.",
                },
                {
                  step: "04",
                  title: "PDF Delivery",
                  desc: "Your official verified electronic e-visa is delivered to your WhatsApp and email ready for printing.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-sm border border-border bg-card p-6 shadow-xs"
                >
                  <span className="font-display text-3xl font-bold text-coral">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Outbound Visas */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">Outbound Travel</p>
              <h2 className="section-title">
                Schengen, UK, US & Saudi Visa Concierge
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                UAE residents planning journeys abroad receive comprehensive
                application handling, appointment slots, verified flight and
                hotel bookings, and compliant medical travel insurance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {internationalVisas.map((visa) => {
                const visaMsg = encodeURIComponent(
                  `Hello Al Yahmaa Tourism, I am a UAE resident interested in applying for a "${visa.type}". Could you assist with appointment booking and dossier preparation?`
                );

                return (
                  <div
                    key={visa.id}
                    className="flex flex-col justify-between rounded-sm border border-border bg-card p-7 shadow-sm transition-all hover:border-gold hover:shadow-md"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-coral">
                        {visa.country}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                        {visa.type}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {visa.description}
                      </p>

                      <div className="mt-4 space-y-2 border-y border-border py-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Timeline:</span>
                          <span className="font-semibold text-foreground">
                            {visa.processingTime}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          Key Documents:
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {visa.requirements.map((req, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-emerald-600" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-border pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          Service Fee
                        </span>
                        <p className="font-display text-lg font-bold text-primary">
                          {visa.price}
                        </p>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="rounded-sm bg-gold text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                      >
                        <a
                          href={`https://wa.me/971585669200?text=${visaMsg}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Inquire
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Assistance Callout */}
        <section className="bg-ink py-16 text-hero-foreground">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                Immediate Action Required?
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl text-hero-foreground">
                Urgent flight tomorrow? Speak with our duty immigration officer.
              </h3>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-hero-foreground/75">
                We handle express same-day submissions and overstay regularizations
                daily for corporate executives and traveling families.
              </p>
            </div>
            <Button
              asChild
              className="h-12 shrink-0 rounded-sm bg-gold px-6 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
            >
              <a
                href="https://wa.me/971585669200?text=URGENT%20VISA%20REQUEST:%20Need%20immediate%20UAE%20express%20clearance."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                Emergency Visa Line
              </a>
            </Button>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
