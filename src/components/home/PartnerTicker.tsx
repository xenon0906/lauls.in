"use client";

const partners = [
  { name: "Indian Railways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/IRLogo.svg/1200px-IRLogo.svg.png" },
  { name: "TATA Steel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tata_Steel_Logo.svg/1200px-Tata_Steel_Logo.svg.png" },
  { name: "BHEL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BHEL_logo.svg/1200px-BHEL_logo.svg.png" },
  { name: "SAIL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Steel_Authority_of_India_logo.svg/1200px-Steel_Authority_of_India_logo.svg.png" },
  { name: "RINL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Rashtriya_Ispat_Nigam_Logo.png/220px-Rashtriya_Ispat_Nigam_Logo.png" },
  { name: "CII", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Confederation_of_Indian_Industry_Logo.svg/1200px-Confederation_of_Indian_Industry_Logo.svg.png" },
  { name: "RDSO", logo: "https://upload.wikimedia.org/wikipedia/en/2/23/RDSO_Logo.png" },
  { name: "MSME", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/MSME_Logo.png/1200px-MSME_Logo.png" },
];

export default function PartnerTicker() {
  return (
    <div className="py-12 bg-white border-y border-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em]">Trusted by Industry Leaders</span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-infinite-scroll flex items-center gap-16 md:gap-32 whitespace-nowrap px-16">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
               {/* Using a styled box since external SVGs can be unreliable */}
               <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center font-display font-black text-primary/20 text-xl group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  {partner.name[0]}
               </div>
               <span className="text-primary font-display font-bold text-lg tracking-tight uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
