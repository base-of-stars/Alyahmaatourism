import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import { faqs, type FAQItem } from "@/lib/travel-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title: "Frequently Asked Questions & Travel Policy | Al Yahmaa Dubai",
      },
      {
        name: "description",
        content:
          "Helpful answers regarding luxury booking policies, payment methods, UAE visa protocols, customized itineraries, and 24/7 guest support.",
      },
      {
        property: "og:title",
        content: "Travel FAQ & Policies | Al Yahmaa Tourism",
      },
      {
        property: "og:description",
        content:
          "Everything you need to know before embarking on your journey with Al Yahmaa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQPage,
});

const categories = [
  "All Questions",
  "Bookings & Payments",
  "Custom Itineraries",
  "UAE & Visas",
  "Support & Safety",
] as const;

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((item) => {
    const matchCat =
      activeCategory === "All Questions" || item.category === activeCategory;
    const matchQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Clarity & Transparency"
          title="Frequently asked questions."
          text="Clear guidance on how we work, booking and payment procedures, bespoke itinerary design, and our 24/7 client care commitment."
          image="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Downtown Dubai architecture and serene waters"
        />

        {/* Filter and Search Bar */}
        <section className="border-b border-border bg-surface/50 py-8">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null);
                    }}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 w-full rounded-sm border border-border bg-background pl-10 pr-4 text-xs tracking-wide focus:border-gold focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Questions */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-sm border border-dashed border-border py-16 text-center">
                <HelpCircle className="mx-auto size-10 text-muted-foreground/40" />
                <p className="mt-4 font-display text-xl text-foreground">
                  No matching questions found
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Our Dubai concierge team is available right now to answer any
                  specific inquiry.
                </p>
                <Button
                  onClick={() => {
                    setActiveCategory("All Questions");
                    setSearchQuery("");
                  }}
                  variant="outline"
                  className="mt-4 rounded-sm text-xs"
                >
                  Reset search
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-sm border border-border bg-card transition-colors hover:border-gold/50"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex w-full items-center justify-between p-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`size-5 shrink-0 text-coral transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground animate-fade-in">
                          <p>{faq.answer}</p>
                          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] text-muted-foreground/75">
                            <span className="uppercase tracking-wider font-semibold text-coral">
                              Category: {faq.category}
                            </span>
                            <a
                              href={`https://wa.me/971585669200?text=${encodeURIComponent(
                                `Hello Al Yahmaa, I have a question regarding: "${faq.question}"`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-gold hover:underline"
                            >
                              Ask our team about this →
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Unresolved Questions Box */}
        <section className="bg-primary py-16 text-hero-foreground">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center lg:px-8">
            <span className="eyebrow text-gold">Direct Concierge Access</span>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl text-hero-foreground">
              Have a question specific to your journey?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-hero-foreground/75">
              Skip the forms and phone menus. Message our Dubai headquarters
              directly on WhatsApp for immediate, personalized travel advice.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-sm bg-gold px-8 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
            >
              <a
                href="https://wa.me/971585669200"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                Chat With Concierge Now
              </a>
            </Button>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
