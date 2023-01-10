import React from "react";

//components
import Logo from "../components/Logo";

//css
import footer from "../assets/css/footer.css";

export default function Footer() {
  // variable contiene el año en curso,
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="contact">
        <Logo />
        <div className="whatsapp">
          <i class="fa-brands fa-whatsapp"></i>
          <a href="https://wa.me/56973445276?text=Quisiera%20%20saber%20mas%20de%20tu%20aplicación" target="_blank">+569 7344 5276</a>
        </div>
        <div className="mail">
          <i class="fa-regular fa-envelope"></i>
          <a href="mailto:email@example.com">mario@gmail.com</a>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>© {year} Sebastian Salinas</p>
        </div>
      </div>
    </footer>
  );
}
