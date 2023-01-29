import React from "react";

import { useContext, useState } from "react";
import Context from "../Context";

import { useParams } from "react-router-dom";

import ReactPlayer from "react-player/youtube";

//components
import NavBar from "../components/NavBar";

//css
import users from "../assets/css/users.css";

//images
import manProfile from "../assets/img/man-profile.svg";
import womanProfile from '../assets/img/woman-profile.svg';


export default function Users() {
  const { userLogged } = useContext(Context);
  console.log(userLogged);

  const [programa, setPrograma] = useState({});

  console.log(programa);

  const showProgram = (p) => {
    console.log(p);
    console.log(userLogged.programs);
    if (p === "Entrenamiento 1") {
      setPrograma(userLogged.programa1);
    } else if (p === "Entrenamiento 2") {
      setPrograma(userLogged.programa2);
    } else if (p === "Entrenamiento 3") {
      setPrograma(userLogged.programa3);
    } else if (p === "Entrenamiento 4") {
      setPrograma(userLogged.programa4);
    } else if (p === "Entrenamiento 5") {
      setPrograma(userLogged.programa5);
    } else {
      alert("Ha ocurrido un error, vuelve a seleccionar tu entrenamiento");
    }
  };

  //  const field = userLogged.find(['pro'])
  //  console.log(field)

  const { id } = useParams();
  console.log(id + " id seleccionado");
  return (
    <div>
      <NavBar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="profile">
                <div className="nameData">
                  <h3>
                    Hola,{" "}
                    {userLogged.name.charAt(0).toUpperCase() +
                      userLogged.name.slice(1)}{" "}
                    {userLogged.last_name.charAt(0).toUpperCase() +
                      userLogged.last_name.slice(1)}
                  </h3>{" "}
                  <p>{userLogged.correo}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="data">
            <div className="row">
              <div className="col col-md-4">
                <div className="statics">
                  <h3>{userLogged.age}</h3>
                  <p>Edad</p>
                </div>
              </div>
              <div className="col col-md-4">
                <div className="statics">
                  <h3>{userLogged.height}</h3>
                  <p>Estatura</p>
                </div>
              </div>
              <div className="col col-md-4">
                <div className="statics">
                  <h3>{userLogged.weight}</h3>
                  <p>Kilos</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-5">
                <blockquote className="blockquote">
                  <p><span>El entrenamiento nunca debería ser cómodo, debería empujarte mas allá de lo que eres capaz.</span></p>
                </blockquote>
              </div>
              <div className="col col-md-8 col-lg-7">
                <div className="img-profile">
                  {userLogged.gender === 'male'
                    ? <img src={manProfile} alt="Man-Profile" />
                    : <img src={womanProfile} alt="Woman-Profile" />
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="program-training">
                <h2>Programa de Entrenamiento</h2>
                <h3>Objetivo: <span>{userLogged.target}</span></h3>
                <div className="training-buttons">
                  {userLogged.programs.map((p, i) => (
                    <button
                      type="button"
                      className="btn btn-primary"
                      key={i}
                      value={p}
                      onClick={() => showProgram(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <h3>{programa.pro}</h3>
                <div className="calentamiento">
                  <h4>
                    <i class="fa-solid fa-person-running"></i> 
                  </h4>
                  <h4>Calentamiento</h4>
                  <p>{programa.warm_up}</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="training-box">
                      <h4>
                        <i className="fa-solid fa-dumbbell"></i> Rutina
                      </h4>
                      <hr className="hr-program" />
                      <div className="scrolling-wrapper">
                        {programa.training?.map((p, i) => (
                          <div key={i} className="card">
                            <div className="card-img-top">
                              <div className="wrap">
                                <ReactPlayer
                                  className="react-player"
                                  url={p.url}
                                  type="video/mp4"
                                  controls={true}
                                  loop
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{p.training_name}</h5>
                              <p className="card-text">{p.description}</p>
                              <p className="card-text">{p.description1}</p>
                              <p className="card-text">{p.description2}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="training-box">
                      <h4>
                        <i className="fa-solid fa-heart-pulse"></i> Hiit
                      </h4>
                      <hr className="hr-program" />
                      <div className="scrolling-wrapper">
                        {programa.hiit_videos?.map((video, i) => (
                          <div key={i} className="wrap-hiit">
                            <ReactPlayer
                              className="react-player"
                              url={video.url_hiit}
                              type="video/mp4"
                              controls
                              loop
                              width="100%"
                              height="100%"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="hiit-list">
                        <ul>
                          {programa.hiit_list?.map((hit, i) => (
                            <li key={i}>{hit.hiit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
