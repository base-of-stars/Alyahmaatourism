import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Compass,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, SiteShell } from "@/components/site-shell";
import { blogPosts, type BlogPost } from "@/lib/travel-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Travel Journal & Curated Guides | Al Yahmaa Tourism Dubai" },
      {
        name: "description",
        content:
          "In-depth destination insights, desert conservation essays, luxury resort evaluations, and UAE visa advice from Al Yahmaa Tourism.",
      },
      {
        property: "og:title",
        content: "Al Yahmaa Travel Journal | Luxury Insights & Guides",
      },
      {
        property: "og:description",
        content:
          "Curated travel literature, destination perspectives, and insider recommendations written by Dubai's luxury travel specialists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndexPage,
});

const categories = [
  "All Articles",
  "Desert & Heritage",
  "Luxury Escapes",
  "Insider Guides",
  "Visa & Travel Advice",
  "Gastronomy & Culture",
] as const;

function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const gridPosts =
    selectedCategory === "All Articles" && searchQuery === ""
      ? blogPosts.slice(1)
      : filteredPosts;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The Al Yahmaa Journal"
          title="Stories, perspectives & travel intelligence."
          text="Essays on ancient landscapes, insider resort critiques, culinary dispatches, and regulatory updates—crafted by our Dubai travel directors."
          image="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1200"
          imageAlt="Dubai Marina yachts and twilight waters"
        />

        {/* Filter and Search Bar */}
        <section className="border-b border-border bg-surface/50 py-8">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles & topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 w-full rounded-sm border border-border bg-background pl-10 pr-4 text-xs tracking-wide focus:border-gold focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Editorial Post (shown when not filtered) */}
        {selectedCategory === "All Articles" && searchQuery === "" && featuredPost && (
          <section className="py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-coral">
                <Sparkles className="size-4" />
                Featured Editorial
              </div>

              <div className="group grid gap-8 overflow-hidden rounded-sm border border-border bg-card lg:grid-cols-12">
                <div className="relative overflow-hidden lg:col-span-7">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    loading="eager"
                    width={1200}
                    height={800}
                    className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-sm bg-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                    {featuredPost.category}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 lg:col-span-5 lg:p-10">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-coral" />
                        {featuredPost.publishedAt}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-coral" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl text-foreground">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: featuredPost.slug }}
                        className="transition-colors hover:text-coral"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="size-10 rounded-full object-cover border border-gold/40"
                      />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="rounded-sm bg-primary text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                    >
                      <Link
                        to="/blog/$slug"
                        params={{ slug: featuredPost.slug }}
                      >
                        Read Journal <ArrowRight className="ml-1.5 size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {selectedCategory === "All Articles"
                  ? "Recent Dispatches"
                  : selectedCategory}
              </h2>
              <span className="text-xs text-muted-foreground font-medium">
                Showing {gridPosts.length} article
                {gridPosts.length === 1 ? "" : "s"}
              </span>
            </div>

            {gridPosts.length === 0 ? (
              <div className="rounded-sm border border-dashed border-border py-16 text-center">
                <BookOpen className="mx-auto size-10 text-muted-foreground/40" />
                <p className="mt-4 font-display text-xl text-foreground">
                  No articles matched your criteria
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try clearing the search query or selecting another category.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All Articles");
                    setSearchQuery("");
                  }}
                  variant="outline"
                  className="mt-5 rounded-sm"
                >
                  Reset filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {gridPosts.map((post) => (
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
                            width={800}
                            height={520}
                            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </Link>
                        <span className="absolute top-3.5 left-3.5 rounded-sm bg-ink/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="size-3 text-coral" />
                            {post.readTime}
                          </span>
                          <span>·</span>
                          <span>{post.publishedAt}</span>
                        </div>

                        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-coral transition-colors">
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
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="size-7 rounded-full object-cover border border-gold/30"
                        />
                        <span className="text-xs font-medium text-foreground">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center text-xs font-semibold text-coral transition-transform group-hover:translate-x-1"
                      >
                        Read <ArrowRight className="ml-1 size-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter & Curators' Dispatch */}
        <section className="bg-primary py-16 text-hero-foreground">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <span className="eyebrow text-gold">The Private Dispatch</span>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl text-hero-foreground">
              Curated perspectives delivered once a month.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-hero-foreground/75">
              Receive private invitations, seasonal flight opportunities, and
              first access to boutique resort allocations curated by our Dubai
              concierge. No spam, ever.
            </p>

            {subscribed ? (
              <div className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-6 py-3 text-sm text-gold">
                <Sparkles className="size-4" /> Thank you for subscribing to
                The Private Dispatch.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-hero-foreground/40" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="h-12 w-full rounded-sm border border-hero-foreground/20 bg-hero-foreground/10 pl-10 pr-4 text-xs text-hero-foreground placeholder:text-hero-foreground/40 focus:border-gold focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 rounded-sm bg-gold px-6 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
                >
                  Join Dispatch
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
