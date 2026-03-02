import { GridWrapper } from "@/app/components/GridWrapper";
import { ReviewCard } from "@/app/components/ReviewCard";

const reviews = [
  {
    name: "Janet Lee",
    role: "Head of GTM",
    company: "daydream",
    quote:
      "Chintan was great to work with and always goes above and beyond. The quality of his work is superb, as expected from a professional who has been in this field for more than five years. Would highly recommend him for any projects that you or your team have. He's really, really good at what he does.",
  },
  {
    name: "Scott Amenta",
    role: "Founder",
    company: "CoS Network & Sylva",
    quote:
      "Chintan rebuilt our entire website from scratch. He took direction and feedback in real-time with accuracy and grace. He was extremely responsive throughout the whole process and gave advice and clear options when decisions needed to be made.",
  },
  {
    name: "James Kinsley",
    role: "Founder",
    company: "Incendium AI",
    quote:
      "Fantastic working with Chintan. He worked hard to make sure the project was completed, followed up after to make sure I was happy with everything. Great result, great experience. Highly recommended.",
  },
  {
    name: "Gauthami Polasani",
    role: "Director, Product Marketing",
    company: "TMDC",
    quote:
      "Working with Chintan on our Webflow migration project has been an outstanding experience. He is highly organized, incredibly responsive, and his expertise made the entire process smooth and efficient. We look forward to continuing our partnership with him in the future.",
  },
  {
    name: "Chris d'Eon",
    role: "CMO",
    company: "The Smart Property",
    quote:
      "Chintan helped us move from WordPress to Webflow, enabling us to implement a more modern approach. He completed the project fast, with minimum guidance and the result was even better than I thought possible. He continued to support us with efficiency and a positive attitude. We couldn't ask for more.",
  },
  {
    name: "Annie Chen",
    role: "CEO",
    company: "A Team Real Estate",
    quote:
      "Chintan is passionate about what he does. He has done multiple jobs for me and I've had great experiences every time — always responsive and goes above and beyond to make sure his clients are happy. Definitely would recommend working with him.",
  },
  {
    name: "Akshay Rangasai",
    role: "Growth Product Manager",
    company: "Appsmith",
    quote:
      "Chintan is fantastic to work with. With crunched timelines and limited resources he was able to pull off an impressive migration of our entire website to Webflow. I'd recommend Chintan to anybody looking for Webflow experts.",
  },
  {
    name: "Arsalan Pirzada",
    role: "Founder",
    company: "Cogent Studio",
    quote:
      "Chintan is great to work with — helpful, patient, and knowledgeable. I'm looking forward to working with him again in the future, and I'm happy to recommend his services.",
  },
  {
    name: "Ashish Shrestha",
    role: "CEO",
    company: "Fiscali",
    quote:
      "It is a pleasure working with Chintan. He is extremely responsive with a collaborative, helpful attitude. He understands client needs quickly and incorporates requested features and designs with limited guidance. Chintan regularly provides assistance above and beyond what most might consider the scope of his engagement. Great experience all around.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="relative space-y-16 pb-20">
      <title>Client Reviews | Chintan Savaliya</title>
      <GridWrapper>
        <div className="mx-auto max-w-2xl pb-8 pt-16 md:pb-10">
          <h1 className="text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            What clients say.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-text-secondary">
            Over seven years working with founders and teams across health,
            sports, fintech, and tech. Here&apos;s what some of them have said.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                role={review.role}
                company={review.company}
                quote={review.quote}
              />
            ))}
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
