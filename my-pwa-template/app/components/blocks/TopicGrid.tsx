import Link from "next/link";
import Image from "next/image";

// We define what a single Topic looks like
interface Topic {
  id: string;
  title: string;
  image: string; // URL
  link: string;  // e.g. "/news"
}

interface GridProps {
  topics: Topic[];
}

export default function TopicGrid({ topics }: GridProps) {
  return (
    <section className="p-4">
      {/* GRID LOGIC:
        - grid-cols-2: Mobile (2 columns like screenshot)
        - md:grid-cols-4: Tablet/Desktop (4 columns)
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <Link href={topic.link} key={topic.id} className="group relative aspect-square block overflow-hidden rounded-lg bg-gray-800">
            
            {/* Background Image */}
            <div className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity">
               {/* Note: In real app, use real images. Using div placeholders for now if no image provided */}
               {topic.image ? (
                  <Image 
                    src={topic.image} 
                    alt={topic.title}
                    fill
                    className="object-cover"
                  />
               ) : (
                 <div className="w-full h-full bg-neutral-700" />
               )}
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

            {/* Text Label */}
            <div className="absolute bottom-3 left-3">
              <span className="font-bold text-white text-lg md:text-xl uppercase tracking-wider">
                #{topic.title}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
