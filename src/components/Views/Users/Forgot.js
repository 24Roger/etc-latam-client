import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { } from "../../../assets/css/users/Forgot.css";
import React from "react";
import Alert from "@mui/material/Alert";
import Form from "../../../assets/utilities/Forms_Validations";
import { baseUrlChangePassword } from "../../../assets/utilities/apis/urlLogin";
import axios from "axios";
import { setUserSession } from "../../../assets/utilities/setUserSession";
import { Default } from "react-awesome-spinners";

export const Forgot = (props) => {
  const [validate, setValidate] = useState({});
  const [email, setEmail] = useState("");
  const [error, seTError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeBtnEnviar, setActiveBtnEnviar] = useState(false);

  const validateForgot = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });
    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const authenticate = (e) => {
    e.preventDefault();

    const validate = validateForgot();

    if (validate) {
      setValidate({});
      setActiveBtnEnviar(true);
      // setEmail('');
      // setPassword('');
      // alert('Successfully Login');
    } else {
      seTError(false);
      setActiveBtnEnviar(false);
    }
  };

  const handledForgot = () => {

    seTError(null);
    setLoading(true);

    axios.put(baseUrlChangePassword, {

      email: email,

    }).then(response => {
      setUserSession(response.data.token, response.data.user);
      setLoading(false);
      console.log(response);
      window.alert(response.data)
      props.history.push("/login");

    }).catch(error => {

      if (error.status === undefined) {

        setLoading(false);
        seTError("Error de conexion con el servidor")
        setTimeout(() => {
          window.alert("Intentelo de nuevo")
          window.location.reload("/forgot-password");

        }, 100);


      } if (error.response.status === 400) {
        // setLoading(false);

        seTError(error.response.data.error.detail[0].msg);
        // console.log(error.response.data.error.detail[0].msg);
        setLoading(false);

        // setLoading(false);
      } else if (error.response.status === 401) {
        // setLoading(false);
        seTError(error.response.data.error.message);
        setLoading(false);
        if (error.response.statusText === "Unauthorized") {
          seTError("Usuario no registrado")
          setLoading(false);
          document.getElementById("email").focus();
          document.getElementById("email").style.borderColor = 'red';

        }

      } else if (error.response.status === 500) {
        // setLoading(false);

        seTError("Error interno con el servidor");
        console.log(error.response);
        setLoading(false);


      }

    });

  }

  return (
    <Fragment>
      <div className="page">
        <div className="container">
          <div className="abs-center">
            <div className="spinner-loading-forgot" hidden={!loading} >

              <Default color="#000033"
              ></Default>
              <p>Loading...</p>
            </div>
            <div className="forgot-row">
              <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                  <div className="auth-body mx-auto">
                    <div className="auth-form">
                      <div className="mensaje-error-forgot" >
                        {error && <><small><Alert style={{ backgroundColor: 'red' }}  >{error}  </Alert><p></p></small></>}
                      </div>

                      <form className="forgot-form" onSubmit={authenticate}>
                        <p className="restablecer-pass">
                          Restablecer Contraseña
                        </p>

                        <hr />

                        <p className="text-correo">
                          Ingresa el correo electronico para restablecer tu
                          contraseña
                        </p>

                        <div className="email mb-3">
                          <input
                            type="email"
                            className={`input-restablecer ${validate.validate && validate.validate.email ? "is-valid" : ""}`}
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            autoComplete="off"
                            onKeyUp={authenticate}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={authenticate} />
                          <div>
                            <Alert
                              severity="warning"
                              className={`mensaje-campos-requeridos ${validate.validate && validate.validate.email ? "" : "d-none"}`} >
                              {validate.validate && validate.validate.email ? validate.validate.email[0] : ""}
                            </Alert>
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            onClick={handledForgot}
                            disabled={!activeBtnEnviar}
                            className="btn-enviar-restablecer"
                          >Enviar

                          </button>
                        </div>

                        <hr />

                        <div className="auth-option text-end pt-2">
                          <Link className="forgot-text-link" to="/login">
                            Cancelar
                          </Link>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
