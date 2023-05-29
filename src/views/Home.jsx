import React from "react";

import ReactPlayer from "react-player";
import video1 from '../assets/videos/video1.mp4'

//components
import NavBar from "../components/NavBar";
import Header from "../components/Header";

//images
import descAppImg from "../assets/img/img-desc-app.png";
import banner1 from "../assets/img/banner-1.jpeg";
import banner2 from "../assets/img/banner-2.jpeg";
import banner3 from "../assets/img/banner-3.jpeg";
import banner4 from "../assets/img/banner-4.jpg";
import banner5 from "../assets/img/banner-5.jpg";
import banner6 from "../assets/img/banner-6.jpeg";
import banner7 from "../assets/img/banner-7.jpg";
import banner8 from "../assets/img/banner-8.jpg";

//css
import "../assets/css/home.css";

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
                <img
                  src={descAppImg}
                  alt="beneficios de la app Mario Jimenez"
                />
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
                      de entrenamiento diario de manera fácil y práctica.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <section className="banner">
            <div className="row g-0">
              <div className="col-6 col-lg-3">
                <img src={banner1} alt="" />
              </div>
              <div className="col-6 col-lg-3">
                <img src={banner2} alt="" />
              </div>
              <div className="col-6 col-lg-3">
                <img src={banner3} alt="" />
              </div>
              <div className="col-6 col-lg-3">
                <img src={banner4} alt="" />
              </div>
            </div>
            <div className="row g-0">
              <div className="col-sm-12 col-lg-5">
                <img src={banner5} alt="" />
              </div>
              <div className="col-sm-12 col-lg-7">
                <img src={banner6} alt="" />
              </div>
            </div>
          </section> */}

        <section className="section-banner">
          <h2>Actitud</h2>
          <div className="banner">
            <img src={banner1} alt="mario jimenez" />
            <img src={banner2} alt="mario jimenez" />
            <img src={banner3} alt="mario jimenez" />
            <img src={banner4} alt="mario jimenez" />
          </div>
        </section>

        <section className="section-banner">
          <h2>Constancia</h2>
          <div className="banner">
            <img src={banner5} alt="mario jimenez" />
            <img src={banner6} alt="mario jimenez" />
            <img src={banner7} alt="mario jimenez" />
            <img src={banner8} alt="mario jimenez" />
          </div>
        </section>

        {/* <div className="container">
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
        </div> */}

        <div className="container">
          <section className="work-on-you">
            <h2>Trabaja tu</h2>
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

      <ReactPlayer
                                  className="react-player"
                                  playing url={video1}
                                  type="video/mp4"
                                  controls
                                  loop
                                  volume={0}
                                  muted={true}
                                  width="70%"
                                  height="100%"
                                />
    </div>
  );
}
