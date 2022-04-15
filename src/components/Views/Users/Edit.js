import { Link } from 'react-router-dom';
import { } from '../../../assets/css/users/Edit.css'
import React from 'react';

export const Edit = () => {
    return (
        <>
        <div className='Container'>
            <div className="abs-center">
                <div className="row">

                    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                        <div className="d-flex flex-column align-content-end">
                            <div className="auth-body mx-auto">
                                <h3>USUARIOS REGISTRADOS</h3>
                                <div className="auth-form-container text-start">
                                    <form className="form">
                                    <div className="container">
                                        
                                                    
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Usuario</th>
                                                <th>Email</th>
                                                <th>Accion</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Darwin</td>
                                                <td>Ddiaz</td>
                                                <td>diaz@gmail.com</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger"> Eliminar </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-info">Editar</button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td>Darwin</td>
                                                <td>Ddiaz</td>
                                                <td>diaz@gmail.com</td>
                                                <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                                                <td><button type="button" className="btn btn-info">Editar</button></td>
                                            </tr>
                                            </tbody>

                                            
                                        </table>
                                        <button type="button" href="/Home" className="btn btn-info">Agregar Usuario</button>

                                        <div className="auth-option text-center pt-2"><Link className="text-link" to="/Home">Salir</Link></div>
                                    </div>
                                    </form>

                                    <hr />
                                   
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