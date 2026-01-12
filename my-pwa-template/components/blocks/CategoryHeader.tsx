import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function CategoryHeader({ title }: HeaderProps) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-800 bg-neutral-900 sticky top-16 z-30">
      {/* Back Button */}
      <Link href="/" className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors">
        <ChevronLeft size={24} />
      </Link>
      
      {/* Dynamic Title */}
      <h1 className="text-xl font-bold uppercase tracking-wider text-white">
        {title}
      </h1>
    </div>
  );
}
