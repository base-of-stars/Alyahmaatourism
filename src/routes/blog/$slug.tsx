import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  MessageCircle,
  Share2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { blogPosts, type BlogPost } from "@/lib/travel-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Article Not Found | Al Yahmaa Tourism" }],
      };
    }
    return {
      meta: [
        { title: `${post.title} | Al Yahmaa Travel Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.coverImage },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Al Yahmaa Tourism, I just read your article "${post.title}" and would like to inquire about planning a bespoke journey.`
  );

  return (
    <SiteShell>
      <main className="py-10 md:py-16">
        {/* Article Breadcrumbs & Controls */}
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Link
                to="/blog"
                className="flex items-center gap-1 font-semibold text-coral transition-colors hover:underline"
              >
                <ArrowLeft className="size-3.5" /> Back to Journal
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs transition-colors hover:border-gold hover:text-foreground"
              >
                <Share2 className="size-3.5 text-gold" />
                {copied ? "Link Copied!" : "Share Article"}
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Article Header */}
        <header className="mx-auto max-w-4xl px-5 pt-10 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-sm bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
            <Compass className="size-3.5" />
            {post.category}
          </div>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.12] text-foreground sm:text-4xl md:text-5xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {post.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-11 rounded-full object-cover border border-gold/40 shadow-sm"
              />
              <div>
                <p className="text-xs font-bold text-foreground">
                  {post.author.name}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-coral" />
                {post.publishedAt}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-coral" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Main Cover Image */}
        <div className="mx-auto mt-10 max-w-5xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-sm border border-border shadow-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              width={1400}
              height={850}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        {/* Article Body & Side Callout */}
        <article className="mx-auto max-w-4xl px-5 pt-12 lg:px-8">
          {/* Key Takeaways Box */}
          {post.highlights && post.highlights.length > 0 && (
            <div className="mb-12 rounded-sm border border-gold/30 bg-surface p-7 md:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                <Sparkles className="size-4" />
                Key Highlights At A Glance
              </div>
              <ul className="mt-5 space-y-3">
                {post.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-coral" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Sections */}
          <div className="space-y-12 text-base leading-relaxed text-foreground/90">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {section.heading}
                </h2>

                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="leading-8 text-foreground/80">
                    {para}
                  </p>
                ))}

                {section.callout && (
                  <div className="my-6 border-l-2 border-gold bg-surface px-6 py-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {section.callout.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {section.quote && (
                  <blockquote className="my-8 border-l-4 border-coral pl-6 py-2">
                    <p className="font-display text-xl italic leading-relaxed text-foreground">
                      “{section.quote}”
                    </p>
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* Visual Gallery if available */}
          {post.gallery && post.gallery.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Visual Perspectives
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Captured during Al Yahmaa private expeditions and inspections.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {post.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-sm border border-border group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${post.title} gallery ${i + 1}`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author Profile Card */}
          <div className="mt-14 flex flex-col items-start gap-5 rounded-sm border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="size-16 rounded-full object-cover border-2 border-gold/40 shadow"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-coral">
                Written by
              </p>
              <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                {post.author.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {post.author.role} at Al Yahmaa Tourism LLC
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Based in Dubai, advising high-net-worth travelers, organizing
                private aviation itineraries, and curating rare experiential
                journeys across the Middle East and beyond.
              </p>
            </div>
          </div>

          {/* Interactive Inquire CTA */}
          <div className="mt-12 rounded-sm bg-ink p-8 text-hero-foreground md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  Bespoke Planning
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl text-hero-foreground">
                  Ready to experience this journey?
                </h3>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-hero-foreground/75">
                  Connect directly with our travel designers on WhatsApp to
                  tailor this route around your specific dates, preferred
                  villas, and private transfer needs.
                </p>
              </div>
              <Button
                asChild
                className="h-12 shrink-0 rounded-sm bg-gold px-6 text-xs font-bold uppercase tracking-wider text-ink hover:bg-gold/90"
              >
                <a
                  href={`https://wa.me/971585669200?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  Inquire On WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 border-t border-border bg-surface/50 py-16">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="eyebrow">Continue Exploring</p>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Related Dispatches from the Journal
                  </h3>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-sm"
                >
                  <Link to="/blog">
                    View All <ArrowRight className="ml-1 size-3" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((rPost) => (
                  <article
                    key={rPost.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-md"
                  >
                    <div>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: rPost.slug }}
                        className="block overflow-hidden"
                      >
                        <img
                          src={rPost.coverImage}
                          alt={rPost.title}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                      <div className="p-5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-coral">
                          {rPost.category}
                        </span>
                        <h4 className="mt-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-coral">
                          <Link
                            to="/blog/$slug"
                            params={{ slug: rPost.slug }}
                          >
                            {rPost.title}
                          </Link>
                        </h4>
                        <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                          {rPost.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground flex justify-between items-center">
                      <span>{rPost.readTime}</span>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: rPost.slug }}
                        className="font-semibold text-coral inline-flex items-center"
                      >
                        Read <ArrowRight className="ml-1 size-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
