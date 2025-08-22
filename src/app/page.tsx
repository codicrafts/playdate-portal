import { HeroSection } from "@/components/hero-section";
import { PopularPlaces } from "@/components/popular-places";
import { LatestActivities } from "@/components/latest-activities";
import { CommunityTopics } from "@/components/community-topics";

export default function Home() {
  return (
    <>
      {/* Hero section 横向撑满 */}
      <HeroSection />

      {/* 其他内容保持容器内布局 */}
      <div className="mx-auto max-w-7xl px-4">
        <PopularPlaces />
        <LatestActivities />
        <CommunityTopics />
      </div>
    </>
  );
}
