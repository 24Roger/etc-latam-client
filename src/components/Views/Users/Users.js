import { Link } from 'react-router-dom';
import { } from '../../../assets/css/users/Users.css'
import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
// import Result from '../components/result';
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrlUserAll } from '../../../assets/utilities/apis/urlLogin';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');

        // definimos la funcion para mostarr los datos 


    const getData = () => {
        const authAxios = axios.create({

            headers: {
                Authorization: token

            },
        });
       
        authAxios.get(baseUrlUserAll).then((response) => {
            const data = response.data
            console.log(data)
            setUsers(data)

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    })

    // definimos las columnas

    const columns = [
        {
            name: 'id',
            label: 'ID',
        },
        {
            name: 'email',
            label: 'EMAIL',
        },
        {
            name: 'status',
            label: 'STATUS',
        },
    ];
    // renderizamos la datatable
    return (
        <>


            <MDBDataTableV5
                className="tableusers"
                scrollY maxHeight='420px'
                data={users}
                columns={columns}

            />;


        </>
    )
}