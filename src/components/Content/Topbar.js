import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import { faClose } from "@fortawesome/free-solid-svg-icons";}
import { IconButton } from '@mui/material';
import { ExitToApp } from '@material-ui/icons'
// import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button as Button2 } from 'react-bootstrap';





import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  //    extraccion del usuario del local storage
  const userLocalStorage = localStorage.getItem('user');
  const user = userLocalStorage.replace(/['"]+/g, '');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //funcion logout
  const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';

  }


  return (

    <Navbar
      // color="warning"
      //  light
      className="navbar-dark  p-3 mb-4 "
      expand="md"
    >
      <Button className="btnfabars" color="dark" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse className="collapse" isOpen={topbarIsOpen} navbar>

        <Nav className="ml-auto" navbar>
          <div className="welcome-user">
            {/* mostramos el usuario logeado */}
            <Link className="bienvenido" >Bienvenido,</Link>
            <Link className="usuario">{user}</Link>
          </div>


          {/* <NavItem >
            <NavLink tag={Link} to={"/page-1"}>
              Page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem> */}
          <NavItem className="cerrarsesion" >


            <IconButton className="buton"
              color="inherit"
              onClick={handleShow}
            // variant="text"
            // style={{  clicked: { color: "red" } }}
            >

              <Link className="logout" to={!handleShow}>
                <ExitToApp className="icon" />
                Cerrar Sesión
              </Link>
            </IconButton >
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cerrar Sesión</Modal.Title>
              </Modal.Header>
              <Modal.Body>Esta seguro que desea abandonar la Sesión!</Modal.Body>
              <Modal.Footer>
                <Button2 variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button2>
                <Button2 variant="primary" onClick={logout}>
                  Si
                </Button2>
              </Modal.Footer>
            </Modal>
          </NavItem>
        </Nav>
      </Collapse>

    </Navbar>
  );
};

export default Topbar;
