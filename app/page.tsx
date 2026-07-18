import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { ServicesBento } from "./components/ServicesBento";
import { ReviewsBento } from "./components/ReviewsBento";
import { StatsBento } from "./components/StatsBento";
import { ReviewCard } from "./components/ReviewCard";
import { ProofStrip } from "./components/ProofStrip";
import { ProcessSection } from "./components/ProcessSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { FaqSection } from "./components/FaqSection";
import { SectionLabel } from "./components/SectionLabel";
import { Reveal } from "./components/Reveal";
import Link from "next/link";
import clsx from "clsx";

const featuredReviews = [
  {
    name: "Janet Lee",
    role: "Head of GTM",
    company: "daydream",
    quote:
      "Chintan was great to work with and always goes above and beyond. The quality of his work is superb. He's really, really good at what he does.",
  },
  {
    name: "Scott Amenta",
    role: "Founder",
    company: "CoS Network & Sylva",
    quote:
      "Chintan rebuilt our entire website from scratch. He took direction and feedback in real-time with accuracy and grace. Extremely responsive throughout.",
  },
  {
    name: "Gauthami Polasani",
    role: "Director, Product Marketing",
    company: "TMDC",
    quote:
      "Working with Chintan has been an outstanding experience. Highly organized, incredibly responsive — his expertise made the entire process smooth and efficient.",
  },
];

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.2;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        {/* Hero Section */}
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-4xl text-center text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl"
              >
                I build websites that grow businesses.
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  Web developer &amp; product builder for founders and teams —
                  from high-converting marketing sites to web apps, tools, and
                  AI-powered products that look sharp and actually perform.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>

          {/* Proof Strip — metrics + client logos */}
          <GridWrapper>
            <ProofStrip />
          </GridWrapper>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          <Reveal className="space-y-4">
            <GridWrapper>
              <SectionLabel index="01" title="About" />
            </GridWrapper>
            <GridWrapper>
              <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
                Seven years. Dozens of products. One standard.
              </h2>
            </GridWrapper>
          </Reveal>

          <GridWrapper>
            <div className="mx-auto max-w-6xl py-8 md:py-10">
              <div className="grid grid-cols-1 gap-2 overflow-hidden md:grid-cols-12">
                <div className="col-span-1 md:col-span-5 lg:col-span-5">
                  <AboutMeBento linkTo="/about" />
                </div>

                <div className="md:col-span-7 md:row-start-1 lg:col-span-7">
                  <ToolboxBento linkTo="/toolbox" />
                </div>

                <div className="md:col-span-7 lg:col-span-7">
                  <ServicesBento linkTo="/services" />
                </div>

                <div className="md:col-span-5 lg:col-span-5">
                  <CalendarBento />
                </div>
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Selected Work Section — accent-tinted room */}
        <section className="relative -mx-4 space-y-10 bg-[rgb(var(--accent-50)/0.6)] px-4 py-14 md:space-y-16 md:py-20 lg:-mx-8 lg:px-8">
          <Reveal className="relative space-y-4 text-balance">
            <GridWrapper>
              <SectionLabel index="02" title="Selected Work" />
            </GridWrapper>
            <GridWrapper>
              <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
                Real results from real projects
              </h2>
            </GridWrapper>
          </Reveal>
          <GridWrapper>
            <FeaturedProjects />
          </GridWrapper>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Testimonials Section */}
        <section className="relative space-y-10 md:space-y-16">
          <Reveal className="relative space-y-4 text-balance">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <BgGradient />
            </span>
            <GridWrapper>
              <SectionLabel index="04" title="Reviews" />
            </GridWrapper>
            <GridWrapper>
              <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
                What clients say about working together
              </h2>
            </GridWrapper>
          </Reveal>

          <div className="z-10">
            <GridWrapper>
              <div className="mx-auto max-w-6xl py-8 md:py-10">
                <ul className="z-50 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {featuredReviews.map((review) => (
                    <li key={review.name}>
                      <ReviewCard
                        name={review.name}
                        role={review.role}
                        company={review.company}
                        quote={review.quote}
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/reviews"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Read all 9 reviews →
                  </Link>
                </div>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="relative space-y-10 md:space-y-16">
          <Reveal className="relative space-y-4 text-balance">
            <GridWrapper>
              <SectionLabel index="05" title="From the Blog" />
            </GridWrapper>
            <GridWrapper>
              <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
                Notes on web, design, and AI
              </h2>
            </GridWrapper>
          </Reveal>

          <div className="z-10">
            <GridWrapper>
              <div className="mx-auto max-w-6xl py-8 md:py-10">
              <ul className="z-50 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {featuredArticles.length > 0 ? (
                  <>
                    {featuredArticles.slice(0, 4).map((post, index) => (
                      <FeaturedBlogCard
                        key={post.slug}
                        slug={post.slug}
                        imageName={post.imageName}
                        title={post.title}
                        summary={post.summary}
                        className={clsx(
                          index === 3 && "hidden md:block lg:hidden",
                        )}
                      />
                    ))}
                  </>
                ) : (
                  <li className="col-span-3 text-center text-text-secondary py-8">
                    Case studies coming soon — check back shortly.
                  </li>
                )}
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href="/blog"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Read the blog →
                </Link>
              </div>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* Site Sandbox Section */}
        <section className="relative space-y-10 md:space-y-16">
          <Reveal className="space-y-4 text-balance">
            <GridWrapper>
              <SectionLabel index="06" title="Explore" />
            </GridWrapper>
            <GridWrapper>
              <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
                More to explore on this site
              </h2>
            </GridWrapper>
          </Reveal>

          <GridWrapper>
            <div className="mx-auto max-w-6xl py-8 md:py-10">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                  <ChangelogBento />
                </span>
                <ReviewsBento linkTo="/reviews" />
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
