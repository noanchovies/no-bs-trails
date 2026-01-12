import Image from "next/image";

// Mock Data Generator (You will replace this with real data fetching later)
const getMockArticles = (category: string) => [
  {
    id: 1,
    author: "M. L. Johnson",
    authorImg: "https://i.pravatar.cc/150?u=1",
    title: `Her Gilded Marriage Imploded. Now She's Ready to Tell All in ${category}.`,
    source: "The New York Times",
    img: "https://picsum.photos/600/400?random=10"
  },
  {
    id: 2,
    author: "MovieWeb",
    authorImg: "https://i.pravatar.cc/150?u=2",
    title: "The best sci-fi movies of 2024 that you missed.",
    source: "MovieWeb",
    img: "https://picsum.photos/600/400?random=11"
  }
];

export default function FeedList({ category }: { category: string }) {
  const articles = getMockArticles(category);

  return (
    <div className="flex flex-col gap-6 px-4 py-4 max-w-2xl mx-auto">
      {articles.map((article) => (
        <article key={article.id} className="bg-neutral-850 rounded-xl overflow-hidden shadow-lg border border-gray-800">
          
          {/* Header: Author Info */}
          <div className="flex items-center gap-3 p-3 bg-neutral-900/50">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-700">
              <Image src={article.authorImg} alt={article.author} fill />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-gray-200">{article.author}</span>
              <span className="text-[10px] text-gray-500 uppercase mt-1">flipped into {category}</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-video bg-gray-800">
            <Image 
              src={article.img} 
              alt={article.title} 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Content Body */}
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-serif leading-snug text-gray-100 mb-3">
              {article.title}
            </h2>
            
            <div className="flex items-center justify-between mt-4 border-t border-gray-800 pt-3">
              <div className="flex items-center gap-2">
                 <span className="text-brand text-xs">⚡</span>
                 <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{article.source}</span>
              </div>
            </div>
          </div>

        </article>
      ))}
    </div>
  );
}
