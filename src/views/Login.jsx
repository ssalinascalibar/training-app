import React from "react";

//context
import { useContext } from 'react';
import Context from "../Context";

//navigate
import { useNavigate } from 'react-router-dom';

//components
import NavBar from '../components/NavBar';

//css
import login from '../assets/css/login.css';


export default function Login() {

    const { users, setUsers, loginForm, setLoginForm, isAuth, setisAuth, userLogged, setUserLogged} = useContext(Context);

    const navigate = useNavigate();

    const handleChange = async e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value.toLowerCase(),
        })
        console.log(loginForm)
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const enabledUser = users.find((user) => user.correo === loginForm.correo && user.name === loginForm.name && user.isPayed);
        
        const validateCorreo = !users.correo === !loginForm.correo;

        if (enabledUser){
            setisAuth(true);
            setUserLogged(enabledUser)
            console.log(userLogged)
            console.log(isAuth);
            alert('Bienvenido/a ' + loginForm.name.charAt(0).toUpperCase() + loginForm.name.slice(1) + ' a tu perfil')
            navigate(`/user/${enabledUser.id}`)
            setLoginForm("")

        } else if (validateCorreo) {
            alert('debes ingresar un correo')
        } else {
            alert('No tienes acceso');

        }
    }


  return (
    <div>
      <NavBar />
      <div className="container">
        <main>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <h3>Inicia sesión con tu correo</h3>
                <div className="mb-3 mt-4">
                  {/* <label className="form-label">Nombre</label> */}
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="name"
                    name="name"
                    value={loginForm.name || ''}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="mb-3 mt-4">
                  {/* <label className="form-label">Correo electrónico</label> */}
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    id="correo"
                    name="correo"
                    value={loginForm.correo || ''}
                    onChange={handleChange}
                    placeholder="nombre@dominio.com"
                  />
                </div>

                <button type="submit" className="btn">
                  Iniciar sesión
                </button>
                <hr />
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
