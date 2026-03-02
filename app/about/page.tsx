import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import React from "react";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";
import { ReviewsBento } from "@/app/components/ReviewsBento";
import { ChangelogBento } from "@/app/components/ChangelogBento";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ToolboxBento } from "@/app/components/ToolboxBento";
import { CalendarBento } from "@/app/components/CalendarBento";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Chintan Savaliya</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Chintan — builder, designer, generalist.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/avatar.jpg"
                      alt="Chintan Savaliya"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/avatar.jpg"
                      alt="Chintan Savaliya"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/avatar.jpg"
                      alt="Chintan Savaliya"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* Story */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>My Story</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                From a math kid in India to building products for the world
              </h2>
            </GridWrapper>
          </div>

          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278} />
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/avatar.jpg"
                      alt="Chintan as a kid"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  The kid who noticed everything
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary">
                  I grew up in India drawn to two things: solving math problems
                  and noticing design everywhere. Not the kind you frame on a
                  wall — the kind that shapes how you move through the world.
                  The clean lines of a basketball court. Highway signs readable
                  at speed. Temple walls with patterns so precise they felt
                  algorithmic.
                </p>
                <p className="text-base leading-8 text-text-secondary">
                  My father drew handbags for a living. I spent a lot of time
                  watching him work. That observation lived somewhere in the
                  back of my brain for a long time before I knew what to do
                  with it.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278} />
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/avatar.jpg"
                    alt="Chintan as a kid"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278} />
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/avatar.jpg"
                      alt="Chintan at NIT"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  The deliberate dropout
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary">
                  I got into NIT — one of India&apos;s top engineering
                  institutes. But within my first year, something felt wrong.
                  The curriculum was outdated. Attendance policies were rigid.
                  I wasn&apos;t learning — I was going through motions.
                </p>
                <p className="text-base leading-8 text-text-secondary">
                  So I spent most of my time in the labs building things we
                  actually cared about: autonomous drones, 3D replicas of
                  real environments, systems that solved real problems. I
                  dropped out in my second year. No backup plan — just the
                  certainty that I couldn&apos;t spend four more years in a
                  system that didn&apos;t fit how I wanted to learn. Looking
                  back, I can connect all the dots now. It was inevitable.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278} />
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/avatar.jpg"
                    alt="Chintan at NIT"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278} />
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/avatar.jpg"
                      alt="Chintan building"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Building with constraints
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary">
                  Right before COVID, I went back to what I&apos;d always
                  loved: computers and building things. When the pandemic
                  forced everyone inside, businesses needed websites
                  immediately. I started building them — Webflow, Memberstack,
                  Zapier, whatever got the job done.
                </p>
                <p className="text-base leading-8 text-text-secondary">
                  Limited budgets, tight timelines, small teams. That pressure
                  shaped how I work: ruthlessly prioritising what matters,
                  moving fast, and delivering results. I&apos;ve always been a
                  generalist — not the kind who submits to one craft, but
                  someone who flows like water, learning and adapting as they
                  go.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278} />
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/avatar.jpg"
                    alt="Chintan building"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278} />
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/avatar.jpg"
                      alt="Chintan today"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  These days
                </h2>
                <p className="mb-4 text-base leading-8 text-text-secondary">
                  I now run Monday Labs — building AI products and agents for
                  clients in healthcare, hospitality, and fintech. Before
                  that, I led product at Sylva for Miitra, an AI-powered
                  Community OS I built from 0→1. It launched as{" "}
                  <span className="font-medium text-text-primary">
                    #11 Product of the Day on ProductHunt
                  </span>
                  , drove a 30% increase in logins, and cut churn from 12%
                  to 9%.
                </p>
                <p className="text-base leading-8 text-text-secondary">
                  For the past seven years I&apos;ve worked with people across
                  health, sports, food, travel, and tech — from early-stage
                  startups to established brands across the US, Europe, and
                  Asia. When I&apos;m not building, I&apos;m riding bikes,
                  working out, or thinking too much about whether a spacing
                  decision feels right. Based in India. Working globally.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278} />
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/avatar.jpg"
                    alt="Chintan today"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Where I&apos;ve worked and what I&apos;ve shipped
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <div className="mx-auto max-w-6xl py-8 md:py-12">
              <Resume />
            </div>
          </GridWrapper>
        </div>

        {/* More */}
        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                A few more things
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="mx-auto max-w-6xl py-8 md:py-10">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                <div className="lg:col-span-3 lg:row-span-6">
                  <CurrentlyPlayingBento />
                </div>
                <div className="lg:col-span-7 lg:row-span-8">
                  <ReviewsBento linkTo="/reviews" />
                </div>
                <div className="lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:min-h-[50px]">
                  <ChangelogBento />
                </div>
                <div className="lg:col-span-7 lg:row-span-8">
                  <CalendarBento />
                </div>
                <div className="lg:col-span-3 lg:row-span-4">
                  <StatsBento />
                </div>
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
