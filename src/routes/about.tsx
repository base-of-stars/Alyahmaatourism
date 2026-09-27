import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Globe2,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import desertImage from "@/assets/desert-camp.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Al Yahmaa Tourism | Dubai's Boutique Luxury Agency",
      },
      {
        name: "description",
        content:
          "Meet the Dubai travel directors focused on bespoke personal service, honest guidance, private aviation, and unforgettable tailor-made holidays.",
      },
      {
        property: "og:title",
        content: "About Al Yahmaa Tourism LLC",
      },
      {
        property: "og:description",
        content:
          "Travel planning built around listening, care, and trusted local expertise in Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const leadershipTeam = [
  {
    name: "Tariq Al-Mansoor",
    role: "Director of Heritage & Private Safaris",
    bio: "Over 18 years curating private conservation reserve expeditions and VIP delegations across the UAE and GCC.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Leila Van Der Berg",
    role: "Head of International Escapes & Resourcing",
    bio: "Specialist in private island properties across the Maldives, Seychelles, and Swiss alpine luxury chalets.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Salma Al-Ketbi",
    role: "Senior Immigration & Visa Operations Lead",
    bio: "Liaising directly with UAE federal authorities (GDRFA & ICP) for expedited 4-hour tourist visas and corporate clearances.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The Story Behind The Brand"
          title="Travel begins with someone who listens."
          text="We are a Dubai-based travel boutique founded on one conviction: the most remarkable journeys feel deeply personal long before take-off."
          image={desertImage}
          imageAlt="Private luxury desert majlis at sunset in Dubai"
        />

        {/* Narrative Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative">
              <div className="overflow-hidden rounded-sm border border-border shadow-md">
                <img
                  src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dubai waterfront and skyline"
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-sm bg-ink p-6 text-hero-foreground shadow-xl border border-gold/30">
                <p className="font-display text-2xl font-bold text-gold">
                  Born in Dubai
                </p>
                <p className="mt-1 text-xs text-hero-foreground/80">
                  Global in Reach · DTCM Licensed
                </p>
              </div>
            </div>

            <div className="lg:pl-6">
              <p className="eyebrow">Our Heritage & Mission</p>
              <h2 className="section-title">
                Personal travel care in an automated world
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                In an era dominated by faceless booking algorithms and robotic
                chatbots, Al Yahmaa Tourism restores the human art of travel
                design. We believe every holiday should reflect the rhythm,
                curiosities, and pace of the person taking it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Operating from our headquarters in Deira, Dubai, we leverage
                privileged relationships with the world’s most prestigious
                hoteliers, private jet operators, and cultural docents. Whether
                you require a secluded overwater pool villa in Baa Atoll or a
                vintage conservation safari through the Dubai sands, our
                concierge ensures every minute feels seamless.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2 text-xs font-semibold">
                  <ShieldCheck className="size-4 text-coral" /> DTCM Licensed
                </div>
                <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2 text-xs font-semibold">
                  <Globe2 className="size-4 text-gold" /> 45+ Partner Countries
                </div>
                <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2 text-xs font-semibold">
                  <Sparkles className="size-4 text-coral" /> VIP Fast-Track
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="bg-primary py-20 text-hero-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">The Al Yahmaa Standards</p>
              <h2 className="font-display text-4xl sm:text-5xl text-hero-foreground">
                Principles that shape every journey
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <article className="border-t border-hero-foreground/20 pt-7">
                <HeartHandshake className="size-8 text-gold" />
                <h3 className="mt-6 text-xl font-semibold">We Listen First</h3>
                <p className="mt-3 text-xs leading-relaxed text-hero-foreground/75">
                  We don’t sell pre-packaged compromises. Your dates, children's
                  routines, culinary preferences, and passions shape the plan.
                </p>
              </article>

              <article className="border-t border-hero-foreground/20 pt-7">
                <ShieldCheck className="size-8 text-gold" />
                <h3 className="mt-6 text-xl font-semibold">Absolute Clarity</h3>
                <p className="mt-3 text-xs leading-relaxed text-hero-foreground/75">
                  Zero hidden fees, transparent airline ticket classes, verified
                  room categories, and straightforward cancellation protection.
                </p>
              </article>

              <article className="border-t border-hero-foreground/20 pt-7">
                <MapPinned className="size-8 text-gold" />
                <h3 className="mt-6 text-xl font-semibold">24/7 Presence</h3>
                <p className="mt-3 text-xs leading-relaxed text-hero-foreground/75">
                  You are never handed off to a third-party call center. Our Dubai
                  team monitors your transfers and stays from departure to return.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Travel Directors & Curators */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <p className="eyebrow">The Curators</p>
              <h2 className="section-title mx-auto">
                Guided by experienced specialists
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Meet the directors who inspect the villas, test the balloon
                routes, and liaise with authorities on your behalf.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {leadershipTeam.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-sm border border-border bg-card p-6 shadow-xs transition-all hover:shadow-md"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="aspect-square w-full rounded-sm object-cover border border-border"
                  />
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold text-coral uppercase tracking-wider mt-1">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Quote */}
        <section className="bg-surface py-20 border-t border-border">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
              “The best journeys begin with a conversation, not a booking engine.”
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                className="rounded-sm bg-primary px-7 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">Speak With Our Directors</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}