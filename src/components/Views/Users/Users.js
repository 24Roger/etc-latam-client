import { Link } from 'react-router-dom';
import { } from '../../../assets/css/users/Users.css'
import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
// import Result from '../components/result';
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrlUserAll } from '../../../assets/utilities/apis/urlLogin';
import MUIDataTable from 'mui-datatables'
import { Default } from 'react-awesome-spinners';
import Alert from "@mui/material/Alert";



export const Users = () => {
    const [users, setUsers] = React.useState([]);

    //    extraccion del token del local storage
    const tokenLocalStorage = localStorage.getItem('token');
    const token = tokenLocalStorage.replace(/['"]+/g, '');
    const [loading, setLoading] = useState(false);
    const [error, seTError] = useState(null);
    const [dataTable, setdataTable] = useState(false);


    // definimos la funcion para mostarr los datos 

    const getData = () => {
        seTError(null);
        setLoading(true);
        setdataTable(false);

        const authAxios = axios.create({
            baseURL: baseUrlUserAll,
            headers: {
                Authorization: `${token}`
            },
        });

        authAxios.get(`/user/all`).then((response) => {
            setLoading(false);
            const data = response.data
            setUsers(data)
            setdataTable(true)
            // console.log(response)

        }).catch((error) => {
            if (error.status === undefined) {
                setTimeout(() => {
                    setLoading(false);
                    seTError("Error de conexion con el servidor")
                    
                }, 5000);
                // window.location.href = '/home/error';
                console.log(error)
                return;

            } if (error.response.status === 400) {
                seTError(error.response.data.error.detail[0].msg);
                // console.log(error.response);
                setLoading(false);
            }


        })
       
    }
    useEffect(() => {
        getData()
    }, [])

    // definimos las columnas

    const columns = [
        {
            name: 'id',
            label: 'ID',



        },
        {
            name: 'user',
            label: 'USER',


        },
        {
            name: 'email',
            label: 'EMAIL',


        },

    ]

    // renderizamos la datatable
    return (
        <>

            {/* <MDBDataTableV5
                className="tableusers"
                scrollY maxHeight='420px'
                data={users}
                columns={columns}
                

            />; */}

            <div className="spiner-loading-usuarios" hidden={!loading} >
                <Default color="#000033"
                ></Default>
                <p>Loading...</p>
            </div>
            <div className="mensaje-error-users" >
                {error && <><small><Alert style={{ backgroundColor: 'red' }}  >{error}  </Alert></small></>}
            </div>
            <div className='datable' hidden={!dataTable} >
                <MUIDataTable
                    className="tableusers"
                    title={"Lista de Usuarios"}
                    data={users}
                    columns={columns}
                    options={{
                        filterType: 'checkbox',
                        selectableRows: 'none',
                        responsive: 'static',
                        print: false,
                        download: false,
                        viewColumns: false,
                        search: false,
                        pagination: false,
                        rowsPerPage: 10,
                        rowsPerPageOptions: [10, 20, 30, 40, 50],
                        onRowClick: (rowData) => {
                            console.log(rowData);
                        }   // onRowClick: (rowData) => { console.log(rowData); }



                    }}

                />
            </div>


        </>
    )
}