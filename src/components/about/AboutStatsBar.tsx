"use client";

const stats = [
  { value: "1,50,000+", label: "Sq. Ft. Warehouse", color: "dark" },
  { value: "12", label: "Hubs across India", color: "gold" },
  { value: "4", label: "Core Verticals", color: "dark" },
  { value: "500+", label: "Projects Delivered", color: "gold" },
  { value: "3", label: "Continents Reached", color: "dark" },
  { value: "30+", label: "Years Excellence", color: "gold" },
];

export default function AboutStatsBar() {
  return (
    <section className="w-full flex flex-col md:flex-row shadow-2xl">
      {stats.map((stat, idx) => (
        <div 
          key={idx} 
          className={`flex-1 py-12 md:py-16 px-4 flex flex-col items-center justify-center text-center transition-colors hover:opacity-95 ${
            stat.color === 'dark' 
              ? 'bg-[#0A1628] text-white' 
              : 'bg-[#DCA54C] text-[#0A1628]'
          }`}
        >
          <div className="text-3xl lg:text-4xl font-display font-bold mb-2">
            {stat.value}
          </div>
          <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${stat.color === 'dark' ? 'text-white/60' : 'text-[#0A1628]/70'}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
