import React from "react";

//components
import NavBar from "../components/NavBar";
import Header from "../components/Header";

//images
import target1 from "../assets/img/target-1.jpg";
import target2 from "../assets/img/target-2.jpg";
import descAppImg from "../assets/img/img-desc-app.png";
import banner1 from "../assets/img/banner-1.jpeg";
import banner2 from "../assets/img/banner-2.jpeg";
import banner3 from "../assets/img/banner-3.jpeg";

//css
import home from "../assets/css/home.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <div className="container">
          <section className="desc-app">
            <div className="row">
              <div className="col-sm-12 col-md-7 col-lg-6">
                <img src={descAppImg} alt="beneficios de la app Mario Jimenez"/>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-6">
                <div className="list">
                  <h1>Beneficios de usar la App</h1>
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>Ordena y planifica el
                      entrenamiento y tus objetivos.
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Videos de apoyo
                      exclusivos de cada ejercicio para ti.{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Enfoque en la correcta
                      ejecución potenciando los resultados físicos y evitando
                      lesiones.{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>Selecciona tu rutina
                      de entrenamiento diaria de manera fácil y práctica.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="banner">
            <div className="row g-3">
              <div className="col-sm-6 col-md-6">
                <img src={banner1} alt="" />
              </div>
              <div className="col-sm-6 col-md-6">
                <img src={banner2} alt="" />
              </div>
              <div className="col-sm-6 col-md-6">
                <img src={banner3} alt="" />
              </div>
              <div className="col-sm-6 col-md-6">
                <img src={banner2} alt="" />
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="targets">
            <h4>Entrenamiento personalizado</h4>
            <div className="row mb-2">
              <div className="col">
                <img src={target1} alt="objetivos de la app mj" />
              </div>
              <div className="col">
                <img src={target2} alt="objetivos de la app mj" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={target2} alt="objetivos de la app mj" />
              </div>
              <div className="col">
                <img src={target1} alt="objetivos de la app mj" />
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="work-on-you">
            <h1>Trabaja tu</h1>
            <div className="benefits">
              <i className="fa-solid fa-heart-pulse">
                <p>Salud</p>
              </i>
              <i className="fa-solid fa-person-running">
                <p>Cuerpo</p>
              </i>
              <i className="fa-solid fa-brain">
                <p>Mente</p>
              </i>
            </div>
          </section>
        </div>

        {/* Article 1 */}
        <article className="art">
          <div className="art-1-img"></div>
          <div className="container">
            <p className="art-text">
              <span>
                Pequeñas mejoras a lo largo del tiempo siguen siendo un
                progreso.
              </span>{" "}
              Solo asegúrate que estés en la dirección correcta.
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="art">
          <div className="art-2-img"></div>
          <div className="container">
            <p className="art-text">
              <span>
                El progreso solo puede ser progreso si va en la dirección
                correcta
              </span>
              , no importa lo pequeño que sea un paso."
            </p>
          </div>
        </article>

      </main>
    </div>
  );
}
