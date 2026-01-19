import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#контакти");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="начало"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
              Вашият надежден партньор
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ГАМА СЕЛЕКТ{" "}
            <span className="text-white/80">ЕООД</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Професионални решения за вашия бизнес. Качество, надеждност и дългогодишен опит в услуга на нашите клиенти.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white hover:bg-white/90 text-primary font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Свържете се с нас
            </button>
            <a
              href="#за-нас"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#за-нас")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300"
            >
              Научете повече
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
