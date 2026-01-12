import Link from "next/link";

interface NavProps {
  currentCategory: string;
}

export default function ScrollNav({ currentCategory }: NavProps) {
  // Eventually, you can move this list to your JSON file too
  const subLinks = ["All Stories", "Video", "Movies", "TV", "Music", "Culture", "Podcasts"];

  return (
    <div className="w-full border-b border-gray-800 bg-neutral-900">
      <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-6">
        {subLinks.map((link) => (
          <button 
            key={link}
            className="whitespace-nowrap text-sm font-bold tracking-wide uppercase text-gray-400 hover:text-white transition-colors"
          >
            {/* Visual Logic: If 'All Stories', underline it to show it's active */}
            <span className={link === "All Stories" ? "text-brand border-b-2 border-brand pb-1" : ""}>
              {link}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
