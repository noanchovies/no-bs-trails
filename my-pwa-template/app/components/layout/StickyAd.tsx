"use client";

import { usePathname } from 'next/navigation';

export default function StickyAd() {
  const pathname = usePathname(); // Detects URL changes

  return (
    // Key={pathname} forces React to destroy and recreate this div when URL changes
    // This triggers a new Ad impression.
    <div key={pathname} className="fixed bottom-0 left-0 w-full h-[60px] md:h-[90px] bg-gray-100 z-50 flex items-center justify-center border-t border-gray-300">
      <span className="text-xs text-gray-400">Google AdSense Space (Reloads on Nav)</span>
    </div>
  );
}
