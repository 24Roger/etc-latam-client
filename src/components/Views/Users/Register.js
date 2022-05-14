import { Link } from "react-router-dom";
import { } from "../../../assets/css/users/Register.css";
import React, { useState } from "react";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../../../assets/utilities/Forms_Validations";
import Alert from "@mui/material/Alert";
import $ from "jquery";
import { baseUrlRegister } from "../../../assets/utilities/apis/urlLogin";
import axios from "axios";
import { setUserSession } from "../../../assets/utilities/setUserSession";
import { Default } from 'react-awesome-spinners';



export const Register = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showIcon, setShowIcon] = useState(faEyeSlash);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showIconConfirmPass, setShowIconConfirmPass] = useState(faEyeSlash);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpassword2] = useState(false);
  const [validate, setValidate] = useState({});
  const [error, seTError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeBtnSave, setActiveBtnsave] = useState(false);



  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      name: {
        value: name,
        isRequired: true,
      },
      lastname: {
        value: lastname,
        isRequired: true,
      },
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

      // confirmpassword: {
      //    value: confirmpassword,
      //   isRequired: true,
      //   minLength: 8,
      //   isPassword: true,
      // },
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

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      // setActiveBtnGuardar(true);
      document.getElementById("confirmmpassword").disabled = false;
      // alert("Successfully Login");
      // setName("");
      // setEmail("");
      // setPassword("");


    } else {
      // setActiveBtnGuardar(false);
      document.getElementById("confirmmpassword").disabled = true;
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

  const togglePasswordConfirm = (e) => {
    if (showConfirmPassword) {
      setShowIconConfirmPass(faEyeSlash);
      setShowConfirmPassword(false);
    } else {
      setShowIconConfirmPass(faEye);
      setShowConfirmPassword(true);
    }
  };

  const handleRegister = () => {

    seTError(null);
    setLoading(true);

    axios.post(baseUrlRegister, {
      user: name.charAt(0) + "" + lastname,
      email: email,
      password: password

    }).then(response => {

      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      window.alert(response.data)
      console.log(response);
      props.history.push("/login");

    }).catch(error => {

      if (error.status === undefined) {
        setLoading(false);
        seTError("Error de conexion con el servidor")
        return;
      }
      if (error.response.status === 400) {

        // setLoading(false);

        seTError(error.response.data.error.detail[0].msg);
        // console.log(error.response);
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
        alert("Error interno del servidor")
        seTError(error.response.data.message);
        console.log(error.response);
        setLoading(false);
        return;


      } else {
        seTError("Error de Servidor")
        return;
      }


    });
  }

  const samepasswords = () => {

    if ($("#password").val() !== $("#confirmmpassword").val()) {
      seTError("Las contraseñas no coinciden");
      // window.alert("la contraseña no coinciden")
      // document.getElementById("comfirmmpassword").focus();
      document.getElementById("confirmmpassword").style.borderColor = "red";
      // document.getElementById("guardar").disabled = true;
      setActiveBtnsave(false);

    } else {
      document.getElementById("confirmmpassword").style.borderColor = "";
      seTError(null);
      //  document.getElementById("guardar").disabled = false;
      setActiveBtnsave(true);


    }
  }



  return (
    <>
      <div className="register-page">
        <div className="container">
          <div className=" abs-center">
            <div className="spinner-loading-register" hidden={!loading} >
              <Default color="#000033"
              ></Default>
              <p>Loading...</p>
            </div>
            <div className="register-row">
              <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                  <div className="auth-body mx-auto">
                    <p className="crear-cuenta">Crear Cuenta</p>
                    <div className="auth-form">
                      <div className="mensaje-error-register" >
                        {error && <><small><Alert style={{ backgroundColor: 'red' }}  >{error}  </Alert></small></>}
                      </div>
                      <form className="register-form" onSubmit={authenticate}>
                        <input
                          type="name"
                          className={`input-register-name ${validate.validate && validate.validate.name ? "is-valid" : ""}`}
                          id="name"
                          name="name"
                          autoComplete="off"
                          value={name}
                          placeholder="Ingrese un nombre"
                          onChange={(e) => setName(e.target.value)}
                          onBlur={authenticate} />


                        <Alert
                          severity="warning"
                          className={`mensaje-campos-requeridos-register ${validate.validate && validate.validate.name ? "" : "d-none"}`}>
                          {validate.validate && validate.validate.name ? validate.validate.name[0] : ""}
                        </Alert>

                        <div className="last-name">
                          <input
                            type="lastname"
                            className={`input-register-last-name ${validate.validate && validate.validate.lastname ? "is-valid" : ""}`}
                            id="last-name"
                            value={lastname}
                            name="last-name"
                            autoComplete="off"
                            placeholder="Ingrese su pellido"
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={authenticate} />


                        </div>
                        <Alert
                          severity="warning"
                          className={`mensaje-campos-requeridos-register ${validate.validate && validate.validate.lastname ? "" : "d-none"}`}>
                          {validate.validate && validate.validate.lastname ? validate.validate.lastname[0] : ""}
                        </Alert>

                        <div className="email">
                          <input
                            type="email" className={`input-register ${validate.validate && validate.validate.email ? "is-valid" : ""}`}
                            id="email"
                            name="email"
                            autoComplete="off"
                            value={email}
                            placeholder="Correo"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={authenticate}
                            onKeyUp={authenticate} />
                          <div>
                            <Alert
                              severity="warning"
                              className={`mensaje-campos-requeridos-register ${validate.validate && validate.validate.email ? "" : "d-none"}`} >
                              {validate.validate && validate.validate.email ? validate.validate.email[0] : ""}
                            </Alert>
                          </div>
                        </div>

                        <div className="input-group">
                          <div className="input-group-register">
                            <input
                              type={showPassword ? "text" : "password"}
                              className={`input-register ${validate.validate && validate.validate.password ? "is-invalid" : ""}`}
                              name="password"
                              id="password"
                              value={password}
                              autoComplete="off"
                              placeholder="Contraseña"
                              onChange={(e) => setPassword(e.target.value)}
                              onBlur={authenticate}
                              onKeyUp={authenticate}

                            />

                            <div>
                              <Alert
                                severity="warning"
                                className={`mensaje-campos-requeridos-register ${validate.validate && validate.validate.password ? "" : "d-none"}`} >
                                {validate.validate && validate.validate.password ? validate.validate.password[0] : ""}
                              </Alert>
                            </div>
                            <FontAwesomeIcon
                              className="icon-password-register"
                              icon={showIcon}
                              onClick={(e) => togglePassword(e)}
                              name="faEyeSlash"
                              id="faEyeSlash">
                            </FontAwesomeIcon>
                          </div>

                          <div>
                            <div>
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={`input-register  ${validate.validate && validate.validate.confirmpassword ? "is-invalid" : ""}`}

                                name="confirmmpassword"
                                autoComplete="off"
                                id="confirmmpassword"
                                value={confirmpassword}
                                disabled={!confirmpassword2}
                                onKeyUp={samepasswords}
                                onChange={(e) => setConfirmPassword(e.target.value)}

                              />

                              <div>
                                <Alert
                                  severity="warning"
                                  className={`mensaje-campos-requeridos-register ${validate.validate && validate.validate.confirmpassword ? "" : "d-none"}`}>
                                  {validate.validate && validate.validate.confirmpassword ? validate.validate.confirmpassword[0] : ""}
                                </Alert>
                              </div>
                              <div className="icon-confirmpassword-register">
                                <FontAwesomeIcon
                                  className=""
                                  icon={showIconConfirmPass}
                                  onClick={(e) => togglePasswordConfirm(e)}
                                  name="faEyeSlash"
                                  id="faEyeSlash">

                                </FontAwesomeIcon>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="register-btn text-center">
                          <button
                            type="submit"
                            name="guardar"
                            id="guardar"
                            className="btn-enviar-register"
                            disabled={!activeBtnSave}
                            onClick={handleRegister}

                          >Guardar
                          </button>
                        </div>

                        <hr className="register-line" />
                        <div className="register-cancelar  pt-0">
                          <Link className="register-text-link" to="/login"> Cancelar
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
    </>
  );
};
