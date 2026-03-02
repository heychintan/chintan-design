import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Monday Labs",
      period: "2023 – Present",
      positions: [
        {
          title: "Founder & AI Product Builder",
          description: [
            "Building AI products and agents for clients in healthcare, hospitality, and fintech — from scoped workflows to full product builds.",
            "Running client engagements end-to-end: discovery, design, development, and delivery. Webflow, Framer, and custom AI integrations.",
          ],
        },
      ],
    },
    {
      company: "Sylva",
      period: "2021 – 2026",
      positions: [
        {
          title: "Senior Product Manager",
          description: [
            "Led product for Miitra, an AI-powered Community OS built from 0→1. Launched as #11 Product of the Day on ProductHunt.",
            "Built and shipped an LLM-powered mentor-matching agent. Drove a 30% increase in logins and reduced monthly churn from 12% to 9%.",
            "Worked across design, development, and strategy — owning the product roadmap for an infrastructure platform serving 1M+ community members globally.",
          ],
        },
      ],
    },
    {
      company: "Recurr / Venture Studio",
      period: "2020 – 2021",
      positions: [
        {
          title: "Webflow Lead",
          description: [
            "Led web experiences for B2B and B2C clients, delivering 30+ websites optimised for conversion and team manageability.",
            "Translated business goals into digital experiences that perform — moving fast, iterating often, and building with constraints.",
          ],
        },
      ],
    },
    {
      company: "CodeMax Media & Zauca",
      period: "2018 – 2020",
      positions: [
        {
          title: "Web Designer & Developer",
          description: [
            "Started with an internship at CodeMax Media — learned responsive design, web development, and UX principles by building real products.",
            "Built websites and turned ideas into functioning products. The foundation for everything that came after.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/avatar.jpg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
