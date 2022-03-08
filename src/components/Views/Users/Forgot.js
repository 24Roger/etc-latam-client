import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { } from '../../../assets/css/users/Forgot.css'
import React from 'react';


export const Forgot = () => {
    return (

        <Fragment >
            <div className='page' >
                <div className='container'>
                    <div className=" abs-center" >
                        <div className="row">
                            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                                <div className="d-flex flex-column align-content-end">
                                    <div className="auth-body mx-auto">
                                        <p className='restablecer-pass' >Restablecer contraseña</p>
                                        <hr />
                                        <p className='text-correo' >Ingresa tu correo elecronico para restablecer la contraseña</p>

                                        <div className="auth-form-container text-start">
                                            <form className="form">
                                                <div className="email mb-3">
                                                    <input type="email"
                                                        className='form-control'
                                                        id="email"
                                                        name="email"
                                                        // value={email}
                                                        placeholder="Email"
                                                        autoFocus
                                                    />

                                                </div>

                                                <div className="text-center" >
                                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Enviar</button>
                                                </div>
                                                <hr />
                                                <div className="auth-option text-end pt-2">
                                                    <Link className="text-link" to="/login" >Atras</Link>
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

    )
}
