import { Link } from "react-router-dom"
import { } from '../../../assets/css/users/Register.css'
import React from 'react';


export const Register = () => {
    return (

        <>
            <div className='container'>
                <div className=" abs-center" >
                    <div className="row">


                        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                            <div className="d-flex flex-column align-content-end">
                                <div className="auth-body mx-auto">
                                    <p>Crear cuenta</p>
                                    <div className="auth-form-container text-start">
                                        <form className="form">

                                            <div className="name mb-3">
                                                <input type="text"
                                                    className='register form-control'
                                                    id="name"
                                                    name="name"

                                                    placeholder="Nombre"

                                                />

                                                <div className="last-name mb-3">
                                                    <input type="text"
                                                        className='register form-control'
                                                        id="last-name"
                                                        name="last-name"

                                                        placeholder="Apellido"

                                                    />
                                                </div>



                                                <div className="email mb-3 ">
                                                    <input type="email"
                                                        className='register form-control'
                                                        id="email"
                                                        name="email"

                                                        placeholder="Correo"

                                                    />


                                                </div>

                                                <div className="password mb-3">
                                                    <div className="input-group">
                                                        <input type='password'
                                                            className='register form-control'
                                                            name="password"
                                                            id="password"

                                                            placeholder="Contraseña"

                                                        />

                                                        <button type="button" className=" eye btn btn-outline-primary btn-sm" > </button>


                                                    </div>

                                                    <div className="input-group">
                                                        <input type='password'
                                                            className='register form-control'
                                                            name="confirm-password"
                                                            id="confirm-password"

                                                            placeholder="Confirmar contraseña"

                                                        />

                                                        <button type="button" className=" eye btn btn-outline-primary btn-sm" > </button>


                                                    </div>

                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                                                </div>
                                            </div>


                                        </form>

                                        <hr />
                                        <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Cancelar</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
