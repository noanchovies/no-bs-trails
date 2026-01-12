import ScrollNav from "@/components/blocks/ScrollNav";
import FeedList from "@/components/blocks/FeedList";
import CategoryHeader from "@/components/blocks/CategoryHeader";

// This function receives the URL parameter (e.g., params.category = "news")
export default function CategoryPage({ params }: { params: { category: string } }) {
  
  // In a real app, you would fetch data here based on params.category
  // const data = await getData(params.category);
  
  return (
    <div className="min-h-screen bg-neutral-900">
      
      {/* 1. The Topic Header (Non-persistent, specific to this page) */}
      <CategoryHeader title={params.category} />

      {/* 2. The Horizontal Scroll Menu (Sub-categories) */}
      {/* We pass the current category so it knows what to highlight */}
      <ScrollNav currentCategory={params.category} />

      {/* 3. The Feed (Vertical List of Cards) */}
      <div className="mt-4">
        <FeedList category={params.category} />
      </div>

    </div>
  );
}
