/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { } from '../../../assets/css/users/Login.css'
import imagenes from '../../../assets/imgs/imagenes'
import React from 'react';



// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';









export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [setPassword] = useState('');






    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);

        } else {
            setShowPassword(true)
        }
    }




    return (
        <>
            <div className='page' >
                <i className="fa fa-eye" aria-hidden="true"></i>

                <div className='container'>
                    <div className=" abs-center" >
                        <div className="row" >
                            <div className='d-flex flex-column align-content-end' >
                                <div className='auth-body mx-auto  ' >
                                    <img className='img-login' src={imagenes.img1} alt="" />

                                    {/* <p className='text-login' >
                                    LOGIN
                                </p> */}
                                    <div className='auth-form' >
                                        <form className='form'>
                                            <div className='email mb-3 ' >
                                                <input
                                                    className='form-control'
                                                    placeholder="Correo"
                                                    type='email'
                                                    autoFocus

                                                />

                                            </div>

                                            <div className='password mb-3' >

                                                <div className='input-group' >

                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        className='form-control'
                                                        placeholder="Contraseña"
                                                        onChange={(e) => setPassword(e.target.value)}

                                                    />

                                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                                    {/* <FontAwesomeIcon className="icon-password-no"
                                                        // icon={faEyeSlash}
                                                        onClick={(e) => togglePassword(e)}

                                                        name="faEyeSlash"
                                                        id="faEyeSlash"
                                                    >
                                                        
                                                </FontAwesomeIcon> 
                                                    <i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i>
                                                    {/* <FontAwesomeIcon className="icon-password-si"
                                                        icon={faEye} onClick={(e) => togglePassword(e)}
                                                        name="faEye"
                                                        id="faEye"

                                                    ></FontAwesomeIcon> */}


                                                </div>





                                                <div className="extra mt-3 row justify-content-between" >
                                                    < div className="col-6" >
                                                        < div className="form-check" >
                                                            <input className="form-check-input"
                                                                type="checkbox"
                                                                id="remember" />
                                                            <label className="form-check-label"
                                                                htmlFor="remember" >
                                                                Recuerdame
                                                            </label>
                                                        </div >
                                                    </div>

                                                    < div className="col-6" >
                                                        < div className="forgot-password text-center" >
                                                            < Link to="/forgot-password" > Restablecer Contraseña </Link>
                                                        </div >
                                                    </div>
                                                </div >

                                            </div>


                                            <div className="text-center" >
                                                <button type="submit"
                                                    className="btn-iniciar-sesion   btn btn-primary w-100 theme-btn mx-auto" > Iniciar Sesion </button>
                                            </div >
                                            <hr />

                                            <div className="auth-option text-center pt-2" > Crear Cuenta <Link className="text-link"
                                                to="/register" > Registrarse </Link>
                                            </div >

                                        </form>


                                    </div>
                                </div >
                            </div>
                        </div >
                    </div>
                </div>
            </div >
        </>
    )

}