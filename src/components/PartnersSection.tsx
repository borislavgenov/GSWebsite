<img
  src="/logo.svg"
  alt="LecoVita"
  className="w-full h-full object-contain"
/>



const partners = [
  { 
    name: "Адифарм ЕАД", 
    logo: "/adilogo.svg", // Заменете с реално лого
    website: "https://adipharm.com" 
  },
  { 
    name: "ЛекоВита", 
    logo: "/logo.svg", // Заменете с реално лого
    website: "https://lecovita.bg" 
  },
];

const PartnersSection = () => {
  return (
    <section id="партньори" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Партньори
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Нашите <span className="text-primary">Партньори</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Работим с водещи компании, за да предоставяме най-добрите решения на нашите клиенти.
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-border hover:border-primary/50 w-64 h-40"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;