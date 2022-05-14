import { Link } from "react-router-dom";
import { } from "../../../assets/css/users/Login.css";
import imagenes from "../../../assets/imgs/imagenes";
import React, { useState } from "react";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "@mui/material/Alert";
import Form from "../../../assets/utilities/Forms_Validations";
import { useLocalStorage } from "../../Methods/remembermeLocalSrorage";
import axios from "axios";
import { setUserSession } from "../../../assets/utilities/setUserSession";
import { Default } from 'react-awesome-spinners';
import { baseUrlLogin } from "../../../assets/utilities/apis/urlLogin";



export const Login = (props) => {

  const [showPassword, setShowPassword] = useState(false);
  // const [remember, setRemember] = useState("", false);
  const [showIcon, setShowIcon] = useState(faEyeSlash);
  const [validate, setValidate] = useState({});
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [email, setEmail] = useLocalStorage("email", "");
  const [userl, setuserL] = useLocalStorage("user", "");
  // const [password, setPassword] = useLocalStorage("password", "");
  const [token, setToken] = useLocalStorage("token", "");
  const [checked, setChecked] = useLocalStorage("checked", false);
  const [error, seTError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeBtnIciarSesion, setActiveBtnIniciarSesion] = useState(false);


  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 8,
        isPassword: true,
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

  const hadleLogin = () => {

    seTError(null);
    setLoading(true);

    axios.post(baseUrlLogin, {

      email: email,
      password: password

    }).then(response => {

      setLoading(false);
      // setUserSession(response.data.token, response.data.user);
      setToken(response.data.token);
      // console.log(response.data.token);

      // desestructuracion del dato de usuario logeado para mostarlo en el localStorage
      let usermail = [response.config.data]
      let userObjeto = Object.values(usermail);
      let user = userObjeto[0].split(",");
      let userEmail = user[0].split(":");
      let userloged = userEmail[1].split("\"");
      let userlogin = userloged[1];
      setuserL(userlogin);

      props.history.push("/home");


    }).catch(error => {

      if (error.status === undefined) {

        setLoading(false);
        seTError("Error de conexion con el servidor")
        return;
      } if (error.response.status === 400) {
        // setLoading(false);

        seTError(error.response.data.error.detail[0].msg);
        //console.log(error.response.data.error.detail[0].msg);
        setLoading(false);
        return;

        // setLoading(false);

      } else if (error.response.status === 401) {
        // setLoading(false);

        seTError(error.response.data.error.message);
        //console.log(error.response.data.error.message);
        setLoading(false);
        return;


      } else if (error.response.status === 500) {
        // setLoading(false);

        seTError("Error interno del servidor");
        // console.log(error.response);
        setLoading(false);
        return;


      }


    });

  }

  const authenticate = (e) => {
    e.preventDefault();

    const validate = validateLogin();

    if (validate) {

      setValidate({});
      setActiveBtnIniciarSesion(true);
      // setEmail('');
      // setPassword('');
      // alert('Successfully Login');
    } else {
      setActiveBtnIniciarSesion(false);
    }

  };

  const limpiar = (e) => {

    localStorage.clear()

  }

  const localstorage = (e) => {
    if (checked) {

      setChecked(false);
      limpiar();
      console.log("false")
    } else {
      console.log(true)
      setChecked(true);


    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowIcon(faEyeSlash);
      setShowPassword(false);
    } else {
      setShowIcon(faEye);
      setShowPassword(true);
    }
  };

  //   handleFormSubmit = () => {
  //   const { email, rememberme } = this.state;
  //   localStorage.setItem('rememberme', rememberme);
  //   localStorage.setItem('email', rememberme ? email : '');
  // };

  return (

    <>
      <div className="page">
        <div className="container">
          <div className=" abs-center">
            <div className="spinner-loading" hidden={!loading} >
              <Default color="#000033"
              ></Default>
              <p>Loading...</p>
            </div>
            <div className="row">
              <div className="d-flex flex-column align-content-end">
                <div className="auth-body mx-auto  ">
                  <img className="img-login" src={imagenes.img1} alt="" />
                  <div className="auth-form">
                    <div className="mensaje-error" >
                      {error && <><small><Alert style={{ backgroundColor: 'red' }}  >{error}  </Alert></small></>}
                    </div>
                    <form className="login-form " onSubmit={authenticate}>
                      <div className="email mb-3 ">
                        <input
                          className={`input-login form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                          placeholder="Correo"
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="off"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyUp={authenticate}
                          onBlur={authenticate} />
                        <div>
                          <Alert
                            severity="warning"
                            className={`mensaje-campos-requeridos-login  ${validate.validate && validate.validate.email ? '' : "d-none"}`}>
                            {validate.validate && validate.validate.email ? validate.validate.email[0] : ""}
                          </Alert>
                        </div>
                      </div>

                      <div className="password mb-3">
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`input-login  ${validate.validate && validate.validate.password ? "is-invalid" : ""}`}
                            placeholder="Contraseña"
                            name="password"
                            id="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyUp={authenticate}
                            onBlur={authenticate}

                          />

                          <div>
                            <Alert
                              severity="warning"
                              className={`mensaje-campos-requeridos-login ${validate.validate && validate.validate.password ? "" : "d-none"} `} >
                              {validate.validate && validate.validate.password ? validate.validate.password[0] : ""}

                            </Alert>

                          </div>

                          <FontAwesomeIcon
                            className="icon-password-login"
                            icon={showIcon}
                            onClick={(e) => togglePassword(e)}
                            name="faEyeSlash"
                            id="faEyeSlash" >
                          </FontAwesomeIcon>
                        </div>

                        <div className="extra mt-3 row justify-content-between">
                          <div className="col-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember"
                                checked={checked}
                                onChange={(e) => { localstorage(e.currentTarget.checked) }}
                              />

                              <label
                                className="form-check-label"
                                htmlFor="remember" >
                                Recuerdame
                              </label>

                            </div>
                          </div>
                          <div className="  col-6">
                            <div className="forgot-password text-center">
                              <Link
                                className="forgot-pass"
                                to="/forgot-password" >
                                Restablecer Contraseña
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn-iniciar-sesion"
                          onClick={hadleLogin}
                          disabled={!activeBtnIciarSesion}
                        >
                          Iniciar Sesion
                        </button  >

                      </div>

                      <hr />
                      <div className="auth-option text-center pt-2">
                        Crear Cuenta
                        <Link className="login-text-link" to="/register">
                          Registrarse
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
    </>
  );
};
