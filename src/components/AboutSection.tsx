import { CheckCircle, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Професионален екип",
    description: "Опитни специалисти с дългогодишен опит в индустрията.",
  },
  {
    icon: Target,
    title: "Индивидуален подход",
    description: "Решения, съобразени с вашите специфични нужди и изисквания.",
  },
  {
    icon: Award,
    title: "Качество и надеждност",
    description: "Гарантираме високо качество на всички наши услуги.",
  },
];

const values = [
  "Професионализъм и коректност",
  "Дългосрочни партньорства",
  "Иновативни решения",
  "Клиентска удовлетвореност",
];

const AboutSection = () => {
  return (
    <section id="за-нас" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              За Нас
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Вашият доверен{" "}
              <span className="text-accent">бизнес партньор</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              ГАМА СЕЛЕКТ ЕООД е компания с богат опит и традиции. Нашата мисия е да предоставяме висококачествени услуги и да изграждаме дългосрочни партньорства с нашите клиенти.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              С години работим усилено, за да спечелим доверието на нашите клиенти и партньори, като поставяме качеството и надеждността на първо място.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
