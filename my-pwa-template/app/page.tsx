import InstallBanner from "@/components/blocks/InstallBanner";
import HeroBlock from "@/components/blocks/HeroBlock";
import TopicGrid from "@/components/blocks/TopicGrid";
import siteConfig from "@/data/site-config.json"; // We will create this next

// Mock data for the grid (In reality, this could come from a JSON file)
const topicsData = [
  { id: "1", title: "News", link: "/news", image: "https://picsum.photos/400?random=1" },
  { id: "2", title: "Entertainment", link: "/entertainment", image: "https://picsum.photos/400?random=2" },
  { id: "3", title: "Technology", link: "/technology", image: "https://picsum.photos/400?random=3" },
  { id: "4", title: "Travel", link: "/travel", image: "https://picsum.photos/400?random=4" },
  { id: "5", title: "Food", link: "/food", image: "https://picsum.photos/400?random=5" },
  { id: "6", title: "Sports", link: "/sports", image: "https://picsum.photos/400?random=6" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* 1. The Conditional Install Banner */}
      <InstallBanner />

      {/* 2. The Hero Section (Get Informed) */}
      <HeroBlock 
        headline={siteConfig.homeHeadline} 
        subheadline={siteConfig.homeSubHeadline} 
      />

      {/* 3. The Topic Grid */}
      <TopicGrid topics={topicsData} />
    </div>
  );
}
