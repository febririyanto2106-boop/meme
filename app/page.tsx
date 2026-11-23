import { ArticlesSection } from "@/components/articles-section";
import { CommunitySection } from "@/components/community-section";
import { CurriculumSection } from "@/components/curriculum-section";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { LearningSection } from "@/components/learning-section";
import { ResearchSection } from "@/components/research-section";
import { TickerTape } from "@/components/ticker-tape";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerTape />
      <LearningSection />
      <ResearchSection />
      <CurriculumSection />
      <ArticlesSection />
      <CommunitySection />
      <FinalCta />
    </>
  );
}
