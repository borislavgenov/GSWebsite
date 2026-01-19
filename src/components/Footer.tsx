const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-background/80 font-bold text-lg mb-1">
              ГАМА СЕЛЕКТ ЕООД
            </p>
            <p className="text-background/60 text-sm">
              © {currentYear} Всички права запазени.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#начало"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#начало")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
            >
              Начало
            </a>
            <a
              href="#за-нас"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#за-нас")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
            >
              За Нас
            </a>
            <a
              href="#контакти"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#контакти")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-background/60 hover:text-accent transition-colors duration-200 text-sm"
            >
              Контакти
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
