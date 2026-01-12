interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function HeroBlock({ headline, subheadline }: HeroProps) {
  return (
    <section className="text-center py-2 px-6">
      
      {/* 1. HEADLINE */}
      {/* Reduced mb-2 to mb-1 to pull the text below it closer */}
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-1">
        {headline}
      </h1>

      {/* 2. SUBHEADLINE */}
      {/* Moved the <p> here. Added mb-6 to push the Red Line away. */}
      <p className="text-gray-400 text-lg md:text-xl font-light mb-4">
        {subheadline}
      </p>

      {/* 3. RED LINE */}
      {/* This is now outside the <p> tag. It is 3x wider (w-48). */}
      <div className="w-48 h-1 bg-red-600 mx-auto"></div>

    </section>
  );
}
