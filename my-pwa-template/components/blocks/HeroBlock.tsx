interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function HeroBlock({ headline, subheadline }: HeroProps) {
  return (
    <section className="text-center py-5 px-6 border-b border-gray-800">
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
        {headline}
      </h1>
      <p className="text-gray-400 text-lg md:text-xl font-light">
        {subheadline}
      <div className="w-16 h-1 bg-red-600 mx-auto mb-12"></div>
      </p>
    </section>
  );
}
