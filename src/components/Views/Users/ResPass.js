import React, { useState } from 'react';
import { Fragment } from 'react'
import { } from '../../../assets/css/users/pass.css'
import Alert from "@mui/material/Alert"
import Form from "../../../assets/utilities/Forms_Validations";
import $ from "jquery";
import { Default } from 'react-awesome-spinners';
import axios from "axios";
import { setUserSession } from "../../../assets/utilities/setUserSession";
import { baseUrlNewPassword } from '../../../assets/utilities/apis/urlLogin';





export const ResPass = (props) => {

    const [validate, setValidate] = useState({});
    const [password, setPassword] = useState("");
    const [activeBtnEnviar, setActiveBtnEnviar] = useState(false);
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, seTError] = useState(null);
    const [loading, setLoading] = useState(false);
     
    
    

    const validateResPass = () => {
        let isValid = true;

        let validator = Form.validator({


            password: {
                value: password,
                isRequired: true,
                minLength: 8,
                isPassword: true,
            }


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

        const validate = validateResPass();

        if (validate) {

            setValidate({});
            setActiveBtnEnviar(true);
            // setEmail('');
            // setPassword('');
            // alert('Successfully Login');
        } else {
            setActiveBtnEnviar(false);
        }

    };


    const handleNewPassword = () => {

        seTError(null);
        setLoading(true);
        const accesToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImlhdCI6MTY0OTc3ODMyOCwiZXhwIjoxNjQ5NzkwMzI4fQ.GMJQi_Q0V0YrrSr6Dck493yyrEtk0G-KOdK7WyRzVGo`
  
        // const accesToken = localStorage.getItem({token: 'token'});

        //   axios.interceptors.request.use(
        //         config => {
        //             config.headers.reset = `${accesToken}`;
        //             return config;
        //         },
        //         error => {
        //             return Promise.reject(error);

        //         }
        //     );

        const authAxios = axios.create({

            headers: {
                reset: `${accesToken}`,
            },
        });

        authAxios.put(baseUrlNewPassword, {
            password: password


        }).then(response => {

            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            window.alert(response.data)
            console.log(response);

            props.history.push("/login");

        }).catch(error => {

            if (error.response.status === 400) {

                setLoading(false);

                seTError(error.response.data.error.detail[0].msg);
                console.log(error.response);
                setLoading(false);

                // setLoading(false);
            } else if (error.response.status === 401) {
                setLoading(false);

                seTError(error.response.data.error.message);
                console.log(error.response);
                setLoading(false);


            } else if (error.response.status === 500) {
                // setLoading(false);
                alert("Error interno del servidor")
                seTError(error.response.data.message);
                console.log(error.response);
                setLoading(false);


            } else {
                seTError("Error de Servidor")
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
            setActiveBtnEnviar(false);

        } else {
            document.getElementById("confirmmpassword").style.borderColor = "";
            seTError(null);
            //  document.getElementById("guardar").disabled = false;
            setActiveBtnEnviar(true);


        }
    }


    return (
        <Fragment>
            <div className='page' >
                <div className='container'>
                    <div className="abs-center" >
                        <div className="spinner-loading-register" hidden={!loading} >
                            <Default color="#000033"
                            ></Default>
                            <p>Loading...</p>
                        </div>
                        <div className="row-newpass">
                            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                                <div className="d-flex flex-column align-content-end">
                                    <div className="auth-body mx-auto">
                                        <p className='restablecer-pass' >Restablecer contraseña</p>


                                        <div className="container">
                                            <div className="auth-form-container text-start">
                                                <div className="mensaje-error-register" >
                                                    {error && <><small><Alert style={{ backgroundColor: 'red' }}  >{error}  </Alert></small></>}
                                                </div>
                                                <form className="form-newpassword form-group" onSubmit={authenticate} >

                                                    <div className="frg-newpassword">
                                                        <hr className='line' />
                                                        <input type="password"
                                                            className={`password-new form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                                            name="password"
                                                            id="password"
                                                            value={password}
                                                            placeholder="Nueva contraseña"
                                                            onKeyUp={authenticate}
                                                            onBlur={authenticate}
                                                            onChange={(e) => setPassword(e.target.value)}

                                                        >

                                                        </input>
                                                        <div>
                                                            <Alert
                                                                severity="warning"
                                                                className={`mensaje-campos-requeridos-login  ${validate.validate && validate.validate.password ? '' : "d-none"}`}>
                                                                {validate.validate && validate.validate.password ? validate.validate.password[0] : ""}
                                                            </Alert>
                                                        </div>
                                                        <input type="password"
                                                            className={`confirmpassword-new  form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                                            name="confirmmpassword"
                                                            id="confirmmpassword"
                                                            placeholder="Confirmar contraseña"
                                                            onKeyUp={samepasswords}
                                                            onBlur={authenticate}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                            value={confirmpassword}

                                                        >

                                                        </input>

                                                        <div>
                                                            <Alert
                                                                severity="warning"
                                                                className={`mensaje-campos-requeridos-login  ${validate.validate && validate.validate.confirmmpassword ? '' : "d-none"}`}>
                                                                {validate.validate && validate.validate.confirmmpassword ? validate.validate.confirmmpassword[0] : ""}
                                                            </Alert>
                                                        </div>
                                                        <div>
                                                            <button type="submit"
                                                                name="enviar"
                                                                id="enviar"
                                                                className="btn-send-newpass btn-primary"
                                                                disabled={!activeBtnEnviar}
                                                                onClick={handleNewPassword}
                                                            >
                                                                Enviar
                                                            </button>
                                                        </div>
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
            </div >
        </Fragment >
    )
}