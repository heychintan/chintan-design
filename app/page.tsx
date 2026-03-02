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
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

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
                className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                Hello, I&apos;m Chintan.
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="leading-8 text-text-secondary"
                >
                  Webflow &amp; Framer developer — I build websites for founders
                  who know that design isn&apos;t decoration. It&apos;s the
                  message.
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
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Seven years. Dozens of products. One standard.
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="mx-auto max-w-6xl py-8 md:py-10">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
                <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                  <AboutMeBento linkTo="/about" />
                </div>

                <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                  <ServicesBento linkTo="/projects" />
                </div>

                <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                  <ToolboxBento linkTo="/toolbox" />
                </div>

                <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                  <CalendarBento />
                </div>
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Testimonials Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="relative space-y-4 text-balance">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <BgGradient />
            </span>
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Reviews</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                The people who hired me, in their own words
              </h2>
            </GridWrapper>
          </div>

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
          <div className="relative space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Selected Work</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                Some of the work I&apos;m proud of
              </h2>
            </GridWrapper>
          </div>

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
                  href="/projects"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View all projects →
                </Link>
              </div>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* Site Sandbox Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Explore</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                More to explore on this site
              </h2>
            </GridWrapper>
          </div>

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

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
