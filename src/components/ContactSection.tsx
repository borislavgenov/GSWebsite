import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+359 2 955 9217",
    href: "tel:+35929559217",
  },
  {
    icon: Mail,
    label: "Имейл",
    value: "info@gamaselect.bg",
    href: "mailto:info@gamaselect.bg",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "гр. София, ул. Самоковско шосе 2Л (ТЦ Боила), офис 8.3",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="контакти" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Контакти
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Свържете се с <span className="text-primary-foreground/80">нас</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Имате въпроси? Не се колебайте да се свържете с нас по удобен за вас начин.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 group"
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/30 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="text-primary-foreground font-semibold text-lg group-hover:text-primary-foreground/80 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="text-primary-foreground font-semibold text-lg">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;